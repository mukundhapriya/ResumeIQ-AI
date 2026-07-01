interface EducationResult {
  matched: boolean;
  score: number;
  resumeEducation: string[];
  requiredEducation: string[];
}

const EDUCATION_KEYWORDS = [
  "b.tech",
  "btech",
  "bachelor",
  "master",
  "m.tech",
  "mtech",
  "computer science",
  "information technology",
  "software engineering",
  "computer engineering",
  "electronics",
  "mechanical",
  "civil",
];

export const analyzeEducationMatch = (
  resumeText: string,
  jobDescription: string
): EducationResult => {
  const resume = resumeText.toLowerCase();
  const jd = jobDescription.toLowerCase();

  const resumeEducation = EDUCATION_KEYWORDS.filter((item) =>
    resume.includes(item)
  );

  const requiredEducation = EDUCATION_KEYWORDS.filter((item) =>
    jd.includes(item)
  );

  const matched = requiredEducation.filter((item) =>
    resumeEducation.includes(item)
  );

  const score =
    requiredEducation.length === 0
      ? 100
      : Math.round(
          (matched.length / requiredEducation.length) * 100
        );

  return {
    matched: score >= 50,
    score,
    resumeEducation,
    requiredEducation,
  };
};