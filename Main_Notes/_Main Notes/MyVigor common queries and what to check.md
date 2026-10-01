---
note_type: response
topic: "ACS and management"
---


Please refer to your next in line should you need help performing any steps because you don’t have the access to required system.  
  
1. I cannot login to my VigorACS account  
  
a) If user is getting a ” user group expired error”, this means their ACS subscription is expired. They will need to buy a renewal from their Draytek supplier.  
b) If they are getting a username and password error/ forgotten their login, send them a secure link to send us a temp password so we can reset their password and allow them login again, you will forward this to second line once the new password is provided.  
  
2. I am adding devices but it's not appearing in my ACS account  
  
a) Check if device is setup correctly for ACS, Is the TR069 test with inform light green or red?  
  
b) If the TR069 test with inform light is red, go ahead and check the TR069 URL, username and password is correct.  
  
c) If it’s green, and the device is a newer product or a product on latest FW ver check if device registering to a VigorACS 2 server rather than VigorACS 3, then advise customer that VigorACS 2 is can no longer work with such product as it’s reached EOL and no longer supported. Advise to sign up for ACS3 to continue managing current devices.  
  
  
d) If Green, check the user’s node usage from their ACS account’s about>license information page. If you have access to the ACS server you can also check it from their user>user group page, you will need to search for their group using their ACS ID or group name in the ACS ticket.  
  
  
e) If all above checks out ok, then check if the device is in ACS, it might be in the wrong network, search for it using it’s mac address, you will need sys admin account to do this on ACS.  
  
f) If device appears in ACS but in wrong network, then delete it from the network in ACS and test inform again and see if the device appears now on ACS.  
  
g) If the device is not showing up on network in ACS and is not a switch or AP and the test with inform light is green, then check if there’s enough node license on the ACS server and if there is, then restart ACS.  
  
3. Cannot receive mail alert  
a) Check User account  
• Is Mail notify enable ?  
• Is Mail address configured?  
b) Confirm if Global mail server for all user group is configured  
c) Confirm if test email can be received from ACS server  
d) Confirm the alarm entry appears on the Monitoring > alarm page  
  
4. I am getting alerts that my device is offline on ACS(device loss connection) but my device is connected to internet  
  
a) The periodic inform option should be enabled from System Maintenance >> TR-069  
b) If the CPE is behind NAT, do not forget to enable the STUN setting.  
c) Check the ACL setting, make sure the IP of ACS server is also added into your access list once you enable it.  
d) Check the TR069 CPE client username and password is change, default username is Vigor, default password is password  
  
5. My device is registered to ACS but I cannot configure  
  
a) The periodic inform option should be enabled from System Maintenance >> TR-069  
b) If the CPE is behind NAT, do not forget to enable the STUN setting.  
c) Check the ACL setting, make sure the IP of ACS server is also added into your access list once you enable it.  
d) Check the TR069 CPE client username and password is change, default username is vigor, default password is password
