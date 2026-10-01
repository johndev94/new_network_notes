Hi Des,

Thank you for contacting DrayTek Technical Support.

I hope all is well, following our call earlier, we were able to get Web Content Filtering (WCF) working again, as it had been disabled in the firewall rules. We also went over how to add specific keywords to the block list.

For your reference, here’s a quick summary of how to add keywords to WCF in case you come across any websites that are bypassing the filter:

First, go to Object Setting > Keyword Object, select an index, give it a name, and enter up to three keywords in the "Contents" field. Click OK to save.

Next, go to CSM > Web Content Filter Profile, select a profile index, and make sure Black/White List is enabled and set to Block. Under "URL Keywords," click Edit, add the keyword object you just created, and click OK.

If you need help testing or adjusting any other filter settings, feel free to get in touch.