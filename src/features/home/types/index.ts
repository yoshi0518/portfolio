export type ParticleType = {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
};

import type { MicroCMSObjectContent } from 'microcms-js-sdk';

export type WorkType = {
  fieldId: string;
  title: string;
  image: {
    url: string;
  };
  description: string;
  tags: string[];
  github: string;
  demo: string;
};

export type SkillType = {
  fieldId: string;
  title: string;
  icons: {
    fieldId: string;
    name: string;
    src: string;
  }[];
};

export type ExperienceType = {
  fieldId: string;
  title: string;
  company: string;
  location: string;
  period: string;
  overview: string;
  details: {
    fieldId: string;
    detail: string;
  }[];
};

export type PortfolioType = {
  about: string;
  works: WorkType[];
  skills: SkillType[];
  experiences: ExperienceType[];
} & MicroCMSObjectContent;
