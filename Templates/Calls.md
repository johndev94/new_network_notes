<%*
// Capture one instant for a matching filename and note timestamp.
const parts = Object.fromEntries(new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/London", year: "numeric", month: "2-digit", day: "2-digit",
  hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23"
}).formatToParts(new Date()).map(part => [part.type, part.value]));
const date = `${parts.year}-${parts.month}-${parts.day}`;
const time = `${parts.hour}:${parts.minute}:${parts.second}`;
const folder = `Call Logs/${parts.year}-${parts.month}`;
const title = `Call Log ${date} ${time.replace(/:/g, "-")}`;
let destination = `${folder}/${title}`;
let suffix = 2;
const currentPath = tp.file.path(true);
while (app.vault.getAbstractFileByPath(`${destination}.md`) && `${destination}.md` !== currentPath) {
  destination = `${folder}/${title} (${suffix++})`;
}
await tp.file.move(destination);
tR += `# ${title}\n\nDate: ${date}\nTime: ${time}\nTimezone: Europe/London\n`;
%>
Customer:
Ticket:
Device:
Firmware:

## Summary

## Actions taken

## Follow-up
- [ ]
