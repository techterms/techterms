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
];
