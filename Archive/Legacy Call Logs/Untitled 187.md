2962

VPN

L2TP

https://www.draytek.com/support/knowledge-base/7462

route traffic through VPN

remote desktop connection

WireGaurd

![[Attachments/Pasted image 20250923105116.png]]


Limit on EasyVPN 50: www.draytek.com/support/knowledge-base/12023

Remote desktop port 3389, terminal server dray




sohail@jcmicro.co.uk

DrayTek doesn’t have a specific feature for protecting RDP on port 3389, but you can secure it in a few ways. The firewall can restrict access to only trusted source IPs, and DoS/Brute Force protection can help block repeated login attempts. Port redirection to a non-standard external port is also possible to reduce automated scans.

That said, the recommended approach is not to expose RDP to the internet at all. The safer option is to connect to the network using a VPN first, and then access Remote Desktop through the tunnel.
