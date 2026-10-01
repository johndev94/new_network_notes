---
note_type: response
topic: "Firmware and recovery"
---

Just to be clear on this, I wouldn’t recommend doing it.

The router CFG file is a binary file, so it can’t be created or reliably modified using AI or any external tools. There isn’t a supported or stable way to inject a full CFG configuration programmatically.

In some cases, you may be able to use AI to help work with CSV-based configuration sections, for example areas where the Web UI allows you to export and import a limited part of the configuration. Examples include:

- Firewall > General Setup > Backup / Restore Firewall
    
- Object Settings > Object Backup / Restore
    

However, we don’t have formal documentation on the structure or syntax of these CSV files, so their format isn’t guaranteed or officially supported for automation.

For Object Settings specifically, the Web UI does provide an option to download a default CSV template to edit, which is the safest supported approach in that area.
