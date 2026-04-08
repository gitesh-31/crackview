import { Company } from "@/types/database";

export const companies: Company[] = [
  // Product-based companies
  {
    id: "google",
    name: "Google",
    type: "product",
    description:
      "Global technology leader in search, cloud computing, and AI/ML innovations.",
    logo: "G",
    industry: "Technology",
  },
  {
    id: "amazon",
    name: "Amazon",
    type: "product",
    description:
      "World's largest e-commerce and cloud computing company (AWS).",
    logo: "A",
    industry: "E-commerce / Cloud",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    type: "product",
    description:
      "Leading software company known for Windows, Azure, Office 365, and LinkedIn.",
    logo: "M",
    industry: "Technology",
  },
  {
    id: "meta",
    name: "Meta",
    type: "product",
    description:
      "Social media giant behind Facebook, Instagram, WhatsApp, and Reality Labs.",
    logo: "M",
    industry: "Social Media",
  },
  {
    id: "apple",
    name: "Apple",
    type: "product",
    description:
      "Premium consumer electronics and software company. iPhone, Mac, iOS ecosystem.",
    logo: "A",
    industry: "Consumer Electronics",
  },
  {
    id: "netflix",
    name: "Netflix",
    type: "product",
    description:
      "World's leading streaming entertainment service with 200M+ subscribers.",
    logo: "N",
    industry: "Entertainment",
  },
  {
    id: "uber",
    name: "Uber",
    type: "product",
    description:
      "Global ride-sharing and food delivery platform operating in 70+ countries.",
    logo: "U",
    industry: "Transportation",
  },
  {
    id: "adobe",
    name: "Adobe",
    type: "product",
    description:
      "Creative and document management software leader. Photoshop, Premiere, Acrobat.",
    logo: "A",
    industry: "Software",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    type: "product",
    description:
      "World's #1 CRM platform with cloud-based enterprise solutions.",
    logo: "S",
    industry: "Enterprise Software",
  },
  {
    id: "flipkart",
    name: "Flipkart",
    type: "product",
    description:
      "India's leading e-commerce marketplace, owned by Walmart.",
    logo: "F",
    industry: "E-commerce",
  },
  {
    id: "twitter",
    name: "Twitter/X",
    type: "product",
    description:
      "Global social media platform for real-time news, conversations, and microblogging.",
    logo: "X",
    industry: "Social Media",
  },
  {
    id: "stripe",
    name: "Stripe",
    type: "product",
    description:
      "Leading online payment processing platform for internet businesses worldwide.",
    logo: "S",
    industry: "Fintech",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    type: "product",
    description:
      "World's largest professional networking platform, owned by Microsoft.",
    logo: "L",
    industry: "Social Media / Professional",
  },
  {
    id: "spotify",
    name: "Spotify",
    type: "product",
    description:
      "World's most popular audio streaming service with 600M+ users.",
    logo: "S",
    industry: "Entertainment / Music",
  },
  {
    id: "oracle",
    name: "Oracle",
    type: "product",
    description:
      "Enterprise software giant known for databases, cloud infrastructure, and Java.",
    logo: "O",
    industry: "Enterprise Software",
  },
  {
    id: "samsung",
    name: "Samsung",
    type: "product",
    description:
      "Global electronics leader in semiconductors, mobile devices, and consumer electronics.",
    logo: "S",
    industry: "Electronics / Technology",
  },
  {
    id: "paypal",
    name: "PayPal",
    type: "product",
    description:
      "Leading digital payments platform enabling online money transfers worldwide.",
    logo: "P",
    industry: "Fintech",
  },
  {
    id: "intuit",
    name: "Intuit",
    type: "product",
    description:
      "Financial software company behind TurboTax, QuickBooks, and Credit Karma.",
    logo: "I",
    industry: "Fintech / Software",
  },
  {
    id: "atlassian",
    name: "Atlassian",
    type: "product",
    description:
      "Enterprise collaboration tools including Jira, Confluence, Bitbucket, and Trello.",
    logo: "A",
    industry: "Enterprise Software",
  },
  {
    id: "zomato",
    name: "Zomato",
    type: "product",
    description:
      "India's leading food delivery and restaurant discovery platform.",
    logo: "Z",
    industry: "Food Tech",
  },
  {
    id: "swiggy",
    name: "Swiggy",
    type: "product",
    description:
      "Indian on-demand food and grocery delivery platform.",
    logo: "S",
    industry: "Food Tech",
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    type: "product",
    description:
      "Global leader in GPU computing, AI hardware, and accelerated computing platforms.",
    logo: "N",
    industry: "Semiconductors / AI",
  },
  {
    id: "openai",
    name: "OpenAI",
    type: "product",
    description:
      "AI research company behind ChatGPT, GPT models, and DALL-E.",
    logo: "O",
    industry: "Artificial Intelligence",
  },
  {
    id: "databricks",
    name: "Databricks",
    type: "product",
    description:
      "Unified analytics platform for data engineering, data science, and machine learning.",
    logo: "D",
    industry: "Data / AI",
  },
  {
    id: "coinbase",
    name: "Coinbase",
    type: "product",
    description:
      "Leading cryptocurrency exchange and blockchain platform in the US.",
    logo: "C",
    industry: "Fintech / Crypto",
  },
  {
    id: "razorpay",
    name: "Razorpay",
    type: "product",
    description:
      "India's leading full-stack payment gateway and financial services platform.",
    logo: "R",
    industry: "Fintech",
  },

  // Service-based companies
  {
    id: "tcs",
    name: "TCS",
    type: "service",
    description:
      "Tata Consultancy Services - India's largest IT services company, part of Tata Group.",
    logo: "T",
    industry: "IT Services",
  },
  {
    id: "infosys",
    name: "Infosys",
    type: "service",
    description:
      "Global leader in next-generation digital services and consulting.",
    logo: "I",
    industry: "IT Services",
  },
  {
    id: "wipro",
    name: "Wipro",
    type: "service",
    description:
      "Leading global IT, consulting, and business process services company.",
    logo: "W",
    industry: "IT Services",
  },
  {
    id: "hcl",
    name: "HCL Technologies",
    type: "service",
    description:
      "Global technology company delivering industry-leading capabilities in IT services.",
    logo: "H",
    industry: "IT Services",
  },
  {
    id: "cognizant",
    name: "Cognizant",
    type: "service",
    description:
      "Multinational IT services and consulting corporation headquartered in the US.",
    logo: "C",
    industry: "IT Consulting",
  },
  {
    id: "accenture",
    name: "Accenture",
    type: "service",
    description:
      "Global professional services company with capabilities in digital, cloud, and security.",
    logo: "A",
    industry: "Consulting",
  },
  {
    id: "capgemini",
    name: "Capgemini",
    type: "service",
    description:
      "French multinational providing consulting, technology, and outsourcing services.",
    logo: "C",
    industry: "IT Consulting",
  },
  {
    id: "techm",
    name: "Tech Mahindra",
    type: "service",
    description:
      "Part of the Mahindra Group, focused on telecom and enterprise IT solutions.",
    logo: "T",
    industry: "IT Services",
  },
  {
    id: "deloitte",
    name: "Deloitte",
    type: "service",
    description:
      "One of the Big Four accounting and professional services firms globally.",
    logo: "D",
    industry: "Consulting",
  },
  {
    id: "lti",
    name: "LTIMindtree",
    type: "service",
    description:
      "Global technology consulting and digital solutions company.",
    logo: "L",
    industry: "IT Services",
  },
];

export function getCompaniesByType(type: "product" | "service"): Company[] {
  return companies.filter((c) => c.type === type);
}

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}
