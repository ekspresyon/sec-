const EXAM_DATA = {
          "exam_1": {
            "title": "IT Security Concepts Exam",
            "questions": [
              {
                "id": 1,
                "text": "Management within your organization has defined a use case to support the confidentiality of data stored in a database. Which of the following solutions will BEST meet this need?",
                "choices": [
                  {"A": "Hashing"},
                  {"B": "Disk redundancies"},
                  {"C": "Encryption"},
                  {"D": "Patching"}
                ],
                "answer": "C",
                "explanation": "Encryption is the best choice to provide confidentiality of any type of information, including data stored in a database. Hashing supports integrity. Disk redundancies provide resilience and increase availability. Patching systems increases availability and reliability."
              },
              {
                "id": 2,
                "text": "Moe manages network devices in his store and maintains copies of the configuration files for all the managed routers and switches. On a weekly basis, he creates hashes for these files and compares them with hashes he created on the same files the previous week. Which of the following use cases is he MOST likely supporting?",
                "choices": [
                  {"A": "Supporting confidentiality"},
                  {"B": "Supporting integrity"},
                  {"C": "Supporting encryption"},
                  {"D": "Supporting availability"}
                ],
                "answer": "B",
                "explanation": "He is most likely supporting **integrity**. By verifying that the hashes are the same on the configuration files, he is verifying that the files have not changed. Confidentiality is enforced with encryption. Encryption is a method of enforcing confidentiality. Availability ensures systems are up and operational when needed."
              },
              {
                "id": 3,
                "text": "Which of the following is a cryptographic algorithm that will create a fixed-length output from a data file but cannot be used to re-create the original data file?",
                "choices": [
                  {"A": "MD5"},
                  {"B": "AES"},
                  {"C": "IDS"},
                  {"D": "SIEM"}
                ],
                "answer": "A",
                "explanation": "Message Digest 5 (**MD5**) is a hashing algorithm that creates a fixed-length, irreversible output. Hashing algorithms cannot re-create the original data file from just the hash. Advanced Encryption Standard (AES) is an encryption algorithm (reversible). An intrusion detection system (IDS) and Security Information and Event Management (SIEM) are not cryptographic algorithms."
              },
              {
                "id": 4,
                "text": "Your organization hosts an e-commerce web server selling digital products. The server randomly experiences a high volume of sales and usage, which causes spikes in resource usage. These spikes occasionally take the server down. Which of the following would be the BEST way to prevent these outages?",
                "choices": [
                  {"A": "Elasticity"},
                  {"B": "Scalability"},
                  {"C": "Normalization"},
                  {"D": "Stored procedures"}
                ],
                "answer": "A",
                "explanation": "**Elasticity** is the best choice because it allows the server to dynamically scale as needed in response to random, unpredictable changes in demand. Scalability is often done manually or involves planning ahead, which cannot respond to random spikes quickly enough. Normalization and Stored procedures relate to database management."
              },
              {
                "id": 5,
                "text": "An administrator recently installed an IDS to help reduce the impact of security incidents. Which of the following BEST identifies the control type of an IDS?",
                "choices": [
                  {"A": "Preventive"},
                  {"B": "Physical"},
                  {"C": "Deterrent"},
                  {"D": "Detective"}
                ],
                "answer": "D",
                "explanation": "An intrusion detection system (**IDS**) is a **detective control**. It detects malicious traffic after it enters a network. A preventive control, such as an Intrusion Prevention System (IPS), tries to stop it beforehand. An IDS is a technical control, not a physical one. Deterrent controls attempt to discourage a threat."
              },
              {
                "id": 6,
                "text": "Maggie works in the security section of the IT department. Her primary responsibilities are to monitor security logs, analyze trends reported by the SIEM, and validate alerts. Which of the following choices BEST identifies the primary security control she’s implementing?",
                "choices": [
                  {"A": "Compensating control"},
                  {"B": "Preventive control"},
                  {"C": "Detective control"},
                  {"D": "Corrective control"}
                ],
                "answer": "C",
                "explanation": "Monitoring security logs and analyzing alerts from a SIEM are **detective controls**. They aim to detect security incidents after they have already occurred. Preventive controls stop incidents, and corrective controls reverse the impact."
              },
              {
                "id": 7,
                "text": "A server in your network’s DMZ was recently attacked. The firewall logs show that the server was attacked from many different external IP addresses. It received an overwhelming number of requests from those addresses that caused the website hosted on the server to fail. What security goal was most directly affected by this attack?",
                "choices": [
                  {"A": "Integrity"},
                  {"B": "Non-repudiation"},
                  {"C": "Confidentiality"},
                  {"D": "Availability"}
                ],
                "answer": "D",
                "explanation": "This attack disrupted the ability of legitimate users to access the website (a denial-of-service/DDoS attack), which is an attack against **Availability**. Confidentiality prevents unauthorized access, and Integrity prevents unauthorized changes. Non-repudiation prevents someone from denying they were the source of a message."
              },
              {
                "id": 8,
                "text": "You are in the process of logging into a service hosted by your organization. You entered your username and now you are being asked to complete a fingerprint scan. What element of access control is taking place when you scan your fingerprint?",
                "choices": [
                  {"A": "Authentication"},
                  {"B": "Authorization"},
                  {"C": "Availability"},
                  {"D": "Identification"}
                ],
                "answer": "A",
                "explanation": "The three steps of access control are Identification (username), **Authentication** (proving identity via password, fingerprint, etc.), and Authorization (what access you get). Scanning the fingerprint is the authentication step."
              },
              {
                "id": 9,
                "text": "Which one of the following technologies is generally NOT considered a fault tolerance or redundancy control?",
                "choices": [
                  {"A": "UPS"},
                  {"B": "SIEM"},
                  {"C": "RAID"},
                  {"D": "NIC teaming"}
                ],
                "answer": "B",
                "explanation": "A Security Information and Event Management (**SIEM**) system monitors and manages security issues; it does not provide redundancy or fault tolerance. UPS (power), RAID (storage), and NIC teaming (network connectivity) are all examples of fault tolerance/redundancy controls."
              },
              {
                "id": 10,
                "text": "Kate’s manager asked her to organize a new process for conducting periodic vulnerability assessments of her organization’s infrastructure. She is working to create a standard operating procedure for this scanning. What category BEST describes the control is she creating?",
                "choices": [
                  {"A": "Technical"},
                  {"B": "Detective"},
                  {"C": "Physical"},
                  {"D": "Managerial"}
                ],
                "answer": "D",
                "explanation": "Since the focus is on creating a new **process** and a standard operating **procedure**, the control category is best described as **Managerial**. While vulnerability assessments often use technical scanners, the creation of the *procedure* itself is a management activity."
              },
              {
                "id": 11,
                "text": "Lisa is logging into a system and, before typing in her username and password, sees the message below: This is a U.S. Government computer system... Unauthorized access or use... may subject violators to criminal, civil, and/or administrative action. What type of control is Lisa experiencing?",
                "choices": [
                  {"A": "Detective"},
                  {"B": "Compensating"},
                  {"C": "Deterrent"},
                  {"D": "Corrective"}
                ],
                "answer": "C",
                "explanation": "The purpose of a warning banner is to make an intruder less likely to attempt an attack. This goal of discouraging a threat aligns with a **Deterrent control**. Detective controls identify attacks; corrective controls reverse the impact. Compensating controls are alternatives to primary controls."
              },
              {
                "id": 12,
                "text": "You are investigating an active security incident and you want to view the contents of network traffic that passed between two systems. What data source would BEST provide this information?",
                "choices": [
                  {"A": "Operating system log"},
                  {"B": "Application log"},
                  {"C": "Firewall log"},
                  {"D": "Packet capture"}
                ],
                "answer": "D",
                "explanation": "A **Packet capture** (PCAP), often taken with tools like Wireshark, is the best source because it captures the *content* of the network traffic. Logs (OS, Application, Firewall) typically only contain metadata about connections (like source/destination IPs, timestamps), not the full data payload."
              },
              {
                "id": 13,
                "text": "Moe is overwhelmed by the number of log records generated by the many different security systems in his organization and would like to use a technology that aggregates those records in a single location and correlates them. What technology would best meet his needs?",
                "choices": [
                  {"A": "Syslog"},
                  {"B": "SIEM"},
                  {"C": "IPS"},
                  {"D": "Firewall"}
                ],
                "answer": "B",
                "explanation": "A Security Information and Event Management (**SIEM**) solution is specifically designed to centralize, **aggregate**, and **correlate** log entries from multiple sources to identify security incidents. Syslog only handles aggregation (central collection) but not correlation."
              },
              {
                "id": 14,
                "text": "Maggie is reviewing log entries from many different systems and notices that the clocks on those systems are not synchronized, making it difficult to correlate the log entries. What protocol can she use to synchronize the system clocks?",
                "choices": [
                  {"A": "NTP"},
                  {"B": "FTP"},
                  {"C": "SFTP"},
                  {"D": "HTTPS"}
                ],
                "answer": "A",
                "explanation": "The Network Time Protocol (**NTP**) is used specifically to synchronize system clocks with a centralized time source, which is essential for accurate log correlation. The other options are used for file transfer (FTP/SFTP) or web traffic (HTTPS)."
              },
              {
                "id": 15,
                "text": "Which of the following describes the proper format of log entries for Linux systems?",
                "choices": [
                  {"A": "Event Viewer"},
                  {"B": "logger"},
                  {"C": "SIEM"},
                  {"D": "Syslog"}
                ],
                "answer": "D",
                "explanation": "The **Syslog** protocol (defined in RFC 5424) specifies the format of log entries and how they are transported on Linux/Unix systems. Event Viewer is a Windows utility. `logger` is a command to manually add entries. SIEM is an aggregation system."
              }
            ]
          }
        };