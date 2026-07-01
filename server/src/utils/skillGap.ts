interface SkillCategory {
  matched: string[];
  missing: string[];
}

export interface SkillGapAnalysis {
  technicalSkills: SkillCategory;
  frameworks: SkillCategory;
  backend: SkillCategory;
  databases: SkillCategory;
  tools: SkillCategory;
  apis: SkillCategory;
}

const skillCategories = {
  technicalSkills: [
    "html",
    "css",
    "javascript",
    "typescript",
    "java",
    "python",
  ],

  frameworks: [
    "react",
    "next.js",
    "tailwind",
  ],

  backend: [
    "node.js",
    "express",
  ],

  databases: [
    "sql",
    "mongodb",
    "postgresql",
  ],

  tools: [
    "git",
  ],

  apis: [
    "rest api",
  ],
};

export const analyzeSkillGap = (
  resumeKeywords: string[],
  jdKeywords: string[]
): SkillGapAnalysis => {
  const result: SkillGapAnalysis = {
    technicalSkills: {
      matched: [],
      missing: [],
    },

    frameworks: {
      matched: [],
      missing: [],
    },

    backend: {
      matched: [],
      missing: [],
    },

    databases: {
      matched: [],
      missing: [],
    },

    tools: {
      matched: [],
      missing: [],
    },

    apis: {
      matched: [],
      missing: [],
    },
  };

  (
    Object.keys(skillCategories) as Array<
      keyof typeof skillCategories
    >
  ).forEach((category) => {
    skillCategories[category].forEach((skill) => {
      if (!jdKeywords.includes(skill)) {
        return;
      }

      if (resumeKeywords.includes(skill)) {
        result[category].matched.push(skill);
      } else {
        result[category].missing.push(skill);
      }
    });
  });

  return result;
};