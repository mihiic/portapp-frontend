export interface Language {
  name: string,
  listening: string,
  reading: string,
  spokenInteraction: string,
  spokenProduction: string,
  writing: string
}

export interface PersonalSkills {
  motherLanguage: string,
  languages: Language[],
  drivingLicense: string[]
}

export interface TechnicalSkill {
  name: string,
  level: string, // beginner, intermediate, advanced
  description: string
}

export interface OtherSkill {
  name: string,
  description: string
}
