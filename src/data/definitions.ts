import type { Definition } from '../models/Definition';
import { Categories } from '../models/Categories';

export const definitions: Definition[] = [
  {
    id: 'api',
    term: 'API',
    explanation:
      'Application Programming Interface - a set of rules and protocols that allows different software applications to communicate with each other.',
    categories: [Categories.WebDevelopment],
    related: [
      'https://en.wikipedia.org/wiki/API',
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
    ],
  },
  {
    id: 'rest',
    term: 'REST',
    explanation:
      'Representational State Transfer - an architectural style for designing networked applications, particularly web services.',
    categories: [Categories.WebDevelopment],
    related: ['https://en.wikipedia.org/wiki/REST', 'https://restfulapi.net/'],
  },
  {
    id: 'git',
    term: 'Git',
    explanation:
      'A distributed version control system that tracks changes in source code during software development.',
    categories: [Categories.VersionControl, Categories.DevOps],
    related: [
      'https://git-scm.com/',
      'https://github.com/',
      'https://markodenic.tech/git-cheat-sheet/',
    ],
  },
  {
    id: 'docker',
    term: 'Docker',
    explanation:
      'A platform for developing, shipping, and running applications in containers, which are lightweight and portable.',
    categories: [Categories.DevOps],
    related: ['https://www.docker.com/', 'https://docs.docker.com/'],
  },
  {
    id: 'microservices',
    term: 'Microservices',
    explanation:
      'An architectural style that structures an application as a collection of loosely coupled, independently deployable services.',
    categories: [Categories.SoftwareArchitecture],
    related: ['https://microservices.io/', 'https://martinfowler.com/articles/microservices.html'],
  },
  {
    id: 'monolith',
    term: 'Monolithic Architecture',
    explanation:
      'A software architecture where all features are bundled into a single deployable unit, often harder to scale and maintain.',
    categories: [Categories.SoftwareArchitecture],
    related: [
      'https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith',
      'https://www.techtarget.com/whatis/definition/monolithic-architecture',
    ],
  },
  {
    id: 'ci-cd',
    term: 'CI/CD',
    explanation:
      'Continuous Integration and Continuous Deployment/Delivery - automates code integration, testing, and release to speed up delivery.',
    categories: [Categories.DevOps],
    related: [
      'https://www.atlassian.com/continuous-delivery/continuous-integration',
      'https://www.atlassian.com/continuous-delivery/continuous-deployment',
    ],
  },
  {
    id: 'oop',
    term: 'OOP',
    explanation:
      'Object-Oriented Programming organizes code around objects with data and behaviors to model real-world entities and relationships.',
    categories: [Categories.SoftwareEngineering],
    related: ['https://en.wikipedia.org/wiki/Object-oriented_programming'],
  },
  {
    id: 'solid',
    term: 'SOLID Principles',
    explanation:
      'A set of five object-oriented design principles for building robust and maintainable software systems.',
    categories: [Categories.SoftwareEngineering],
    related: ['https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)'],
  },
  {
    id: 'dry',
    term: 'DRY',
    explanation:
      "Don't Repeat Yourself - a principle that encourages eliminating redundancy in code to reduce bugs and simplify maintenance.",
    categories: [Categories.SoftwareEngineering],
    related: ['https://en.wikipedia.org/wiki/Don%27t_repeat_yourself'],
  },
  {
    id: 'kiss',
    term: 'KISS',
    explanation:
      'Keep It Simple, Stupid - a principle that promotes simplicity in software design to avoid unnecessary complexity.',
    categories: [Categories.SoftwareEngineering],
    related: ['https://en.wikipedia.org/wiki/KISS_principle'],
  },
  {
    id: 'yagni',
    term: 'YAGNI',
    explanation:
      "You Aren't Gonna Need It - a principle that discourages implementing features until they are actually required.",
    categories: [Categories.SoftwareEngineering],
    related: ['https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it'],
  },
  {
    id: 'technical-debt',
    term: 'Technical Debt',
    explanation:
      'The cost of choosing quick or easy solutions in software, which often leads to more work and complexity later.',
    categories: [Categories.SoftwareEngineering],
    related: [
      'https://www.atlassian.com/agile/software-development/technical-debt',
      'https://www.productplan.com/glossary/technical-debt',
    ],
  },
  {
    id: 'refactoring',
    term: 'Refactoring',
    explanation:
      'The process of restructuring existing code without changing its external behavior, improving its structure and readability.',
    categories: [Categories.SoftwareEngineering],
    related: ['https://www.techtarget.com/searchapparchitecture/definition/refactoring'],
  },
  {
    id: 'unit-testing',
    term: 'Unit Testing',
    explanation:
      'Writing tests for individual units of code (like functions or methods) to verify correctness in isolation.',
    categories: [Categories.SoftwareEngineering],
    related: ['https://testlio.com/blog/what-is-unit-testing'],
  },
  {
    id: 'code-review',
    term: 'Code Review',
    explanation:
      'The practice of reviewing code changes made by peers to ensure quality, consistency, and shared understanding.',
    categories: [Categories.SoftwareEngineering],
    related: ['https://en.wikipedia.org/wiki/Code_review'],
  },
  {
    id: 'mvc',
    term: 'MVC',
    explanation:
      'Model-View-Controller is an architectural pattern that separates data, user interface, and input logic.',
    categories: [Categories.SoftwareArchitecture],
    related: [
      'https://developer.mozilla.org/en-US/docs/Glossary/MVC',
      'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller',
    ],
  },
  {
    id: 'css',
    term: 'CSS',
    explanation:
      'CSS (Cascading Style Sheets) is what makes websites look nice. It controls things like colors, fonts, spacing, and layout. HTML is the structure of the page, and CSS is the style.',
    categories: [Categories.WebDevelopment, Categories.Frontend, Categories.SoftwareEngineering],
    related: [
      'https://developer.mozilla.org/en-US/docs/Web/CSS',
      'https://markodenic.com/css-tutorial/',
    ],
  },
  {
    id: 'open-source',
    term: 'Open Source',
    explanation:
      "Open source means the code is public and anyone can look at it, use it, or even help improve it. It's a way of working together and learning by sharing.",
    categories: [Categories.SoftwareEngineering],
    related: ['https://en.wikipedia.org/wiki/Open_source'],
  },
  {
    id: 'npm',
    term: 'npm',
    explanation:
      'npm is a package manager for JavaScript. It allows you to find and share code with other developers.',
    categories: [Categories.SoftwareEngineering, Categories.SoftwareEngineering],
    related: ['https://www.npmjs.com/'],
  },
  {
    id: 'frontend',
    term: 'Frontend',
    explanation:
      "The frontend is everything you see on a website — buttons, colors, images, and text. It's the part of the website you interact with directly.",
    categories: [Categories.WebDevelopment, Categories.Frontend],
    related: ['https://roadmap.sh/frontend'],
  },
  {
    id: 'backend',
    term: 'Backend',
    explanation:
      "The backend is like the behind-the-scenes part of a website. It handles the logic, databases, and everything that makes the website work, but that users don't see.",
    categories: [Categories.WebDevelopment, Categories.Backend],
    related: [
      'https://developer.mozilla.org/en-US/docs/Learn/Server-side',
      'https://roadmap.sh/backend',
    ],
  },
  {
    id: 'horizontal-scaling',
    term: 'Horizontal Scaling',
    explanation:
      "Horizontal scaling is a way to increase the capacity of a system by adding more servers to handle the load. It's like adding more workers to a factory to produce more products.",
    categories: [Categories.DevOps],
    related: ['https://en.wikipedia.org/wiki/Scalability'],
  },
  {
    id: 'vertical-scaling',
    term: 'Vertical Scaling',
    explanation:
      "Vertical scaling is a way to increase the capacity of a system by adding more resources to a single server. It's like adding more power to a single machine to produce more products.",
    categories: [Categories.DevOps],
    related: ['https://en.wikipedia.org/wiki/Scalability'],
  },
  {
    id: '2fa',
    term: 'Two-Factor Authentication (2FA)',
    explanation:
      "2FA is an extra layer of security. Besides your password, you also need to prove it's really you — like by entering a code sent to your phone. So even if someone steals your password, they can't log in easily.",
    categories: [Categories.Security],
    related: [],
  },
  {
    id: 'algorithm',
    term: 'Algorithm',
    explanation:
      "An algorithm is a set of steps a computer follows to solve a problem or do a task. It's like a recipe for computers — step 1, step 2, step 3, and so on.",
    categories: [Categories.SoftwareEngineering],
    related: ['https://en.wikipedia.org/wiki/Algorithm'],
  },
  {
    id: 'javascript',
    term: 'JavaScript',
    explanation:
      "JavaScript is a programming language that makes websites interactive. It's what lets you click buttons, open menus, play videos, or check forms in your browser. Most websites use it.",
    categories: [Categories.WebDevelopment, Categories.Frontend],
    related: [
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      'https://javascript.info/',
    ],
  },
  {
    id: 'rust',
    term: 'Rust',
    explanation:
      "Rust is a programming language focused on speed and safety. It's great for building things like games, tools, or systems where you need power and control — but without many of the usual bugs.",
    categories: [Categories.SoftwareEngineering],
    related: ['https://www.rust-lang.org/', 'https://doc.rust-lang.org/book/'],
  },
  {
    id: 'substack',
    term: 'Substack',
    explanation:
      "Substack is a platform where people can write newsletters and send them to subscribers. It's used by writers, bloggers, and creators to share thoughts or articles — sometimes for free, sometimes paid.",
    categories: [Categories.ContentCreation, Categories.Platforms],
    related: ['https://substack.com/'],
  },
  {
    id: 'bluesky',
    term: 'Bluesky',
    explanation:
      "Bluesky is a social media platform, kind of like Twitter, but it's decentralized. That means no one company controls it. It's built so different apps can talk to each other through the same network.",
    categories: [Categories.ContentCreation, Categories.Platforms],
    related: ['https://bsky.app/'],
  },
  {
    id: 'vpn',
    term: 'VPN (Virtual Private Network)',
    explanation:
      "A VPN is a tool that helps protect your privacy online. It hides your internet traffic and can make it look like you're browsing from a different place. Handy for public Wi-Fi or streaming shows from other countries.",
    categories: [Categories.Security],
    related: ['https://www.cloudflare.com/en-gb/learning/access-management/what-is-a-vpn/'],
  },
  {
    id: 'github',
    term: 'GitHub',
    explanation:
      'GitHub is a website where people store and share code. It helps teams work together on software projects. You can track changes, suggest improvements, or contribute to open source.',
    categories: [Categories.SoftwareEngineering, Categories.VersionControl, Categories.DevOps],
    related: ['https://github.com/', 'https://docs.github.com/en/get-started'],
  },
  {
    id: 'gitlab',
    term: 'GitLab',
    explanation:
      'GitLab is a platform similar to GitHub, but it also includes tools for testing, deploying, and managing projects from start to finish — all in one place. Many teams use it to build and ship software.',
    categories: [Categories.SoftwareEngineering, Categories.VersionControl, Categories.DevOps],
    related: ['https://gitlab.com/', 'https://about.gitlab.com/'],
  },
  {
    id: 'domain',
    term: 'Domain',
    explanation:
      "A domain is the name of a website, like techterms.io. It's what people type into the browser to visit your site. You usually buy one through a domain registrar.",
    categories: [Categories.Platforms, Categories.Internet],
    related: ['https://www.cloudflare.com/en-gb/learning/dns/glossary/what-is-a-domain-name/'],
  },
  {
    id: 'subdomain',
    term: 'Subdomain',
    explanation:
      'A subdomain is a part of a larger domain name, used to organize and separate different sections of a website.',
    categories: [Categories.Internet],
    related: ['https://en.wikipedia.org/wiki/Subdomain'],
  },
  {
    id: 'indie-maker',
    term: 'Indie Maker',
    explanation:
      'An indie maker is someone who builds and sells their own products (usually digital), without working for a big company. They often work solo or in small teams, and focus on launching quickly and learning fast.',
    categories: [Categories.Startup],
    related: ['https://www.whatisanindiemaker.com/'],
  },
  {
    id: 'mrr',
    term: 'MRR (Monthly Recurring Revenue)',
    explanation:
      "MRR is how much money a business makes every month from subscriptions. If 10 people pay $10/month for your app, your MRR is $100. It's a helpful way to track steady income.",
    categories: [Categories.Startup],
    related: [],
  },
  {
    id: 'arr',
    term: 'ARR (Annual Recurring Revenue)',
    explanation:
      "ARR is how much money a business makes every year from subscriptions. If 10 people pay $10/month for your app, your ARR is $1200. It's a helpful way to track steady income.",
    categories: [Categories.Startup],
    related: [],
  },
  {
    id: 'mvp',
    term: 'MVP (Minimum Viable Product)',
    explanation:
      "MVP is a version of a product with just enough features to be useful to users. It's like a prototype that you can use to test your idea and get feedback from users.",
    categories: [Categories.Startup],
    related: [],
  },
  {
    id: 'saas',
    term: 'SaaS (Software as a Service)',
    explanation:
      "SaaS is a way to provide software to users over the internet. It's like a subscription to a software, where you pay a monthly or yearly fee to use the software.",
    categories: [Categories.Startup],
    related: [],
  },
  {
    id: 'no-code',
    term: 'No-Code',
    explanation:
      "No-Code is a way to build software without writing code. It's like using a visual editor to create a website or app.",
    categories: [Categories.SoftwareEngineering],
    related: ['https://en.wikipedia.org/wiki/No-code_development_platform'],
  },
  {
    id: 'markdown',
    term: 'Markdown',
    explanation:
      "Markdown is a simple way to format text. It uses plain text with special characters to create headings, lists, and other formatting. It's easy to read and write, and it's often used to create README files, blog posts, and other documents.",
    categories: [Categories.SoftwareEngineering],
    related: ['https://www.markdownguide.org/'],
  },
  {
    id: 'mcp',
    term: 'MCP (Model Context Protocol)',
    explanation:
      'The Model Context Protocol (MCP) is a universal standard that lets AI systems use tools and interact with external applications, databases, and APIs through a common framework.',
    categories: [Categories.AI],
    related: ['https://modelcontextprotocol.io/docs/getting-started/intro'],
  },
  {
    id: 'mcp-server',
    term: 'MCP Server',
    explanation:
      'An MCP server is a system that implements the Model Context Protocol, managing and routing requests between an AI and external tools, applications, or data sources so the AI can use them through a common interface.',
    categories: [Categories.AI],
    related: ['https://modelcontextprotocol.io/docs/getting-started/intro'],
  },
  {
    id: 'llm',
    term: 'LLM (Large Language Model)',
    explanation:
      'A large language model (LLM) is an AI trained on vast amounts of text to understand meaning, context, and patterns in language, allowing it to generate useful, human-readable responses.',
    categories: [Categories.AI],
    related: ['https://en.wikipedia.org/wiki/Large_language_model'],
  },
  {
    id: 'llm-context',
    term: 'LLM Context',
    explanation:
      "The context is the information that is provided to the LLM to help it generate a response. It can include the previous messages in the conversation, the user's intent, and the relevant information from the user's profile.",
    categories: [Categories.AI],
    related: ['https://en.wikipedia.org/wiki/Large_language_model'],
  },
  {
    id: 'llm-prompt',
    term: 'LLM Prompt',
    explanation:
      'An LLM prompt is the input or instruction given to a large language model that tells it what to do or generate, such as answering a question, writing text, or analyzing information.',
    categories: [Categories.AI],
    related: ['https://en.wikipedia.org/wiki/Large_language_model'],
  },
  {
    id: 'ai-agent',
    term: 'AI Agent',
    explanation:
      'An AI agent is a software system that uses AI to perform tasks or make decisions, often in a way that is similar to how humans would. They can be used to automate repetitive tasks, provide recommendations, or even make decisions in real-time.',
    categories: [Categories.AI],
    related: ['https://en.wikipedia.org/wiki/Agent_(computing)'],
  },
  {
    id: 'database',
    term: 'Database',
    explanation:
      "A database is a collection of structured data stored in a computer system. It's like a library where you can store and organize information in a way that makes it easy to find and use.",
    categories: [Categories.Backend],
    related: ['https://en.wikipedia.org/wiki/Database'],
  },
  {
    id: 'relational-database',
    term: 'Relational Database',
    explanation:
      'A relational database is a type of database that stores data in a structured way, using tables and relationships between them.',
    categories: [Categories.Backend],
    related: ['https://en.wikipedia.org/wiki/Relational_database'],
  },
  {
    id: 'sql',
    term: 'SQL',
    explanation:
      "SQL is a programming language used to manage and manipulate databases. It's like a way to talk to a database and tell it what to do.",
    categories: [Categories.Backend],
    related: ['https://en.wikipedia.org/wiki/SQL'],
  },
  {
    id: 'icp',
    term: 'ICP (Ideal Customer Profile)',
    explanation:
      "ICP is a profile of the ideal customer for a product or service. It's like a description of the perfect customer for a product or service.",
    categories: [Categories.Startup, Categories.Sales, Categories.Marketing],
    related: [],
  },
  {
    id: 'websockets',
    term: 'WebSockets',
    explanation:
      'A way for websites and servers to have a two-way conversation in real-time. Unlike regular web requests where you have to keep asking "any updates?", WebSockets keep the connection open so updates can be sent instantly. ',
    categories: [Categories.WebDevelopment],
    related: ['https://en.wikipedia.org/wiki/WebSocket'],
  },
  {
    id: 'hacktoberfest',
    term: 'Hacktoberfest',
    explanation:
      "A month-long celebration of open source every October. Developers contribute to open source projects on GitHub, and if you make enough quality contributions, you can earn rewards. It's a great way to get started with open source.",
    categories: [Categories.Events],
    related: ['https://hacktoberfest.com/'],
  },
  {
    id: 'ai-slop',
    term: 'AI Slop',
    explanation:
      'Low-effort, mass-produced content cranked out by AI with little quality control. Think generic blog posts, repetitive social media content, or weird AI-generated images flooding the internet.',
    categories: [Categories.AI, Categories.ContentCreation],
    related: ['https://en.wikipedia.org/wiki/AI_slop'],
  },
  {
    id: 'utm',
    term: 'UTM (Urchin Tracking Module)',
    explanation:
      'UTM (Urchin Tracking Module) parameters are small tags you add to a URL to track where website traffic comes from and how people interact with your marketing campaigns.',
    categories: [Categories.Marketing],
    related: ['https://en.wikipedia.org/wiki/UTM_parameters'],
  },
  {
    id: 'vps',
    term: 'VPS (Virtual Private Server)',
    explanation:
      'A VPS is a virtual server that is hosted on a physical server. It is a way to get a dedicated server without the cost of a dedicated server.',
    categories: [Categories.DevOps],
    related: ['https://en.wikipedia.org/wiki/Virtual_private_server'],
  },
  {
    id: 'dns',
    term: 'DNS (Domain Name System)',
    explanation:
      'DNS is a system that translates domain names into IP addresses. It is a way to make it easier to remember and type domain names instead of IP addresses.',
    categories: [Categories.Internet],
    related: ['https://en.wikipedia.org/wiki/Domain_Name_System'],
  },
  {
    id: 'cdn',
    term: 'CDN (Content Delivery Network)',
    explanation:
      'A CDN is a network of servers that deliver content to users based on their geographic location. It is a way to speed up the delivery of content to users.',
    categories: [Categories.DevOps],
    related: ['https://en.wikipedia.org/wiki/Content_delivery_network'],
  },
  {
    id: 'cloudflare',
    term: 'Cloudflare',
    explanation:
      'Cloudflare is a content delivery network and web security company that provides services like DNS, CDN, and DDoS protection.',
    categories: [Categories.DevOps],
    related: ['https://www.cloudflare.com'],
  },
  {
    id: 'class',
    term: 'Class',
    explanation:
      'In object-oriented programming, a class is a blueprint for creating objects. It is a way to group together related data and functions.',
    categories: [Categories.SoftwareEngineering],
    related: ['https://en.wikipedia.org/wiki/Class_(programming)'],
  },
  {
    id: 'object',
    term: 'Object',
    explanation:
      'In object-oriented programming, an object is an instance of a class. It is a way to group together related data and functions.',
    categories: [Categories.SoftwareEngineering],
    related: ['https://en.wikipedia.org/wiki/Object_(computer_science)'],
  },
  {
    id: 'python',
    term: 'Python',
    explanation:
      'Python is a programming language that uses indentation and plain-English-like syntax to structure code, making it the most popular choice for beginners, data scientists, and AI developers.',
    categories: [Categories.SoftwareEngineering],
    related: ['https://www.python.org'],
  },
  {
    id: 'devrel',
    term: 'Developer Relations',
    explanation:
      "A role focused on building relationships between a company and the developer community by creating helpful resources, listening to feedback, and making developers' lives easier.",
    categories: [Categories.Marketing],
    related: ['https://en.wikipedia.org/wiki/Developer_relations'],
  },
  {
    id: 'community-manager',
    term: 'Community Manager',
    explanation:
      'A role that involves keeping an online community running smoothly by welcoming new members, moderating discussions, organizing events, answering questions, and making sure people feel included and want to stick around.',
    categories: [Categories.Marketing],
    related: ['https://en.wikipedia.org/wiki/Community_manager'],
  },
];
