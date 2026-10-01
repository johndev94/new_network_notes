#### What is PMK caching?

After a successful 802.1X authentication, a Pairwise Master Key (PMK) will be generated and shared on both station and AP. When the client roams to AP-2 from AP-1, AP-1 keeps the PMK for a cache period (set in Wireless LAN >> Roaming) in case the station will be back soon. If the station roams back to AP-1 before cache period ends, it can skip the 802.1X process and reduce the roaming delay.

With the latest firmware, VigorAP can store PMK cache for up to 64 devices per band. When VigorAP has a client station with PMK cache trying to re-associate, Syslog will show `[Fast Roaming]: PMKID matched and start key cache algorithm`.

![A wireless client switches to another AP and then switch back.](https://www.draytek.com/assets/files/faq/2015/G56384/2-PMK_cache.jpg)

#### What is Pre-Authentication?

Once the client station has done 802.1X authentication and associate with AP-1, it will request for pre-authentication with AP-2 as well. The pre-authentication will be done via the Ethernet network between AP-1 and AP-2, and both the station and AP-2 will cache the generated PMK. When the station moves closer to AP-2 and switches to AP-2, it can skip the 802.1X authentication process, thus roaming delay can be reduced.

When VigorAP receives Pre-Authentication requests, Syslog will show `[Fast Roaming] Receive pre-authentication PMK from [MAC address].`

![A wireless client do pre-authentication with another AP on LAN](https://www.draytek.com/assets/files/faq/2015/G56384/3-preauth.jpg)

In summary, PMK caching allows the station to skip the 802.1X authentication when it roams back to the AP connected before, and Pre-Authentication enables the station to do 802.1X authentication before it connects to another AP on the same network. It is recommended to turn on this option to have fast roaming in an 802.1X network.

![Enable PMK Caching and Pre-Authentication on VigorAP](https://www.draytek.com/assets/files/faq/2015/G56384/4-settings.jpg)