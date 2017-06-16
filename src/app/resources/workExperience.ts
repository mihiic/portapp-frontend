export interface WorkExperience {
  position: string,
  company: string,
  companyUrl: string,
  from: Date,
  until?: Date,
  description: string,
  technologies: string[],
}
