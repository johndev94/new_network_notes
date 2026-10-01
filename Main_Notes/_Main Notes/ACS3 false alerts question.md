
Hi Paul,

We are aware of false device offline alerts and our team is currently investigating this issue.

To help with the investigation, we need to collect a packet capture from one of the affected customer routers. If you are able to assist, the steps would be as follows:

Set up a WAN packet capture on one of the affected routers and keep it running until the issue occurs again.

To ensure the packets are readable, please confirm the router is registering to the ACS using HTTP instead of HTTPS. This can be done by updating the TR-069 ACS server URL on the router to use HTTP, for example: http://c2.draytek....

Please note that this request only applies to the Vigor 2865 or Vigor 2866 series routers.

This will allow us to analyze the communication between the router and the ACS more effectively.

For reference, here is a useful guide on using Wireshark:
https://www.draytek.com/support/knowledge-base/5366

If this is too much to ask of you, please don’t worry about doing it.

Thank you for your assistance.


Hi Eve,

Thank you for your patience. We are aware of false device offline alerts being reported by VigorACS, and our engineers are currently investigating this issue.

There is no need for you to reach out to the customer at this stage, as the devices themselves are not actually offline. You can check the devices on ACS to confirm they are online or offline. Once the investigation is complete and a fix is in place, we’ll provide an update.

LIST TO CONTACT.

eveba@softcat.com -  TS417384

john@metlane-lettings.co.uk - DQ334909

pete.dixon@renegade-uk.net - TS489744

sam.paxman@todaysdental.co.uk - TS965576

jay.chauhan@blueprofile.co.uk - TS867070



Hi Christopher,

Thank you for your patience.

We sincerely apologize for the inconvenience this issue has caused. We understand how disruptive the frequent alarms have been and appreciate your patience as we work toward a resolution.

Our R&D team is currently preparing firmware version 4.5.2, which will officially address these issues. The release candidate (RC) version is expected to be available next week.

In the meantime, beta firmware for the Vigor 2766 and Vigor 2763 models is already available. If either of these models is in use on your network, we can provide the download links should you wish to test the beta versions ahead of the official release.

2766: https://www.draytek.co.uk/download/support/files/v2766_BT_r6395beta.zip

2763: https://www.draytek.co.uk/download/support/files/v2763_bt_452RC1.zip

2865: https://www.draytek.co.uk/download/support/files/v2865_r6419_beta.zip

Note: These firmware have a known issue to do with validation code not working on the router, you must disable validation code before applying this firmware if it is enabled on the router.