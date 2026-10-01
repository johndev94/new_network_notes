**Nmap** can help you identify which port your router is using. You can scan your router's IP address to check for open ports with this command:

nmap -p- 192.168.1.1

This scans **all ports (1-65535)** on your router. If you want a **faster scan**, you can try:

nmap -F 192.168.1.1

This checks the **100 most common ports**. If you're looking for a specific service, like a web interface, you can scan for **port 80 or 443**:

nmap -p 80,443 192.168.1.1