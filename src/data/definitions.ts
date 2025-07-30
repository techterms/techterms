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
    related: ['https://git-scm.com/', 'https://github.com/'],
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
    related: ['https://developer.mozilla.org/en-US/docs/Web/CSS'],
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
];
