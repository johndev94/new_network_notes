The hardware acceleration parameter you see in ACS is part of the standard TR-069 parameter tree, but in this case, it is redundant and does not affect functionality.  
  
It appears because the TR-069 data model includes this parameter universally, even for models or firmware where hardware acceleration is not applicable or recommended.  
  
Enabling this parameter can cause instability (e.g., PPP disconnects), so the best practice is to ignore this TR-069 parameter and leave hardware acceleration disabled.  
  
Currently, it cannot be removed from the GUI or ACS via firmware updates because it is part of the standard interface design. We have raised this feedback with DrayTek for future consideration.  
  
  
For now, please continue to keep hardware acceleration disabled (0) and disregard this parameter in ACS.