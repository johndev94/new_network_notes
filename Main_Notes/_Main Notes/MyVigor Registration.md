How to register a device to MyVigor  

1. Before the registration, make sure the router is running on the latest firmware. 

2. First, you need a MyVigor account. Click on the link to register https://myvigor.draytek.com 

3. Log into the router's web user interface, of which you would like to be registered. 

4. Click "Product Registration" which will direct to MyVigor login page.  

5. Login to MyVigor, enter the account username and password. 

6. Enter the device name of your choice and click submit 

7. After submitting the router will show in my product page and you can see device name and activated service status on the right. 



Troubleshooting steps

Check and update the router's firmware to the latest version.

1. Reboot the router – this often triggers the router to contact the MyVigor server and update its information.

2. Check if the browser is blocking pop-ups – ensure that pop-ups from MyVigor are allowed.

3. Use the router's Ping Diagnosis to ping auth.draytek.com (IP: 35.189.201.134).

- If the ping fails, change the WAN DNS server to 8.8.8.8.

4. Run the following commands via the router CLI to force a sync with MyVigor:

- sys admin drayteker

- sys lic licauth 1

5. Check the firewall settings:

- If the default rule is set to block, create a firewall filter that allows access to MyVigor using its IP address.

6. If none of the above resolves the issue, provide the LAN MAC address, serial number of the router and your MyVigor username.



