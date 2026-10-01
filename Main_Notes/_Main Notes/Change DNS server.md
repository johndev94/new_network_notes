---
note_type: response
topic: "General troubleshooting"
---

### Support Response Template – Unable to Change DNS on Router

**Subject:** Unable to Change DNS Servers – Router Still Using ISP DNS

**Hello [Customer Name],**

Thank you for reaching out. I understand you're experiencing issues with configuring custom DNS servers on your router. Based on your description, it appears the router is still using ISP-assigned DNS addresses despite your input. Here's a breakdown of what's likely happening and how to resolve it.

---

### What’s Happening?

When a router like the DrayTek 2862 is set to **"Obtain an IP address automatically" (DHCP client mode)** or uses **PPPoE for VDSL2**, the **ISP’s DNS servers are automatically assigned**. In this configuration, DNS settings entered under `[WAN >> Internet Access >> MPoA/Static or Dynamic IP]` are not used.

Additionally, the **“Specify an IP address”** option under WAN must include valid values for IP, Subnet Mask, and Default Gateway. If left blank, it results in an error when saving DNS entries.

---

### What You Can Do

To override the ISP’s DNS settings, use **one of these two methods**:

#### **Option 1: LAN-Level DNS Override (Recommended)**

1. Go to **[LAN >> General Setup]**.
    
2. Select the appropriate LAN (e.g. LAN1).
    
3. In the **DHCP Server Configuration**, enter your preferred DNS (e.g., `1.1.1.1` and `1.0.0.1`).
    
4. Tick **“Force router to use DNS server IP address settings specified in LAN1”**.
    
5. Save and reboot the router.
    

This ensures the router and any connected clients use the DNS you’ve configured—ideal when on dynamic WAN IP or PPPoE._

#### **Option 2: Use Static IP on WAN (Not possible for PPPoE)**

If your ISP allows a static IP:

1. Set WAN mode to **“Static IP”**.
    
2. Enter the IP address, subnet, and gateway manually.
    
3. Specify the DNS servers under “DNS Server IP Address”.
    
4. Save and reboot.
    

Note: This option won't work with PPPoE or VDSL connections that require dynamic assignment.

---

### 🔧 To Confirm the Router’s DNS:

Navigate to **[Online Status >> Physical Connection]**:

- Look for **Router Primary DNS** and **Router Secondary DNS** at the top.
    
- These reflect the actual DNS being used by the router.
    

---

Please let us know if you continue to see the ISP’s DNS after applying the steps above. We're happy to guide you through any of the setup stages.
