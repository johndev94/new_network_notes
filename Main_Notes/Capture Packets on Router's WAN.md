Having WAN packets would be helpful for support engineers to analyze issues about WAN connection. We can use Wireshark with Port Mirror function of the router to capture the packets on router's WAN. However, Port Mirroring will affect the router's performance, so we should always disable it when not doing packet capture.

To get the router's WAN packet, first, you need to install a packet sniffer tool (e.g., Wireshark) on your computer. Then, follow the steps below to do port mirroring.

[DrayOS](https://www.draytek.com/support/knowledge-base/5366#drayos_section) [Linux](https://www.draytek.com/support/knowledge-base/5366#linux_section)

1. Go to **LAN >> LAN Port Mirror**:

- Select **Enable**
- Select **Mirror Port** as the LAN port to which the computer is connected.
- Check **Mirrored Tx Port** and **Mirrored Rx Port** for the WAN interface we would like to capture the packets.

![s screenshot of DrayOS](https://www.draytek.com/assets/files/faq/2016/G55069/Capture%20Packet-LAN%20Port%20Mirror%20Setup.png)

2. Run Wireshark on the computer (you might need to _Run As Administrator_), choose the network Interface to which the router is connected. Then, click **Start**.

![a screenshot of Wireshark](https://www.draytek.com/assets/files/faq/2016/G56838/Vigor3900-Capture%20WAN%20Packets-Run%20Wireshark.png)

3. We should see packets from the WAN interface.

![a screenshot of Wireshark](https://www.draytek.com/assets/files/faq/2016/G56838/Vigor3900-Capture%20WAN%20Packets-See%20from%20WAN%20Interface.png)

4. After collecting the packets we need, click the stop button.

![a screenshot of Wireshark](https://www.draytek.com/assets/files/faq/2016/G56838/Vigor3900-Capture%20WAN%20Packets-Stop%20Packet%20Capturing.jpg)

5. Save the file.

![a screenshot of Wireshark](https://www.draytek.com/assets/files/faq/2016/G56838/Vigor3900-Capture%20WAN%20Packets-Save%20Packet%20Capturing%20File.png)

6. Disable Port Mirror function.

  
  
  
  

NOTE: For the Vigor Router that doesn't support LAN Port Mirror or WAN port as a mirrored port, please connect a hub between the ISP modem and Router's WAN port, and do the packet capture from the hub.

![](https://www.draytek.com/assets/files/faq/2016/G55069/Capture%20WAN%20Packet%20on%20LAN%20Port-Without%20Mirror%20Function-Hub-Topology.png)