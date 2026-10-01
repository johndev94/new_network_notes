---
note_type: response
topic: "ACS and management"
---



Note: Vigor 2136ax has to be on firmware 5.3.0 or later


Step 1: Enable TR-069 on the router

Log in to the router (usually at https://192.168.1.1)

Go to System Maintenance > Management > TR-069

Tick Enable TR-069

Click Wizard beside IP/Domain

Enter your ACS server address in the ACS Server field, it should be https://c2.draytek.co.uk

Leave Port as is

Leave Handler as is

Click OK

Leave Username and Password Blank unless advised otherwise

Under Test Connection, click Test With Inform to test connection, if you get a green tick it means the settings have been set correctly


Step 2: Register the router in ACS

Log in to your VigorACS 3 cloud portal (https://c2.draytek.co.uk)

Go to Device Management > Unregistered CPE

Look for your router in the list

Click Register

Assign it to a group or folder (optional)


c1 = acs2
acs 
c2 = latest
m1 = cloud standard


c2.draytek.co.uk

acs2.draytek.co.uk
