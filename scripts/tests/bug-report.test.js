const assert = require('assert');
const { EventEmitter } = require('events');
const https = require('https');
const format = require('../format-bug-report.js');
const { prepare, restore } = format.test;

async function run() {
  const original = 'Email: person@example.com\nCustomer: Someone\nPassword: do-not-send\nDevice: 2866ax\nFirmware: 4.5.3.2\n![[Attachments/example.png]]\n`show status`';
  const prepared = prepare(original);
  assert(!prepared.text.includes('person@example.com'));
  assert(!prepared.text.includes('Someone'));
  assert(!prepared.text.includes('do-not-send'));
  assert(prepared.text.includes('2866ax') && prepared.text.includes('4.5.3.2'));
  assert(restore('Draft without refs', prepared.refs).includes('![[Attachments/example.png]]'));
  assert(restore(prepared.text, prepared.refs).includes('`show status`'));
  assert.throws(() => restore('<% malicious %>', []));

  const oldRequest = https.request, oldKey = process.env.OPENAI_API_KEY;
  process.env.OPENAI_API_KEY = 'test-placeholder-not-a-real-key';
  const note = { path: 'Bug Report/Test.md', basename: 'Test', extension: 'md' };
  let status = 200, payload, opened;
  const files = new Map([[note.path, original]]), notices = [];
  const app = {
    vault: {
      adapter: { read: async () => '{"model":"gpt-4.1-mini"}' },
      read: async f => files.get(f.path),
      getAbstractFileByPath: p => files.has(p) ? {} : null,
      createFolder: async p => files.set(p, null),
      create: async (path, text) => { assert(!files.has(path)); files.set(path, text); return { path }; }
    },
    workspace: { getActiveFile: () => note, getLeaf: () => ({ openFile: async f => { opened = f.path; } }) }
  };
  const obsidian = { Notice: class { constructor(text) { notices.push(text); } } };
  try {
    https.request = (url, options, callback) => {
      assert.equal(url, 'https://api.openai.com/v1/responses');
      const req = new EventEmitter();
      req.setTimeout = () => req;
      req.end = body => {
        payload = JSON.parse(body);
        const res = new EventEmitter(); res.statusCode = status; res.setEncoding = () => {};
        callback(res);
        const data = { status: 'completed', output: [{ type: 'message', content: [{ type: 'output_text', text: '# Bug report\n\nDevice: 2866ax\nFirmware: 4.5.3.2\nMissing information: Not provided' }] }] };
        res.emit('data', JSON.stringify(data));res.emit('end');
      };
      return req;
    };
    await format({ app, obsidian });
    assert.equal(files.get(note.path), original);
    assert.equal(payload.store, false);
    assert(!payload.input.includes('do-not-send'));
    assert(opened.startsWith('Bug Report Drafts/'));
    const draft = files.get(opened);
    assert(opened.includes('[2866ax][4.5.3.2][UK][John]'));
    assert(draft.includes('# Bug report'));
    assert(!draft.includes('# [2866ax]'));
    assert(draft.includes('![[Attachments/example.png]]'));
    assert([...files].some(([path, value]) => path.startsWith('Archive/Bug Report Originals/') && value === original));
    status = 429; opened = null;
    await new Promise(resolve => setTimeout(resolve, 5));
    await format({ app, obsidian });
    assert.equal(opened, null);
    assert.equal(files.get(note.path), original);
    assert(notices.at(-1).includes('quota or rate limit'));
    console.log('Passed: redaction, protected references, original backup, separate draft, and API failure handling.');
  } finally {
    https.request = oldRequest;
    if (oldKey === undefined) delete process.env.OPENAI_API_KEY; else process.env.OPENAI_API_KEY = oldKey;
  }
}
run().catch(() => { console.error('Bug report formatter verification failed.'); process.exitCode = 1; });
