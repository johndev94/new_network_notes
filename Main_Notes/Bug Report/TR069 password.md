## Description

On the Vigor 2927AX running firmware 4.5.2.1, the password entered under:

**System Maintenance > TR-069 Setting > Apply Settings to APs/Switches > AP/Switches Password**

is not saved after clicking **OK**.

The password field becomes blank when the page is reopened, and the managed APs are not added to ACS.

This issue does not occur on firmware 4.5.1. On firmware 4.5.1, the password is retained after clicking **OK**, and the APs can be added to ACS successfully.

## Steps to reproduce

1. Install firmware 4.5.2.1 on a Vigor 2927AX.
    
2. Log in to the router's web interface.
    
3. Go to **System Maintenance > TR-069 Setting**.
    
4. Enable or configure TR-069 with valid ACS details.
    
5. Under **Apply Settings to APs/Switches**, enter the AP or switch management password in the **AP/Switches Password** field.
    
6. Click **OK** to save the settings.
    
7. Reopen the TR-069 settings page.
    
8. Check the **AP/Switches Password** field and the AP status in ACS.
    

## Actual result

The AP/Switches Password field is blank after the settings are saved.

The password is not applied to the managed APs, and the APs are not added to ACS.

## Expected result

The AP/Switches Password should be saved and retained after clicking **OK**.

The router should apply the TR-069 settings to the managed APs and add them to ACS.

## Firmware comparison

- **4.5.2.1:** Password is not saved, field becomes blank, and APs are not added to ACS.
    
- **4.5.1:** Password is saved and retained, and the APs can be added to ACS.