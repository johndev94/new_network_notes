Thank you for contacting DrayTek Technical Support.  
  
  
  
Please follow steps below an test  
  
  
  
Step 1: Identify the PlayStation's IP or MAC Address  
  
  
  
You’ll need to uniquely identify the PlayStation on the network.  
  
  
  
Check via DrayTek Interface  
  
  
  
Go to [Diagnostics] > [ARP Table] or [DHCP Table].  
  
  
  
Look for the PlayStation by matching the MAC address (which you can also find in the PS network settings).  
  
  
  
Set a Static DHCP Reservation  
  
  
  
Go to [LAN] > [Bind IP to MAC].  
  
  
  
Bind the PlayStation’s MAC address to a static IP so it always has the same one.  
  
  
  
Step 2: Create a Schedule  
  
  
  
Go to [Applications] > [Schedule].  
  
  
  
Create a new schedule profile:  
  
  
  
Set the days and time ranges when you want to block access.  
  
  
  
Give the profile a name, like "Block PS5".  
  
  
  
Step 3: Create a Firewall Rule  
  
  
  
Go to [Firewall] > [Filter Setup] > [Set 2] (Set 2 is for LAN to WAN rules).  
  
  
  
Create a new rule:  
  
  
  
Direction: LAN → WAN  
  
  
  
Source IP: The static IP or MAC of the PlayStation.  
  
  
  
Destination IP: Any (if you want to block all internet access).  
  
  
  
Service Type: Any (or restrict to specific services like HTTP/HTTPS if partial control is desired).  
  
  
  
Action: Block  
  
  
  
Schedule: Choose the schedule profile you created ("Block PS5").  
  
  
  
  
  
Optional: Creating an IP Object for Easier Management  
  
  
  
Go to [Object Setting] > [IP Object].  
  
  
  
Create an object for the PlayStation’s IP or MAC.  
  
  
  
Use that object in your Firewall rule instead of entering the IP manually.