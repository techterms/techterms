export enum Categories {
  'WebDevelopment' = 'web-development',
  'VersionControl' = 'version-control',
  'DevOps' = 'devops',
  'SoftwareArchitecture' = 'software-architecture',
  'Database' = 'database',
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
};
