**Product:** VigorSwitch PQ1070x  
**Firmware:** Tested on both available firmware versions reported by customer  
**Region:** UK  
**Related Zendesk Ticket:** #230738  
**Customer:** Ian Collins

## Description

Customer is reporting a system time issue on two PQ1070x switches used with a Vigor 2928 router.

The Vigor 2928 is set to the correct UK/London time and shows the correct system time. However, the PQ1070x switches do not match the router time when using the same timezone/SNTP settings.

Customer reports that the switch time is consistently incorrect by around **2 hours**. To make the switch time match the router, the customer has to select **South Africa** as the timezone on the switch, while the router remains correctly set to **London**. This suggests the PQ1070x may be applying the timezone/DST offset incorrectly.

The issue was tested with SNTP and manual time settings. The customer also tested using the direct IP address for `time.apple.com`, `17.253.108.125`, `pool.ntp.org`, `162.159.200.1`, but the switch time still remained incorrect. The issue was later replicated on another PQ1070x switch, so this appears to be a firmware bug.

## Customer Setup

- Router: Vigor 2928
- Switches: 2x VigorSwitch PQ1070x (Firmware 1.58.2 and 1.58.1)
- Router timezone: London/UK
- Switch timezone tested: London/UK
- Workaround required: Set switch timezone to South Africa to match router time
- SNTP server tested:
    - `time.apple.com`
    - `pool.ntp.org`
    - `17.253.108.125`
    - `162.159.200.1`

## Steps to Reproduce

1. Set Vigor 2928 timezone to London/UK.
2. Confirm the router system time is correct.
3. Set PQ1070x timezone to London/UK.
4. Configure SNTP on the PQ1070x.
5. Test with normal SNTP hostname and direct IP `17.253.108.125`.
6. Compare the system time between the Vigor 2928 and PQ1070x.
7. PQ1070x shows incorrect time, approximately 2 hours offset.
8. Change PQ1070x timezone to South Africa.
9. PQ1070x time then matches the router time.

## Expected Result

PQ1070x should show the correct local UK time when timezone is set to London/UK and SNTP is working.

## Actual Result

PQ1070x shows the wrong time when set to London/UK, approximately 2 hours out. Customer has to select South Africa timezone as a workaround to make the time match the Vigor 2928.

## Notes

- Customer tested both SNTP and manual time settings.
- Customer tested multiple PQ1070x switches.
- Issue was replicated on another 1070 switch by support.
- AP962C time appears to work correctly in the same environment, so this may be specific to the PQ1070x firmware timezone/DST handling.


## Request

Please investigate PQ1070x timezone/DST handling for London/UK timezone, as the switch appears to apply the incorrect offset compared with the Vigor 2928 and AP962C.