type subRole = {
  title: string;
  featuredResponsabilities: string[];
  from: string;
  to: string;
};

export type ExperienceItem = {
  title: string;
  from: string;
  to: string;
  company: {
    name: string;
    link?: string;
  };
  featuredResponsabilities: string[];
  subRoles?: subRole[];
};
