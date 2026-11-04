export type TLanguage = 'vi' | 'en';

export interface ILocalized<T = string> {
  vi: T;
  en: T;
}

export interface IProject {
  id: string;
  title: ILocalized;
  description: ILocalized;
  /** Short name used as the section heading. */
  name: string;
  status: ILocalized;
  company: string;
  tags: string[];
  highlights: ILocalized<string[]>;
}

export interface IExperienceItem {
  id: string;
  /** ISO year-month, e.g. "2023-02" */
  start: string;
  /** ISO year-month; omitted while ongoing */
  end?: string;
  role: ILocalized;
  company: string;
  employmentType: ILocalized;
  workplaceType: ILocalized;
  description: ILocalized;
  skills: string[];
}
