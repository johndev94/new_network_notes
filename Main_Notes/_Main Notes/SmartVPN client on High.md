---
note_type: response
topic: "VPN and remote access"
---

Thanks for your patience while we investigated this further.  
  
We’ve confirmed this is a current limitation of the Smart VPN Client. At present, it only supports SHA1 for IPsec and does not support SHA256, which is why the tunnel fails to establish when the router is set to “High” security.  
Our engineering team is already working on adding SHA256 support to the Smart VPN Client, but there is no confirmed ETA for this yet. Once available, it should be included in a future client release.  
  
In the meantime, you have a couple of options:

- Continue using the Smart VPN Client with the router set to “Medium” security
- Use the Windows built-in VPN client with the PowerShell configuration you’ve tested, which does support SHA256  
    

Alternatively, you could consider using a different VPN protocol such as OpenVPN or WireGuard, though we understand this may not be suitable depending on your setup.  
Please let me know if you’d like any guidance on the above.

’ve managed to get a Windows 11 VPN to connect to the Draytek with IPsec Security Method set to High:

 

Connection Name: “BestWin11”

VPN Type: L2TP/IPsec with pre-shared key

 

Advanced Options > More VPN Properties > Edit > Security

    Allow these protocols > *JUST* “Microsoft CHAP Version 2 (MS-CHAP v2)”

 

Then run PowerShell command:

Set-VpnConnectionIPsecConfiguration -ConnectionName "BestWin11" -AuthenticationTransformConstants SHA256128 -CipherTransformConstants AES256 -EncryptionMethod AES256 -IntegrityCheckMethod SHA256 -DHGroup ECP256 -PfsGroup ECP256 -PassThru -Force
