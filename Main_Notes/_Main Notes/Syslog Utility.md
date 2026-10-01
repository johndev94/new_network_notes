Could you send over the full syslog from the router, either using the DrayTek Syslog Utility or USB syslogs.

[https://www.draytek.com/support/knowledge-base/5746](https://www.draytek.com/support/knowledge-base/5746)


Hi Ian,

Thank you for contacting DrayTek Technical Support. 

Could you please collect **con2tel logs while the router is running until after the reboot**, so the logs capture the reboot when it happens? Please include time stamps where possible.

Con2tel guide:  
[https://www.draytek.com/support/knowledge-base/7672](https://www.draytek.com/support/knowledge-base/7672)

After the router has rebooted, please then collect the **debug logs**.

To collect the debug logs, telnet into the router as soon as possible after the reboot.

Open Command Prompt and enter:

  
telnet 192.168.1.1

Please replace `192.168.1.1` with the router’s actual IP address.

Once logged in, run:  
sys ver dbg

Please also provide the timestamps for when the connection drops or the router reboots. This will help us compare the logs against the time of the issue.

Could you also confirm the following:

1. Can any VPN services that are not in use be disabled?
2. Is **Access from the Internet** enabled? If so, does it need to remain enabled? If it does, can ACLs be used to restrict access?
3. Are any USB devices connected to the router? If so, can they be removed for testing?
4. Is the router connected to ACS?
5. Is IPv6 enabled?
6. Is wireless in use, and is band steering enabled?