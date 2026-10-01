---
note_type: response
topic: "General troubleshooting"
---

Routers lan mac address + update DQ381220-R

Needs to log into router > My registerstraion https://www.draytek.com/support/knowledge-base/5968 DQ502053

TS299423 - check again and send again, make sure the routers are fully connected to acs

DQ349997 - SSL Vulnerability 

Check and upgrade routers firmware to the latest version
https://www.draytek.co.uk/support/downloads

*Disable all VPN Access.

If need to access the router remotely we recommend using one of these VPN protocols

IPsec for LAN to LAN and L2TP with IPsec for remote dial in users.

If you want to use SSL VPN, need to get SSL certificate.

Change SSL port from 443 to be different.

*Disable Allow Access from the internet 

    If Access from the internet is enabled, you need to enforce HTTPS and enable Access list

Create IP Objects and select them on Access List from the Internet

*Disable TLS1.0 and 1.1
Downloads
DrayTek - Routers, Switches, Access Points, Central Management, 4G/5G, Firewalls and VPN



Has to keep the EE router in front
