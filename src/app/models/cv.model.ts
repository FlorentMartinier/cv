export interface CV {
    personalInfo: PersonalInfo;
    experiences: Experience[];
    education: Education[];
    languages: Language[];
    projects: Project[];
  }
  
  export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    birthDate: string;
    nationality: string;
    github: string;
  }
  
  export interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    stack: string[];
  }
  
  export interface Education {
    degree: string;
    school: string;
    year: string;
  }
  
  export interface Language {
    name: string;
    level: string;
  }
  
  export interface Project {
    name: string;
    description: string;
    link: string;
  }