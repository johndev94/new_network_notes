The customer was unable to access their VigorAP 918R.

Troubleshooting Steps Taken:355896

- We confirmed the device responded to ping at 192.168.1.2

- Attempted to access the device via HTTP in a browser – no success

- Attempted access from external devices connected to a Vigor 2865 – also unsuccessful via HTTP

- Suggested trying HTTPS instead of HTTP

Resolution:


- Access was successful using HTTPS at https://192.168.1.2

The issue was likely due to HTTP being disabled or redirected, which is common on newer firmware versions where HTTPS is enforced for security.