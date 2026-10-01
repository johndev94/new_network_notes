**Product:** VigorConnect  
**Version:** 1.9.3  
**Ticket:** #354097  
**Issue:** AP Profile only allows 4 SSIDs per band

### Description

When creating an AP Profile in VigorConnect, only SSIDs 1 to 4 can be enabled on each wireless band. SSIDs 5 to 8 can be created and configured, but after enabling them and saving the profile, they are disabled again when the profile is reopened.

The access points themselves support more than four SSIDs per band, and SSIDs 5 to 8 can be enabled manually directly on the AP.

### Devices Tested

- VigorAP 905
- VigorAP 805

The issue has been replicated in our lab, where VigorConnect only allowed four SSIDs to be enabled on each band.

### Steps to Reproduce

1. Open VigorConnect.
2. Create or edit an AP Profile.
3. Configure SSIDs 1 to 8.
4. Enable SSID 5, 6, 7 or 8.
5. Click **Save Profile**.
6. Reopen the AP Profile.
7. SSIDs 5 to 8 are disabled again.

### Expected Behaviour

VigorConnect should allow all SSIDs supported by the managed AP to be enabled and deployed through the AP Profile.

### Actual Behaviour

Only four SSIDs per band can remain enabled. SSIDs 5 to 8 revert to disabled after saving the profile.

### Additional Information

The issue was originally reported on VigorConnect 1.9.2 and remains present after upgrading to VigorConnect 1.9.3.

The customer confirmed all managed APs were running the latest available firmware.

**Request:** Please confirm whether this is a VigorConnect limitation or a bug. If it is a bug, please investigate allowing SSIDs 5 to 8 to be enabled and deployed through AP Profiles.