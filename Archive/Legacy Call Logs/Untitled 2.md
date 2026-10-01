Purple WiFi

WEB page not available

903AP

richmond@sportsforchampions.com

15:45  You are talking to rromero...
OS Name: Mac OS X 15.4.1
Applet Version: 6.00.69
15:52  rromero  The VigorAP 903 is configured in a conflicting state. It is correctly redirecting users to your external portal, but it is also instructing your portal to submit the authentication details back to the AP's internal, non-functional login script (wifilogin.cgi).
This creates a failed loop:
Logins are correctly sent to purpleportal.net.
Our login page is presented & processed
When you log in, we attempt to post the credentials; our logs confirm that our systems 'honor' the expected loginurl parameter and redirects the via the browser to http://portal.draytek.com:8001/cgi-bin/wifilogin.cgi....
This loginurl points back at the AP itself, which is where the process fails,the device logging in tries to load this wifilogin.cgi page from the Draytek AP. As shown in the earlier screenshot, the AP fails to serve this page correctly, leading to the net::ERR_EMPTY_RESPONSE error.
The log entries showing [wptl]type radius_auth_data confirm that the AP's internal script is incorrectly trying to handle the RADIUS data, a job that should be performed exclusively by your external portal server.
15:52  rromero  we do note in the guide that the current supported models are: 2862, 3220, 2926, 2952, 2765, 2865, 2866, 2927, 2962, 3910 series (of which the VigorAP 903 is not listed) 
However, if you can find the setting on the VigorAP 903 that corresponds to "Portal Method" and set it to a mode that uses an external portal exclusively. This will stop the AP from interfering and allow your portal to communicate directly with the RADIUS server as intended.



This loginurl points back at the AP itself, which is where the process fails,the device logging in tries to load this wifilogin.cgi page from the Draytek AP. As shown in the earlier screenshot, the AP fails to serve this page correctly, leading to the net::ERR_EMPTY_RESPONSE error.
The log entries showing [wptl]type radius_auth_data confirm that the AP's internal script is incorrectly trying to handle the RADIUS data, a job that should be performed exclusively by your external portal server.
15:52  rromero  we do note in the guide that the current supported models are: 2862, 3220, 2926, 2952, 2765, 2865, 2866, 2927, 2962, 3910 series (of which the VigorAP 903 is not listed) 
However, if you can find the setting on the VigorAP 903 that corresponds to "Portal Method" and set it to a mode that uses an external portal exclusively. This will stop the AP from interfering and allow your portal to communicate directly with the RADIUS server as intended.


15:54  rromero  richmond@sportsforchampions.com
15:55  rromero  Jan  1 01:06:43  VigorAP903: (5G) 70:F7:54:A0:A2:D4 had disassociated
Jan  1 01:06:43  VigorAP903: (5G) 70:F7:54:A0:A2:D4 had associated successfully
Jan  1 01:06:44  VigorAP903: (5G) SSID2 send Msg1 of 4-way handshaking (70:F7:54:A0:A2:D4)
Jan  1 01:06:44  VigorAP903: (5G) SSID2 receive Msg2 of 4-way handshaking (70:F7:54:A0:A2:D4)
Jan  1 01:06:44  VigorAP903: (5G) SSID2 send Msg3 of 4-way handshaking (70:F7:54:A0:A2:D4)
Jan  1 01:06:44  VigorAP903: AP SETKEYS DONE - AKMMap=WPA2PSK, PairwiseCipher=AES, GroupCipher=AES, wcid=13 from 70:F7:54:A0:A2:D4
Jan  1 01:06:44  VigorAP903: 
Jan  1 01:06:44  VigorAP903: Station Connected: wcid=13, 70:F7:54:A0:A2:D4
Jan  1 01:06:45  VigorAP903: (5G) 70:F7:54:A0:A2:D4 had disassociated
Jan  1 01:08:12  VigorAP903: (2.4G) 44:CB:8B:0D:A1:A2 had associated successfully
Jan  1 01:08:12  VigorAP903: (2.4G) 26:3B:26:16:FB:73 had associated successfully
Jan  1 01:08:28  VigorAP903: [wlogin] 'admin' login from [192.168.1.95]
Jul 21 15:32:13  VigorAP903: [dray_radio_info]start_time 1753104733, next_resize_file_time 1753106400
Jul 21 15:33:13  VigorAP903: [Channel Load] Wireless 2.4G: 4 % / 5G: 0 %
Jul 21 15:34:25  VigorAP903: [11r] Del PMKID CacheIdx=0 (IF5)
Jul 21 15:34:35  VigorAP903: [11r] Del PMKID CacheIdx=1 (IF1)
Jul 21 15:35:42  VigorAP903: [11r] Del PMKID CacheIdx=2 (IF1)
Jul 21 15:36:04  VigorAP903: (5G) 4E:DB:C6:1C:B5:9F had disassociated
Jul 21 15:36:04  VigorAP903: [del_web_portal_client], but hash_id:[34] is empty!
Jul 21 15:38:21  VigorAP903: [Channel Load] Wireless 2.4G: 3 % / 5G: 24 %
Jul 21 15:43:27  VigorAP903: [Channel Load] Wireless 2.4G: 5 % / 5G: 0 %
Jul 21 15:47:34  VigorAP903: [ext_web_portal] : host(29) connectivitycheck.gstatic.com^M
Jul 21 15:47:34  VigorAP9: [ext_web_portal] : url_buf(147) https://purpleportal.net/access/?apmac=14-49-BC-6A-C0-40&client_mac=D6-B3-AE-82-4F-74&loginurl=http://portal.draytek.com:8001/cgi-bin/wifilogin.cgi&target=http://connectivitycheck.gstatic.com^M
Jul 21 15:48:14  VigorAP903: [ext_web_portal] type reset_lists ^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] type portal_type ^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] type profile_policy ^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] profile[0][enable, eth, 2.4g, 5g]: 1,0,0,1^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] profile[1][enable, eth, 2.4g, 5g]: 0,0,0,0^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] profile[2][enable, eth, 2.4g, 5g]: 0,0,0,0^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] profile[3][enable, eth, 2.4g, 5g]: 0,0,0,0^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] [0]en 1 domain_name portal.draytek.com ^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] [1]en 0 domain_name  ^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] [2]en 0 domain_name  ^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] [3]en 0 domain_name  ^M
Jul 21 15:48:15  VigorAP903: External web portal interface policy -->  eth 0x0, wlan24g 0x0, wlan5g 0x1^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] type set_query_domain_name ^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] [0]en 1 domain_name portal.draytek.com ^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] type set_whitelist_destination_ip ^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] profile[0][0] enable 0, dig_ip 0x0^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] profile[0][1] enable 0, dig_ip 0x0^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] profile[0][2] enable 0, dig_ip 0x0^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] profile[0][3] enable 0, dig_ip 0x0^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] profile[0][4] enable 0, dig_ip 0x0^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] profile[0][5] enable 0, dig_ip 0x0^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] profile[0][6] enable 0, dig_ip 0x0^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] profile[0][7] enable 0, dig_ip 0x0^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] type set_domain_query_ip ^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] type set whitelist dest domain name ^M
Jul 21 15:48:15  VigorAP903: dst domain [0][0] *.purpleportal.net (field 0xf)^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] type set whitelist dest domain name ^M
Jul 21 15:48:15  VigorAP903: dst domain [0][1] *.cloudfront.net (field 0xf)^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] type set whitelist dest domain name ^M
Jul 21 15:48:15  VigorAP903: dst domain [0][2] *.venuewifi.com (field 0xf)^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] type set whitelist dest domain name ^M
Jul 21 15:48:15  VigorAP903: dst domain [0][3] *.openweathermap.org (field 0xf)^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] type set portal server domain ^M
Jul 21 15:48:15  VigorAP903: [wptl]local_ip 192.168.1.17 mask 255.255.255.0 broadcast 192.168.1.255 mac 14:49:BC:6A:C0:40
Jul 21 15:48:15  VigorAP903: [ext_web_portal] type register process id ^M
Jul 21 15:48:15  VigorAP903: [ext_web_portal] process_id 15250 ^M
Jul 21 15:48:36  VigorAP903: [Channel Load] Wireless 2.4G: 5 % / 5G: 0 %
Jul 21 15:53:24  VigorAP903: [ext_web_portal] type reset_lists ^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] type portal_type ^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] type profile_policy ^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] profile[0][enable, eth, 2.4g, 5g]: 1,0,0,1^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] profile[1][enable, eth, 2.4g, 5g]: 0,0,0,0^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] profile[2][enable, eth, 2.4g, 5g]: 0,0,0,0^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] profile[3][enable, eth, 2.4g, 5g]: 0,0,0,0^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] [0]en 1 domain_name portal.draytek.com ^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] [1]en 0 domain_name  ^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] [2]en 0 domain_name  ^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] [3]en 0 domain_name  ^M
Jul 21 15:53:24  VigorAP903: External web portal interface policy -->  eth 0x0, wlan24g 0x0, wlan5g 0x1^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] type set_query_domain_name ^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] [0]en 1 domain_name portal.draytek.com ^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] type set_whitelist_destination_ip ^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] profile[0][0] enable 0, dig_ip 0x0^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] profile[0][1] enable 0, dig_ip 0x0^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] profile[0][2] enable 0, dig_ip 0x0^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] profile[0][3] enable 0, dig_ip 0x0^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] profile[0][4] enable 0, dig_ip 0x0^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] profile[0][5] enable 0, dig_ip 0x0^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] profile[0][6] enable 0, dig_ip 0x0^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] profile[0][7] enable 0, dig_ip 0x0^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] type set_domain_query_ip ^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] type set whitelist dest domain name ^M
Jul 21 15:53:24  VigorAP903: dst domain [0][0] *.purpleportal.net (field 0xf)^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] type set whitelist dest domain name ^M
Jul 21 15:53:24  VigorAP903: dst domain [0][1] *.cloudfront.net (field 0xf)^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] type set whitelist dest domain name ^M
Jul 21 15:53:24  VigorAP903: dst domain [0][2] *.venuewifi.com (field 0xf)^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] type set whitelist dest domain name ^M
Jul 21 15:53:24  VigorAP903: dst domain [0][3] *.openweathermap.org (field 0xf)^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] type set portal server domain ^M
Jul 21 15:53:24  VigorAP903: [wptl]local_ip 192.168.1.17 mask 255.255.255.0 broadcast 192.168.1.255 mac 14:49:BC:6A:C0:40
Jul 21 15:53:24  VigorAP903: [ext_web_portal] type register process id ^M
Jul 21 15:53:24  VigorAP903: [ext_web_portal] process_id 18040 ^M
Jul 21 15:53:42  VigorAP903: [Channel Load] Wireless 2.4G: 4 % / 5G: 0 %

