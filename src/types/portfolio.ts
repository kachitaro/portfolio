export type TLanguage = 'vi' | 'en';

export type TLocalized<T = string> = Record<TLanguage, T>;

/** The kinds of enquiry a visitor can start from; used by service CTAs and the contact form. */
export type TInquiryTopic =
  'web-app' | 'website' | 'design-to-code' | 'api' | 'maintenance' | 'other';

/** A project written as a case study: what it is, why it exists, who did what, how it was built. */
export interface IProject {
  id: string;
  title: TLocalized;
  /** Where it was built and in what role. */
  role: TLocalized;
  /** One sentence: what the product is. */
  overview: TLocalized;
  context: TLocalized;
  /** What I personally built. */
  contribution: TLocalized<string[]>;
  /** What belonged to the rest of the team, so my share is not overstated. */
  team: TLocalized;
  highlights: TLocalized<string[]>;
  tags: string[];
  demoUrl?: string;
  /** Which enquiry the "similar project" CTA starts. */
  topic: TInquiryTopic;
}

export interface IExperienceItem {
  id: string;
  /** 'YYYY-MM'. Used to compute the duration so it never goes stale. */
  start?: string;
  /** 'YYYY-MM'. Omit for the current role. */
  end?: string;
  period: {
    vi: string;
    en: string;
  };
  duration: {
    vi: string;
    en: string;
  };
  role: {
    vi: string;
    en: string;
  };
  company: string;
  employmentType: {
    vi: string;
    en: string;
  };
  workplaceType: {
    vi: string;
    en: string;
  };
  description: {
    vi: string[];
    en: string[];
  };
  skills: string[];
}
