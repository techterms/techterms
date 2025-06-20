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
];
