Arp is mapping a layer 3 IP address(known) to a layer 2 MAC address(unknown)

![[Attachments/Pasted image 20250425094523.png]]
Host B knows Host A's IP address, but doesn't know its MAC address. Host B broadcasts "If there is someone out there with IP 10.3.3.11, please send me your MAC. Here is my  MAC 0053:ff33.bbbb". Everyone on the network will receive this message.

There router will inspect the contents of the ARP request and notice it is not for the routers IP address, so the router will silently discard the packet.

Host A will inspect the content of the ARP request and realize the request is intended for its own IP address, Host A will process the packet and generate an ARP response. The response will include the IP to MAC mapping that Host B was inquiring about. The response will be sent back in Unicast to Host B

![[Attachments/Pasted image 20250425095225.png]]

Host B can then update its ARP table.
![[Attachments/Pasted image 20250425095511.png]]

If you are trying to speak to a destination on a foreign network, ARP will be for the default gateway.

Host B will send out and ARP request just like before, but looking for 10.3.3.99 (default gateway).

![[Attachments/Pasted image 20250425100645.png]]

Host A will receive it and discard it realizing it isn't for its own IP address, the Router will look and realize it is for its own IP address, so it will process the packets and send back its response in Unicast to Host B. It will include the mapping that Host B was looking for.

![[Attachments/Pasted image 20250425101219.png]]

Host B's ARP table will then be updated.

![[Attachments/Pasted image 20250425101325.png]]

So, now anytime Host B wants to speak to Host D or any other Host outside it's network it will use its ARP mapping for its default gatewau
