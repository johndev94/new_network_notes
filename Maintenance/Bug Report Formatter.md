# Bug report formatter

## Use it
1. Open a report in the vault's **Bug Report** folder.
2. Open the command palette and run **QuickAdd: Format bug report**.
3. Review the separate note opened in **Bug Report Drafts**.

Reload Obsidian once after setup to register the new command. You can assign a shortcut to **QuickAdd: Format bug report** in Settings → Hotkeys.

The original report is never overwritten. A timestamped copy is saved in **Archive/Bug Report Originals** before the API request. The draft links to both the original and the saved copy.

## What it does
Obsidian file titles begin with **[model][version][UK][John]**, with **[ticket]** added when a ticket number exists, followed by a short issue description. The heading inside the note shows only that description. Product, version, and ticket details also appear in the labelled fields.

The formatter reads Product/Device and Version/Firmware from the original note and, if needed, the formatted draft. If the original note has no ticket number, the Ticket field says Ticket needed and the filename has four brackets. Windows filenames cannot contain `/`, so an AP pair such as `[1062C/962C]` appears as `[1062C-962C]` in the file title. The heading stays descriptive. New drafts have no Properties block at the top.

Below the standard title, the formatter adds bold Product, Version, Ticket, and Issue fields, followed by Description, Devices Tested, Steps to Reproduce, Expected Behaviour, Actual Behaviour, and Additional Information. It preserves supplied ticket links and places screenshots near the relevant observations. Missing Information appears when needed, and a closing Request asks for confirmation or investigation. Management software versions are kept distinct from the AP/router devices tested. It asks the model to preserve technical details and mark missing details as Not provided. Review the output: model instructions cannot guarantee factual accuracy.

Email addresses, labelled contact fields, serial numbers, and common password/key patterns are redacted before sending. This is a basic text filter, not a guarantee that all personal information is removed; avoid unlabelled customer names and phone numbers in the note. Redacted values stay redacted in the draft.

Screenshot files are not uploaded. Obsidian links and inline commands are protected and restored locally; missing references are appended to the draft. The API receives only the protected, redacted text of the active report.

## Credentials and model
The command reads the existing **OPENAI_API_KEY** environment variable. On Windows it can also read your user environment setting if Obsidian was already open. No key is written into vault files, plugin settings, or Git.

The model is configured in **scripts/bug-report-settings.json** and uses **gpt-5.6-sol**. Each run makes one billed OpenAI Responses API request with `store: false`. This disables stored response state, not all provider-side retention. No background processing or automatic retry is configured.

If a request fails, the original is unchanged and the saved copy remains available. Error messages report connection, authentication, access, or quota problems without including the key or report text.
