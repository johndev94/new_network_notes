
![](https://www.draytek.com/assets/2022_theme/images/knowledge_base_banner.svg)



# Deploying VLANs by SWM and VigorSwitch

This article demonstrates how to deploy tag-based VLAN on the network with selected Vigor Router and a VigorSwitch. By using the Central Switch Management (SWM) of the router, Network Administrator can do all the configuration from the router's management page. Furthermore, SWM simplifies the VLAN configuration by providing only the options which match the router's VLAN configuration.

![](https://www.draytek.com/assets/files/faq/2016/G57042/0-topology.png)

[DrayOS](https://www.draytek.com/support/knowledge-base/5279#drayos_section) [Linux](https://www.draytek.com/support/knowledge-base/5279#linux_section)

1. Go to **LAN >> VLAN**, enable **VLAN** and add the VLANs you need. Remember that the port to which the VigorSwitch is connecting should be the member of every VLAN (which is LAN P3 in this example).

![a screenshot of DrayOS VLAN Configuration](https://www.draytek.com/assets/files/faq/2016/G57042/1-VLAN%20settings.png)

2. Go to **LAN >> General Setup** to enable the LAN subnet in use.

![a screenshot of DrayOS LAN General Setup](https://www.draytek.com/assets/files/faq/2016/G57042/2-LAN%20settings.png)

3. Go to **Central Management >> External Device**, make sure “External Device Auto Discovery” is enabled. You should see the VigorSwitch connecting to the router shows "On Line".

![a screenshot of DrayOS](https://www.draytek.com/assets/files/faq/2016/G57042/3-enable%20External%20Device%20Auto%20Discovery.png)

4. Go to **Central Management >> Switch >> Profile**, you will see the VigorSwitch is in **New Switch List**, click **Add New** to put the switch into **Profile List.**

![a screenshot of DrayOS SWM profile list](https://www.draytek.com/assets/files/faq/2016/G57042/4-Add%20new%20switch.png)

5. The router will create a switch profile for it. Click on Index number to edit the settings.

![a screenshot of DrayOS SWM profile list](https://www.draytek.com/assets/files/faq/2016/G57042/5-edit%20profile.png)

6. Go to the VLAN tab for the VLAN settings. On the top, it shows the Router's VLAN setting for your reference, the LAN Port that marked gray is the router's LAN port that connects to the switch.

![a screenshot of DrayOS SWM VLAN settings](https://www.draytek.com/assets/files/faq/2016/G57042/7b-auto%20uplink%20setting.png)

7. And below shows the VLAN available based on the router's VLAN settings. In this example, the router's LAN port 3 is a member for VLAN0, VLAN1, VLAN2, and VLAN3; therefore, there are four VLANs available for the switch's VLAN setup. The port that connects to the router will be marked gray and automatically configured as a trunk port.

![a screenshot of DrayOS SWM VLAN settings](https://www.draytek.com/assets/files/faq/2016/G57042/7a-router%20VLAN.png)

8. For the rest of the ports, select the VLAN to which they should belong. If a port belongs to more than one tagged VLANs, you should also define the **PVID**.

![a screenshot of DrayOS SWM VLAN settings](https://www.draytek.com/assets/files/faq/2016/G57042/7c-port%20memeber.png)

9. Click **Send to Device** to write the settings to the switch. It might take a few seconds.

![a screenshot of DrayOS SWM VLAN settings](https://www.draytek.com/assets/files/faq/2016/G57042/8-send%20settings%20to%20device.png)

10. After the setup, we can connect a computer to the switch on different ports and check which IP address it gets from the router. For example, if we connect to the switch's port number 8, we see the computer obtained the IP 192.168.2.10, which means this port belongs to the router's LAN2.

![a screenshot of ipconfig](https://www.draytek.com/assets/files/faq/2016/G57042/9a-lan2.png)

