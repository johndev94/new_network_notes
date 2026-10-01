This article shows what can be done to improve and troubleshoot Wi-Fi Mesh Networks as well as some workarounds that can be used.

### **Before Creating a Mesh Network, this is what we can do:**

1. Survey your environment and your floor plan. Use **[Wired Uplink](https://www.draytek.com/support/knowledge-base/7446)** as the preferred connection to the access point where the Ethernet connection between devices is possible. This will achieve the best performance.

2. Use the Mesh additional feature to make the connection more stable.  
a. [Wireless uplink/downlink band options](https://www.draytek.com/support/knowledge-base/7505)  
b. [Preferred Uplink and Auto Reselect](https://www.draytek.com/support/knowledge-base/7483)

3. Ensure the signal strength is high enough. It can be detected by using the AP Discovery function on both devices.

![](https://www.draytek.com/assets/files/faq/2020/G85389/APdiscovery.png)

4. Check the Support List on the Mesh Router.

- Go to **Mesh** >> **Support list** in the Mesh router and check the list of supported VigorAP models.
- The support list is based on using wireless connections to build the Wi-Fi Mesh network with Vigor routers. However, the VigorAP models can also be used to build the Wi-Fi Mesh network by using Ethernet connections (Wired uplink)
- For example, since Vigor2862 Wi-Fi router can be connected to AP903 and AP802 mesh nodes but does not support AP918C or other newer AP. In this case, we can set up the Vigor918 as a wired Mesh Node, or the Mesh Root.

5. Check the Wi-Fi bands of the VigorAP’s.

- The Mesh network is based on WDS, where the Wireless Mesh devices must have some same 5G channel. Otherwise, the Mesh network cannot be connected.
    
- For example, VigorAP 918R is an outdoor AP. It only has 5G band3 for EU countries. However, AP903 only supports Mesh on 5G and its channel is set as channel 40. As a result, AP918R cannot create a WDS connection with AP903.
    

### What we can do when build the Mesh connection unsuccessfully:

1. Collect Detailed logs  
![](https://www.draytek.com/assets/files/faq/2020/G85389/Mesh_detailed_syslog.png) Enable Detailed as Log Level and collect Mesh Syslog, then forward it to the DrayTek support team for analysis. After enabling the "Detailed" log level, you can see the connection logs with **[dmn]** prefix as shown below.

_ 141  2019-02-27 16:14:40  Feb 27 16:14:38  AP903  [dmn] Add List is empty! Still start to register.  
 141  2019-02-27 16:14:40  Feb 27 16:14:38  AP903  [dmn] dmn_pkt_send Announce-GoRegister  
 141  2019-02-27 16:14:40  Feb 27 16:14:38  AP903  [dmn] Mesh generate my public key successfully  
 141  2019-02-27 16:14:40  Feb 27 16:14:38  AP903  [dmn] Register start._

2. Getting issues when using Router as Mesh Root and Mesh logs shows the following messages.

_2020-06-10 07:38:34 [dmn] 00:1D:AA:EE:27:F5 RSSI is too low (16/30) 18 sec  
2020-06-10 07:38:33 [dmn] 00:1D:AA:EE:27:F5 RSSI is too low (16/30) 17 sec_

It means the signal strength is too low. Mesh Root will check the signal strength of the Mesh Nodes, 16 means the signal strength of the Mesh Node, and 30 is the RSSI threshold. Mesh network cannot be connected successfully when the signal strength of the Mesh Node is lower than the threshold.

We can prevent the issue happening by setting the RSSI threshold to a lower value.  
Telnet command to set up RSSI threshold.

DrayTek> dmn set ?  
% Usage : dmn set <action> <value>  
% <action> :  
% rssi - set rssi threshold (30 for default)  
% timeout - set timeout level (in second)

![](https://www.draytek.com/assets/files/faq/2020/G85389/mesh_threshold_telnet_command.png)

3. Set up Range Extender by 2.4Ghz (Universal repeater mode) as a workaround.