---
note_type: response
topic: "ACS and management"
---

Hi Andy,

Thank you for contacting DrayTek Technical Support.

Yes, it is possible to receive alerts when a device comes back online. In ACS, if you go to **Configuration > WAN > General Setup** and enable the alarm there, ACS will generate alerts for both WAN disconnections and when the WAN connection is restored.

Please note that for this to work, the router must remain connected to ACS. This typically requires a multi WAN setup where at least one WAN maintains internet connectivity. If the router loses all internet access and disconnects from ACS entirely, you would only receive the default device offline alert.

Notes:

ACS - Configuration / WAN - General Setup  
Enabling the alarm here sends an alarm for WAN disconnections but also for when the WAN resumes.  
Router needs to remain connected to ACS for this to happen, which means it needs multiple WAN connections and at least one of them is maintaining the connection with ACS.  
If it completely loses connection to the internet and ACS, the alarm would only be the default device connection loss alarm.
