import type {
  ResumeContent,
  Education,
  Experience,
  Project,
  Certification,
  Achievement,
} from "./resume";

export interface Skill {
  id: string;
  name: string;
}

export interface ResumeFormData {
  title: string;

  personalInfo: ResumeContent["personalInfo"];

  summary: string;

  education: Education[];

  experience: Experience[];

  projects: Project[];

  certifications: Certification[];

  skills: Skill[];
   achievements: Achievement[];
}