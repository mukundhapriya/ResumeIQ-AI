export interface ExperienceMatchResult {
  matched: boolean;
  score: number;
  requiredYears: number;
  candidateYears: number;
  matchedRoles: string[];
  missingRoles: string[];
  fresher: boolean;
  projectBasedCandidate: boolean;
}

const ROLE_KEYWORDS = [
  "frontend developer",
  "backend developer",
  "full stack developer",
  "software developer",
  "web developer",
  "react developer",
  "node.js developer",
];

const EXPERIENCE_REGEX =
  /(\d+)\+?\s*(years?|yrs?|months?|mos?)/gi;

export const analyzeExperienceMatch = (
  resumeText: string,
  jobDescription: string
): ExperienceMatchResult => {
  const resume = resumeText.toLowerCase();
  const jd = jobDescription.toLowerCase();

  let requiredYears = 0;
  let candidateYears = 0;

  const jdMatch = EXPERIENCE_REGEX.exec(jd);

  if (jdMatch) {
    const value = Number(jdMatch[1]);

    if (jdMatch[2].startsWith("month")) {
      requiredYears = value / 12;
    } else {
      requiredYears = value;
    }
  }

  EXPERIENCE_REGEX.lastIndex = 0;

  const resumeMatch = EXPERIENCE_REGEX.exec(resume);

  if (resumeMatch) {
    const value = Number(resumeMatch[1]);

    if (resumeMatch[2].startsWith("month")) {
      candidateYears = value / 12;
    } else {
      candidateYears = value;
    }
  }

  const matchedRoles = ROLE_KEYWORDS.filter(
    (role) =>
      resume.includes(role) &&
      jd.includes(role)
  );

  const missingRoles = ROLE_KEYWORDS.filter(
    (role) =>
      jd.includes(role) &&
      !resume.includes(role)
  );

  const fresher = candidateYears === 0;

  const projectBasedCandidate =
    resume.includes("project") ||
    resume.includes("github") ||
    resume.includes("portfolio") ||
    resume.includes("intern");

  let score = 0;

  if (requiredYears === 0) {
    score = 100;
  } else {
    const yearScore = Math.min(
      (candidateYears / requiredYears) * 70,
      70
    );

    const roleScore =
      matchedRoles.length > 0 ? 20 : 0;

    const projectScore =
      fresher && projectBasedCandidate ? 10 : 0;

    score = Math.round(
      yearScore + roleScore + projectScore
    );
  }

  return {
    matched: score >= 60,
    score,
    requiredYears,
    candidateYears,
    matchedRoles,
    missingRoles,
    fresher,
    projectBasedCandidate,
  };
};