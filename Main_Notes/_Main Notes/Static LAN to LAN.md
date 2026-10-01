---
note_type: response
topic: "General troubleshooting"
---

Hi John,  
   
I managed to get this working, setup below:  
   
Router 1 with internet:  
LAN1 192.168.10.0 DHCP enabled  
LAN2 192.168.2.2 DHCP disabled  
static route - 192.168.20.0 with gateway 192.168.2.1  
vlan enabled putting lan2 on port 4  
   
Router 2   
LAN 1 192.168.20.0 DHCP enabled  
LAN 2 192.168.2.1 DHCP disabled  
Vlan enabled putting lan 2 on port 4  
static route - 192.168.10.0 with gateway 192.168.2.1  
load balance route policy source as 192.168.20.0, destination any, set interface to LAN2.
