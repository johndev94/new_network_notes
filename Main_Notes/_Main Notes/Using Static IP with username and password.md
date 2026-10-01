  
To configure the router for use with the static IP details provided by Vaioni, you’ll need to set up a PPPoE connection using the credentials they’ve supplied, and then manually assign the static IP.  
  
  
  
1) Log in to the DrayTek web interface.  
  
2) Go to WAN > Internet Access.  
  
3) Select the appropriate WAN interface (e.g., WAN1), and set the Access Mode to PPPoE.  
  
4) Click Details Page or PPPoE/PPPoA.  
  
5) Enter the Username and Password provided by Vaioni.  
  
6) Tick Yes on the Fixed IP  
  
7) In Fixed IP Address, enter: [IP Address]
  
  
  
When configuring PPPoE with a static IP, DrayTek assumes the IP is /32 (255.255.255.255) by default, which is standard for PPPoE static assignments. Therefore you would not have to manually configure this.  
  
  
  
Once configured, click OK, then reboot the router to establish the PPPoE session.  
  
  
  
Let us know if you need help confirming the link status or routing after setup.