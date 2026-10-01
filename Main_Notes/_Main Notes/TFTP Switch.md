---
note_type: response
topic: "Firmware and recovery"
---


First, unplug the switch from any network it is currently connected to. Then connect a PC directly to one of the switch ports and set the PC with a static IP address in the `192.168.1.x/24` range, for example `192.168.1.10`.

Once connected, try to ping the switch’s default IP address:

`192.168.1.224`

If you get a response, try accessing the switch through a web browser using:

`http://192.168.1.224`

If you do not get a response, please confirm that your computer’s IP address and subnet settings are correct.

Please also confirm the switch model and whether the switch’s LAN port LEDs light up when a device is connected.

If you are still unable to connect to the switch as a standalone device, you can try reflashing the firmware using TFTP.

### TFTP firmware recovery steps

1. Download the Firmware Upgrade Utility.
2. Open the Firmware Upgrade Utility. If a message appears, click **OK** to continue.
3. Disable Windows Firewall and any other software firewall temporarily, or create an exception for the Firmware Upgrade Utility. The utility should also be run as administrator by right-clicking it and selecting **Run as administrator**.
4. In the **Router IP** field, enter the switch’s default IP address:
    
    `192.168.1.224`
    
    Make sure your computer is set to an IP address in the same subnet.
    
5. Download the firmware from the downloads page. Rename the `.all` firmware file extension to `.rst` if you want to reset the configuration during the firmware recovery.
6. Click the `...` button beside the **Firmware File** field and browse to the firmware file. You may need to change the file type filter so that `.rst` and `.all` files are visible.
7. Leave the **Password** field blank.
8. Put the switch into TFTP mode:
    - Power off the switch
    - Press and hold the **Factory Reset** button
    - While holding the button, power the switch back on
    - The **PoE Max** and **SYS** LEDs should start flashing
    - Release the **Factory Reset** button
9. Within 30 seconds, click **Send** in the Firmware Upgrade Utility to begin sending the firmware.
10. Once the firmware has been sent, the utility will check whether the switch is back online. If the `.rst` firmware was used, the switch should return to factory default settings and be accessible at:

`192.168.1.224`

After this, you should be able to log in to the switch’s web interface.
