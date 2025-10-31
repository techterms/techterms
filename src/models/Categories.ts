import type { Definition } from './Definition';

export enum Categories {
  'WebDevelopment' = 'web-development',
  'VersionControl' = 'version-control',
  'DevOps' = 'devops',
  'SoftwareArchitecture' = 'software-architecture',
  'Database' = 'database',
  'SoftwareEngineering' = 'software-engineering',
  'Frontend' = 'frontend',
  'Backend' = 'backend',
  'Security' = 'security',
  'ContentCreation' = 'content-creation',
  'Platforms' = 'platforms',
  'Internet' = 'internet',
  'Startup' = 'startup',
  'AI' = 'ai',
  'Sales' = 'sales',
  'Marketing' = 'marketing',
}

type CategoryMetadata = {
  label: string;
};

export const CategoriesMetadata: Record<Categories, CategoryMetadata> = {
  [Categories.WebDevelopment]: {
    label: 'Web Development',
  },
  [Categories.VersionControl]: {
    label: 'Version Control',
  },
  [Categories.DevOps]: {
    label: 'DevOps',
  },
  [Categories.SoftwareArchitecture]: {
    label: 'Software Architecture',
  },
  [Categories.Database]: {
    label: 'Database',
  },
  [Categories.SoftwareEngineering]: {
    label: 'Software Engineering',
  },
  [Categories.Frontend]: {
    label: 'Frontend',
  },
  [Categories.Backend]: {
    label: 'Backend',
  },
  [Categories.Security]: {
    label: 'Security',
  },
  [Categories.ContentCreation]: {
    label: 'Content Creation',
  },
  [Categories.Platforms]: {
    label: 'Platforms',
  },
  [Categories.Internet]: {
    label: 'Internet',
  },
  [Categories.Startup]: {
    label: 'Startup',
  },
  [Categories.AI]: {
    label: 'AI',
  },
  [Categories.Sales]: {
    label: 'Sales',
  },
  [Categories.Marketing]: {
    label: 'Marketing',
  },
};

type CategoryData = {
  key: Categories;
  label: string;
  count: number;
};

export const getAllCategoriesData = (definitions: Definition[]): CategoryData[] =>
  Object.values(Categories).map(category => ({
    key: category,
    label: CategoriesMetadata[category].label,
    count: definitions.filter(def => def.categories.includes(category)).length,
  }));

export const getUsedCategoriesData = (definitions: Definition[]): CategoryData[] =>
  getAllCategoriesData(definitions)
    .filter(category => category.count > 0)
    .sort((a, b) => b.count - a.count);
