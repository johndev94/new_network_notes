---
note_type: response
topic: "ACS and management"
---

Can you enable your STUN settings and in the server address, put in 'c2.draytek.co.uk'  
Monitor to see if this makes any difference for you.

Customer is using a Vigor 3910 with WAN3 connected to a Cisco 1117 (leased line) and WAN4 to FTTP. When WAN3 (Cisco) drops externally, the DrayTek does not trigger failover to WAN4. It appears the router is unaware of the loss since the internal interface stays up.
