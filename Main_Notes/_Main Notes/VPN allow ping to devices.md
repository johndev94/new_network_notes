---
note_type: response
topic: "VPN and remote access"
---

New-NetFirewallRule -DisplayName "Allow ICMP ping" -Direction Inbound -Protocol ICMPv4 -Action Allow
