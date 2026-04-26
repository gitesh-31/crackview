export type JobPlatformCategory =
  | "General"
  | "Remote (Global)"
  | "USD / International Remote"
  | "Freelance"
  | "Tech-Specific"
  | "Internships";

export interface JobPlatform {
  id: string;
  name: string;
  url: string;
  description: string;
  tags?: string[];
  category: JobPlatformCategory;
}

export const jobPlatforms: JobPlatform[] = [
  // General
  {
    id: "linkedin",
    name: "LinkedIn Jobs",
    url: "https://www.linkedin.com/jobs/",
    description:
      "The largest professional network. Apply with your profile and get noticed by recruiters.",
    tags: ["Global", "All Roles"],
    category: "General",
  },
  {
    id: "indeed",
    name: "Indeed",
    url: "https://www.indeed.com/",
    description:
      "Massive job aggregator covering full-time, part-time, contract, and remote roles worldwide.",
    tags: ["Global", "Aggregator"],
    category: "General",
  },
  {
    id: "naukri",
    name: "Naukri",
    url: "https://www.naukri.com/",
    description:
      "India's largest job portal — strong for IT, service-based companies, and freshers.",
    tags: ["India"],
    category: "General",
  },
  {
    id: "glassdoor",
    name: "Glassdoor",
    url: "https://www.glassdoor.com/Job/index.htm",
    description:
      "Job listings paired with company reviews, salary data, and interview experiences.",
    tags: ["Reviews", "Salaries"],
    category: "General",
  },
  {
    id: "monster",
    name: "Monster",
    url: "https://www.monster.com/",
    description:
      "One of the oldest job boards. Strong listings across the US, Europe, and India.",
    tags: ["Global"],
    category: "General",
  },

  // Remote (Global)
  {
    id: "remoteok",
    name: "RemoteOK",
    url: "https://remoteok.com/",
    description:
      "One of the most active remote-only job boards. Heavy on tech, posted daily.",
    tags: ["Remote", "Tech"],
    category: "Remote (Global)",
  },
  {
    id: "weworkremotely",
    name: "We Work Remotely",
    url: "https://weworkremotely.com/",
    description:
      "Largest remote work community. Programming, design, customer support, marketing.",
    tags: ["Remote"],
    category: "Remote (Global)",
  },
  {
    id: "remotive",
    name: "Remotive",
    url: "https://remotive.com/",
    description:
      "Hand-curated remote jobs in software, marketing, design, and customer support.",
    tags: ["Remote", "Curated"],
    category: "Remote (Global)",
  },
  {
    id: "working-nomads",
    name: "Working Nomads",
    url: "https://www.workingnomads.com/jobs",
    description:
      "Daily-curated list of remote jobs delivered by category and email digest.",
    tags: ["Remote"],
    category: "Remote (Global)",
  },
  {
    id: "justremote",
    name: "JustRemote",
    url: "https://justremote.co/",
    description:
      "Filter by region (worldwide, US-only, EU-only) to find roles matching your timezone.",
    tags: ["Remote", "Timezone Filter"],
    category: "Remote (Global)",
  },

  // USD / International Remote
  {
    id: "wellfound",
    name: "Wellfound (AngelList Talent)",
    url: "https://wellfound.com/jobs",
    description:
      "Startup jobs with transparent salary and equity. Great for USD-paying remote startup roles.",
    tags: ["Startups", "USD", "Equity"],
    category: "USD / International Remote",
  },
  {
    id: "arc",
    name: "Arc.dev",
    url: "https://arc.dev/",
    description:
      "Vetted remote developer jobs at companies that hire globally and pay in USD.",
    tags: ["Remote", "Developers", "USD"],
    category: "USD / International Remote",
  },
  {
    id: "toptal",
    name: "Toptal",
    url: "https://www.toptal.com/talent",
    description:
      "Top 3% network of freelance developers, designers, and finance experts. Premium clients, USD pay.",
    tags: ["Vetted", "USD", "Freelance"],
    category: "USD / International Remote",
  },
  {
    id: "turing",
    name: "Turing",
    url: "https://www.turing.com/",
    description:
      "Long-term remote jobs with US/Silicon-Valley companies. AI-matched, USD pay.",
    tags: ["Remote", "USD", "Long-term"],
    category: "USD / International Remote",
  },
  {
    id: "himalayas",
    name: "Himalayas",
    url: "https://himalayas.app/",
    description:
      "Remote-first job board with strong filters for timezone, salary, and country eligibility.",
    tags: ["Remote", "USD"],
    category: "USD / International Remote",
  },
  {
    id: "remotecom",
    name: "Remote.com Jobs",
    url: "https://remote.com/jobs",
    description:
      "Job board from the global payroll provider — companies here are set up to hire internationally.",
    tags: ["Remote", "Global Payroll"],
    category: "USD / International Remote",
  },

  // Freelance
  {
    id: "upwork",
    name: "Upwork",
    url: "https://www.upwork.com/",
    description:
      "Largest freelance marketplace. Hourly and fixed-price gigs across every skill.",
    tags: ["Freelance"],
    category: "Freelance",
  },
  {
    id: "fiverr",
    name: "Fiverr",
    url: "https://www.fiverr.com/",
    description:
      "Sell productized services as gigs. Buyers come to you once you rank in search.",
    tags: ["Freelance", "Gigs"],
    category: "Freelance",
  },
  {
    id: "freelancer",
    name: "Freelancer.com",
    url: "https://www.freelancer.com/",
    description:
      "Bid on projects across software, design, writing, and data entry.",
    tags: ["Freelance"],
    category: "Freelance",
  },
  {
    id: "contra",
    name: "Contra",
    url: "https://contra.com/",
    description:
      "Commission-free freelance platform — keep 100% of what you earn.",
    tags: ["Freelance", "0% Fees"],
    category: "Freelance",
  },
  {
    id: "peopleperhour",
    name: "PeoplePerHour",
    url: "https://www.peopleperhour.com/",
    description:
      "UK-rooted freelance marketplace, popular for short hourly engagements.",
    tags: ["Freelance", "UK"],
    category: "Freelance",
  },

  // Tech-Specific
  {
    id: "yc-work",
    name: "Y Combinator — Work at a Startup",
    url: "https://www.workatastartup.com/",
    description:
      "Apply directly to YC-backed startups. One profile, many companies.",
    tags: ["Startups", "YC"],
    category: "Tech-Specific",
  },
  {
    id: "hn-hiring",
    name: "Hacker News — Who is hiring?",
    url: "https://news.ycombinator.com/submitted?id=whoishiring",
    description:
      "Monthly thread where companies (incl. remote, USD) post directly. Search-friendly.",
    tags: ["Monthly Thread"],
    category: "Tech-Specific",
  },
  {
    id: "hired",
    name: "Hired",
    url: "https://hired.com/",
    description:
      "Companies apply to you. Tech-focused with salary upfront in every offer.",
    tags: ["Tech", "Reverse Apply"],
    category: "Tech-Specific",
  },
  {
    id: "dice",
    name: "Dice",
    url: "https://www.dice.com/",
    description:
      "Long-running US-focused tech job board — strong for contractors and specialised stacks.",
    tags: ["US", "Tech"],
    category: "Tech-Specific",
  },
  {
    id: "stackoverflow-jobs",
    name: "Stack Overflow Talent",
    url: "https://stackoverflow.co/talent/",
    description:
      "Reach developers via the Stack Overflow network. Discover engineering-led companies.",
    tags: ["Developers"],
    category: "Tech-Specific",
  },

  // Internships
  {
    id: "internshala",
    name: "Internshala",
    url: "https://internshala.com/",
    description:
      "India's biggest internship platform. Includes work-from-home and stipend internships.",
    tags: ["India", "Students"],
    category: "Internships",
  },
  {
    id: "letsintern",
    name: "LetsIntern",
    url: "https://www.letsintern.com/",
    description:
      "Internships and entry-level jobs across India in tech, marketing, and design.",
    tags: ["India", "Students"],
    category: "Internships",
  },
  {
    id: "chegg-internships",
    name: "Chegg Internships",
    url: "https://www.internships.com/",
    description:
      "US-focused internship search with strong filters for paid, remote, and academic credit.",
    tags: ["US", "Students"],
    category: "Internships",
  },
];
