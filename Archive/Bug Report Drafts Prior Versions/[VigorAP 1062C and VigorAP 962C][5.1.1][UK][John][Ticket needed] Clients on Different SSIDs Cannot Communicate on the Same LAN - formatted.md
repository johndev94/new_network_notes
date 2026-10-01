# [VigorAP 1062C and VigorAP 962C][5.1.1][UK][John][Ticket needed] Clients on Different SSIDs Cannot Communicate on the Same LAN

**Product:** VigorAP 1062C and VigorAP 962C  
**Version:** 5.1.1  
**Ticket:** Ticket needed  
**Issue:** Wireless clients connected to different SSIDs assigned to the same LAN cannot communicate.  

### Description

On AP firmware 5.1.1, wireless clients connected to two different SSIDs configured on the same LAN are unable to communicate with each other. Clients connected to the same SSID can communicate normally.

The issue occurs with DrayOS 4 and DrayOS 5 routers in both Mesh and non-Mesh configurations.

### Devices Tested

- VigorAP 1062C running firmware 5.1.0.1 and 5.1.1
- VigorAP 962C running firmware 5.1.0.1 and 5.1.1
- Vigor 2866ax running DrayOS 4
- Vigor 2767ax running DrayOS 5

### Steps to Reproduce

1. Configure two SSIDs on the same LAN.
2. Connect wireless clients to the different SSIDs.
3. Attempt communication between the clients.
4. Repeat the test in Mesh and non-Mesh configurations and with DrayOS 4 and DrayOS 5 routers.

Setup references:

![[Pasted image 20260929172547.png]]

![[Pasted image 20260929172640.png]]

![[Pasted image 20260929172742.png]]![[Pasted image 20260929172752.png]]

### Expected Behaviour

Clients connected to different SSIDs assigned to the same LAN should be able to communicate unless client isolation or a similar isolation feature is enabled.

### Actual Behaviour

On firmware 5.1.1, clients connected to different SSIDs assigned to the same LAN cannot communicate. Clients connected to the same SSID communicate normally.

### Additional Information

- The issue was reproduced with the VigorAP 1062C and VigorAP 962C.
- The issue was reproduced with both DrayOS 4 and DrayOS 5 routers.
- The issue was reproduced in Mesh and non-Mesh configurations.
- The VigorAP 962C was downgraded from 5.1.1 to 5.1.0.1.
- On firmware 5.1.0.1, clients connected to different SSIDs on the same LAN communicated normally.

### Missing Information

- Confirmation of whether client isolation or any similar isolation feature was disabled during testing.
- Ticket or case reference.

**Request:** Please confirm whether this behaviour is a limitation or a firmware bug and investigate.

---

> [!info] Review draft
> Original: [[Bug Report/AP SSID.md]] · Saved copy: [[Archive/Bug Report Originals/AP SSID - 2026-10-01T14-55-46-688Z.md]]
> Check technical accuracy and redactions before using this draft. Screenshot files were not uploaded or analysed.
