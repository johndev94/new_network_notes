Good Morning/Afternoon Callum Hipkiss

If your router is experiencing a reboot, then you may need to check the following  
It also includes some useful log information that can be sent in.

1  Check Firmware  
Ensure you have the current released firmware. This can be found on the UK download site at this link  
[https://www.draytek.co.uk/support/downloads](https://www.draytek.co.uk/support/downloads)

  
Select your model of router, and download it to your local drive.  
The simplest way to upgrade the firmware is via the Web GUI. Follow this guide  
[https://www.draytek.co.uk/support/guides/kb-firmwareupgrade-webui](https://www.draytek.co.uk/support/guides/kb-firmwareupgrade-webui)

2 View Router Logs  
There maybe useful information regarding the reboot issue in a syslog. To get this log, you please follow this guide  
[https://www.draytek.co.uk/support/guides/kb-vigor-syslog](https://www.draytek.co.uk/support/guides/kb-vigor-syslog)

  
If you need to contact technical support, you may be asked for the syslog.  

3  View Router's Debug Log  
When a reboot occurs, immediately telnet in to the router. To do this, open command prompt in Windows, and type this  
c:/&gt; telnet 192.168.1.1  
Where 192.168.1.1 is the IP address of the router.  
Then type this command  
sys ver dbg

4  Test without USB Modem  
If you have any USB dongles connected to any of the USB ports, unplug these. Then monitor if there is any improvement in the routers rebooting.

5 - Test Default Configuration  
To check if a particular configuration is causing the reboot cycle, take a configuration backup of the router.   
[https://www.draytek.co.uk/support/guides/kb-config-backup](https://www.draytek.co.uk/support/guides/kb-config-backup)

  
Then factory reset the router. Monitor and check if there is an improvement in the reboot cycle.  
If you do notice improvement, restore your config and monitor again

6  Check for Scheduled Reboots  
Web Interface [System Maintenance] - [Reboot System]

7  Check VigorACS  
If the router is managed by VigorACS, check whether the reboot / repeated reboots are initiated or scheduled from VigorACS centralised management platform.

8 - Check Power Supply  
Make sure the PSU used for the router is the one supplied with the product, using an alternative PSU can damage the unit or provide inadequate power for that router model's functionality, which can potentially affect router stability.