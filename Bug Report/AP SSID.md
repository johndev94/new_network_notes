**AP Models Tested:** VigorAP 1062C, VigorAP 962C  
**AP Firmware Tested:** 5.1.0.1 and 5.1.1  
**Router Models Tested:** Vigor 2866ax (DrayOS 4), Vigor 2767ax (DrayOS 5)  
**Configurations Tested:** Mesh and non-Mesh

**Issue:**

On firmware **5.1.1**, wireless clients connected to two different SSIDs configured on the **same LAN** are unable to communicate with each other.

**Testing:**

- Tested with both the VigorAP 1062C and VigorAP 962C.
    
- Tested using a **Vigor 2866ax running DrayOS 4** and a **Vigor 2767ax running DrayOS 5**.
    
- Tested in both **Mesh and non-Mesh configurations**.
    
- On AP firmware **5.1.1**, clients connected to different SSIDs assigned to the same LAN could not communicate with each other.
    
- Clients connected to the **same SSID** could communicate normally.
    
- The issue was reproduced with both DrayOS 4 and DrayOS 5 routers.
    
- Downgraded the VigorAP 962C from **5.1.1 to 5.1.0.1**.
    
- On **5.1.0.1**, clients connected to different SSIDs on the same LAN were able to communicate normally.
    

**Expected Behaviour:**

Clients connected to different SSIDs assigned to the same LAN should be able to communicate unless client isolation or a similar isolation feature is enabled.

**Result:**

The issue appears to be introduced in VigorAP firmware **5.1.1** and is reproducible using both **DrayOS 4 and DrayOS 5 routers**, as well as in **Mesh and non-Mesh configurations**.

Firmware **5.1.0.1** works as expected.

Setup:

![[Pasted image 20260929172547.png]]

![[Pasted image 20260929172640.png]]

![[Pasted image 20260929172742.png]]![[Pasted image 20260929172752.png]]