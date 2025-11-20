
export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  dates: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  dates: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 5
}

export interface ProjectItem {
  title: string;
  description: string;
  dates: string;
  techStack?: string[];
}

export interface CertificateItem {
  name: string;
  issuer: string;
  url: string;
  imageUrl: string;
}

export interface VolunteerItem {
  role: string;
  organization: string;
  dates: string;
  description: string;
}

export interface ReferenceItem {
  name: string;
  title: string;
  institution: string;
  contact: string;
}

export interface TestimonialItem {
  name: string;
  organization: string;
  position: string;
  quote: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolio: string;
  resume: string;
  title: string;
  profile: string;
}

export interface UIStrings {
  nav: {
    about: string;
    expertise: string;
    skills: string;
    projects: string;
    experience: string;
    certificates: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    portfolio: string;
    github: string;
    linkedin: string;
    resumeBtn: string;
    contactBtn: string;
  };
  about: {
    title: string;
    interestsTitle: string;
  };
  expertise: {
    title: string;
    subtitle: string;
  };
  skills: {
    technicalTitle: string;
    softTitle: string;
    techSubtitle: string;
    softSubtitle: string;
    languagesTitle: string;
  };
  projects: {
    title: string;
    featured: string;
  };
  certificates: {
    title: string;
    subtitle: string;
    verifyBtn: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    readMore: string;
    close: string;
  };
  experience: {
    workTitle: string;
    eduTitle: string;
    volTitle: string;
    volSubtitle: string;
  };
  contact: {
    titleGet: string;
    titleTouch: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    referencesTitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    msgLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    sentBtn: string;
  };
  footer: {
    rights: string;
    designed: string;
  };
}

export interface Content {
  personalInfo: PersonalInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  skillsTech: SkillItem[];
  skillsSoft: string[];
  languages: string[];
  projects: ProjectItem[];
  certificates: CertificateItem[];
  volunteering: VolunteerItem[];
  references: ReferenceItem[];
  testimonials: TestimonialItem[];
  services: ServiceItem[];
  interests: string[];
  ui: UIStrings;
}
