Since Vigor 2862 firmware 3.9.2 (ac/Vac) and Vigor 2926 firmware 3.9.3 (ac/Vac), Vigor routers can support WiFi Mesh function. When using a Wi-Fi router as a mesh root, VigorAP mesh nodes can be connected to it via a LAN cable.

![](https://www.draytek.com/assets/files/faq/2020/G82174/topolopgy_final.jpg)

#### When to use Mesh Wired Uplink

Two examples of when to use Mesh Wired uplink are:

1. Creating a mesh network which includes both wired and wireless connections. This can be from outdoor wireless AP mesh nodes to an indoor VigorAP mesh root which is wired to the Internet gateway.

2.When the VigorAP is powered by PoE from a switch. The Switch will provide both power and data to the access point which will cause a loop between the wireless and wired connections. Enabling the Wired Uplink option will prevent this Loop.

### Configuration steps

#### Find VigorAP IP address

When the VigorAP is attached to the VigorRouter by LAN cable, it automatically switches to AP mode and will be allocated an IP address via DHCP. Use the following method to find the access point IP address.

1.  Log into the DrayTek Vigor router
2.  Go to Diagnostics>>ARP Table menu
3.  Locate the matching MAC Address in the table and its corresponding IP Address.
4.  Use this IP address to connect to the access point for next step.

![](https://www.draytek.com/assets/files/faq/2020/G82174/ARPtable.png)

#### Switch to Mesh node mode

Log into the access point using the IP address found in step 1 above.  
If the access point is at factory default settings log in using the default username and password (admin/admin).

You can select **Mesh Node** from the pulldown menu at Operation mode page.

![](https://www.draytek.com/assets/files/faq/2020/G82174/operation_mode.png)

Or you can use **Quick Start Wizard** to change the operation mode.

![](https://www.draytek.com/assets/files/faq/2020/G82174/quick_start_wizard.png)

#### Change Connection Mode to Wired Uplink

1. Go to **Mesh**>>**Mesh Setup**
2. Enable **Wired Uplink** option
3. click **Ok** to save

![](https://www.draytek.com/assets/files/faq/2020/G82174/meshsetup_uplink.png)

#### Add Mesh Node to Router Wi-Fi Mesh

Log into the Vigor Router, go to Mesh>>Mesh Setup menu

1. Ensure Enable Mesh option is selected
2. Click on Search to discover all available access points (Both wired and wireless devices will appear in the list)
3. Select the wired access point to add to the Mesh Group
4. Click on Apply to save the setting
5. You can add the device name for the selected access point if you wish
6. Select the Wired connected VigorAP and click Apply.

![](https://www.draytek.com/assets/files/faq/2020/G82174/2862_meshsetup.png)

#### Mesh Status

Check the **Mesh Status** on the VigorRouter and VigorAP, check the uplink field, both display Ethernet.

![](https://www.draytek.com/assets/files/faq/2020/G82174/mesh_status_AP.png)