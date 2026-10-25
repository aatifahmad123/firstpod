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
    slug: "recent-cybersecurity-threats-in-the-age-of-ai",
    title: "Recent cybersecurity threats in the age of AI",
    excerpt:
      "AI is making attacks faster, more convincing, and easier to scale. Here is how teams can prepare for the threats already arriving.",
    date: "Oct 25, 2026",
    readTime: "9 min read",
    accent: "orange",
    fontColor: "cream",
    content: [
      "The latest wave of cybersecurity threats is not defined by one breakthrough exploit. It is defined by acceleration: AI helps attackers research targets, write convincing messages, adapt malware, and iterate at a speed that traditional defenses were not designed to match.",
      "Phishing is becoming more personal. Public profiles, breached data, and company documentation give language models enough context to produce messages that sound like a trusted colleague. The familiar signs of poor grammar and strange wording are disappearing, so identity and payment requests need verification outside the message itself.",
      "Attackers are also using AI to explore exposed systems and generate variations of malicious code. This does not make every attack autonomous, but it lowers the cost of experimentation. Smaller groups can now attempt more campaigns, test more lures, and respond quickly when a defense blocks them.",
      "Defenders can use the same shift to their advantage, but only when AI is connected to strong fundamentals. Keep software and dependencies patched, reduce unnecessary access, require phishing-resistant multi-factor authentication, and log the actions that matter most. Automation should shorten the path from an unusual signal to a human decision.",
      "The most resilient teams treat AI security as an operating practice rather than a one-time project. Review where sensitive data flows, rehearse account-compromise scenarios, and teach people how to challenge urgent requests. The goal is not to predict every new tool an attacker may use. It is to make the organization difficult to surprise and quick to recover.",
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
