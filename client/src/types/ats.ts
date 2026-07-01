export interface ATSScoreBreakdown {
  overall: number;
  keywords: number;
  skills: number;
  experience: number;
  education: number;
}

export interface SkillGap {
  required: string[];
  missing: string[];
  matched: string[];
}

export interface ATSAnalysisResult {
  score: ATSScoreBreakdown;

  keywordMatches: string[];
  missingKeywords: string[];

  skillGap: SkillGap;

  education: {
    score: number;
    matched: boolean;
    details: string;
  };

  experience: {
    score: number;
    matched: boolean;
    details: string;
  };

  aiSuggestions: string[];

  resumeText: string;

  extractedKeywords: string[];
}

export interface ATSApiResponse {
  success: boolean;
  data: ATSAnalysisResult;
}