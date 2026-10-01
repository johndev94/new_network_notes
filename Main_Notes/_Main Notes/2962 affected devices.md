196559 - TFTP successful, after updating problem reoccurred - SWALLOWS for admin account which is using the default ip of 192.168.1.1
187480 - recovered the router using TFTP and locked up again shortly after (stated the device locks up without config file installed, the engineer then applied the config file and it still locked up) 
cmsdistribution5078.zendesk.com/agent/tickets/205688
https://cmsdistribution5078.zendesk.com/agent/tickets/205754

Tested with beta firmware and still locked up: [https://www.draytek.co.uk/download/support/files/v2962_4453_RC2a.zip](https://www.draytek.co.uk/download/support/files/v2962_4453_RC2a.zip)

Checked the customers configuration.  
Port redirection open 1600 and 1601  
FW Filter Block RDP WAN-LAN  
DOS Disabled  
ALL VPNs Disabled  
TR069 Enabled acs.midlandcomputers.com  
Management from the internet Enabled with Access List  
TLS 1.0 1.1 1.2 and 1.3 enabled

196559

Management enabled - https only
Default ports

TLS 1.2 enabled - rest disabled

No NAT/Port settings enabled

DoS Defence Disabled

Default firewall rules

SSL VPN Enabled - Default port 443