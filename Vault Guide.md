# Vault guide

## Where things go
- **Inbox**: rough notes and follow-ups awaiting a ticket or topic.
- **Tickets**: one note per support ticket, named with its ticket ID.
- **Call Logs**: call notes; Templater applies the Calls template to new notes here.
- New call notes automatically get a London date and time in their filename and note header, and are placed in the matching month folder. For example: `Call Logs/2026-10/Call Log 2026-10-01 13-45-12.md`. Create a new empty note anywhere under Call Logs to trigger the template. If two calls have the same timestamp, a numeric suffix keeps their filenames unique.
- **Templates**: reusable ticket, call, and firmware lookup templates.
- **Attachments**: screenshots; new pasted attachments are saved here.
- **Archive/Empty Canvases**: the three original empty canvases, retained for recovery.

Use [[Home]] as the starting point. Use [[Attachment Index]] to browse screenshots by the date in their filename.

## Firmware lookup
Firmware lookup is implemented in scripts/draytek_fw_scraper.py using Python's standard library and DrayTek's official UK/Ireland download pages. Both JavaScript helper copies run it asynchronously. The original external script path is also available as a compatibility entry point.

In a note, add a line such as Device: Vigor 2866ax or Model: 3912S. Place the cursor where you want the result, then run Templater: Open insert template modal and choose Firmware Lookup. Results include the current published version, release date, supported models, release notes, and download links. Only metadata is fetched; firmware is never installed.

The existing Alt+Ctrl+F QuickAdd macro creates a new note from the template; use Templater's insert command for a lookup in an existing ticket. Internet access and Python on PATH are required. Unsupported models and network failures produce readable errors. Lookup was tested against live pages for 2866, 2866ax, and 3912S.

## Cleanup — 1 October 2026
The folder contained three Markdown notes, 96 PNG screenshots, and three empty canvases. All original files were retained, with clearer names and folders. Support reminders were converted to checklists; ambiguous and unfinished reminders were preserved without inventing customer details.

Template settings were updated to use folders present in this vault. Saved tabs referencing the absent Networking_Notes folder were replaced with Home. That larger collection was referenced in the old settings but was not present in this folder.

A complete pre-cleanup copy of the vault files, excluding Git internals, was saved outside the vault:

C:\Users\Admin\Documents\New_Notes-before-cleanup-20261001-122614.zip

The Git history also preserves the original tracked files. The original firmware helper copies and installed plugins were left in place.

## Imported folders — 1 October 2026
Main_Notes now holds the networking reference collection. Dated imported calls are in Call Logs by month, and older untitled calls are in Archive/Legacy Call Logs. All screenshots are in Attachments. Study and AI project material have their own indexes linked from Home. See [[Maintenance/Import Cleanup Report]] for remaining missing files and the new backup.

## Support workflow — 1 October 2026
Open [[Dashboards/Support Dashboard]] for open work, due follow-ups, and responses grouped by topic. New calls have editable status, follow_up, device, and ticket properties. Historical call status has not been inferred. Use the Daily notes command for a daily journal and Templates/Solution.md to capture confirmed fixes in Solutions. Response topics are inferred from filenames and can be edited. No external accounts or extra plugins are required.

Backup before these improvements:
C:\Users\Admin\Documents\New_Notes-before-workflow-improvements-20261001-132254.zip
