

The 802.11r Fast Transition roaming protocol can help reduce latency when wireless clients connect to another closer AP, so is very useful for VoIP/Video or other streaming applications. VigorAP is compatible with 802.11r-enabled clients and can work in **WPA2 Personal(PSK)** or **WPA2 Enterprise(802.1X)** security mode.

To enable 802.11r roaming in the network, the Access Points must have the **same SSID**, use the **same security mode**, and **password phrase**. Then we can just enable the 802.11r roaming option on the Roaming page.

VigorAP903 supports two Fast Transition mechanisms, over the DS and over the Air while the other AP models support over the DS mechanism only.

- 802.11r roaming option on VigorAP903
![](https://www.draytek.com/assets/files/faq/2022/Gitea40/ap903%20802.11r%20roaming.png)- 802.11r roaming on other VigorAP
![](https://www.draytek.com/assets/files/faq/2022/Gitea40/other%20ap%20802.11r%20roaming.png)

###### How can 802.11r help with roaming?

802.11r uses Fast Basic Service Set Transition (FT). It allows encryption keys to be stored on all APs in a network. This way, the time for wireless authentication will be reduced. It means that a Wi-Fi client doesn't need to perform the complete authentication process every time it roams to a new AP within the network range.

There are two FT mechanisms that are supported by Wi-Fi devices. When a client moves from its current AP to a target AP using the FT protocols, the message exchanges are performed using one of the following two methods:

- Over-the-DS

The client communicates with the target AP through the current AP. The communication between the client and the target AP is carried in FT action frames between the client and the current AP and is then sent through the controller.

![](https://www.draytek.com/assets/files/faq/2022/Gitea40/over%20the%20ds.png) ![](https://www.draytek.com/assets/files/faq/2022/Gitea40/over%20the%20ds%20packet.png)- Over the Air

The client communicates directly with the target AP using IEEE 802.11 authentication, and also the FT authentication algorithm.

![](https://www.draytek.com/assets/files/faq/2022/Gitea40/over%20the%20air.png) ![](https://www.draytek.com/assets/files/faq/2022/Gitea40/over%20the%20air%20packet.png)

###### Note:

1. Fast BSS Transition(FT) is operational only if the wireless client supports the 802.11r standard. If the client does not support the 802.11r standard, it falls back to the normal WPA2 authentication method. The 802.11r capable devices list can be found on the following pages;

[https://support.samsungknox.com/hc/en-us/articles/115013403768-Enhanced-Roaming-Algorithm](https://support.samsungknox.com/hc/en-us/articles/115013403768-Enhanced-Roaming-Algorithm)

[https://support.apple.com/lv-lv/HT202628](https://support.apple.com/lv-lv/HT202628)

[https://docs.microsoft.com/en-us/windows-hardware/drivers/network/fast-roaming-with-802-11k--802-11v--and-802-11r](https://docs.microsoft.com/en-us/windows-hardware/drivers/network/fast-roaming-with-802-11k--802-11v--and-802-11r)

[https://www.intel.com/content/www/us/en/support/articles/000021562/wireless.html](https://www.intel.com/content/www/us/en/support/articles/000021562/wireless.html)

2. 802.11r roaming is not supported with WPA3 due to WPA3 uses a different key derivation method.

3. 802.11r roaming is recommended to use between the same AP models. Different AP models may have different 802.11r Mobility Domain Identifier values at the moment.