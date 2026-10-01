### Firmware Lookup

<%*
/*
Scans the current note for a line beginning with "Device:" or "Model:",
extracts the model number (like 2866 or 3912S),
and fetches the latest firmware information automatically.
*/
const content = tp.file.content;

// Find a line starting with "Device:" or "Model:"
const lines = content.split(/\r?\n/);
// Skip empty properties and accept quoted YAML values or inline fields.
// Keep model suffixes so compatibility can be checked (e.g. 3912S).
let match = lines
  .filter(l => /^\s*(Device|Model)\s*:/i.test(l))
  .map(l => l.split(":").slice(1).join(":"))
  .map(value => value.match(/^\s*["']?(?:DrayTek\s*)?(?:Vigor\s*)?(\d{3,5}[a-z0-9+]*)(?=\s|["']|$)/i))
  .find(Boolean);

if (!match) {
  tR += "⚠️ No model number found on a 'Device:' or 'Model:' line.\n";
} else {
  const model = match[1];
  const result = await tp.user.get_firmware(model);
  tR += `**Detected model:** ${model}\n\n\`\`\`\n${result}\n\`\`\`\n`;
}
%>
