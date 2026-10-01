windows server as VPN p2pt 

1723

47

Disabled VPN

cannot access the files, GRE 

initiat a coneection from a external device but cannot ping router.

support@starteked

To allow your VPN clients to reach both the LAN and the DrayTek, please set the following on the router:

1. **WAN → LAN**: Allow TCP 1723 and GRE to the Windows Server.
    
2. **LAN → LAN**: Allow traffic from the VPN client subnet (e.g. 10.0.0.0/24) to the LAN subnet.
    
3. **LAN → Router**: Allow traffic from the VPN client subnet to the router (ICMP if just ping, or Any if management is needed).
    
4. **Static Route**: Add a route for the VPN client subnet via the Windows Server’s LAN IP.
    

This ensures the tunnel passes through, clients can reach the LAN, and the router will respond to pings or management from the VPN subnet.