---
note_type: response
topic: "General troubleshooting"
---

![[Pasted image 20251112160510.png]]
Disregard WCF option that has been resolved

Management from internet 
DoS enabled?



If debug logs have the EPC  (8 digits)` it is not good
![[Pasted image 20251112160844.png]]


Sys ver dbg reset - to reset debug logs to fill up with new ones


Knowledge base - 7672


Router Reboot Investigation Steps

1. Click the console icon on the top right of the router’s dashboard and enter the command “sys ver dbg”. Copy the output to a text file and attach it to your reply.
    
2. After saving the console logs, reset the debug log file using “sys ver dbg reset”. If the router reboots again, take a new debug log and send it for examination.
   
3. If there is a ' 
    
4. Take a configuration backup and upgrade the router’s firmware using the link below, then monitor if the router reboots again:  
    https://www.draytek.co.uk/download/support/files/V2866_r6061_c94045669a_G5466.zip

5. Click the console icon on the top right of the router’s dashboard and enter the command “sys ver dbg”. Copy the output to a text file and attach it to your reply.
    
6. After saving the console logs, reset the debug log file using “sys ver dbg reset”. If the router reboots again, take a new debug log and send it for examination.
    
7. Take a configuration backup and upgrade the router’s firmware using the link below, then monitor if the router reboots again:  
    https://www.draytek.co.uk/download/support/files/V2866_r6061_c94045669a_G5466.zip



   
Thank you for contacting DrayTek Technical Support.  
   
Could you please collect **con2tel logs while the router is running until after the reboot**, so the logs capture the reboot when it happens? Please include time stamps where possible.  
   
Con2tel guide:  
[https://www.draytek.com/support/knowledge-base/7672](https://www.draytek.com/support/knowledge-base/7672)  
   
Please also provide the timestamps for when the connection drops or the router reboots. This will help us compare the logs against the time of the issue.  
   
Could you also confirm the following:  

1. Can any VPN services that are not in use be disabled?
2. Is **Access from the Internet** enabled? If so, does it need to remain enabled? If it does, can ACLs be used to restrict access?
3. Are any USB devices connected to the router? If so, can they be removed for testing?
4. Is the router connected to ACS?
5. Is IPv6 enabled?
6. Is wireless in use, and is band steering enabled?
