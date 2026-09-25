<!-- filepath: /Users/L082549/Akram-Personal/javascript-dsa/src/ComputerNetworks/CN.md -->
# Computer Networks

## What is a Network?

A network is officially defined as a group or system of interconnected people, items, or entities.

The two main purposes of a network are:
- **Communication**
- **Sharing of resources**

## What is the Internet?

## Internet

A **public, global network** connecting millions of networks worldwide. Anyone with a connection can access it.

- **Owned/controlled by:** No single owner — decentralized, made up of countless interconnected networks
- **Access:** Open to anyone
- **Example:** Google, YouTube, any public website
- **Security:** Secured individually per-service (HTTPS, VPNs, etc.), since there's no central gatekeeper

The internet is essentially a network of computers, or a network of several computer networks.

## Intranet

A **private network** restricted to a single organization. Only authorized users (employees, internal systems) can access it.

- **Owned/controlled by:** One organization
- **Access:** Restricted — internal users only
- **Example:** A company's internal HR portal, internal wiki, or file-sharing system
- **Security:** Protected by firewalls, VPNs, internal authentication — kept walled off from outsiders



## The Relationship

An intranet usually runs on the **same underlying technology** as the internet (same TCP/IP protocols), but it's fenced off from public access using firewalls/gateways. Many intranets also connect *outward* to the internet — e.g., employees can browse the public web from office machines — but outsiders can't get *into* the intranet.

```
        INTERNET (public, global)
              │
        ┌─────┴─────┐
        │  Firewall │  ← gateway/boundary
        └─────┬─────┘
              │
        INTRANET (private, internal)
        │      │      │
     Employee Employee Employee
      PC 1     PC 2     PC 3
```

**Important:** Intranet and internet are **not layers** of the TCP/IP model — they're *types of networks* (who can access, who owns it). Both run on top of the exact same 5-layer stack (Application → Transport → Network → Data Link → Physical).

## Terminologies

1. **Protocol**: A set of rules that are essential in order to create an effective computer network.
   - Examples: HTTP, TCP, UDP, SMTP, FTP

2. **Packets**: Instead of sending data/messages of possibly trillions of bits all in one go, we break the information into smaller units called packets.
   - Analogy: A photon is the smallest unit of energy that can travel in a light wave.

3. **End Systems**:
   ```
   SYSTEM A <--> SYSTEM B
   ```
   Here, A and B are end systems — either the source or the destination of information — called end systems.

4. **Addressing**: The address of a computer inside a network, used to identify that computer in order to send or receive information. Usually identified by an IP address.

5. **Ports**: Endpoints of communication used by a process in a computer to receive data over a network. Generally, every application uses a 16-bit port number.

## Port Number Categories

Ports are 16-bit numbers (0–65535), split into three ranges by IANA:

### 1. Well-Known Ports (0 – 1023)
Reserved for standard, widely-used system/network services. Require admin/root privileges to bind on most OSes. Assigned by IANA.

| Port | Service |
|------|---------|
| 20/21 | FTP (data/control) |
| 22 | SSH |
| 23 | Telnet |
| 25 | SMTP |
| 53 | DNS |
| 80 | HTTP |
| 110 | POP3 |
| 143 | IMAP |
| 443 | HTTPS |

### 2. Registered Ports (1024 – 49151)
Assigned by IANA to specific applications/vendors upon request, but not as tightly controlled — any user process can normally bind to these without special privileges.

| Port | Service |
|------|---------|
| 1433 | Microsoft SQL Server |
| 3306 | MySQL |
| 3389 | RDP (Remote Desktop) |
| 5432 | PostgreSQL |
| 8080 | HTTP alternate (common for web apps/proxies) |
| 27017 | MongoDB |

### 3. Dynamic / Private Ports (49152 – 65535)
Also called **ephemeral ports**. Not assigned to any specific service — used temporarily by the OS for the client side of a connection, then released.

**Example:** When your browser connects to `google.com:443`, your machine picks a random port in this range (say, 51042) as the *source port* for that connection. Once the session ends, the port is freed for reuse.

### Quick Summary Table

| Range | Name | Assigned By | Needs Privilege? | Example |
|-------|------|-------------|-------------------|---------|
| 0–1023 | Well-known | IANA | Yes (usually) | 80 (HTTP), 443 (HTTPS) |
| 1024–49151 | Registered | IANA (loosely) | No | 3306 (MySQL), 8080 |
| 49152–65535 | Dynamic/Private | Not assigned | No | Random client-side ports |

## IANA (Internet Assigned Numbers Authority)

**IANA** is the organization responsible for globally coordinating some of the core technical "namespaces" that make the internet work — basically the authority that keeps track of unique numbers/names so there's no conflict between devices/networks worldwide.

### What IANA Manages

| Area | What it does | Example |
|------|---------------|---------|
| **Port Numbers** | Assigns/registers which port number maps to which protocol/service | Port 443 → HTTPS |
| **IP Addresses** | Allocates blocks of IPv4/IPv6 addresses to regional registries | Assigns address ranges to RIRs like APNIC, ARIN |
| **Domain Names (root zone)** | Manages the DNS root zone — top-level domains like `.com`, `.org`, `.in` | Delegates `.com` management to Verisign |
| **Protocol Parameters** | Maintains numbers used in internet protocols (e.g., TCP/IP parameters) | Assigns values used in packet headers |

### Who Runs It?
- IANA functions are operated by **ICANN** (Internet Corporation for Assigned Names and Numbers), a non-profit based in the US.
- It works closely with **IETF** (Internet Engineering Task Force), which defines the protocols, while IANA handles the actual number/name registry.

### Why It Matters
Without a central authority like IANA:
- Two different services might clash trying to use the same port number.
- Two organizations could accidentally claim the same IP address block, causing routing conflicts.
- Domain name delegation would have no consistent root of trust.

**In short:** IANA is like the "record keeper" of the internet's numbering and naming system, ensuring everything stays globally unique and consistent.

## Network Models

For a computer network to work efficiently, we have several "departments" — the collection of this hierarchy is called a **Model**.

Common models:
- **OSI Model** (Open Systems Interconnection)
- **TCP/IP Model** (Transmission Control Protocol / Internet Protocol)

### OSI Model

The OSI model has seven layers:

| Layer | Purpose |
|-------|---------|
| **Application** | The software layer the user interacts with |
| **Presentation** | Encrypts/formats the data |
| **Session** | Manages sessions between applications |
| **Transport** | Transports small chunks of data through the network *(most asked in interviews)* |
| **Network** | Handles routing — determines which route the data needs to travel |
| **Data Link** | Handles error detection |
| **Physical** | Defines the hardware configuration over which the network is established |

This is often referred to as the **network stack**.

### TCP/IP Model

Introduced in 1989. Note: the **TCP/IP Model** is not the same as the **TCP protocol**.

It has five layers:

1. Application Layer
2. Transport Layer
3. Network Layer
4. Data Link Layer
5. Physical Layer

#### Application Layer

Main jobs of the Application Layer:
- Reading data from the end user
- Providing useful applications to the users
- Writing data to the network in a format that complies with the protocol in use

## Client-Server Model vs P2P Model

These describe two different ways applications talk to each other over a network — they sit at the Application layer level, since they're about *how services and resources are shared*, not about how bits move.

### Client-Server Model
One or more **servers** hold and provide a resource or service. **Clients** send requests to the server and consume what it sends back. The server is the central authority — it does the heavy lifting (storage, processing, serving data).

**Example:** Your browser (client) requests a page from `google.com` (server). The server processes the request and sends back the webpage.

**Characteristics:**
- Centralized control → easier to secure, manage, and update.
- Server can become a bottleneck or single point of failure (if it goes down, all clients are affected).
- Scales by strengthening the server (more/bigger servers).

### Peer-to-Peer (P2P) Model
There's no dedicated server. Every device (**peer**) can act as *both* a client and a server at the same time — requesting resources from others while also providing resources itself.

**Example:** BitTorrent — when you download a file, you're also simultaneously uploading pieces of that file to other peers.

**Characteristics:**
- Decentralized → no single point of failure.
- Harder to secure and manage centrally (no central authority overseeing everything).
- Scales naturally — more peers joining generally means more available capacity, not less.

### Side-by-Side

| | Client-Server | P2P |
|---|---|---|
| **Control** | Centralized (server) | Decentralized (every peer) |
| **Roles** | Fixed — client only requests, server only serves | Flexible — each node does both |
| **Failure impact** | Server down = service down for everyone | No single point of failure |
| **Examples** | Gmail, YouTube, most websites | BitTorrent, blockchain networks |
| **Scalability** | Limited by server capacity | Improves as more peers join |

**Why it matters at the Application layer:** This choice shapes how application-layer protocols are designed and used. HTTP, for instance, was built around the client-server model (browser requests, web server responds). Other protocols, like those used in torrenting, are built to let every participant behave as both requester and provider — a fundamentally P2P design.


## Client-Server Model

```
        ┌─────────────┐
        │   SERVER    │
        │ (provides   │
        │  resource)  │
        └──────┬──────┘
               │
      ┌────────┼───────-─┐
      │        │         │
  request   request   request
      │        │         │
      ▼        ▼         ▼
┌─────────┐┌─────────┐┌─────────┐
│ Client A ││ Client B ││ Client C │
└─────────┘└─────────┘└─────────┘

All clients talk ONLY to the server.
Clients do NOT talk to each other.
```

---

## Peer-to-Peer (P2P) Model

```
┌─────────┐          ┌─────────┐
│ Peer A  │◄────────►│ Peer B  │
└────┬────┘          └────┬────┘
     │                    │
     │                    │
     │   ┌─────────┐      │
     └──►│ Peer C  │◄─────┘
         └────┬────┘
              │
              ▼
         ┌─────────┐
         │ Peer D  │
         └─────────┘

Every peer can talk directly to every other peer.
Each peer acts as BOTH client and server.
```

---

### Side-by-Side View

```
CLIENT-SERVER                    P2P

    [Server]                  [Peer A]───[Peer B]
    /   |   \                     │  \   /   │
  [C1] [C2] [C3]                  │   \ /    │
                                [Peer D]───[Peer C]

One central point.              Every node connects
Clients never connect            to (potentially) every
directly to each other.          other node.
```

### P2P and intranet is Same ?

No — those are two completely different, unrelated concepts. Don't mix them up.

## Why They're Different Categories

| | **Intranet vs Internet** | **Client-Server vs P2P** |
|---|---|---|
| **What it describes** | **Scope/ownership** — who owns the network and who's allowed in | **Architecture** — how devices on that network talk to each other |
| **The question it answers** | "Is this network private or public?" | "Is there a central server, or do all devices act as equals?" |
| **Category type** | Type of *network* | Type of *application/communication model* |

**Intranet** is about **access and ownership** (private, restricted to one org, vs public/global).

**P2P** is about **architecture** (no central server — every device is both client and server).

## They're Independent of Each Other

You can have any combination:

```
                    Intranet              Internet
                 (private network)    (public network)
                 ─────────────────    ─────────────────
Client-Server │  Company's internal │  Gmail, YouTube,
architecture  │  file server that   │  most websites
              │  employees connect  │  (public servers,
              │  to                 │  worldwide clients)
─────────────────────────────────────────────────────────
P2P           │  Employees in one   │  BitTorrent, some
architecture  │  office sharing     │  blockchain networks
              │  files directly     │  (peers scattered
              │  with each other    │  across the globe)
```

**So:**
- P2P *can happen* on an intranet (e.g., employees in an office directly sharing files peer-to-peer over the local network).
- P2P *can also happen* over the internet (e.g., BitTorrent, where peers across the world connect directly).

P2P is not "the same as" intranet — it's just one architecture that *could* run on top of either an intranet or the internet.

## HTTP

**HTTP** = **HyperText Transfer Protocol**

It's the application-layer protocol used to transfer data (mainly web pages) between a **client** (browser) and a **server**.

- **Port:** 80
- **How it works:** Client sends a *request* (e.g., "give me this webpage"), server sends back a *response* (the HTML, images, etc.)
- **Problem:** Data travels in **plain text** — anyone intercepting the traffic (on public Wi-Fi, for example) can read it, including passwords, form data, etc.

## HTTPS

**HTTPS** = **HyperText Transfer Protocol Secure**

Same thing as HTTP, but with an added **encryption layer** using **TLS/SSL** (Transport Layer Security / Secure Sockets Layer).

- **Port:** 443
- **How it works:** Before any HTTP data is exchanged, client and server perform a "handshake" to set up an encrypted tunnel. All HTTP requests/responses then travel through that encrypted tunnel.
- **Benefit:** Even if someone intercepts the traffic, it's unreadable without the encryption keys.

## Key Differences

| | HTTP | HTTPS |
|---|---|---|
| **Full form** | HyperText Transfer Protocol | HyperText Transfer Protocol **Secure** |
| **Port** | 80 | 443 |
| **Encryption** | None — plain text | Yes — via TLS/SSL |
| **Data safety** | Vulnerable to eavesdropping/tampering | Protected from eavesdropping/tampering |
| **URL prefix** | `http://` | `https://` |
| **Browser indicator** | Often shown as "Not Secure" | Padlock icon 🔒 |

## Where It Fits

Both HTTP and HTTPS operate at the **Application layer** of the TCP/IP model. HTTPS just adds a security sub-layer (TLS/SSL) that sits between the Application layer and the Transport layer, encrypting the HTTP data before it's handed down to TCP.

```
Application Layer:  HTTP  →  wrapped in TLS/SSL  →  HTTPS
Transport Layer:     TCP (port 80 for HTTP, port 443 for HTTPS)
```

**In short:** HTTPS is just HTTP + encryption. Almost every modern website uses HTTPS now — browsers even flag plain HTTP sites as "Not Secure."

## Characteristics of HTTP

1. **Stateless** — Each request is independent; the server doesn't remember previous requests from the same client (no built-in memory of past interactions). Cookies/sessions are used to work around this.
2. **Text-based protocol** — Requests and responses are human-readable plain text (headers, body).
3. **Client-Server model** — Follows a strict request-response pattern; client initiates, server responds.
4. **Connectionless (per request)** — Traditionally, each request opens a new connection (though HTTP/1.1+ supports persistent connections via `keep-alive`).
5. **Uses port 80** by default.
6. **No encryption** — Data travels in plain text, so it's vulnerable to eavesdropping, tampering, and man-in-the-middle attacks.
7. **Uses methods/verbs** to define actions: `GET`, `POST`, `PUT`, `DELETE`, `HEAD`, etc.
8. **Uses status codes** to indicate result: `200 OK`, `404 Not Found`, `500 Internal Server Error`, etc.
9. **Supports caching** — Responses can be cached by browsers/proxies to reduce repeated requests.
10. **Platform/language independent** — Any client or server implementing the protocol can communicate, regardless of underlying tech.

---

## Characteristics of HTTPS

1. **Everything HTTP has**, plus:
2. **Encrypted communication** — Uses **TLS/SSL** to encrypt data in transit, so intercepted traffic is unreadable.
3. **Uses port 443** by default.
4. **Authentication via certificates** — The server presents an **SSL/TLS certificate** (issued by a trusted Certificate Authority) to prove its identity, preventing impersonation.
5. **Data integrity** — Ensures data isn't altered/tampered with in transit (protected by cryptographic checks).
6. **Handshake process** — Before actual data transfer, client and server perform a **TLS handshake** to agree on encryption keys and algorithms.
7. **Protection against MITM attacks** — Encryption + certificate validation prevents attackers from intercepting or impersonating either party.
8. **SEO & trust benefits** — Browsers mark HTTPS sites as "Secure" (padlock icon); search engines like Google favor HTTPS sites in rankings.
9. **Slightly higher overhead** — The encryption/handshake process adds a small amount of latency/processing compared to plain HTTP (negligible with modern hardware).

---

### Quick Comparison Table

| Characteristic | HTTP | HTTPS |
|---|---|---|
| Security | ❌ Plain text | ✅ Encrypted (TLS/SSL) |
| Port | 80 | 443 |
| Data integrity | ❌ Not guaranteed | ✅ Guaranteed |
| Server authentication | ❌ None | ✅ Via certificates |
| Speed | Slightly faster (no encryption overhead) | Slightly slower (handshake + encryption) |
| Browser trust indicator | "Not Secure" warning | Padlock 🔒 |
| Statelessness | ✅ Yes | ✅ Yes (inherited from HTTP) | 


## Types of HTTP Connections

HTTP connections can be categorized based on **how long the underlying TCP connection stays open** between client and server.

### 1. Non-Persistent Connection (Connection: close)
- A **new TCP connection is opened for every single request**, and closed right after the response is received.
- Used by default in **HTTP/1.0**.
- **Downside:** Slow — TCP handshake overhead repeated for every request (extra round trips).

```
Request 1  → [Open TCP] → [Send/Receive] → [Close TCP]
Request 2  → [Open TCP] → [Send/Receive] → [Close TCP]
Request 3  → [Open TCP] → [Send/Receive] → [Close TCP]
```

### 2. Persistent Connection (Connection: keep-alive)
- The **same TCP connection is reused** for multiple requests/responses, instead of opening a new one each time.
- Default behavior in **HTTP/1.1** onward.
- **Benefit:** Faster — avoids repeated handshakes; reduces latency.

```
[Open TCP] → Request 1 → Response 1
           → Request 2 → Response 2
           → Request 3 → Response 3
[Close TCP after idle timeout]
```

### 3. Pipelined Connection
- Client sends **multiple requests without waiting** for each response before sending the next.
- Server must still respond **in order**.
- Part of HTTP/1.1, but rarely used in practice due to issues like **head-of-line blocking** (if one response is slow, all others behind it are delayed) — most browsers disabled it.

### 4. Multiplexed Connection (HTTP/2 and HTTP/3)
- Multiple requests/responses can be sent **simultaneously over a single connection**, and responses can arrive **out of order** — solving the head-of-line blocking problem of pipelining.
- **HTTP/2** — multiplexing over a single TCP connection.
- **HTTP/3** — uses **QUIC** (over UDP) instead of TCP, further reducing latency and solving TCP-level head-of-line blocking too.

---

## Summary Table

| Type | Connection Behavior | Used In | Key Trait |
|---|---|---|---|
| **Non-persistent** | New TCP connection per request | HTTP/1.0 | Simple but slow |
| **Persistent (keep-alive)** | One TCP connection, multiple sequential requests | HTTP/1.1+ | Faster, reused connection |
| **Pipelined** | Multiple requests sent without waiting, responses in order | HTTP/1.1 (rarely used) | Head-of-line blocking issue |
| **Multiplexed** | Multiple simultaneous requests/responses, any order | HTTP/2, HTTP/3 | Fastest, most efficient |

---

## Where It Fits

```
HTTP/1.0  →  Non-persistent (default)
HTTP/1.1  →  Persistent (keep-alive) + optional pipelining
HTTP/2    →  Multiplexed over single TCP connection
HTTP/3    →  Multiplexed over QUIC (UDP-based)
```

**In short:** The evolution of HTTP connection types has mainly been about **reducing the overhead of setting up new connections** and **avoiding delays caused by one slow request blocking others** — moving from one-connection-per-request → reused connections → fully parallel, non-blocking connections.

## Types of HTTP Connections — With Examples

### 1. Non-Persistent Connection (`Connection: close`)

A **new TCP connection** is opened for every single request and closed right after.

**Example:** A webpage has 3 images. Under non-persistent HTTP/1.0:
```
1. Open TCP → GET /index.html → Response → Close TCP
2. Open TCP → GET /image1.jpg → Response → Close TCP
3. Open TCP → GET /image2.jpg → Response → Close TCP
4. Open TCP → GET /image3.jpg → Response → Close TCP
```
Each image required its **own fresh TCP handshake** — 4 separate connections total for one page load. Very slow on high-latency networks (e.g., loading a page over a poor mobile connection where every handshake adds delay).

---

### 2. Persistent Connection (`Connection: keep-alive`)

**One TCP connection** stays open and is reused for multiple requests.

**Example:** Same webpage with 3 images, using HTTP/1.1 keep-alive:
```
Open TCP connection once
   → GET /index.html   → Response
   → GET /image1.jpg    → Response
   → GET /image2.jpg    → Response
   → GET /image3.jpg    → Response
Close TCP (after idle timeout, e.g., 5–60 seconds of no activity)
```
**Real-world case:** Opening a news website — your browser fetches the HTML, CSS, JS, and multiple images all over the *same* connection instead of opening/closing a new one for each file.

---

### 3. Pipelined Connection

Multiple requests are sent **back-to-back without waiting** for each response, but responses must come back **in the same order**.

**Example:**
```
Client sends:  GET /page.html
               GET /style.css     (sent immediately, doesn't wait for page.html's response)
               GET /script.js

Server must respond in order:
               Response for /page.html
               Response for /style.css
               Response for /script.js
```
**Problem case:** If `/style.css` takes 5 seconds to generate (e.g., a slow database-backed CSS generator), the response for `/script.js` — even though it's ready instantly — must **wait behind it** because responses can't be reordered. This "head-of-line blocking" is why most browsers (Chrome, Firefox) disabled pipelining by default.

---

### 4. Multiplexed Connection (HTTP/2 / HTTP/3)

Multiple requests and responses travel **simultaneously** over a single connection, and can complete **out of order**.

**Example (HTTP/2):**
```
Single TCP connection, all sent together as independent "streams":
   Stream 1: GET /page.html   → (still processing...)
   Stream 2: GET /style.css    → Response arrives FIRST (it was faster)
   Stream 3: GET /script.js     → Response arrives SECOND
   Stream 1: → Response arrives LAST (even though requested first)
```
**Real-world case:** Loading a modern website (e.g., a Google search results page) — dozens of resources (images, fonts, scripts, API calls) are fetched over **one single connection** in parallel, and whichever finishes first gets delivered first, without blocking the others.

**HTTP/3 example:** Same multiplexing idea, but built on **QUIC (UDP)** instead of TCP — so even if one stream experiences packet loss, it doesn't stall the other streams (which can still happen at the TCP level in HTTP/2).

---

## Summary Table with Examples

| Type | Example Scenario |
|---|---|
| **Non-persistent** | Old HTTP/1.0 site: new TCP connection for HTML, then another for each image |
| **Persistent (keep-alive)** | Modern site loading HTML + CSS + JS + images all over one reused connection |
| **Pipelined** | Sending 3 requests back-to-back, but a slow CSS response delays a faster JS response behind it |
| **Multiplexed (HTTP/2/3)** | Search results page fetching dozens of resources in parallel over one connection, responses returned as soon as ready — regardless of request order |


## TCP (Transmission Control Protocol)

**TCP** is a **connection-oriented, reliable transport-layer protocol** used to send data between two devices over a network, guaranteeing that data arrives **complete, in order, and error-free**.

It operates at the **Transport Layer** of the TCP/IP model — sitting between the Application layer (HTTP, FTP, SMTP, etc.) and the Network layer (IP).

---

## Core Characteristics of TCP

### 1. Connection-Oriented
A connection must be **established** before any data is sent, using the **three-way handshake**:
```
Client → SYN         → Server
Client ← SYN-ACK      ← Server
Client → ACK          → Server
```
Only after this handshake does actual data transfer begin.

### 2. Reliable Delivery
- Every segment sent gets **acknowledged (ACK)** by the receiver.
- If an ACK isn't received within a timeout, TCP **retransmits** the lost segment.
- Guarantees no data is silently lost.

### 3. Ordered Delivery
- Each byte of data is assigned a **sequence number**.
- If segments arrive out of order (common since IP routing doesn't guarantee order), TCP **reassembles them in the correct order** before handing data to the application.

### 4. Error Checking
- Each segment carries a **checksum**.
- If a segment is corrupted in transit, it's detected and discarded/re-requested.

### 5. Flow Control
- Uses a **sliding window mechanism** so the sender doesn't overwhelm a slower receiver.
- Receiver advertises how much data it can currently handle (**window size**).

### 6. Congestion Control
- TCP monitors network conditions and **slows down** if it detects packet loss/congestion (e.g., via algorithms like **slow start**, **congestion avoidance**).
- Prevents overwhelming the network itself, not just the receiver.

### 7. Full-Duplex Communication
- Data can flow **both directions simultaneously** — client can send while also receiving from the server.

### 8. Connection Termination
- Ends gracefully via a **four-way handshake** (FIN, ACK, FIN, ACK) so both sides confirm no more data is coming.

---

## TCP Segment Structure (Simplified)

```
┌─────────────────────────────────────────────┐
│ Source Port        │ Destination Port         │
├─────────────────────────────────────────────┤
│ Sequence Number                                │
├─────────────────────────────────────────────┤
│ Acknowledgment Number                          │
├─────────────────────────────────────────────┤
│ Flags (SYN, ACK, FIN, RST...) │ Window Size    │
├─────────────────────────────────────────────┤
│ Checksum            │ Urgent Pointer            │
├─────────────────────────────────────────────┤
│               DATA (payload)                   │
└─────────────────────────────────────────────┘
```

---

## Why TCP Matters

Protocols like **HTTP, FTP, SMTP, SSH** all rely on TCP because they need **guaranteed, ordered, error-free delivery** — you can't have half a webpage or a corrupted file transfer.

Compare this to **UDP** (User Datagram Protocol), which is the opposite: fast but unreliable — no handshake, no guaranteed delivery, no ordering. Used where speed matters more than perfection (e.g., video streaming, online gaming, DNS queries).

---

## TCP vs UDP Quick Comparison

| | **TCP** | **UDP** |
|---|---|---|
| **Connection** | Connection-oriented (handshake) | Connectionless |
| **Reliability** | Guaranteed delivery, retransmits lost data | No guarantee — packets can be lost |
| **Ordering** | Ensures correct order | No ordering guarantee |
| **Speed** | Slower (overhead of guarantees) | Faster (no overhead) |
| **Use case** | Web browsing, email, file transfer | Video streaming, gaming, DNS, VoIP |

---

**In short:** TCP is the protocol responsible for making sure data gets from point A to point B **reliably, completely, and in the right order** — acting as the dependable "delivery guarantee" layer underneath application protocols like HTTP.


## UDP (User Datagram Protocol)

**UDP** is a **connectionless, lightweight transport-layer protocol** used to send data between devices **without any guarantee** of delivery, ordering, or error-checking beyond a basic checksum. It trades reliability for **speed and low overhead**.

It operates at the same **Transport Layer** as TCP — but takes the opposite design philosophy: "just send it, don't worry about confirmations."

---

## Core Characteristics of UDP

### 1. Connectionless
- **No handshake** before sending data — no SYN/SYN-ACK/ACK setup like TCP.
- Sender just fires off packets (called **datagrams**) directly.

```
Client → Datagram → Server   (no setup, no confirmation required)
```

### 2. No Reliability Guarantee
- No acknowledgments (ACKs).
- If a packet is lost in transit, UDP **does not retransmit it** — it's simply gone.
- The application itself must handle any retry logic if needed.

### 3. No Ordering Guarantee
- Packets can arrive **out of order**, and UDP does nothing to reorder them.
- If ordering matters, the application layer has to sort it out.

### 4. Minimal Error Checking
- Carries a basic **checksum** to detect corruption.
- If corrupted, the packet is simply **dropped** — no retransmission request.

### 5. No Flow or Congestion Control
- Sender doesn't slow down based on receiver capacity or network congestion.
- This is part of why UDP is fast, but it also means UDP can contribute to network congestion if misused.

### 6. Lightweight Header
- Much smaller header than TCP → less overhead → faster processing.

---

## UDP Packet Structure (Simplified)

```
┌─────────────────────────────────────────────┐
│ Source Port        │ Destination Port         │
├─────────────────────────────────────────────┤
│ Length              │ Checksum                   │
├─────────────────────────────────────────────┤
│               DATA (payload)                   │
└─────────────────────────────────────────────┘
```

Notice how much simpler this is compared to TCP's segment header (no sequence numbers, no ACK numbers, no window size, no flags).

---

## Why Use UDP If It's "Unreliable"?

Because for many applications, **speed matters more than perfect delivery** — a few lost packets are acceptable if it means lower latency.

| Use Case | Why UDP Fits |
|---|---|
| **Video/audio streaming** | A dropped frame/packet is barely noticeable; waiting for retransmission would cause lag/buffering |
| **Online gaming** | Real-time position updates need to be fast; an old, retransmitted packet is useless anyway |
| **VoIP calls** | Small audio glitches are fine; delay from retransmission ruins the call experience |
| **DNS queries** | Small, quick request/response — if it fails, the client just retries the whole query |
| **DHCP** | Simple broadcast-based IP assignment — doesn't need TCP's overhead |

---

## TCP vs UDP — Side by Side

| | **TCP** | **UDP** |
|---|---|---|
| **Connection** | Connection-oriented (3-way handshake) | Connectionless |
| **Reliability** | Guaranteed delivery, retransmits lost data | No guarantee |
| **Ordering** | Ensures correct order | No ordering |
| **Speed** | Slower (overhead from guarantees) | Faster (minimal overhead) |
| **Header size** | Larger (20+ bytes) | Smaller (8 bytes) |
| **Flow/congestion control** | Yes | No |
| **Use case** | Web browsing, email, file transfer, SSH | Streaming, gaming, VoIP, DNS |

---

**In short:** UDP is the "fire and forget" transport protocol — it sends data as fast as possible without setup, confirmation, or retransmission. It's ideal when **speed and low latency matter more than perfect reliability** — the opposite trade-off from TCP.


## Complete Flow: Typing `google.com` in Browser → Page Loads

---

### 1. You Type & Hit Enter
Browser checks if what you typed is a valid URL or a search query. If it's a URL without protocol, browser assumes `https://` by default (modern browsers auto-upgrade to HTTPS).

---

### 2. Browser Cache Check
Before doing anything on the network, browser checks:
- **Browser cache** — has this page been visited recently? Is there a cached response with a still-valid expiry?
- **DNS cache** — does the browser already know Google's IP from a previous lookup?

If everything is cached and still valid → browser may skip straight to rendering. Usually, though, DNS needs re-checking.

---

### 3. DNS Resolution (Domain Name → IP Address)
The browser needs Google's **IP address** since computers communicate via IPs, not domain names. It checks, in order:

```
1. Browser DNS cache
2. OS-level DNS cache
3. Router/local network cache
4. ISP's DNS resolver (recursive resolver)
```

If not cached anywhere, the **recursive DNS resolver** (usually your ISP's) performs a full lookup:

```
Resolver → Root DNS Server        ("who handles .com?")
Resolver → TLD DNS Server (.com)   ("who handles google.com?")
Resolver → Authoritative DNS Server for google.com  ("what's the IP?")
```

The authoritative server returns the IP (e.g., `142.250.194.46`). This result gets cached at multiple levels (resolver, OS, browser) for future speed.

---

### 4. ARP Resolution (Local Network Only)
Before your device can send anything out, it needs the **MAC address** of the next hop (usually your router/gateway) — IP alone isn't enough at the Data Link layer.

- Device checks its **ARP cache** for the gateway's MAC address.
- If missing, it broadcasts an **ARP request** ("Who has this IP? Tell me your MAC") on the local network.
- Gateway replies with its MAC address.

---

### 5. TCP Connection Establishment (Three-Way Handshake)
Now the browser knows Google's IP. It opens a TCP connection on **port 443** (HTTPS):

```
Client → SYN         → Server
Client ← SYN-ACK      ← Server
Client → ACK          → Server
```

This confirms both sides are ready to reliably exchange data.

---

### 6. TLS Handshake (Encryption Setup — since it's HTTPS)
Before any actual HTTP data is sent, a **TLS handshake** sets up encryption:

```
1. Client Hello    → (supported TLS versions, cipher suites, random number)
2. Server Hello    ← (chosen cipher suite, server's certificate, random number)
3. Certificate verification → browser checks Google's SSL certificate against trusted Certificate Authorities (CAs)
4. Key exchange     → both sides derive a shared session key (e.g., via Diffie-Hellman)
5. Finished          → both sides switch to encrypted communication
```

From this point on, everything exchanged is **encrypted**.

---

### 7. HTTP Request Sent
Now the browser sends an actual HTTP request, encrypted inside the TLS tunnel:

```
GET / HTTP/2
Host: www.google.com
User-Agent: Mozilla/5.0 ...
Accept: text/html,application/xhtml+xml...
Cookie: (any existing cookies for google.com)
```

---

### 8. Server-Side Processing
Google's servers (likely behind a **load balancer**, since Google handles massive traffic) receive the request:

- Load balancer routes the request to an available backend server.
- Server may check caches (CDN edge cache, application cache) before doing fresh processing.
- Backend generates the response — HTML for the homepage, plus references to CSS, JS, images.

---

### 9. HTTP Response Sent Back
```
HTTP/2 200 OK
Content-Type: text/html; charset=UTF-8
Set-Cookie: ...
Content-Length: ...

<html> ... </html>
```

This travels back through the same encrypted TLS tunnel, over the same TCP/QUIC connection.

---

### 10. Browser Parses HTML
Browser starts parsing the HTML top to bottom, building the **DOM (Document Object Model)**.

Whenever it encounters references to other resources — CSS files, JS files, images, fonts — it fires off **additional requests** for each:
- With HTTP/2 or HTTP/3, these are **multiplexed** over the same connection (no need to open new ones per resource).
- Browser may also open connections to other domains (e.g., CDNs, analytics, ad servers), each requiring their own DNS lookup + TCP + TLS handshake.

---

### 11. CSS & JS Processing
- **CSSOM** (CSS Object Model) is built from stylesheets.
- JavaScript is downloaded and executed — this can modify the DOM/CSSOM dynamically.
- Browser combines DOM + CSSOM into a **Render Tree**.

---

### 12. Layout & Paint
- **Layout (Reflow):** Browser calculates exact position/size of every element on the page.
- **Paint:** Browser draws pixels onto the screen — text, colors, images, borders.
- **Composite:** Layers are combined together (especially important with animations/3D transforms) into the final visible frame.

---

### 13. Page Interactive
Once the critical rendering path completes:
- Page becomes visible and interactive.
- Any remaining JS (e.g., analytics, lazy-loaded scripts) continues executing in the background.
- Events like `DOMContentLoaded` and `load` fire, which JS code may hook into.

---

## Full Flow Summary Diagram

```
User types google.com
        │
        ▼
Browser/OS Cache Check (DNS + page cache)
        │
        ▼
DNS Resolution (domain → IP)
   Browser cache → OS cache → Router → ISP resolver
   → Root → TLD (.com) → Authoritative server
        │
        ▼
ARP Resolution (IP → MAC, local network only)
        │
        ▼
TCP 3-Way Handshake (SYN, SYN-ACK, ACK) — port 443
        │
        ▼
TLS Handshake (certificate check, key exchange, encryption setup)
        │
        ▼
HTTP Request sent (encrypted) — GET /
        │
        ▼
Server-side processing (load balancer → backend → cache/DB)
        │
        ▼
HTTP Response sent back (encrypted) — HTML + headers
        │
        ▼
Browser parses HTML → builds DOM
   → fetches CSS/JS/images (multiplexed requests)
        │
        ▼
CSSOM built → Render Tree built
        │
        ▼
Layout (Reflow) → Paint → Composite
        │
        ▼
Page rendered & interactive
```

---

### A Few Extra Things Often Missed
- **HSTS (HTTP Strict Transport Security):** Many browsers keep a preload list forcing `https://` for known sites like Google, even before any DNS lookup — skipping a potential unencrypted `http://` redirect step entirely.
- **HTTP/3 (QUIC):** Google's servers largely use HTTP/3, meaning the "TCP handshake" and "TLS handshake" steps above are often replaced/merged into a **single combined QUIC handshake** over UDP — faster than the traditional TCP+TLS sequence.
- **CDN/Anycast routing:** Google's IP for `google.com` isn't one fixed server — DNS may return an IP that routes (via **Anycast**) to the nearest data center to you, reducing latency.
- **Connection reuse:** If you'd visited Google recently, many of these steps (DNS, TCP, TLS) might already be cached/open and get skipped entirely.


## When Does a TCP Connection Close?

A TCP connection closes when **either side decides it has no more data to send** and initiates a graceful termination — or when something goes wrong and it's forcibly reset.

There are a few distinct scenarios:

---

## 1. Graceful Closure — Four-Way Handshake

This is the normal, clean way TCP connections end. Either side can initiate it.

```
Client                          Server
  │──────── FIN ──────────────────►│   "I'm done sending data"
  │◄─────── ACK ────────────────────│   "Got it, acknowledged"
  │                                  │
  │◄─────── FIN ─────────────────────│   "I'm done too"
  │──────── ACK ──────────────────►│   "Got it, acknowledged"
  │                                  │
[Connection Closed]          [Connection Closed]
```

**Steps:**
1. **FIN** — One side (say, client) sends a FIN packet, signaling "I have no more data to send."
2. **ACK** — Other side acknowledges the FIN.
3. **FIN** — The other side (server), once it's also done sending, sends its own FIN.
4. **ACK** — First side acknowledges that FIN.

After this, both sides release their connection resources. This is called a **four-way handshake** (though steps 2 and 3 can sometimes combine into one packet, making it look like three steps).

---

## 2. TIME_WAIT State
After sending the final ACK, the side that closes first (usually the client) enters a **TIME_WAIT** state — it waits for a short period (commonly 2 × Maximum Segment Lifetime, ~60 seconds typically) before fully releasing the connection.

**Why?** To make sure any delayed/duplicate packets from the old connection don't get confused with a new connection using the same port numbers.

---

## 3. Idle Timeout (Keep-Alive Expiry)
If a **persistent connection** (`keep-alive`) sits idle with no requests for a set period, either the client or server (or a proxy/load balancer in between) may close it automatically:
```
Connection idle for X seconds (e.g., 5–60s, configurable)
        │
        ▼
Server sends FIN → connection closes
```
This is common with HTTP/1.1 keep-alive — the server doesn't hold connections open forever.

---

## 4. Abrupt Closure — RST (Reset)
If something goes wrong — an error, a crash, an invalid packet, or a forceful termination — TCP can close **immediately** using a **RST (Reset)** packet instead of the graceful FIN sequence.

```
Client ──────── RST ──────────────► Server
[Connection immediately terminated — no handshake]
```

**When RST happens:**
- Application crashes or force-closes the socket.
- Data sent to a port with no listening application.
- One side detects the other's state is invalid/corrupted.

This is **not graceful** — any unacknowledged data in transit is lost.

---

## Summary: When TCP Connections Close

| Trigger | Mechanism | Graceful? |
|---|---|---|
| Application finishes sending data | 4-way FIN/ACK handshake | ✅ Yes |
| Connection sits idle too long | Server/proxy sends FIN after timeout | ✅ Yes |
| Browser tab closed / app quits | FIN sent by OS on behalf of app | ✅ Yes |
| Error, crash, invalid state | RST (Reset) sent | ❌ No — abrupt |
| Network failure (no response at all) | Connection eventually times out (no FIN/RST ever received) | ❌ No — just abandoned |

---

## In the Context of Your Google.com Example
After the page and all its resources (HTML, CSS, JS, images) finish loading:
- If it's a **persistent connection**, it stays open for a short idle period in case you navigate to another page on the same site (avoiding a fresh TCP+TLS handshake).
- If you close the tab or navigate away, or the idle timeout expires, the browser or server sends a **FIN**, and the four-way handshake closes the connection.
- With **HTTP/2/3**, since many requests are multiplexed over **one connection**, that single connection stays open even longer — closing only once truly idle or the tab is closed.