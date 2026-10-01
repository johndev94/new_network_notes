**Carrier-Grade NAT (CGNAT)** is a large-scale **Network Address Translation (NAT)** method used by **Internet Service Providers (ISPs)** to manage IPv4 address shortages. Instead of assigning a unique public IP to each customer, CGNAT allows multiple users to share a single public IP, reducing the demand for IPv4 addresses.

**How CGNAT Works**

- **Private IP Assignment**: Customers receive private IPs within the ISP's network.
- **Translation at ISP Level**: The ISP translates private IPs to a shared public IP.
- **Port Mapping**: Unique port numbers help differentiate users sharing the same public IP.

**Advantages**

- **Conserves IPv4 addresses** in the face of exhaustion.
- **Cost-effective** for ISPs, reducing the need for additional IPv4 allocations.

**Disadvantages**

- **Breaks end-to-end connectivity**, making peer-to-peer applications (like gaming and VPNs) more difficult.
- **Limits port forwarding**, restricting remote access to home networks.
- **Potential security concerns**, as multiple users share the same public IP.

**How to Check If You're Behind CGNAT**

- **Check your IP address**: If your public IP falls within **100.64.0.0/10**, you're likely behind CGNAT.
- **Run a traceroute**: If multiple hops exist between your router and the internet, CGNAT may be in use.