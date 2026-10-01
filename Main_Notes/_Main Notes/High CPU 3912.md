---
note_type: response
topic: "Switching and hardware"
---

https://cmsdistribution5078.zendesk.com/agent/tickets/190406

It seems that Docker gets confused sometimes with the overlay2 filesystem it uses and the solution seems to be to rebuild the Docker environment on the 3912s.  The short version of doing this is:

1. Backup container applications (where possible)
2. Ssh to the Linux host
3. sudo service docker stop
4. sudo mv /var/lib/docker /var/lib/docker.old
5. sudo service docker start
6. Restore container applications
