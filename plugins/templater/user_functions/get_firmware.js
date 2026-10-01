// Run asynchronously so a network lookup does not freeze Obsidian.
module.exports = async (model) => {
  const { execFile } = require('child_process');
  const path = require('path');
  const vaultRoot = typeof app !== 'undefined' && app.vault.adapter.getBasePath
    ? app.vault.adapter.getBasePath()
    : path.resolve(__dirname, '../../..');
  const script = path.join(vaultRoot, 'scripts', 'draytek_fw_scraper.py');
  if (!/^(?:(?:DrayTek\s*)?Vigor\s*)?\d{3,5}[a-z0-9+]*$/i.test(String(model).trim())) {
    return 'Firmware lookup failed: use a model such as 2866 or 3912S.';
  }
  return new Promise((resolve) => {
    execFile('python', ['-X', 'utf8', script, String(model).trim()],
      { timeout: 30000, windowsHide: true, encoding: 'utf8' },
      (error, stdout, stderr) => {
        resolve(error ? (stderr || `Firmware lookup failed: ${error.message}`).trim() : stdout.trim());
      });
  });
};
