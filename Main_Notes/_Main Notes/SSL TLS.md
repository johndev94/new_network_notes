To comply with EN18031, we have changed the default SSL VPN encapsulation from SSL 3.0 to TLS 1.2.

However, the Vigor Router can automatically fall back to SSL 3.0 if the keyword **‘ssl30**’ is included in the LAN-to-LAN profile name or the remote dial-in username. 

For SSL VPN connections to the old models from the V385 firwmare branch(e.g., 2912, 2926, 2952, 2862, 2912), or to the Vigor2962/3910 series running firmware version 4.4.3.4 or earlier, it is necessary to include **‘ssl30’** in the VPN profile name to ensure proper VPN functionality.