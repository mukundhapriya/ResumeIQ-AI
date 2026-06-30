export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  cgpa: string;
}

export interface Experience {
  id: string;
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Technology {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  github: string;
  liveDemo: string;
}
export interface Skill {
  id: string;
  name: string;
}

export interface ResumeContent {
  personalInfo: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  certifications: Certification[];
}

export interface Resume {
  id: string;
  title: string;
  content: ResumeContent;
  createdAt: string;
}
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
}
export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}