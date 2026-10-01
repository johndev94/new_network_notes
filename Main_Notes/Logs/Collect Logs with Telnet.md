![](https://www.draytek.com/assets/2022_theme/images/knowledge_base_banner.svg)

[Knowledge Base](https://www.draytek.com/support/knowledge-base/)  >  [System](https://www.draytek.com/support/knowledge-base/System)  > 

# Collect Console Logs through Telnet

When the router has an unexpected reboot or crash problem, we usually advise customers provide the console logs for troubleshooting. This article demonstrates how to use Telnet to collect the console logs with "sys con2tel enable" command.

1. Download the [TeraTerm](https://www.draytek.com/assets/files/faq/2024/CF2775/teraterm-5.2.zip) Tool.

2. Double-click the ttermpro.exe file to run TeraTerm.

![](https://www.draytek.com/assets/files/faq/2024/CF2775/run%20teraterm.png)

3. Enter the router’s IP, select **Telnet** as the Service and click OK.

![](https://www.draytek.com/assets/files/faq/2024/CF2775/open%20telnet.png)

4. Enter the login username and password to create the Telnet connection to Vigor Router. Go to **Setup >> TCP/IP** menu. Change the **keep alive** setting from 300 seconds to 0 seconds. Change the keep alive setting to 0 can keep the telnet connection stable; otherwise, TeraTerm may close the connection after 300 seconds.

![](https://www.draytek.com/assets/files/faq/2022/CF323/keep%20alive.png)

5.Enter the command **sys q 5**. 5 means minutes. Vigor Router will automatically print the used buffer status to the console every 5 minutes. We can specify the interval by needs and turn it off by the command sys q 0. Please note that this feature is supported on Vigor Router starting from firmware version 4.4.x.

Enter the command **sys con2tel enable** and press **ctrl+s** to start the console log capture.

![](https://www.draytek.com/assets/files/faq/2024/CF2775/sys%20con2tel%20enable.png)

6. Go to File >> Log via the TeraTerm Menu.

![](https://www.draytek.com/assets/files/faq/2024/CF2775/save%20the%20logs%20to%20a%20file%20in%20advance.png)

7. Specify the file name for saving the logs and select the **Time Stamp** option. Adding the “Time Stamp” for the console logs is essential. From the time stamp of the logs, we can know if the reboot or the problem occurs after a specific event by comparing the console logs and the Syslogs.

![](https://www.draytek.com/assets/files/faq/2024/CF2775/add%20time%20stamp%20to%20the%20log.png)

8. Keep the TeraTerm connection open until the problem occurs. Then click Close to stop saving the logs and send the log file to Support.

![](https://www.draytek.com/assets/files/faq/2024/CF2775/close%20teraterm%20log%20after%20the%20problem%20occurs.png)