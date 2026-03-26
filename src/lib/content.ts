// ============================================================
// CONTENT — All page copy lives here. Never hardcode in components.
// ============================================================

export const siteConfig = {
  name: "Peak Performance Unleashed",
  shortName: "PPU",
  tagline: "Unlock Your Peak Performance",
  description:
    "Science-backed coaching rooted in flow, neuroscience, and behavioral psychology. Helping high-achievers unlock effortless performance.",
  contact: {
    email: "j.shreve@peakperformanceunleashed.org",
    phone: "+1 (408) 207-5414",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/peak-performance-unleashed",
    email: `mailto:j.shreve@peakperformanceunleashed.org`,
  },
};

// ── Navigation ───────────────────────────────────────────────────────────────

export const nav = {
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Executive Coaching", href: "/services/executive-coaching" },
        { label: "High-Flow Coaching", href: "/services/high-flow-coaching" },
        { label: "Team Development", href: "/services/team-development" },
        { label: "Workshop Design & Facilitation", href: "/services/workshops" },
        { label: "Assessments & Tooling", href: "/services#tools" },
      ],
    },
    { label: "Workshops", href: "/workshops" },
    { label: "Assessments", href: "/assessments" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Book a Free Call", href: "/contact" },
};

// ── Home page ────────────────────────────────────────────────────────────────

export const homePage = {
  hero: {
    eyebrow: "Certified High-Flow Peak Performance Coach",
    headline: "Unlock the Version\nYou Always Sensed Was Possible.",
    subheadline:
      "Science-backed coaching rooted in flow, neuroscience, and behavioral psychology — helping high-achievers unlock effortless performance.",
    primaryCta: { label: "Book a Free Call", href: "/contact" },
    secondaryCta: { label: "Explore the Approach", href: "/about" },
    tagline: "Performance without burnout.",
  },

  philosophy: {
    eyebrow: "The Philosophy",
    headline: "Where deep focus, clarity, and innovation thrive.",
    body: "Peak performance becomes effortless when we strip away the noise, heal what's been holding us back, and reconnect to our deepest sense of purpose. This isn't about doing more — it's about becoming more intentional.",
    pullQuote: "Sustainable performance isn't about doing more — it's about becoming more intentional.",
  },

  arc: {
    eyebrow: "The High-Flow Performance Arc",
    headline: "A proven path from friction to flow.",
    intro: "Five interconnected stages — each building on the last — to take you from overwhelm to sustainable excellence.",
    stages: [
      {
        number: "01",
        label: "Foundations",
        title: "Stabilize the System",
        description: "Build psychological safety, clarify goals, identify friction, and begin nervous-system practices.",
        outcome: "Calm clarity",
        color: "clay",
      },
      {
        number: "02",
        label: "Alignment",
        title: "Clarify Inner Architecture",
        description: "Values → Identity → Purpose. Uncover strengths and shadows. Remove energy drains.",
        outcome: "Internal congruence",
        color: "gold",
      },
      {
        number: "03",
        label: "Optimization",
        title: "Build Your Flow Routines",
        description: "Deep work structure, flow conditions, habit systems, and high-performance behaviors.",
        outcome: "Predictable performance",
        color: "teal",
      },
      {
        number: "04",
        label: "Expansion",
        title: "Leadership & Influence",
        description: "Communication, leadership presence, decision-making, and emotional intelligence.",
        outcome: "Expanded capability",
        color: "blue",
      },
      {
        number: "05",
        label: "Integration",
        title: "Sustain Without Burnout",
        description: "Recovery rhythms, long-term flow strategy, and guardrails against overwhelm.",
        outcome: "Sustainable excellence",
        color: "clay",
      },
    ],
  },

  services: {
    eyebrow: "How I Can Help",
    headline: "Coaching solutions built around you.",
    body: "Every engagement is tailored. No templates, no generic programs — just focused work on what will move the needle for you specifically.",
    items: [
      {
        slug: "high-flow-coaching",
        title: "High-Flow Coaching",
        subtitle: "1:1 · Team · Group",
        description:
          "Science-backed coaching to help you tap into peak performance states where focus, creativity, and productivity dramatically increase.",
        href: "/services/high-flow-coaching",
      },
      {
        slug: "executive-coaching",
        title: "Executive & Leadership Coaching",
        subtitle: "Senior Leaders · Directors · Executives",
        description:
          "Elevate leadership presence, decision-making, and influence. A blend of flow science, neuroscience, and 30 years of leadership development expertise.",
        href: "/services/executive-coaching",
      },
      {
        slug: "team-development",
        title: "Team Development & Facilitation",
        subtitle: "Teams · Organizations",
        description:
          "Workshop experiences that improve team communication, collaboration, psychological safety, and problem-solving using flow principles.",
        href: "/services/team-development",
      },
      {
        slug: "assessments",
        title: "Assessments & Debriefs",
        subtitle: "Hogan · EQ-i 2.0 · LCP",
        description:
          "Deep-dive assessment experiences that help you understand your strengths, values, blind spots, and leadership impact.",
        href: "/services/assessments",
      },
      {
        slug: "keynotes",
        title: "Keynotes & Corporate Programs",
        subtitle: "Organizations · Leadership Teams",
        description:
          "Custom speaking and facilitation for organizations looking to elevate culture, performance, and leadership capability.",
        href: "/services/keynotes",
      },
    ],
  },

  testimonials: {
    eyebrow: "Client Voices",
    headline: "Real results. Real people.",
    items: [
      {
        quote:
          "Jason has an uncanny ability to help you cut through noise and get to the root of what's holding you back. His blend of flow science and leadership development helped me shift from reactive firefighting to strategic clarity. I'm operating at a level I didn't think was possible without burning out.",
        name: "VP of Operations",
        role: "Environmental Consulting Firm",
        initial: "V",
      },
      {
        quote:
          "Before working with Jason, I was constantly overwhelmed and exhausted. Within weeks, he helped me redesign how I work, focus, and lead. I now get more done in four hours than I used to in twelve, and I actually feel energized. This coaching changed my life.",
        name: "Entrepreneur & Team Lead",
        role: "",
        initial: "E",
      },
      {
        quote:
          "What sets Jason apart is his presence. He sees you, the real you, and creates a space where growth feels both safe and inevitable. As a trauma survivor and executive, I've worked with many coaches. Jason is in a league of his own.",
        name: "Director of Strategy",
        role: "Tech Company",
        initial: "D",
      },
      {
        quote:
          "Our team left Jason's workshop feeling more connected, aligned, and understood than we ever have. He combines neuroscience, humor, and humanity in a way that made learning easy and transformational.",
        name: "HR Business Partner",
        role: "Healthcare Services",
        initial: "H",
      },
      {
        quote:
          "Jason's assessment debrief completely reframed how I understand my strengths and blind spots. He translated complex info into practical, actionable insight, and did it with empathy and clarity.",
        name: "Senior Manager",
        role: "Financial Services",
        initial: "S",
      },
    ],
  },

  credentials: {
    eyebrow: "Certifications & Credentials",
    headline: "Grounded in validated science.",
    items: [
      { label: "Certified High-Flow Coach", org: "Flow Research Collective", badge: null },
      { label: "Hogan Assessment Practitioner", org: "Hogan Assessments", badge: "/pictures/Badges-pics/Hogan.png" },
      { label: "Leadership Circle 360", org: "The Leadership Circle", badge: "/pictures/Badges-pics/Leadership-circle.png" },
      { label: "EQ-i 2.0 Certified", org: "MHS Assessments", badge: "/pictures/Badges-pics/EQ-i-2.0.png" },
      { label: "EQ 360 Certified", org: "MHS Assessments", badge: "/pictures/Badges-pics/EQ-360.png" },
      { label: "Crucial Learning Certified", org: "Crucial Learning", badge: "/pictures/Badges-pics/crucial-learning.png" },
      { label: "DDI FCPMT Certified", org: "DDI", badge: "/pictures/Badges-pics/DDI.png" },
    ],
  },

  cta: {
    headline: "Let's unlock the version of you you've been quietly building for years.",
    body: "If you're ready to explore what's possible, I'm ready to walk with you. Start with a complimentary 50-minute conversation.",
    primary: { label: "Book a Free Call", href: "/contact" },
    secondary: { label: "Learn More", href: "/about" },
  },
};

// ── About page ───────────────────────────────────────────────────────────────

export const aboutPage = {
  hero: {
    eyebrow: "About Jason Shreve",
    headline: "Coaching rooted in science — and in story.",
    subheadline:
      "30 years. Three pillars. One mission: to help people feel seen, supported, and capable of extraordinary things.",
  },

  bio: {
    headline: "Who I Am",
    paragraphs: [
      "I'm a Certified High-Flow, Peak Performance Coach with 30 years of experience in leadership development, organizational effectiveness, and executive coaching. My work blends neuroscience, flow science, and practical leadership execution to help high-achievers unlock the version of themselves they always sensed was possible.",
      "My coaching is grounded in a simple philosophy: peak performance becomes effortless when we strip away the noise, heal what's been holding us back, and reconnect to our deepest sense of purpose.",
      "My values — integrity, courage, compassion, curiosity, and growth — shape every interaction, whether I'm working with an executive team, a first-time manager, or someone rebuilding their life after adversity.",
    ],
    stats: [
      { value: "30+", label: "Years of Experience" },
      { value: "5+", label: "Validated Assessment Tools" },
      { value: "100%", label: "Free Initial Session" },
    ],
  },

  story: {
    eyebrow: "My Story",
    headline: "The heart of this work comes from my own.",
    paragraphs: [
      "I grew up navigating the long-term impacts of childhood trauma — something that shaped me, but never defined me. Through years of healing, personal development, and learning how to create high-flow states, I rebuilt my confidence, reclaimed my voice, and committed myself to helping others do the same.",
      "I know what it feels like to carry invisible weight. And I know what it feels like to finally be free of it. Part of my passion and goal is to help others release that invisible weight sooner in their lives.",
      "That's why much of my coaching is especially powerful for trauma survivors, mission-driven leaders, and high-achievers who feel weighed down by expectations, burnout, or an inner critic that won't let them rest.",
    ],
    pullQuote: "High performance is easy when your inner world isn't working against you.",
  },

  why: {
    eyebrow: "My Why",
    quote:
      "To help people feel seen, supported, and capable of extraordinary things — not by becoming someone different, but by becoming more fully themselves.",
  },

  philosophy: {
    eyebrow: "Coaching Philosophy",
    headline: "Science-backed. Human-centered. Performance with purpose.",
    intro:
      "My coaching sits at the intersection of flow science, neuroscience, leadership development, and trauma-aware human transformation. At its core: when we remove friction from the mind and the nervous system, people naturally rise into the highest expression of their potential.",
    pillars: [
      {
        number: "01",
        title: "Flow Science as the Engine",
        description:
          "Flow states are not accidental — they are trainable. When clients learn to access flow consistently: productivity skyrockets, creativity expands, stress drops, and work feels meaningful again.",
      },
      {
        number: "02",
        title: "Neuroscience as the Roadmap",
        description:
          "The brain is the operating system for every outcome. Coaching uses attentional control, dopamine management, prefrontal cortex optimization, and nervous-system regulation to build high-performance neural pathways.",
      },
      {
        number: "03",
        title: "Leadership Development as the Container",
        description:
          "High performance without leadership maturity creates imbalance. 30 years in L&OD weaves in emotional intelligence, influence, decision-making, trust-building, and values-driven execution.",
      },
      {
        number: "04",
        title: "Trauma-Awareness as Foundation",
        description:
          "Because I've lived through and healed from trauma, my coaching integrates safety, presence, compassion, and shame-sensitive communication. Empowerment over pathology — always.",
      },
    ],
  },

  values: {
    eyebrow: "Core Values",
    headline: "What guides every interaction.",
    items: [
      { title: "Presence", description: "Being here, fully. Listening beneath the surface. Creating safety." },
      { title: "Courage", description: "Facing the hard truths with compassion and honesty." },
      { title: "Integrity", description: "Doing what's right, even when unseen." },
      { title: "Healing", description: "Honoring the whole human — mind, body, story, and nervous system." },
      { title: "Clarity", description: "Cutting through chaos to see what's essential." },
      { title: "Growth", description: "Relentless personal and professional evolution." },
      { title: "Compassion + Accountability", description: "Kindness with a backbone. Empathy with expectation." },
    ],
  },

  credentials: [
    { label: "Certified High-Flow Coach", org: "Flow Research Collective", badge: null },
    { label: "Hogan Assessment Practitioner", org: "Hogan Assessments", badge: "/pictures/Badges-pics/Hogan.png" },
    { label: "Leadership Circle 360", org: "The Leadership Circle", badge: "/pictures/Badges-pics/Leadership-circle.png" },
    { label: "EQ-i 2.0 Certified", org: "MHS Assessments", badge: "/pictures/Badges-pics/EQ-i-2.0.png" },
    { label: "EQ 360 Certified", org: "MHS Assessments", badge: "/pictures/Badges-pics/EQ-360.png" },
    { label: "Crucial Learning Certified", org: "Crucial Learning", badge: "/pictures/Badges-pics/crucial-learning.png" },
    { label: "DDI FCPMT Certified", org: "DDI", badge: "/pictures/Badges-pics/DDI.png" },
  ],

  poem: {
    eyebrow: "A Reflection",
    headline: "For a New Beginning",
    author: "John O'Donohue",
    stanzas: [
      [
        "In out-of-the-way places of the heart,",
        "Where your thoughts never think to wander,",
        "This beginning has been quietly forming,",
        "Waiting until you were ready to emerge.",
      ],
      [
        "For a long time it has watched you desire,",
        "Feeling the emptiness growing inside you,",
        "Noticing how you will yourself on,",
        "Still unable to leave what you had outgrown.",
      ],
      [
        "Then the delight, when your courage kindled,",
        "And out you stepped onto new ground,",
        "Your eyes young again with energy and dream,",
        "A path of plentitude opening before you.",
      ],
      [
        "Awaken your spirit to adventure;",
        "Hold nothing back, learn to find ease in risk;",
        "Soon you will home in a new rhythm,",
        "For your soul senses the world that awaits you.",
      ],
    ],
    reflection:
      "John O'Donohue reminds us that change rarely arrives with fanfare. It gathers quietly, in the overlooked corners of the heart, long before we feel ready to name it. What we often experience as restlessness or longing is not failure — it's information. A signal that something within us has already begun to shift.",
  },

  cta: {
    headline: "You don't need to feel 'ready.' You just need to show up.",
    body: "If you're ready to explore what's possible, I'm ready to walk with you.",
    primary: { label: "Book a Free Call", href: "/contact" },
    secondary: { label: "View Services", href: "/services" },
  },
};

// ── Services ─────────────────────────────────────────────────────────────────

export const servicesPage = {
  hero: {
    eyebrow: "Services",
    headline: "High-Flow Coaching to elevate leadership, productivity, and human potential.",
    subheadline: "Every engagement is customized. No templates. No generic programs. Just focused, science-backed work that moves the needle.",
  },

  items: [
    {
      slug: "executive-coaching",
      title: "Executive Coaching",
      subtitle: "Senior Leaders · High-Potential Executives",
      quote: "Jason helped me quiet the noise and lead from clarity. His guidance to greater self-awareness and ability to hold both challenge and compassion helped create a shift that's changed how I lead and how I live.",
      quoteAuthor: "Michael — Senior Executive, Top 50 Financial Services Firm",
      overview: "This isn't about adding more to your plate—it's about upgrading how you hold the plate. My Executive Coaching engagements are built for seasoned leaders and high-potential executives who are ready to unlock greater influence, clarity, and alignment. Through a blend of high-flow performance strategies and scientifically validated assessments, we develop a level of self-mastery that sharpens every decision, interaction, and outcome.",
      features: [
        {
          title: "Neuroscience-Backed Flow Strategies",
          description: "We pinpoint how to harness peak cognitive and emotional states—so you make clearer decisions, regulate pressure in real-time, and access deep focus when it matters most. You'll stop operating from overload and start leading from presence.",
        },
        {
          title: "Leadership Assessments That Drive Awareness",
          description: "As a certified practitioner of the Hogan Assessment and the Leadership Circle 360 Profile, I bring insights that illuminate both your strengths and the reactive patterns that may be limiting your leadership. This is not about judgment—it's about leverage.",
        },
        {
          title: "Tailored Growth Tracks",
          description: "Each engagement is customized to your goals—whether that's executive presence, strategic influence, team culture design, or transitioning into a larger leadership role. You'll leave every session with practical tools, mindset shifts, and clear momentum.",
        },
        {
          title: "Confidential Partnership, Trusted Space",
          description: "This work is high-trust by design. I serve as a sounding board, strategic partner, and accountability mirror—so you can reflect deeply, act boldly, and lead authentically.",
        },
      ],
      whoFor: [
        "Seasoned leaders ready to unlock greater influence",
        "High-potential executives stepping into expanded roles",
        "Senior leaders navigating high-complexity environments",
        "Leaders seeking alignment between how they lead and how they live",
      ],
      includes: [
        "Validated Hogan & Leadership Circle 360 assessments",
        "Personalized High-Flow performance strategy",
        "Executive presence and decision-making frameworks",
        "Real-time pressure regulation techniques",
        "Confidential 1:1 sessions with ongoing accountability",
      ],
      cta: { label: "Book a Free Call", href: "/contact" },
    },
    {
      slug: "high-flow-coaching",
      title: "One-on-One, High-Flow Coaching",
      subtitle: "1:1 · High-Performing Professionals · Leaders",
      quote: "Working with Jason didn't just help me perform better—it helped me understand myself in a whole new way. The assessments gave me insight, but the coaching gave me traction. I've never felt more clear, confident, and aligned.",
      quoteAuthor: "Cindy — Senior Leader, Technology Industry",
      overview: "This is more than coaching—it's a catalyst for transformation. My 1:1 coaching engagements are designed for high-performing professionals and leaders who are ready to elevate their impact without burning out. Using a neuroscience-backed High-Flow Coaching framework, we'll work together to harness your most energized, focused, and capable self—so performance becomes not only sustainable, but deeply fulfilling.",
      features: [
        {
          title: "Precision Insights",
          description: "As a certified practitioner in both the Hogan Assessment and the Leadership Circle 360 Profile, I bring industry-leading tools that reveal your blind spots, core drivers, and leadership effectiveness with remarkable clarity. These insights are not just diagnostic—they're directional.",
        },
        {
          title: "Flow Activation",
          description: "Together, we'll identify your personal pathways to flow, aligning your cognitive strengths, emotional intelligence, and values. Whether you're navigating a career pivot, team dynamic, or your next big leap, this coaching equips you with tools to access your best state—on demand.",
        },
        {
          title: "Strategic Accountability",
          description: "With tailored action plans and real-time feedback loops, we'll track measurable progress toward your goals while strengthening your capacity for self-leadership. This is where self-awareness meets bold execution.",
        },
      ],
      tagline: "Lead from within. Perform beyond expectations.",
      whoFor: [
        "High-performing professionals ready to elevate their impact",
        "Leaders navigating career pivots or role transitions",
        "Anyone feeling the gap between their potential and their results",
        "Executives seeking more clarity, confidence, and alignment",
      ],
      includes: [
        "Hogan & Leadership Circle 360 assessments",
        "Personalized High-Flow activation roadmap",
        "Tailored action plans with real-time feedback loops",
        "Emotional intelligence and values alignment",
        "Ongoing 1:1 coaching with accountability structures",
      ],
      cta: { label: "Book a Free Call", href: "/contact" },
    },
    {
      slug: "team-development",
      title: "Team Development",
      subtitle: "Teams · Organizations · Group Coaching",
      quote: "Our team thought we were 'pretty good'—until we did this work. We uncovered blind spots, clarified our shared purpose, and now communicate with clarity and confidence. It's transformed how we lead and deliver together.",
      quoteAuthor: "Nancy — Director of Operations, Healthcare",
      overview: "High-performing teams don't happen by chance—they're created through intentional design, guided insight, and shared flow. This offering is crafted for leaders and teams ready to deepen trust, unlock collective intelligence, and elevate results. Using a neuroscience-informed High-Flow Team Coaching framework, we uncover what drives and derails team dynamics—then co-create the conditions where collaboration thrives.",
      features: [
        {
          title: "Team Coaching: The Team as a Living System",
          description: "We explore how your team thinks, feels, and functions under pressure. With real-time observation and structured reflection, we coach the 'team in the room' through its own dynamics—helping it regulate tension, build trust, and move from conflict to co-creation.",
        },
        {
          title: "Group Coaching: Cross-Functional Growth",
          description: "Bringing together individuals from across functions or leadership levels into shared developmental spaces. Group coaching amplifies learning through peer insight and cross-pollination—building leadership capacity across the organization.",
        },
        {
          title: "Grounded, Behavioral Insight at the Core",
          description: "Utilizing the Hogan Assessment and Leadership Circle 360 Profile, we surface each team member's motivations, values, and default behaviors under stress—turning friction into fuel for trust.",
        },
        {
          title: "Flow-Infused Team Labs & Breakout Sessions",
          description: "Through facilitated breakout sessions, teams explore psychological safety, cognitive diversity under pressure, co-defined rituals, and collective regulation—moving from busy coordination to energized co-creation.",
        },
        {
          title: "Sustainable Growth & Reintegration",
          description: "Post-session integration includes tailored playbooks, feedback loops, and implementation sprints that keep flow alive long after the session ends. Sessions can be virtual or in-person.",
        },
      ],
      tagline: "Elevate connection. Accelerate collaboration. Ignite collective flow.",
      topics: [
        "Psychological safety & courageous communication",
        "Navigating cognitive diversity under pressure",
        "Co-defining team rituals that drive momentum",
        "Collective regulation: managing tension without losing traction",
      ],
      whoFor: [
        "Teams ready to move from good to exceptional",
        "Leaders designing high-performance team culture",
        "Organizations navigating rapid change or growth",
        "Cross-functional groups wanting stronger alignment",
      ],
      includes: [
        "Team and group coaching (virtual or in-person)",
        "Hogan & Leadership Circle 360 team-level assessments",
        "Flow-infused breakout labs and facilitated experiences",
        "Pre/post assessments and live coaching moments",
        "Team charter, playbooks, and implementation sprints",
      ],
      cta: { label: "Book a Discovery Call", href: "/contact" },
    },
    {
      slug: "workshops",
      title: "Workshop Design & Facilitation",
      subtitle: "Organizations · Leadership Teams",
      quote: "Jason's facilitation is the rare mix of disarming and transformative. Our group left aligned, activated, and asking for more. Easily the most valuable time we've spent together this year.",
      quoteAuthor: "Anthony — Talent Development Director, BioTech Firm",
      overview: "Workshops shouldn't just transfer knowledge—they should ignite momentum. I design and facilitate custom workshops that blend science-backed frameworks, experiential learning, and reflective pause points that spark lasting transformation. From half-day intensives to multi-session learning journeys, each experience is built around your objectives—and designed to create change that sticks.",
      features: [
        {
          title: "Custom-Crafted Design Grounded in Flow Science",
          description: "Workshops are built from the ground up to align with your specific objectives—whether it's leadership alignment, emotional intelligence, courageous communication, or performance in high-pressure environments.",
        },
        {
          title: "Dynamic, High-Safety Facilitation",
          description: "I create psychologically safe, high-engagement environments where people don't just learn—they show up differently. Each session is infused with storytelling, experiential exercises, and deep-dive group processing that inspire ownership and clarity.",
        },
        {
          title: "Tools That Reveal, Language That Sticks",
          description: "Through interactive activities and evidence-based models—including the Hogan Assessment, Leadership Circle Profile, and High-Flow Coaching Framework—participants walk away with actionable language and a deeper connection to purpose and performance.",
        },
        {
          title: "From One-Offs to Learning Journeys",
          description: "Whether it's a half-day intensive or a series of development labs, I work with organizations to co-create workshops that anchor into culture and generate sustained energy—not just event-day inspiration.",
        },
      ],
      tagline: "Design the space. Facilitate the shift. Anchor the change.",
      topics: [
        "Leading from Flow: Shifting from Burnout to Brilliance",
        "Unlocking Trust and Psychological Safety in Hybrid Teams",
        "Feedback That Builds, Not Breaks",
        "Resilience Under Pressure: Emotional Regulation for Leaders",
        "From Reactive to Creative: Using the Leadership Circle Lens",
        "Driving, Embracing, and Coaching for Change",
        "Achieving More Together",
        "Communicating with Impact",
        "Connecting Through Conversations",
      ],
      whoFor: [
        "Organizations seeking culture elevation and leadership alignment",
        "Leadership teams wanting experiential, high-impact learning",
        "HR teams designing scalable development programs",
        "Conference and event organizers seeking a memorable experience",
      ],
      includes: [
        "Custom workshop design aligned to your objectives",
        "Half-day to multi-session program facilitation",
        "Experiential learning activities and breakout exercises",
        "Evidence-based tools and frameworks",
        "Post-session resources and integration support",
      ],
      cta: { label: "Book a Discovery Call", href: "/contact" },
    },
  ],

  tools: [
    {
      slug: "hogan",
      title: "Hogan Assessment",
      subtitle: "Personality · Derailers · Core Values",
      overview: "The Hogan Assessment is a suite of science-based personality assessments designed to predict workplace performance, uncover leadership potential, and support personal and professional development. It goes beyond surface-level traits to reveal how people show up at work, how they behave under stress, and what truly motivates them.",
      components: [
        { name: "HPI — Hogan Personality Inventory", description: "Measures day-to-day personality traits that influence how someone works, communicates, and leads." },
        { name: "HDS — Hogan Development Survey", description: "Identifies potential derailers—behaviors that may emerge under pressure and quietly undermine effectiveness." },
        { name: "MVPI — Motives, Values, Preferences Inventory", description: "Uncovers core values, goals, and the cultural conditions where a person truly thrives." },
      ],
      why: "Self-awareness is a superpower. The Hogan Assessment gives leaders and organizations a precise, science-backed mirror—revealing strengths, blind spots, and leadership style with clarity that drives real growth.",
    },
    {
      slug: "leadership-circle",
      title: "Leadership Circle Profile 360",
      subtitle: "Creative Competencies · Reactive Tendencies · Global Benchmarks",
      overview: "The Leadership Circle Profile (LCP) is a powerful 360° assessment that goes beyond surface-level feedback to reveal the why behind a leader's behaviors. It uniquely integrates competency-based feedback with insights into the underlying beliefs that drive leadership effectiveness—or limit it.",
      components: [
        { name: "Creative Competencies", description: "Strengths like authenticity, systems thinking, and achieving results—traits linked to high-performing, visionary leadership." },
        { name: "Reactive Tendencies", description: "Self-protective patterns like control, compliance, or distancing that emerge under stress and can undermine effectiveness." },
        { name: "Global Benchmarking", description: "Results benchmarked against a database of 4 million+ leaders worldwide for meaningful context and clarity." },
      ],
      why: "Unlike traditional 360s, the LCP reveals not just how a leader is showing up—but why. It's coaching-ready by design and a proven launchpad for sustainable leadership transformation.",
    },
    {
      slug: "eq",
      title: "EQ-i 2.0 & EQ 360",
      subtitle: "Emotional Intelligence · Self-Perception · 360° Feedback",
      overview: "The EQ-i 2.0 is one of the most scientifically validated tools for measuring emotional intelligence—assessing 15 EQ competencies across Self-Perception, Self-Expression, Interpersonal, Decision Making, and Stress Management. Unlike fixed personality traits, EQ is learnable—making this a powerful catalyst for growth.",
      components: [
        { name: "EQ-i 2.0", description: "A detailed snapshot of emotional strengths and development areas. Ideal for leadership development, resilience building, and improving communication and performance." },
        { name: "EQ 360", description: "Combines self-assessment with feedback from colleagues, direct reports, and supervisors—revealing where your self-view aligns or diverges from how others experience you." },
      ],
      why: "Emotional intelligence is the differentiator between technically capable leaders and truly transformational ones. These tools deliver actionable strategies for building the interpersonal effectiveness that drives culture and results.",
    },
    {
      slug: "ddi",
      title: "DDI Leadership Development",
      subtitle: "Emerging Leaders · Teams · Senior Executives",
      overview: "As a certified facilitator of DDI's award-winning content, you gain access to 60+ research-backed courses designed to build critical leadership skills across every level of the pipeline. Each course is flexible—in-person, virtual, or blended—and customized to your work environment and culture.",
      components: [
        { name: "For Individuals & Emerging Leaders", description: "Your Leadership Journey · Leading Self · Valuing Differences · High-Impact Feedback & Listening · Navigating Beyond Conflict" },
        { name: "For Teams", description: "Leading Teams: Achieve More Together · Resolving Workplace Conflict · Driving Culture with Intent · Building Trust in Your Work Environment" },
        { name: "For Mid-Level & Senior Leaders", description: "Amplifying Executive Presence · Anticipate Change with Agility · Elevating Business Judgment · Engaging and Retaining Talent · Executing Strategy at the Front Line" },
      ],
      why: "DDI's curriculum is backed by decades of research and trusted by top organizations worldwide. Courses are designed to shift mindsets and habits—not just share information—delivering measurable change in how people lead, collaborate, and perform.",
    },
    {
      slug: "crucial-conversations",
      title: "Crucial Conversations",
      subtitle: "High-Stakes Dialogue · Psychological Safety · Trust",
      overview: "Crucial Conversations is a globally recognized framework for navigating high-stakes, emotionally charged, opinion-diverse conversations with clarity, confidence, and respect. Based on the bestselling methodology, it equips people with skills to foster psychological safety, mutual understanding, and decisive action in the moments that define relationships and culture.",
      components: [
        { name: "Mastering Dialogue Under Pressure", description: "Speak up with honesty and empathy—even when it's uncomfortable. Create conditions where truth can be shared without defensiveness." },
        { name: "Creating Psychological Safety", description: "Build environments where others feel genuinely heard, respected, and willing to engage with candor and openness." },
        { name: "Turning Conflict into Collaboration", description: "Surface shared purpose, transform tension into co-creation, and make better decisions faster through increased openness and trust." },
        { name: "Building Accountability Cultures", description: "Develop communication habits that sustain lasting accountability and transparency across teams and organizations." },
      ],
      why: "The conversations most people avoid are often the ones that define outcomes. These facilitated sessions are highly interactive—incorporating real-world scenarios and reflection exercises that help participants internalize and immediately apply the tools.",
    },
  ],

  toolsSection: {
    eyebrow: "Assessments & Tooling",
    headline: "The science behind the transformation.",
    subheadline: "Every tool I use is research-backed, practitioner-certified, and chosen because it creates real, lasting insight—not just data.",
  },
};

// ── Workshops page ────────────────────────────────────────────────────────────

export const workshopsPage = {
  hero: {
    eyebrow: "Workshops & Facilitation",
    headline: "Transformative experiences that stick.",
    subheadline:
      "Dynamic, experiential workshops that accelerate growth, deepen insight, and build the skills essential for high-impact leadership and collaboration.",
  },

  topics: {
    headline: "Core Workshop Topics",
    items: [
      {
        title: "Executive Leader Development",
        description: "Cultivating strategic vision, influence, and leadership agility for senior leaders.",
      },
      {
        title: "Emotional Intelligence",
        description: "Strengthening self-awareness, resilience, and interpersonal effectiveness.",
      },
      {
        title: "Effective Feedback",
        description: "Mastering constructive communication for leadership growth.",
      },
      {
        title: "Crucial Conversations",
        description: "Navigating high-stakes discussions with confidence and clarity.",
      },
      {
        title: "Strategic Leadership Development",
        description: "Building high-impact leadership capabilities for long-term success.",
      },
      {
        title: "Flow Science for Teams",
        description: "Applying flow principles to boost creativity, focus, and team performance.",
      },
      {
        title: "Neuroleadership",
        description: "Understanding the brain's role in leadership decisions, stress, and influence.",
      },
      {
        title: "Burnout-Proof Performance",
        description: "Sustainable high performance without sacrificing wellbeing or longevity.",
      },
    ],
  },

  otherTopics: [
    "Resilience & Stress Management",
    "Change Leadership",
    "Inclusive Leadership & DEI",
    "Conflict Resolution",
    "Coaching Skills for Leaders",
    "Decision-Making Under Uncertainty",
    "Team Dynamics & Psychological Safety",
    "Visioning & Strategic Planning",
    "Time Mastery & Energy Management",
    "Innovation & Creative Problem Solving",
    "Leading Hybrid & Remote Teams",
    "Trust Building & Influence",
  ],

  differentiators: [
    {
      title: "Customized Design",
      description: "Each session is tailored to your organization's culture, challenges, and goals.",
    },
    {
      title: "Experiential Learning",
      description: "Interactive formats that engage participants and drive real behavior change.",
    },
    {
      title: "Assessment Integration",
      description: "Leverage psychometric tools to personalize learning and deepen insight.",
    },
    {
      title: "High-Flow Principles",
      description: "Infuse workshops with flow science to enhance engagement, creativity, and performance.",
    },
  ],

  process: [
    {
      number: "01",
      title: "Discovery & Design",
      description: "We co-create the workshop experience based on your needs and desired outcomes.",
    },
    {
      number: "02",
      title: "Facilitation & Engagement",
      description: "Immersive sessions blending insight, practice, and reflection.",
    },
    {
      number: "03",
      title: "Follow-Up & Impact",
      description: "Post-workshop support ensures learning is applied and sustained.",
    },
  ],

  cta: {
    headline: "Ready to bring this to your team?",
    body: "Let's design something that actually moves the needle.",
    primary: { label: "Get in Touch", href: "/contact" },
  },
};

// ── Assessments page ─────────────────────────────────────────────────────────

export const assessmentsPage = {
  hero: {
    eyebrow: "Assessments & Debriefs",
    headline: "See yourself clearly. Lead more powerfully.",
    subheadline:
      "Validated psychometric tools, expertly debriefed — translating complex data into practical, actionable self-awareness.",
  },

  intro:
    "Self-awareness is the foundation of every breakthrough. My assessment offerings use the most respected tools in leadership development, paired with a deeply human debrief experience that brings the data to life.",

  tools: [
    {
      name: "Hogan Assessments",
      variants: ["HPI (Bright Side)", "HDS (Dark Side)", "MVPI (Values)"],
      description:
        "The gold standard for leadership assessment. Hogan measures personality, potential derailers, and core motivators — giving you a complete picture of how you show up under pressure and what drives your decisions.",
      bestFor: "Leadership development, succession planning, executive selection",
    },
    {
      name: "EQ-i 2.0 & EQ 360",
      variants: ["EQ-i 2.0", "EQ 360 (multi-rater)"],
      description:
        "Emotional intelligence is the single greatest predictor of leadership effectiveness. The EQ-i 2.0 measures 15 competencies across five domains, revealing how your emotional skills impact performance, relationships, and resilience.",
      bestFor: "EI development, interpersonal effectiveness, stress management",
    },
    {
      name: "Leadership Circle Profile",
      variants: ["LCP 360"],
      description:
        "A comprehensive 360° assessment that measures both creative leadership competencies and reactive tendencies — helping leaders understand how their inner beliefs and assumptions drive their external behavior.",
      bestFor: "Senior leader development, culture change, leadership effectiveness",
    },
  ],

  process: [
    { number: "01", title: "Selection", description: "We identify the right tool(s) for your goals and context." },
    { number: "02", title: "Assessment", description: "You complete the assessment online — typically 30–60 minutes." },
    { number: "03", title: "Debrief Session", description: "We review your results together in a focused, empathetic conversation." },
    { number: "04", title: "Action Planning", description: "We co-create a development plan that turns insights into action." },
  ],

  cta: {
    headline: "Ready to illuminate your blind spots?",
    body: "Start with a conversation about which assessment is right for your goals.",
    primary: { label: "Book a Free Call", href: "/contact" },
  },
};

// ── Blog types ────────────────────────────────────────────────────────────────

export type BlogNode =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "blockquote"; text: string; attribution?: string };

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  heroQuote: string;
  inspired?: string;
  body: BlogNode[];
}

// ── Blog page ─────────────────────────────────────────────────────────────────

export const blogPage = {
  hero: {
    eyebrow: "The High-Flow Blog",
    headline: "Insights on flow, leadership, and human performance.",
    subheadline:
      "Practical thinking at the intersection of neuroscience, leadership, and personal transformation.",
  },

  posts: [
    {
      slug: "becoming-trusted-learning-advisor",
      category: "Leadership",
      title: "Becoming a Trusted Learning Advisor",
      excerpt:
        "L&D must evolve from order takers to strategic advisors. Here's what that shift looks like in practice — and why it changes everything.",
      date: "2025-07-01",
      readTime: "8 min read",
      image: "/pictures/exec presenter.webp",
      heroQuote:
        "Helpful isn't the same as impactful. And responsiveness is not the same as strategic partnership. The future of L&OD requires a different identity: Trusted Learning Advisor.",
      inspired: "Inspired by the book \"The Trusted Learning Advisor\" by Keith Keating.",
      body: [
        { type: "p", text: "We're at a turning point in Learning & Organizational Development. For decades, L&OD professionals were rewarded for responsiveness:" },
        { type: "ul", items: [
          '"Can you build a training for this?"',
          '"Can you run a workshop on that?"',
          '"We need a course! How fast can you deliver it?"',
        ]},
        { type: "p", text: "We said yes. We delivered. We were helpful. But helpful isn't the same as impactful. And responsiveness is not the same as strategic partnership. The future of L&OD requires a different identity: Trusted Learning Advisor. This shift changes everything!" },
        { type: "h2", text: "The Current State vs. The Ideal Future State" },
        { type: "p", text: "Before diving into the mindset shift, pause and ask yourself: How are you currently perceived in your organization — as an order taker or a strategic advisor? And more importantly: Is that perception helping or limiting your impact?" },
        { type: "h3", text: "Current State: The Order Taker Reality" },
        { type: "p", text: "Most L&D teams today still operate in a reactive mode:" },
        { type: "ul", items: [
          "Training is requested, not diagnosed",
          "Content is produced, not outcomes",
          "L&D is brought in late, not early",
          "Success is measured by attendance, not capability",
          "Stakeholders see L&D as a service provider, not a strategic partner",
        ]},
        { type: "p", text: "This is how L&D becomes a cost center." },
        { type: "h3", text: "Ideal Future State: The Trusted Learning Advisor" },
        { type: "p", text: "Trusted Learning Advisors operate differently:" },
        { type: "ul", items: [
          "They diagnose before prescribing",
          "They challenge assumptions respectfully",
          "They focus on performance, not content",
          "They speak the language of the business",
          "They co-create solutions, not just deliver them",
          "They build credibility through insight, not compliance",
        ]},
        { type: "p", text: "This is how L&D becomes a value creator." },
        { type: "h2", text: "The Mindset Shift L&OD Needs Now" },
        { type: "p", text: "Keith Keating's work highlights a truth many of us have felt intuitively: L&D must evolve from order takers to strategic advisors. Here's what that shift looks like in practice." },
        { type: "h3", text: "1. Diagnose Before Prescribing" },
        { type: "p", text: "Instead of jumping into solution mode, Trusted Learning Advisors ask:" },
        { type: "ul", items: [
          "What's the actual performance gap?",
          "What's causing it?",
          "Is training even the right lever?",
          "What would success look like behaviorally?",
        ]},
        { type: "h3", text: "2. Challenge Assumptions (With Empathy)" },
        { type: "p", text: "Many requests for training are actually process issues, role clarity issues, leadership issues, incentive issues, or workload issues. Trusted advisors don't say \"no\" — they say: \"Let's make sure we're solving the right problem.\"" },
        { type: "h3", text: "3. Focus on Capability, Not Content" },
        { type: "p", text: "Content is everywhere. Capability is rare. Trusted advisors shift the conversation from \"What course do you want?\" to \"What capability must we build to achieve the business outcome?\" This is where skills intelligence, talent strategy, and performance consulting intersect." },
        { type: "h3", text: "4. Build Credibility Through Insight" },
        { type: "p", text: "Stakeholders trust advisors who help them think more clearly. This requires business acumen, systems thinking, emotional intelligence, curiosity, and the courage to ask the hard questions. As Daniel Goleman and Susan Cain remind us, trust is built through presence, clarity, and emotional regulation — not speed." },
        { type: "h3", text: "5. Partner, Don't Serve" },
        { type: "p", text: "Trusted advisors co-create solutions with the business. They facilitate thinking, align stakeholders, map root causes, identify the right levers, and measure what matters. This is where L&D becomes a strategic enabler, not a training factory." },
        { type: "h2", text: "Why This Matters Now" },
        { type: "p", text: "Organizations are scaling faster than ever. Leaders are overwhelmed. Teams are stretched thin. Capability gaps are widening. AI is accelerating everything. In this environment, L&D cannot afford to be reactive. Trusted Learning Advisors help organizations navigate complexity, build future-ready skills, strengthen leadership pipelines, improve performance, reduce risk, increase retention, and build cultures of learning." },
        { type: "h2", text: "The Emotional Shift (The Part No One Talks About)" },
        { type: "p", text: "For many of us — myself included — this shift is personal. We grew up in L&D cultures that equated service with value, responsiveness with partnership, compliance with credibility. Saying \"no\" felt like disloyalty. Pushing back felt risky. But becoming a Trusted Learning Advisor requires courage, boundaries, identity evolution, emotional intelligence, and a willingness to disappoint in service of impact. This is leadership work, not just L&D work." },
        { type: "h2", text: "The Role of AI in Becoming a Trusted Learning Advisor" },
        { type: "p", text: "AI doesn't replace the advisor. It amplifies the advisor. AI can surface skills gaps, generate insights, personalize learning, automate content, analyze performance data, and provide workflow nudges. But AI cannot build trust, diagnose culture, navigate politics, facilitate alignment, hold courageous conversations, or understand nuance. The Trusted Learning Advisor of 2026 is a human-centered strategist supported by AI-enabled intelligence." },
        { type: "h2", text: "Reflection Questions" },
        { type: "ul", items: [
          "Where in your work are you still acting like an order taker, and what would shift if you stepped into the role of advisor instead?",
          "What assumptions about training or performance do you need to challenge in your organization?",
          "What's one assumption about L&D you need to unlearn?",
          "What's one courageous conversation you could initiate this month that would move you closer to being a Trusted Learning Advisor?",
        ]},
        { type: "p", text: "L&OD doesn't earn influence by saying yes to everything. It earns influence by helping the business think more clearly and choosing the right levers to solve the right problems." },
      ] as BlogNode[],
    },
    {
      slug: "overwhelm-saboteur",
      category: "Performance",
      title: "The Overwhelm Saboteur: How ADT Hijacks Your Potential",
      excerpt:
        "You're not lazy. You're not unmotivated. You're overwhelmed — and that overwhelm has a name: Attention Deficit Trait. Here's how it blocks flow and what to do about it.",
      date: "2025-07-01",
      readTime: "7 min read",
      image: "/pictures/motion-blur.webp",
      heroQuote:
        "Overwhelm isn't a sign of weakness — it's a signal that your brain is trying to do too much with too little space. Flow begins when you reclaim that space.",
      body: [
        { type: "p", text: "You sit down to focus. But your mind is already sprinting — emails, deadlines, checking social media, that thing you forgot to do yesterday. You're not lazy. You're not unmotivated. You're overwhelmed. And that overwhelm has a name: Attention Deficit Trait (ADT)." },
        { type: "p", text: "In high-performing environments, ADT is the silent saboteur of flow, clarity, and creativity. It mimics ADHD, but it's not a clinical diagnosis — it's a neurobiological response to chronic overload. And if you're feeling scattered, reactive, or stuck in shallow work, ADT might be the invisible force holding you back." },
        { type: "h2", text: "What Is Attention Deficit Trait (ADT)?" },
        { type: "p", text: "Coined by Dr. Edward Hallowell, ADT is a condition of the modern workplace, not a disorder of the brain. It's triggered by constant interruptions, information overload, unrealistic urgency, and lack of recovery time. Today's world — both personal and professional — is designed in a way that makes these inevitable. Our phones, computers, and apps are constantly begging for our attention." },
        { type: "p", text: "Unlike ADHD, which is neurological and lifelong, ADT is acquired — and reversible. But left unchecked, it can erode your ability to think strategically, prioritize effectively, and enter flow states." },
        { type: "h2", text: "The Neuroscience of Overwhelm" },
        { type: "p", text: "When your brain is bombarded with inputs, your prefrontal cortex — the part responsible for executive function — goes into overdrive. You lose access to working memory, decision-making clarity, and emotional regulation. At the same time, your amygdala (your brain's threat detector) lights up, interpreting the overload as danger. This triggers a fight-flight-freeze response, flooding your system with cortisol and narrowing your attention to short-term survival." },
        { type: "p", text: "In this state, flow is neurologically impossible. Flow requires deep focus, low self-monitoring, and a sense of control — all of which are compromised by ADT." },
        { type: "h3", text: "Effects of Chronic Cortisol on the Brain" },
        { type: "ul", items: [
          "Memory and Learning: impairs the hippocampus, leading to forgetfulness and difficulty learning new information",
          "Emotional Regulation: overstimulates the amygdala, heightening fear, anxiety, and emotional reactivity",
          "Executive Function: disrupts the prefrontal cortex, reducing quality decision-making, focus, and impulse control",
          "Neuroplasticity: long-term elevation can shrink brain volume and reduce neural connectivity",
        ]},
        { type: "h2", text: "How ADT Blocks Flow" },
        { type: "p", text: "Flow is your brain's optimal state for performance and creativity. But ADT creates the opposite conditions. Where flow requires deep focus, clear goals, a sense of control, intrinsic motivation, and low cognitive load — ADT creates constant distraction, mental clutter, perceived chaos, reactive urgency, overwhelm and fatigue." },
        { type: "p", text: "When ADT is running the show, you're stuck in shallow work loops — busy but not productive, active but not aligned." },
        { type: "h2", text: "5 Strategies to Disarm the Overwhelm Saboteur" },
        { type: "ul", items: [
          "Name It to Tame It — Recognize when you're in an ADT spiral. Awareness is the first step to regaining agency. Give what you're feeling a name.",
          "Create Cognitive White Space — Block time for deep work. Turn off notifications. Protect your brain's bandwidth like it's your most valuable asset — because it is.",
          "Use Flow Triggers — Clear goals, immediate feedback, and slightly stretched challenge help shift your brain from scattered to focused.",
          "Practice Strategic Recovery — Flow isn't about grinding harder. It's about oscillating between intensity and rest. Walks, breathwork, and even 90-second resets can recalibrate your nervous system.",
          "Design for One Thing at a Time — Multitasking is a myth. Design your day around single-tasking sprints. Your brain — and your results — will thank you.",
        ]},
        { type: "h2", text: "Final Thought" },
        { type: "p", text: "If you've been feeling scattered, reactive, or stuck in the noise, you're not broken — you're overloaded. ADT is the brain's natural response to unnatural demands. But with the right tools, you can shift from chaos to clarity, from reactivity to flow. Because the real saboteur isn't your ambition — it's the overwhelm that keeps you from accessing it." },
        { type: "blockquote", text: "The greatest threat to success is NOT failure but boredom, distraction, and the constant pull of the unimportant.", attribution: "James Clear, Atomic Habits" },
      ] as BlogNode[],
    },
    {
      slug: "clarify-big-goal",
      category: "Performance",
      title: "When You Can't Articulate the Big Goal in Your Head",
      excerpt:
        "You feel it — that pull toward something bigger. But the words don't come. Here's how neuroscience and peak performance research can help you move from ambiguity to alignment.",
      date: "2025-07-01",
      readTime: "6 min read",
      image: "/pictures/focus-lens.webp",
      heroQuote:
        "Clarity doesn't come from waiting for the perfect words — it comes from moving through the fog with curiosity, courage, and a willingness to listen to what your future is trying to tell you.",
      body: [
        { type: "p", text: "You feel it. That pull toward something bigger. A goal that's bold, maybe even a little scary — but when someone asks you to define it, the words don't come. You just know it's there, somewhere in the fog." },
        { type: "p", text: "If this sounds familiar, you're not alone. Many high-performers and visionary leaders experience this moment: the desire is real, but the clarity is missing. The good news? Neuroscience and peak performance research offer powerful tools to help you move from ambiguity to alignment." },
        { type: "h2", text: "1. Understand Why the Goal Feels Fuzzy" },
        { type: "p", text: "Before we jump into solutions, it helps to know what's happening in your brain. When you're trying to articulate a big, future-oriented goal, you're engaging your brain's default mode network (DMN) — the system responsible for imagination, self-reflection, and long-term visioning." },
        { type: "p", text: "But here's the catch: the DMN doesn't speak in bullet points. It speaks in images, emotions, and metaphors. That's why your goal might feel more like a sensation than a sentence." },
        { type: "p", text: "Tip: Don't force clarity too soon. Instead, get curious about the feeling. What does it remind you of? What images or metaphors come to mind? This is your brain's way of sketching the edges of your future." },
        { type: "h2", text: "2. Use Flow-State Triggers to Access Deeper Insight" },
        { type: "p", text: "When you're stuck in overthinking, clarity won't come from more analysis — it comes from state change. That's where flow comes in. Flow states quiet the inner critic (via reduced activity in the prefrontal cortex) and amplify pattern recognition, creativity, and intuition. In other words, flow helps you access the part of your brain that already knows what you want — before your conscious mind can articulate it." },
        { type: "ul", items: [
          "Go for a long walk or run without music",
          "Do something immersive and physical (surfing, climbing, dancing)",
          "Journal immediately after — ask: \"What do I know about this goal that I haven't said out loud yet?\"",
          "When journaling, hand-write your entry vs typing for deeper connection",
        ]},
        { type: "h2", text: "3. Externalize the Vision — Messy Is Fine" },
        { type: "p", text: "Once you've tapped into that intuitive knowing, it's time to externalize it. Not perfectly — just enough to give it shape. Try these prompts:" },
        { type: "ul", items: [
          '"If I weren\'t afraid of failing, I would…"',
          '"The future I can\'t stop thinking about looks like…"',
          '"If I overheard someone describing my work 5 years from now, I\'d want them to say…"',
        ]},
        { type: "p", text: "Use sticky notes, mind maps, voice memos — whatever helps you get it out of your head and into the world." },
        { type: "h2", text: "4. Use the \"North Star, Not GPS\" Approach" },
        { type: "p", text: "At this stage, you don't need a 10-step plan. You need a North Star — a direction that feels energizing, meaningful, and worth pursuing. Ask yourself: What's the impact I want to have? Who do I want to become in the process? What would feel wildly fulfilling — even if it's hard? Once you have that North Star, you can reverse-engineer the path. But clarity comes from movement, not just thought." },
        { type: "h2", text: "5. Prime Your Brain with Visualization & Dopamine Anchors" },
        { type: "p", text: "Neuroscience shows that visualizing a goal activates the same neural circuits as actually pursuing it. This primes your brain to notice opportunities and take action. Try this: Visualize yourself 3 years from now, having achieved the goal. What are you doing? Who are you with? How do you feel? Anchor that vision with a physical cue — a song, a mantra, a movement. This creates a dopaminergic feedback loop that keeps you motivated and emotionally connected to the goal — even before it's fully defined." },
        { type: "h2", text: "Final Thought: Clarity Is Earned, Not Given" },
        { type: "p", text: "If you're struggling to articulate your big goal, it doesn't mean you're lost — it means you're on the edge of something meaningful. The fog is part of the process. Use flow to access your intuition. Use language to shape it. Use action to refine it. And remember: you don't need the whole map to start walking toward your future. You just need the next step — and the courage to take it." },
        { type: "blockquote", text: "You don't have to see the whole staircase, just take the first step.", attribution: "Martin Luther King, Jr." },
      ] as BlogNode[],
    },
    {
      slug: "owning-the-helm",
      category: "Leadership",
      title: "Owning the Helm: Your Locus of Control",
      excerpt:
        "In the pursuit of peak performance, the real transformation begins inward — with one deceptively powerful question: \"Who's in charge of how I experience my life?\"",
      date: "2025-06-01",
      readTime: "5 min read",
      image: "/pictures/puppet-strings.webp",
      heroQuote:
        "When you shift your locus of control inward, you stop waiting to be rescued — and start becoming the one you've been waiting for.",
      body: [
        { type: "p", text: "In the pursuit of peak performance, many look outward — at goals, teams, or timelines. But the real transformation often begins inward, with one deceptively powerful question:" },
        { type: "blockquote", text: "Who's in charge of how I experience my life?" },
        { type: "p", text: "This is the heart of locus of control." },
        { type: "h2", text: "What Is Locus of Control?" },
        { type: "p", text: "Locus of control refers to your belief system about what influences your outcomes. Do you believe success is mostly shaped by your actions and decisions (internal locus)? Or by luck, circumstances, or other people (external locus)?" },
        { type: "p", text: "This concept, rooted in psychology, doesn't just influence how you interpret events. It affects how you lead, how you recover, and whether you even try." },
        { type: "ul", items: [
          "Those with a strong internal locus tend to take initiative, persist through obstacles, and view setbacks as opportunities to grow.",
          "Those with a predominant external locus may feel reactive, disempowered, or stuck waiting for conditions to change before taking action.",
        ]},
        { type: "h2", text: "Why It Matters in Coaching and Flow" },
        { type: "p", text: "High-flow coaching is all about unlocking agency — the belief that you can shape your life experience with intention. Flow states, after all, aren't gifted to you by chance. They're cultivated by learning how to manage your focus, emotions, and challenge levels in real-time. And that's a skill rooted in self-leadership." },
        { type: "p", text: "When we help clients shift toward a more internal locus of control, they stop waiting for permission. They begin designing how they show up — day by day, decision by decision." },
        { type: "h2", text: "How to Cultivate an Internal Locus of Control" },
        { type: "ul", items: [
          "Reframe language: Notice when you're saying \"I had to\" or \"they made me\" and replace it with \"I chose to\" or \"I responded by…\" Subtle? Yes. Empowering? Absolutely.",
          "Track wins and patterns: Build evidence that your actions influence outcomes. Even small examples build belief.",
          "Clarify your sphere of influence: Focus on what you can control — and take consistent action there.",
          "Invest in reflection: Journaling or coaching conversations help unpack limiting narratives and rebuild agency over time.",
        ]},
      ] as BlogNode[],
    },
    {
      slug: "why-high-flow-coaching",
      category: "Flow Science",
      title: "Why High-Flow Coaching?",
      excerpt:
        "In a world obsessed with productivity hacks and quick wins, something essential often gets lost: sustainable performance that feels good to live. Here's why High-Flow Coaching is different.",
      date: "2025-06-01",
      readTime: "5 min read",
      image: "/pictures/coaching-outdoor.webp",
      heroQuote:
        "True performance isn't about pushing harder — it's about aligning deeper. Flow happens when who you are matches how you work.",
      body: [
        { type: "p", text: "In a world obsessed with productivity hacks and quick wins, something essential often gets lost: sustainable performance that feels good to live. That's where High-Flow Peak Performance Coaching steps in — not as a fix, but as a framework for transformation." },
        { type: "p", text: "This approach goes beyond time management and goal setting. It's about tapping into flow states — those moments of deep focus, effortless action, and energized clarity where your potential isn't just accessed… it's amplified. Grounded in neuroscience and psychology, high-flow coaching helps unlock what's already within you by aligning your brain, body, and purpose." },
        { type: "h2", text: "Because peak performance isn't just about output — it's about alignment." },
        { type: "p", text: "When you're in flow, work becomes more than a to-do list. You experience meaning. You feel momentum. You move through challenge with creativity, not burnout. That's what this coaching is designed to cultivate: clarity, intention, and consistent elevation." },
        { type: "h2", text: "Because leadership starts with self-mastery." },
        { type: "p", text: "Whether you're leading a team or leading your life, you can only guide others as far as you've gone yourself. High-flow coaching strengthens your emotional regulation, increases resilience, and sharpens your decision-making under pressure. It's not just skill-building — it's identity-shaping." },
        { type: "h2", text: "Because potential without structure stays potential." },
        { type: "p", text: "High-flow isn't mystical. It's measurable. With the right tools, accountability, and guidance, flow becomes a reliable part of your daily life — not an accidental burst of brilliance. This coaching meets you where you are and walks with you to where you know you're meant to be." },
        { type: "p", text: "In the end, this isn't about being busier. It's about being better — on your terms, in alignment with your values, and with results that matter." },
      ] as BlogNode[],
    },
    {
      slug: "what-is-flow",
      category: "Flow Science",
      title: 'What is "Flow" — and Why It Changes Everything',
      excerpt:
        "That moment when time fades, distractions disappear, and you're fully immersed in what you're doing. Here's what flow really is — and why it matters for leaders and performers.",
      date: "2025-06-01",
      readTime: "5 min read",
      image: "/pictures/lake-valley.webp",
      heroQuote:
        "Flow isn't where you lose yourself. It's where you finally meet the version of you that's been waiting to lead.",
      body: [
        { type: "p", text: "You've probably felt it before — even if you didn't have a name for it. That moment when time fades, distractions disappear, and you're fully immersed in what you're doing. Ideas click into place. Action feels effortless. Whether you're coaching a client, designing a vision, or tackling a challenge head-on — there's clarity, momentum, and an almost electric sense of purpose. That's flow." },
        { type: "h2", text: "Defining Flow" },
        { type: "p", text: "Flow is a scientifically studied optimal state of consciousness where we feel and perform at our best. Coined by psychologist Mihaly Csikszentmihalyi, flow happens when the challenge before us stretches our skills just enough to demand our full attention — without tipping us into overwhelm. It's not a fluke; it's a neurochemical cocktail of focus, joy, and progress." },
        { type: "p", text: "In flow, the brain shuts down distracting internal chatter. You become laser-focused, creative, and capable of performing at levels that feel almost superhuman — but are actually very human." },
        { type: "h2", text: "Why Flow Matters" },
        { type: "p", text: "Because in this state, you're not just doing more. You're becoming more. Flow amplifies productivity, but it also boosts satisfaction, innovation, and well-being. Leaders in flow are more adaptable. Creators in flow access their best ideas. Teams in flow collaborate effortlessly. And individuals? They reconnect with meaning." },
        { type: "p", text: "Flow isn't about working harder. It's about working in tune with who you are at your best." },
        { type: "h2", text: "How to Tap Into Flow" },
        { type: "p", text: "Creating conditions for flow takes intention and practice, but it's absolutely within reach. Some key ingredients include:" },
        { type: "ul", items: [
          "Clear goals that give purpose to your work",
          "Immediate feedback that sharpens your path forward",
          "Stretch-level challenges that ignite engagement",
          "Minimized distractions that let focus flourish",
          "Alignment with values so your work actually matters to you",
        ]},
        { type: "p", text: "As a coach, I help individuals and teams not only find their flow — but build lives and systems that keep them there." },
      ] as BlogNode[],
    },
    {
      slug: "power-of-self-mastery",
      category: "Performance",
      title: "The Power of Self-Mastery: Unlocking the Foundation of Peak Performance",
      excerpt:
        "Before we talk about success, leadership, or even flow — let's talk about the one person who determines it all: you. Self-mastery is the bedrock of everything.",
      date: "2025-06-01",
      readTime: "5 min read",
      image: "/pictures/PPU Journal__GOOD.JPG",
      heroQuote:
        "Self-mastery isn't about controlling every moment — it's about choosing who you want to be in every moment.",
      body: [
        { type: "p", text: "Before we talk about success, leadership, or even flow — let's talk about the one person who determines it all: you." },
        { type: "p", text: "In the realm of High-Flow Peak Performance Coaching, self-mastery isn't just a buzzword. It's the bedrock. It's the intentional process of understanding, regulating, and elevating your inner world — so that what you do on the outside becomes an authentic extension of who you are on the inside." },
        { type: "h2", text: "What is Self-Mastery?" },
        { type: "p", text: "Self-mastery is the ongoing practice of aligning your thoughts, emotions, and behaviors with your values and vision. It's not about perfection or control — it's about awareness and choice. It's the difference between reacting on autopilot and responding with purpose." },
        { type: "p", text: "When you're mastering yourself, you're cultivating the ability to:" },
        { type: "ul", items: [
          "Remain focused and grounded in high-pressure situations.",
          "Navigate setbacks without losing momentum or clarity.",
          "Make decisions that reflect your deeper purpose, not just your immediate environment.",
        ]},
        { type: "h2", text: "Why It Matters" },
        { type: "p", text: "Self-mastery isn't just personally fulfilling — it's professionally essential. Leaders who embody self-mastery create cultures of trust, resilience, and innovation. High-performers with self-mastery don't just get more done — they do it with integrity and presence. And individuals aligned with their core values experience more joy, energy, and meaning in their work." },
        { type: "p", text: "In short: when you master yourself, you free yourself. That's when flow becomes possible." },
        { type: "h2", text: "How to Begin Practicing Self-Mastery" },
        { type: "p", text: "Like any peak performance skill, self-mastery is built with intention and practice. A few powerful places to start:" },
        { type: "ul", items: [
          "Awareness Training: Journaling, meditation, or biofeedback tools can help you tune into your thoughts, emotions, and habitual patterns.",
          "Triggers & Recovery Mapping: Understanding what knocks you off balance — and how to reset quickly — is critical in developing resilience.",
          "Goal Reconnection: Regularly revisiting your \"why\" ensures that what you're doing stays in sync with who you want to become.",
          "Feedback Loops: Constructive feedback (from coaching, teams, or assessments) helps turn blind spots into growth edges.",
        ]},
        { type: "p", text: "Self-mastery is not the end goal — it's the launchpad. It's how you enter flow more often, lead more authentically, and perform at your peak without losing yourself in the process." },
      ] as BlogNode[],
    },
  ] as BlogPost[],
};

// ── Contact page ─────────────────────────────────────────────────────────────

export const contactPage = {
  hero: {
    eyebrow: "Let's Connect",
    headline: "You don't need to feel 'ready.' You just need to show up.",
    subheadline:
      "Start with a complimentary 50-minute conversation. No pressure, no commitment — just clarity on what's possible.",
  },

  options: [
    {
      title: "Free Discovery Call",
      description: "A 50-minute conversation to explore your goals and see if we're a good fit.",
      cta: "Schedule Now",
    },
    {
      title: "Email Directly",
      description: siteConfig.contact.email,
      cta: "Send Email",
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      title: "Call or Text",
      description: siteConfig.contact.phone,
      cta: "Call Now",
      href: `tel:${siteConfig.contact.phone}`,
    },
  ],

  form: {
    headline: "Send a message",
    fields: {
      name: "Your Name",
      email: "Email Address",
      interest: "I'm interested in...",
      interestOptions: [
        "High-Flow 1:1 Coaching",
        "Executive / Leadership Coaching",
        "Team Development & Facilitation",
        "Assessments & Debriefs",
        "Keynote / Speaking",
        "Something else",
      ],
      message: "Tell me a bit about where you are and what you're looking for",
      submit: "Send Message",
    },
  },
};

// ── Shared ────────────────────────────────────────────────────────────────────

export const testimonials = homePage.testimonials.items;

export const footer = {
  tagline: "Science-backed coaching rooted in flow, neuroscience, and behavioral psychology.",
  columns: [
    {
      heading: "Navigate",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Services",
      links: [
        { label: "Executive Coaching", href: "/services/executive-coaching" },
        { label: "High-Flow Coaching", href: "/services/high-flow-coaching" },
        { label: "Team Development", href: "/services/team-development" },
        { label: "Workshop Design & Facilitation", href: "/services/workshops" },
      ],
    },
    {
      heading: "More",
      links: [
        { label: "Workshops", href: "/workshops" },
        { label: "Assessments", href: "/assessments" },
        { label: "Resources", href: "/resources" },
      ],
    },
  ],
  legal: `© ${new Date().getFullYear()} Peak Performance Unleashed, LLC. All rights reserved.`,
};
