Ed

SSL VPN

When computer is connected to SSL, the IPhone cannot connect and is disconnected after 5 seconds. When the computer is connected the iPhone can connect

SSL is set up with active 

IPsec active directory

O2 turn off ipsec

07879418315


| Time                | Message                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 2025-09-17 15:09:58 | VPN Matcher: close socket:28...                                                                                                             |
| 2025-09-17 15:09:58 | udp_punching_client(): NO response from Server: 28 (190141)??? Try Re-init UDP socket...                                                    |
| 2025-09-17 15:09:46 | [SSL TUNNEL][@86.26.32.231] pppShutdown                                                                                                     |
| 2025-09-17 15:09:46 | PPP Drop VPN : Remote Dial-in User, Profile in LDAP Server, Name = Edward.Parkes, ifno=20                                                   |
| 2025-09-17 15:09:46 | [SSL TUNNEL][Radius/LDAP][65:Edward.Parkes][@86.26.32.231] pppShutdown                                                                      |
| 2025-09-17 15:09:46 | [SSLTunnel] IFNO-20: try recv header for 5 times, fail, close ppp.                                                                          |
| 2025-09-17 15:09:46 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:09:46 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:09:46 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:09:46 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:09:46 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:09:46 | FreeLDAPCQueryEntry 0                                                                                                                       |
| 2025-09-17 15:09:46 | SSLTunnel (VPN-1) ==> Protocol:IPCP(8021) ConfReq Identifier:0x00 Compression Type: Unknown:.....                                           |
| 2025-09-17 15:09:46 | SSLTunnel (VPN-1) ==> Protocol:PAP(c023) Authenticate-Ack Identifier:0x00 Message: ##                                                       |
| 2025-09-17 15:09:46 | [VPN] LDAP authentication.                                                                                                                  |
| 2025-09-17 15:09:46 | SSLTunnel (VPN-1) <== Protocol:PAP(c023) Authenticate-Request Identifier:0x03 Peer-ID:Edward.Parkes Password:********* ##                   |
| 2025-09-17 15:09:46 | SSLTunnel (VPN-1) <== Protocol:LCP(c021) ConfAck Identifier:0x00 Authentication Type: PAP Magic Number: 0x1 ##                              |
| 2025-09-17 15:09:46 | SSLTunnel (VPN-1) ==> Protocol:LCP(c021) ConfAck Identifier:0x00 MRU: 1442 Magic Number: 0xd31f9fcf ##                                      |
| 2025-09-17 15:09:46 | SSLTunnel (VPN-1) <== Protocol:LCP(c021) ConfReq Identifier:0x00 MRU: 1442 Magic Number: 0xd31f9fcf ##                                      |
| 2025-09-17 15:09:46 | SSLTunnel (VPN-1) ==> Protocol:LCP(c021) ConfReq Identifier:0x00 Authentication Type: PAP Magic Number: 0x1 ##                              |
| 2025-09-17 15:09:46 | PPP Start ()                                                                                                                                |
| 2025-09-17 15:09:46 | [SSLTunnel] Dial-in protocol version 0.                                                                                                     |
| 2025-09-17 15:09:45 | [SSL TUNNEL][@86.26.32.231] pppShutdown                                                                                                     |
| 2025-09-17 15:09:45 | PPP Drop VPN : Remote Dial-in User, Profile in LDAP Server, Name = Edward.Parkes, ifno=20                                                   |
| 2025-09-17 15:09:45 | [SSL TUNNEL][Radius/LDAP][65:Edward.Parkes][@86.26.32.231] pppShutdown                                                                      |
| 2025-09-17 15:09:45 | [SSLTunnel] IFNO-20: try recv header for 5 times, fail, close ppp.                                                                          |
| 2025-09-17 15:09:45 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:09:45 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:09:45 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:09:45 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:09:45 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:09:45 | SSLTunnel (VPN-1) <== Protocol:IPCP(8021) ConfAck Identifier:0x01 IP Address: 192 168 240 1 ##                                              |
| 2025-09-17 15:09:45 | SSLTunnel (VPN-1) ==> Protocol:IPCP(8021) ConfAck Identifier:0x01 IP Address: 192 168 240 121 Primary Domain Name Server: 192 168 240 20 ## |
| 2025-09-17 15:09:45 | ipcp offer requested IP: 192.168.240.121 from client...                                                                                     |
| 2025-09-17 15:09:45 | PPP[20] send DISCOVER to DHCP Server...                                                                                                     |
| 2025-09-17 15:09:45 | PPP[20] send DISCOVER to DHCP Server...                                                                                                     |
| 2025-09-17 15:09:45 | SSLTunnel (VPN-1) ==> Protocol:IPCP(8021) ConfReq Identifier:0x02 IP Address: 192 168 240 1 ##                                              |
| 2025-09-17 15:09:45 | SSLTunnel (VPN-1) <== Protocol:IPCP(8021) ConfReq Identifier:0x01 IP Address: 192 168 240 121 Primary Domain Name Server: 192 168 240 20 ## |
| 2025-09-17 15:09:45 | SSLTunnel (VPN-1) ==> Protocol:IPCP(8021) ConfAck Identifier:0x01 IP Address: 192 168 240 121 Primary Domain Name Server: 192 168 240 20 ## |
| 2025-09-17 15:09:45 | ipcp offer requested IP: 192.168.240.121 from client...                                                                                     |
| 2025-09-17 15:09:45 | PPP[20] send DISCOVER to DHCP Server...                                                                                                     |
| 2025-09-17 15:09:45 | PPP[20] send DISCOVER to DHCP Server...                                                                                                     |
| 2025-09-17 15:09:45 | SSLTunnel (VPN-1) <== Protocol:IPCP(8021) ConfReq Identifier:0x01 IP Address: 192 168 240 121 Primary Domain Name Server: 192 168 240 20 ## |
| 2025-09-17 15:09:44 | SSLTunnel (VPN-1) ==> Protocol:PAP(c023) Authenticate-Ack Identifier:0x03 Message: ##                                                       |
| 2025-09-17 15:09:43 | SSLTunnel (VPN-1) ==> Protocol:IPCP(8021) ConfReq Identifier:0x01 IP Address: 192 168 240 1 ##                                              |
| 2025-09-17 15:09:43 | SSLTunnel (VPN-1) ==> Protocol:IPCP(8021) ConfNak Identifier:0x00 IP Address: 192 168 240 121 Primary Domain Name Server: 192 168 240 20 ## |
| 2025-09-17 15:09:43 | PPP[20] send DISCOVER to DHCP Server...                                                                                                     |
| 2025-09-17 15:09:43 | PPP[20] send DISCOVER to DHCP Server...                                                                                                     |
| 2025-09-17 15:09:43 | SSLTunnel (VPN-1) <== Protocol:PAP(c023) Authenticate-Request Identifier:0x03 Peer-ID:Edward.Parkes Password:********* ##                   |
| 2025-09-17 15:09:43 | SSLTunnel (VPN-1) <== Protocol:IPCP(8021) ConfRej Identifier:0x00 Compression Type: Unknown:.....                                           |
| 2025-09-17 15:09:43 | PPP[20] send DISCOVER to DHCP Server...                                                                                                     |
| 2025-09-17 15:09:43 | PPP[20] send DISCOVER to DHCP Server...                                                                                                     |
| 2025-09-17 15:09:43 | SSLTunnel (VPN-1) <== Protocol:IPCP(8021) ConfReq Identifier:0x00 IP Address: 0 0 0 0 Primary Domain Name Server: 0 0 0 0 ##                |
| 2025-09-17 15:09:43 | FreeLDAPCQueryEntry 0                                                                                                                       |
| 2025-09-17 15:09:43 | SSLTunnel (VPN-1) ==> Protocol:IPCP(8021) ConfReq Identifier:0x00 Compression Type: Unknown:.....                                           |
| 2025-09-17 15:09:43 | SSLTunnel (VPN-1) ==> Protocol:PAP(c023) Authenticate-Ack Identifier:0x00 Message: ##                                                       |
| 2025-09-17 15:09:43 | [VPN] LDAP authentication.                                                                                                                  |
| 2025-09-17 15:09:43 | SSLTunnel (VPN-1) <== Protocol:PAP(c023) Authenticate-Request Identifier:0x03 Peer-ID:Edward.Parkes Password:********* ##                   |
| 2025-09-17 15:09:42 | SSLTunnel (VPN-1) <== Protocol:LCP(c021) ConfAck Identifier:0x00 Authentication Type: PAP Magic Number: 0x1 ##                              |
| 2025-09-17 15:09:42 | SSLTunnel (VPN-1) ==> Protocol:LCP(c021) ConfAck Identifier:0x00 MRU: 1442 Magic Number: 0xd31f9fcf ##                                      |
| 2025-09-17 15:09:42 | SSLTunnel (VPN-1) <== Protocol:LCP(c021) ConfReq Identifier:0x00 MRU: 1442 Magic Number: 0xd31f9fcf ##                                      |
| 2025-09-17 15:09:42 | SSLTunnel (VPN-1) ==> Protocol:LCP(c021) ConfReq Identifier:0x00 Authentication Type: PAP Magic Number: 0x1 ##                              |
| 2025-09-17 15:09:42 | PPP Start ()                                                                                                                                |
| 2025-09-17 15:09:42 | [SSLTunnel] Dial-in protocol version 0.                                                                                                     |
| 2025-09-17 15:09:13 | udp_pun_init: socket:28....1194 --> 35.187.87.72:31503                                                                                      |
| 2025-09-17 15:08:58 | VPN Matcher: close socket:28...                                                                                                             |
| 2025-09-17 15:08:58 | udp_punching_client(): NO response from Server: 28 (190081)??? Try Re-init UDP socket...                                                    |
| 2025-09-17 15:08:55 | [SSL TUNNEL][@86.26.32.231] pppShutdown                                                                                                     |
| 2025-09-17 15:08:55 | PPP Drop VPN : Remote Dial-in User, Profile in LDAP Server, Name = Edward.Parkes, ifno=20                                                   |
| 2025-09-17 15:08:55 | [SSL TUNNEL][Radius/LDAP][65:Edward.Parkes][@86.26.32.231] pppShutdown                                                                      |
| 2025-09-17 15:08:55 | [SSLTunnel] IFNO-20: try recv header for 5 times, fail, close ppp.                                                                          |
| 2025-09-17 15:08:55 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:08:55 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:08:55 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:08:55 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:08:55 | [SSLTunnel] IFNO-20: recv header try again!byterecv=0.                                                                                      |
| 2025-09-17 15:08:55 | FreeLDAPCQueryEntry 0                                                                                                                       |
| 2025-09-17 15:08:55 | SSLTunnel (VPN-1) ==> Protocol:IPCP(8021) ConfReq Identifier:0x00 Compression Type: Unknown:.....                                           |
| 2025-09-17 15:08:55 | SSLTunnel (VPN-1) ==> Protocol:PAP(c023) Authenticate-Ack Identifier:0x00 Message: ##                                                       |
| 2025-09-17 15:08:55 | [VPN] LDAP authentication.                                                                                                                  |
| 2025-09-17 15:08:55 | SSLTunnel (VPN-1) <== Protocol:PAP(c023) Authenticate-Request Identifier:0x03 Peer-ID:Edward.Parkes Password:********* ##                   |
| 2025-09-17 15:08:55 | SSLTunnel (VPN-1) <== Protocol:LCP(c021) ConfAck Identifier:0x00 Authentication Type: PAP Magic Number: 0x1 ##                              |
| 2025-09-17 15:08:54 | SSLTunnel (VPN-1) ==> Protocol:LCP(c021) ConfAck Identifier:0x00 MRU: 1442 Magic Number: 0x2a021038 ##                                      |
| 2025-09-17 15:08:54 | SSLTunnel (VPN-1) <== Protocol:LCP(c021) ConfReq Identifier:0x00 MRU: 1442 Magic Number: 0x2a021038 ##                                      |
| 2025-09-17 15:08:54 | SSLTunnel (VPN-1) ==> Protocol:LCP(c021) ConfReq Identifier:0x00 Authentication Type: PAP Magic Number: 0x1 ##                              |
| 2025-09-17 15:08:54 | PPP Start ()                                                                                                                                |
| 2025-09-17 15:08:54 | [SSLTunnel] Dial-in protocol version 0.                                                                                                     |


DHCP 

get /ipconfig all