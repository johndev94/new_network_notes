Tom

Off site

192.168.23.1 Main

172.16.23.254 Guest

10.0.33.254 CCTV

![[Attachments/Pasted image 20251015164854.png]]
![[Attachments/Pasted image 20251015165844.png]]


16:41  You are talking to tomgough...
OS Name: Mac OS X 26.0.1
Applet Version: 6.00.69
16:59  tomgough  Diagnostics >> Syslog Explorer
Web Syslog	USB Syslog	
 Enable Web Syslog	Export  |  Refresh  |  Clear |
Syslog Type 
   Display Mode 
Time	Message
 2025-10-15 16:58:05	 Receive client L2L remote network setting is 10.0.33.0/24
 2025-10-15 16:58:05	 IKE <==, Next Payload=ISAKMP_NEXT_HASH, Exchange Type = 0x20, Message ID = 0xb09025e0
 2025-10-15 16:58:05	 #626 sent MR3, ISAKMP SA established. Dynamic client dial-in from 51.155.99.248
 2025-10-15 16:58:05	 IKE ==>, Next Payload=ISAKMP_NEXT_ID, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:58:05	 IKE <==, Next Payload=ISAKMP_NEXT_ID, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:58:05	 IKE ==>, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:58:05	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:58:05	 NAT-Traversal: Using RFC 3947, no NAT detected
 2025-10-15 16:58:05	 IKE <==, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:58:05	 IKE ==>, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:58:05	 Accept Phase1 proposals : ENCR OAKLEY_AES_CBC, HASH OAKLEY_SHA
 2025-10-15 16:58:05	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:58:05	 Responding to Main Mode from 51.155.99.248
 2025-10-15 16:58:05	 IKE <==, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:57	 [IPSEC/IKE][Local][34:-][@51.155.169.9] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:57	 Prase error : byte 2 of ISAKMP Identification Payload must be zero, but is not
 2025-10-15 16:57:53	 [IPSEC/IKE][Local][34:-][@51.155.135.48] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:53	 Prase error : next payload type of ISAKMP Identification Payload has an unknown value: 84
 2025-10-15 16:57:53	 [IPSEC/IKE][Local][34:-][@51.155.169.9] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:53	 Prase error : byte 2 of ISAKMP Identification Payload must be zero, but is not
 2025-10-15 16:57:49	 [IPSEC/IKE][Local][34:-][@51.155.169.9] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:49	 Prase error : byte 2 of ISAKMP Identification Payload must be zero, but is not
 2025-10-15 16:57:47	 [IPSEC/IKE][Local][34:-][@51.155.135.48] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:47	 Prase error : next payload type of ISAKMP Identification Payload has an unknown value: 84
 2025-10-15 16:57:45	 [IPSEC/IKE][Local][34:-][@51.155.169.9] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:45	 Prase error : byte 2 of ISAKMP Identification Payload must be zero, but is not
 2025-10-15 16:57:45	 IKE ==>, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:45	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:45	 NAT-Traversal: Using draft-ietf-ipsec-nat-t-ike-02/03, no NAT detected
 2025-10-15 16:57:45	 IKE <==, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:45	 IKE ==>, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:45	 Accept Phase1 proposals : ENCR OAKLEY_AES_CBC, HASH OAKLEY_SHA2_256
 2025-10-15 16:57:45	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:45	 Responding to Main Mode from 51.155.169.9
 2025-10-15 16:57:45	 IKE <==, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:44	 [IPSEC/IKE][Local][34:-][@51.155.135.48] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:44	 Prase error : next payload type of ISAKMP Identification Payload has an unknown value: 84
 2025-10-15 16:57:44	 IKE ==>, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:44	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:44	 NAT-Traversal: Using RFC 3947, no NAT detected
 2025-10-15 16:57:44	 IKE <==, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:44	 IKE ==>, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:44	 Accept Phase1 proposals : ENCR OAKLEY_AES_CBC, HASH OAKLEY_SHA
 2025-10-15 16:57:44	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:44	 Find Phase1 proposal: SHA2_256
 2025-10-15 16:57:44	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:44	 Responding to Main Mode from 51.155.135.48
 2025-10-15 16:57:44	 IKE <==, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:33	 [IPSEC/IKE][Local][34:-][@51.155.99.248] may be security method/subnet setting/GRE setting unmatched?
 2025-10-15 16:57:33	 [IPSEC/IKE][Local][34:-][@51.155.99.248] state transition fail: STATE_QUICK_R0
 2025-10-15 16:57:33	 IKE ==>, Next Payload=ISAKMP_NEXT_HASH, Exchange Type = 0x5, Message ID = 0x9aeb2cf5
 2025-10-15 16:57:33	 Parse dial-in phase2 SA proposals failed
 2025-10-15 16:57:33	 Can't accept phase2 client, please check remote IP/Peer ID(PSK or x509)/Network Settings
 2025-10-15 16:57:33	 [IPSEC/IKE][Local][34:-][@51.155.99.248] quick_inI1_outR1: match network
 2025-10-15 16:57:33	 Receive client L2L remote network setting is 10.0.33.0/24
 2025-10-15 16:57:33	 IKE <==, Next Payload=ISAKMP_NEXT_HASH, Exchange Type = 0x20, Message ID = 0x81943e84
 2025-10-15 16:57:33	 #622 sent MR3, ISAKMP SA established. Dynamic client dial-in from 51.155.99.248
 2025-10-15 16:57:33	 IKE ==>, Next Payload=ISAKMP_NEXT_ID, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:33	 IKE <==, Next Payload=ISAKMP_NEXT_ID, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:33	 IKE ==>, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:33	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:33	 NAT-Traversal: Using RFC 3947, no NAT detected
 2025-10-15 16:57:33	 IKE <==, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:33	 IKE ==>, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:33	 Accept Phase1 proposals : ENCR OAKLEY_AES_CBC, HASH OAKLEY_SHA
 2025-10-15 16:57:33	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:33	 Responding to Main Mode from 51.155.99.248
 2025-10-15 16:57:33	 IKE <==, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:21	 [IPSEC/IKE][Local][34:-][@51.155.135.48] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:21	 Prase error : next payload type of ISAKMP Identification Payload has an unknown value: 87
 2025-10-15 16:57:21	 [IPSEC/IKE][Local][34:-][@51.155.169.9] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:21	 Prase error : next payload type of ISAKMP Identification Payload has an unknown value: 96
 2025-10-15 16:57:17	 [IPSEC/IKE][Local][34:-][@51.155.169.9] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:17	 Prase error : next payload type of ISAKMP Identification Payload has an unknown value: 96
 2025-10-15 16:57:15	 [IPSEC/IKE][Local][34:-][@51.155.135.48] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:15	 Prase error : next payload type of ISAKMP Identification Payload has an unknown value: 87
 2025-10-15 16:57:13	 [IPSEC/IKE][Local][34:-][@51.155.169.9] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:13	 Prase error : next payload type of ISAKMP Identification Payload has an unknown value: 96
 2025-10-15 16:57:12	 [IPSEC/IKE][Local][34:-][@51.155.135.48] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:12	 Prase error : next payload type of ISAKMP Identification Payload has an unknown value: 87
 2025-10-15 16:57:12	 IKE ==>, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:12	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:12	 NAT-Traversal: Using RFC 3947, no NAT detected
 2025-10-15 16:57:12	 IKE <==, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:12	 IKE ==>, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:12	 Accept Phase1 proposals : ENCR OAKLEY_AES_CBC, HASH OAKLEY_SHA
 2025-10-15 16:57:12	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:12	 Find Phase1 proposal: SHA2_256
 2025-10-15 16:57:12	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:12	 Responding to Main Mode from 51.155.135.48
 2025-10-15 16:57:12	 IKE <==, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:09	 [IPSEC/IKE][Local][34:-][@51.155.169.9] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:57:09	 Prase error : next payload type of ISAKMP Identification Payload has an unknown value: 96
 2025-10-15 16:57:09	 IKE ==>, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:09	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:09	 NAT-Traversal: Using draft-ietf-ipsec-nat-t-ike-02/03, no NAT detected
 2025-10-15 16:57:09	 IKE <==, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:09	 IKE ==>, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:09	 Accept Phase1 proposals : ENCR OAKLEY_AES_CBC, HASH OAKLEY_SHA2_256
 2025-10-15 16:57:09	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:09	 Responding to Main Mode from 51.155.169.9
 2025-10-15 16:57:09	 IKE <==, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:01	 [IPSEC/IKE][Local][34:-][@51.155.99.248] may be security method/subnet setting/GRE setting unmatched?
 2025-10-15 16:57:01	 [IPSEC/IKE][Local][34:-][@51.155.99.248] state transition fail: STATE_QUICK_R0
 2025-10-15 16:57:01	 IKE ==>, Next Payload=ISAKMP_NEXT_HASH, Exchange Type = 0x5, Message ID = 0xd87c848e
 2025-10-15 16:57:01	 Parse dial-in phase2 SA proposals failed
 2025-10-15 16:57:01	 Can't accept phase2 client, please check remote IP/Peer ID(PSK or x509)/Network Settings
 2025-10-15 16:57:01	 [IPSEC/IKE][Local][34:-][@51.155.99.248] quick_inI1_outR1: match network
 2025-10-15 16:57:01	 Receive client L2L remote network setting is 10.0.33.0/24
 2025-10-15 16:57:01	 IKE <==, Next Payload=ISAKMP_NEXT_HASH, Exchange Type = 0x20, Message ID = 0xcf446e54
 2025-10-15 16:57:01	 #618 sent MR3, ISAKMP SA established. Dynamic client dial-in from 51.155.99.248
 2025-10-15 16:57:01	 IKE ==>, Next Payload=ISAKMP_NEXT_ID, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:01	 IKE <==, Next Payload=ISAKMP_NEXT_ID, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:01	 IKE ==>, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:01	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:01	 NAT-Traversal: Using RFC 3947, no NAT detected
 2025-10-15 16:57:01	 IKE <==, Next Payload=ISAKMP_NEXT_KE, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:01	 IKE ==>, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:57:01	 Accept Phase1 proposals : ENCR OAKLEY_AES_CBC, HASH OAKLEY_SHA
 2025-10-15 16:57:01	 Matching General Setup key for dynamic ip client...
 2025-10-15 16:57:01	 Responding to Main Mode from 51.155.99.248
 2025-10-15 16:57:01	 IKE <==, Next Payload=ISAKMP_NEXT_SA, Exchange Type = 0x2, Message ID = 0x0
 2025-10-15 16:56:49	 [IPSEC/IKE][Local][34:-][@51.155.135.48] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:56:49	 Prase error : byte 2 of ISAKMP Identification Payload must be zero, but is not
 2025-10-15 16:56:44	 [IPSEC/IKE][Local][34:-][@51.155.169.9] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:56:44	 Prase error : next payload type of ISAKMP Identification Payload has an unknown value: 228
 2025-10-15 16:56:43	 [IPSEC/IKE][Local][34:-][@51.155.135.48] smalformed payload: probable authentication (preshared secret) failure:
 2025-10-15 16:56:43	 Prase error : byte 2 of ISAKMP Identification Payload must be zero, but is not 



Hi Tom,

As per our remote session earlier, we reviewed the configuration on both routers and confirmed that all subnets were correctly assigned. I didn’t see any configuration errors during the check.

When attempting to access the CCTV system at **10.0.33.254**, the page begins to load but then stops partway through and displays an error.

I’ve captured logs during the session and attached them here. I’ll now escalate this case to our second-line support team for further investigation.


Verified VPN connectivity and confirmed subnets were correctly set up on both routers.

Confirmed the tunnel establishes successfully and that the CCTV IP (10.0.33.254) is reachable via ping.

Observed that HTTP access to the CCTV starts to load but times out midway.

Collected syslogs during the connection attempt for review.
