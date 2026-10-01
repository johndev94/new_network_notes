---
note_type: response
topic: "VPN and remote access"
---

Cant find VPPP driver SSL VPN

![[Attachments/Pasted image 20250610160011.png]]

Reinstall the drive manually.

https://www.draytek.com/support/knowledge-base/5729


Work around: 

The work around I have found to create a stable connection and not crash the OS is using the VPPP.sys (0.9.0.2) from the 5.4.2 installation with the 5.7.1 executable.  
It complains that the VPPP.sys needs to be updated, but cancelling that nagware and continuing with the connection works fine, even with the TOTP option enabled.

billy-bob.williams@infinics.co.uk
