import path from "path";
import { extractPdfText } from "./pdf.service";
import { extractKeywords } from "../utils/keywordExtractor";
import { calculateATSScore } from "../utils/atsScore";
import { analyzeSkillGap } from "../utils/skillGap";
import { analyzeEducationMatch } from "../utils/educationMatch";
import { analyzeExperienceMatch } from "../utils/experienceMatch";
import { calculateWeightedATSScore } from "../utils/weightedATSScore";
import { generateATSSuggestions } from "./gemini.service";

export const analyzeResumeService = async (
  filename: string,
  jobDescription: string
) => {
  const filePath = path.join(
    __dirname,
    "../../uploads",
    filename
  );

  const resumeText = await extractPdfText(filePath);

  const resumeKeywords = extractKeywords(resumeText);

  const jdKeywords = extractKeywords(jobDescription);

  // Calculate ATS Score
const score = calculateATSScore(
  resumeKeywords,
  jdKeywords
);

// Analyze Skill Gap
const skillGap = analyzeSkillGap(
  resumeKeywords,
  jdKeywords
);
const educationMatch = analyzeEducationMatch(
  resumeText,
  jobDescription
);
const experienceMatch =
  analyzeExperienceMatch(
    resumeText,
    jobDescription
  );
  const weightedATS =
  calculateWeightedATSScore({
    keywordScore: score.atsScore,
    skillGap,
    educationMatch,
    experienceMatch,
    resumeText,
  });
  const aiSuggestions =
  await generateATSSuggestions({
    weightedATS,
    skillGap,
    educationMatch,
    experienceMatch,
    matchedKeywords: score.matchedKeywords,
    missingKeywords: score.missingKeywords,
  });

return {
  resumeText,
  resumeKeywords,
  jdKeywords,
  skillGap,
  educationMatch,
  experienceMatch,
  weightedATS,
  aiSuggestions,
  ...score,
};
  };