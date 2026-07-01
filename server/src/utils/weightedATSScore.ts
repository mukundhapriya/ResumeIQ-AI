import { SkillGapAnalysis } from "./skillGap";
import { ExperienceMatchResult } from "./experienceMatch";

interface EducationMatch {
  score: number;
}

interface WeightedATSInput {
  keywordScore: number;
  skillGap: SkillGapAnalysis;
  educationMatch: EducationMatch;
  experienceMatch: ExperienceMatchResult;
  resumeText: string;
}

export interface WeightedATSResult {
  keywordScore: number;
  skillScore: number;
  educationScore: number;
  experienceScore: number;
  completenessScore: number;
  weightedATSScore: number;
}
const calculateSkillScore = (
  skillGap: SkillGapAnalysis
): number => {
  let matched = 0;
  let total = 0;

  Object.values(skillGap).forEach((category) => {
    matched += category.matched.length;
    total += category.matched.length + category.missing.length;
  });

  if (total === 0) return 100;

  return Math.round((matched / total) * 100);
};

const calculateCompleteness = (
  resumeText: string
): number => {
  const text = resumeText.toLowerCase();

  const sections = [
    "summary",
    "education",
    "experience",
    "skills",
    "projects",
    "certification",
    "personal",
  ];

  let found = 0;

  sections.forEach((section) => {
    if (text.includes(section)) {
      found++;
    }
  });

  return Math.round((found / sections.length) * 100);
};
export const calculateWeightedATSScore = ({
  keywordScore,
  skillGap,
  educationMatch,
  experienceMatch,
  resumeText,
}: WeightedATSInput): WeightedATSResult => {
  const skillScore = calculateSkillScore(skillGap);

  const completenessScore =
    calculateCompleteness(resumeText);

  const educationScore = educationMatch.score;

  const experienceScore =
    experienceMatch.score;

  const weightedATSScore = Math.round(
    keywordScore * 0.4 +
      skillScore * 0.2 +
      educationScore * 0.15 +
      experienceScore * 0.15 +
      completenessScore * 0.1
  );

  return {
    keywordScore,
    skillScore,
    educationScore,
    experienceScore,
    completenessScore,
    weightedATSScore,
  };
};