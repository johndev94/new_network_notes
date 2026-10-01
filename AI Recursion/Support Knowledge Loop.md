# Support knowledge loop

Yes. What you're describing is very achievable, and Zendesk already exposes most of the pieces needed through its APIs and automation/webhook system.

There is actually a Zendesk feature now that uses **solved/closed tickets from the previous 90 days to generate Help Center content with generative AI**, but it is aimed more at bulk Help Center creation and can create duplicates. Your idea is more controlled: continuously turn genuinely resolved technical tickets into curated knowledge for your support AI. ([Zendesk Support](https://support.zendesk.com/hc/en-us/articles/9409324793498-Creating-help-center-content-using-ticket-data-and-generative-AI?utm_source=chatgpt.com "Creating help center content using ticket data and generative AI – Zendesk help"))

### How I would build it

The workflow would look like:

```text
Zendesk ticket solved
        ↓
Wait 10 days
        ↓
Retrieve full ticket conversation
        ↓
AI Resolution Validator
        ↓
Was the technical issue genuinely resolved?
        ↓
     YES / NO
      ↓     ↓
 Continue  Ignore
      ↓
Remove:
- Customer names
- Email addresses
- Serial numbers
- IP addresses/passwords
- Signatures
- Repeated quoted emails
- Irrelevant conversation
      ↓
AI extracts:
- Product/model
- Problem
- Symptoms
- Cause
- Troubleshooting performed
- Actual solution
- Important notes
      ↓
Search existing Knowledge Base
      ↓
Existing solution?
   ↓             ↓
  YES            NO
   ↓              ↓
Update/merge    Create article
      ↓
Zendesk Knowledge Base
      ↓
Available to your ticket-response AI
```

Zendesk supports connecting **automations to webhooks**, so the 10-day timing can be handled on the Zendesk side. The webhook can then call your own service to process the ticket. ([Zendesk Developer Documentation](https://developer.zendesk.com/documentation/webhooks/creating-and-monitoring-webhooks/?utm_source=chatgpt.com "Creating and monitoring webhooks | Zendesk Developer Docs"))

### The important part: determining "actually solved"

I wouldn't simply tell the model:

> Is this ticket solved? Yes/No.

You want a reasonably strict qualification stage.

For example, the AI should classify the ticket as:

```text
RESOLUTION STATUS

CONFIRMED_RESOLVED
The customer explicitly confirmed the solution worked.

STRONGLY_RESOLVED
The conversation contains clear technical evidence that the problem was fixed.

PROBABLE_RESOLUTION
A solution was supplied but the customer did not confirm it.

NO_RESPONSE
Ticket was solved/closed because the customer stopped responding.

UNRESOLVED
Problem remained outstanding.

RMA
Issue resulted in hardware replacement/repair.

ESCALATED
Ticket ended through escalation rather than a technical resolution.
```

For your knowledge system I'd initially allow only:

```text
CONFIRMED_RESOLVED
STRONGLY_RESOLVED
```

to become knowledge automatically.

That prevents a ticket like:

```text
Customer:
VPN keeps disconnecting.

Support:
Please upgrade to firmware X and send us the logs.

Customer:
[No response]

Ticket automatically solved.
```

from teaching the AI:

```text
Solution: Upgrade the firmware.
```

when you don't actually know whether that fixed anything.

### What gets written to the KB

I also wouldn't have it dump a ticket summary into the knowledge base.

Convert it into something like:

```text
TITLE:
Vigor 2865 - SSL VPN Disconnecting Intermittently

PRODUCT:
Vigor 2865

CATEGORY:
VPN > SSL VPN

SYMPTOMS:
SSL VPN connection disconnects intermittently.

CAUSE:
Firmware-related SSL VPN issue.

RESOLUTION:

1. Confirm the router firmware version.
2. Upgrade the Vigor 2865 to the recommended firmware.
3. Reboot the router after the upgrade.
4. Reconnect the SSL VPN client.
5. Confirm the connection remains stable.

RESULT:
Customer confirmed that the VPN remained connected after the firmware upgrade.

SOURCE:
Resolved Zendesk support case.

CONFIDENCE:
Confirmed Resolution
```

That is **far more useful to an AI** than feeding it the entire Zendesk conversation.

### Don't automatically publish initially

This is the one part I'd change from your proposal.

Zendesk's Help Center API absolutely allows software to create articles programmatically with `POST /api/v2/help_center/sections/{section_id}/articles`. It can create them as **drafts**, and publishing rights determine whether an integration can publish directly. ([Zendesk Developer Documentation](https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/?utm_source=chatgpt.com "Articles | Zendesk Developer Docs"))

I'd therefore start with:

```text
Solved ticket
↓
10 days
↓
AI validates
↓
AI creates condensed KB article
↓
SAVE AS DRAFT
↓
Engineer reviews
↓
Approve
↓
AI can now reference it
```

Once you've run that for perhaps a few hundred tickets and you're satisfied that the validator is rejecting bad resolutions, you could consider automatically publishing very high-confidence cases.

### It could also get smarter about duplicates

This is important because otherwise after a year you'll have:

```text
2865 VPN disconnecting
2865 VPN drops
SSL VPN drops 2865
Vigor 2865 VPN unstable
VPN keeps disconnecting
...
```

Instead, before creating an article, search the existing KB.

If a matching article already exists, the AI could produce:

```text
MATCH FOUND

Existing:
Vigor 2865 - SSL VPN Connectivity Issues

New information discovered:
Firmware 4.x resolves an additional disconnect scenario.

Recommended action:
UPDATE EXISTING ARTICLE
```

rather than creating another one.

### The architecture isn't particularly complicated

You could build the middle service in **Python, Node.js, Azure Functions, AWS Lambda**, etc.

Zendesk already provides webhooks for sending ticket activity to external systems, and the Help Center API provides article creation. ([Zendesk Developer Documentation](https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/?utm_source=chatgpt.com "Articles | Zendesk Developer Docs"))

So your custom service mainly needs to do:

```text
GET ticket
GET ticket comments
        ↓
Send sanitized conversation to AI
        ↓
Receive structured JSON
        ↓
Check confidence
        ↓
Search KB
        ↓
POST new draft article
or
propose update to existing article
```

The interesting part isn't really the Zendesk integration. **The important engineering work is the resolution-validation prompt/schema and preventing bad knowledge from entering the KB.**

Done properly, you'd effectively create a **self-improving DrayTek support knowledge loop**: engineers solve new or unusual problems, those verified solutions are converted into structured knowledge, and future automated responses can retrieve those solutions instead of being limited to the original static articles.

If you're already using an API-based AI for your Zendesk responses, this could likely sit alongside the system you already have rather than replacing it. Zendesk's webhook and Help Center APIs are specifically designed to support this sort of external integration. ([Zendesk Developer Documentation](https://developer.zendesk.com/documentation/webhooks/creating-and-monitoring-webhooks/?utm_source=chatgpt.com "Creating and monitoring webhooks | Zendesk Developer Docs"))
