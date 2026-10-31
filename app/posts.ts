export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  accent: "orange" | "ink" | "stone" | "taupe" | "cream";
  fontColor: "cream" | "ink";
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "the-6-3-billion-binance-heist-how-hackers-pulled-off-one-of-cryptos-biggest-thefts",
    title: "The $6.3 billion Binance heist: How hackers pulled off one of crypto's biggest thefts",
    excerpt:
      "An inside look at the security breach, the technology exploited, where the stolen money went, and what it means for cryptocurrency security.",
    date: "Oct 31, 2026",
    readTime: "7 min read",
    accent: "orange",
    fontColor: "cream",
    content: [
      "On 29 October 2026, Binance, the world's largest cryptocurrency exchange, suffered a major security breach that resulted in approximately $6.36 billion in cryptocurrency being stolen. According to blockchain intelligence firm TRM Labs, the attackers moved funds across ten blockchain networks, with most of the theft occurring within approximately 20 minutes.",
      "For perspective, the infamous Bybit hack in February 2025 involved approximately $1.5 billion. The Binance incident is more than four times larger. However, this wasn't a conventional scam involving fake websites or stolen customer passwords. It appears to have been a sophisticated attack on the infrastructure responsible for authorizing cryptocurrency transactions.",
      "Cryptocurrency exchanges generally maintain two types of wallets: cold wallets kept offline or isolated from operational systems for long-term storage, and hot wallets connected to operational infrastructure used for everyday deposits and withdrawals. Hot wallets require private keys to authorize transactions, typically protected using specialized signing infrastructure.",
      "Initial investigations suggested that attackers compromised a laptop belonging to a Binance DevOps engineer and subsequently gained access to internal infrastructure. Binance later indicated that the attack involved multiple breach points. The most important part of the attack was reportedly the compromise of systems responsible for transaction authorization.",
      "Imagine a bank vault with an extremely secure lock. Instead of breaking the lock, an attacker compromises the control room that authorizes access to the vault. The attacker may never need to physically steal the key. A similar principle applies to cryptocurrency signing systems. If an attacker compromises a service authorized to request cryptographic signatures, they may be able to initiate unauthorized transactions without directly extracting the underlying private keys.",
      "One particularly interesting technical detail identified by TRM Labs involved Ethereum's EIP-7702 functionality, which allows externally owned accounts to delegate certain functionality to smart-contract code. Investigators reported that attackers abused this mechanism to turn a Binance hot wallet into an attacker-controlled sweeper that automatically transfers funds from one wallet to another. The attackers reportedly prepared 50 pre-signed authorizations in advance, suggesting considerable planning before the actual theft.",
      "Stealing cryptocurrency is only half the challenge. Converting it into usable money without getting caught is considerably harder. Blockchain transactions are publicly visible, allowing investigators to track stolen funds across wallets and networks. A significant portion of the stolen assets consisted of stablecoins such as USDT and USDC. Unlike Bitcoin and Ethereum, stablecoins issued by centralized companies have an important feature: their issuers can freeze tokens at specific addresses.",
      "Following the incident, companies including Tether, Circle and Ripple cooperated with investigators to restrict affected assets. Approximately $3 billion worth of assets were reportedly frozen or immobilized. The attackers also attempted to convert stablecoins into ETH. One reported transaction involved converting approximately $325 million in stablecoins into around $285 million worth of ETH. This demonstrates an important distinction in cryptocurrency: the value of an asset and the ability to control that asset are not necessarily the same thing.",
      "Blockchain intelligence firm TRM Labs attributed the incident to TraderTraitor, a hacking group associated with North Korea. Other investigations have also identified similarities with previous North Korean-linked cryptocurrency thefts. Their techniques have included compromising employee devices, social engineering, exploiting internal infrastructure, targeting transaction-signing systems, and moving stolen funds across multiple blockchain networks.",
      "Binance announced that it would absorb the financial impact rather than pass the losses to customers. It committed to using its Secure Asset Fund for Users (SAFU) and corporate treasury. The company also announced additional security checks and an updated Proof of Reserves report. These developments raise an important distinction: recovering stolen funds and compensating customers are two different things.",
      "The Binance breach highlights several important cybersecurity principles: protect transaction authorization, not just private keys; follow the principle of least privilege; introduce transaction-level safeguards for large withdrawals; monitor blockchain activity continuously; and secure internal infrastructure including employee laptops, cloud services, deployment pipelines and internal containers.",
      "The Binance incident reinforces one fundamental principle of cryptocurrency security: protecting the private key is only half the job. Protecting every system that has the authority to use that key is equally important.",
    ],
  },
  {
    slug: "shipping-software-without-losing-the-thread",
    title: "Shipping software without losing the thread",
    excerpt:
      "Good delivery is more than moving tickets. It is a system for keeping decisions, context, and quality connected as a product grows.",
    date: "Oct 21, 2026",
    readTime: "7 min read",
    accent: "ink",
    fontColor: "cream",
    content: [
      "Fast teams are not defined by how quickly they close a ticket. They are defined by how little important context gets lost between an idea and a working release.",
      "A small written decision record can prevent weeks of circular discussion. A clear definition of done can keep speed from turning into invisible maintenance work. These practices are lightweight, but they give a team a shared memory.",
      "The goal is not more process. It is less rework: fewer surprises in review, fewer handoffs without context, and fewer features that technically ship but fail to solve the original problem.",
    ],
  },
  {
    slug: "the-practical-architecture-of-ai-products",
    title: "The practical architecture of AI products",
    excerpt:
      "Reliable AI products need more than a model. They need clear boundaries, observable workflows, and a plan for when predictions are wrong.",
    date: "Oct 17, 2026",
    readTime: "8 min read",
    accent: "taupe",
    fontColor: "ink",
    content: [
      "The model is only one component of an AI product. The harder engineering work is deciding what the model is allowed to do, what information it can use, and how the system behaves when its answer is uncertain.",
      "Strong architectures separate retrieval, generation, validation, and action. Each boundary creates a place to measure quality and a place to stop an unsafe or unhelpful response before it reaches a user.",
      "Teams that treat observability as a first-class feature learn faster. They can see which inputs fail, which workflows drift, and where a human should remain in the loop.",
    ],
  },
  {
    slug: "designing-for-failure-in-distributed-systems",
    title: "Designing for failure in distributed systems",
    excerpt:
      "Networks fail, dependencies slow down, and queues fill up. Resilient systems make those conditions visible and survivable.",
    date: "Oct 12, 2026",
    readTime: "6 min read",
    accent: "stone",
    fontColor: "cream",
    content: [
      "Distributed systems do not fail because engineers forgot that failure exists. They fail when an unlikely condition has no safe path through the system.",
      "Timeouts, retries, backpressure, and graceful degradation turn a failure from a surprise into a designed state. The important work is choosing the limits and making them observable.",
      "Resilience is ultimately a product quality. When a dependency is unavailable, users should still understand what happened and what they can do next.",
    ],
  },
];
