import { Request, Response } from "express";
import { generateContent } from "../services/gemini.service";

export const analyzeATS = async (
  req: Request,
  res: Response
) => {
  try {
    const { resume } = req.body;

    if (!resume) {
      return res.status(400).json({
        success: false,
        message: "Resume content is required",
      });
    }

    const prompt = `
You are an ATS Resume Analyzer.

Analyze the following resume and provide:

1. ATS Score (0-100)
2. Strengths
3. Weaknesses
4. Missing Skills
5. Suggestions for Improvement

Resume:

${resume}
`;

    const analysis = await generateContent(prompt);

    return res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("ATS Analysis Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to analyze resume",
    });
  }
};

export const improveResumeController = async (
  req: Request,
  res: Response
) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText || resumeText.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Resume text is required",
      });
    }

    const prompt = `
You are an expert Resume Writer and ATS Optimization Specialist.

Improve the following resume.

Instructions:
- Improve grammar and wording.
- Rewrite weak bullet points using strong action verbs.
- Make it ATS-friendly.
- Keep the original meaning.
- Do NOT add fake experience, skills, projects, or certifications.
- Format the output in clean Markdown.
- Return ONLY the improved resume.

Resume:

${resumeText}
`;

    const improvedResume = await generateContent(prompt);

    return res.status(200).json({
      success: true,
      data: improvedResume,
    });
  } catch (error) {
    console.error("Resume Improvement Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to improve resume",
    });
  }
};
export const generateSummaryController = async (
  req: Request,
  res: Response
) => {
  try {
    const { jobTitle, skills, experience } = req.body;

    if (!jobTitle || !skills || !experience) {
      return res.status(400).json({
        success: false,
        message: "jobTitle, skills and experience are required.",
      });
    }

    const prompt = `
You are an expert Resume Writer.

Generate a professional resume summary.

Requirements:
- Target Job Title: ${jobTitle}
- Skills: ${
      Array.isArray(skills) ? skills.join(", ") : skills
    }
- Experience:
${experience}

Instructions:
- Write 4-6 professional sentences.
- ATS-friendly.
- Use strong professional language.
- Do not invent fake experience.
- Keep it concise.
- Return only the summary.
`;

    const summary = await generateContent(prompt);

    return res.status(200).json({
      success: true,
      data: summary,
    });
  } catch (error) {
    console.error("Summary Generation Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate summary.",
    });
  }
};
export const generateProjectDescriptionController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      projectTitle,
      technologies,
      features,
    } = req.body;

    if (!projectTitle || !technologies || !features) {
      return res.status(400).json({
        success: false,
        message:
          "projectTitle, technologies and features are required.",
      });
    }

    const prompt = `
You are an expert Resume Writer.

Generate an ATS-friendly project description.

Project Title:
${projectTitle}

Technologies:
${Array.isArray(technologies)
  ? technologies.join(", ")
  : technologies}

Features:
${Array.isArray(features)
  ? features.join("\n")
  : features}

Instructions:

- Write 4–6 professional resume bullet points.
- Begin each bullet with a strong action verb.
- Highlight technical implementation.
- Mention technologies naturally.
- Do NOT invent features.
- Make it ATS-friendly.
- Return only the bullet points.
`;

    const description = await generateContent(prompt);

    return res.status(200).json({
      success: true,
      data: description,
    });
  } catch (error) {
    console.error("Project Description Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate project description.",
    });
  }
};
export const generateCoverLetterController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      jobTitle,
      company,
      skills,
      experience,
    } = req.body;

    if (
      !name ||
      !jobTitle ||
      !company ||
      !skills ||
      !experience
    ) {
      return res.status(400).json({
        success: false,
        message:
          "name, jobTitle, company, skills and experience are required.",
      });
    }

    const prompt = `
You are an expert career coach and resume writer.

Write a professional cover letter.

Candidate Name:
${name}

Job Title:
${jobTitle}

Company:
${company}

Skills:
${Array.isArray(skills) ? skills.join(", ") : skills}

Experience:
${experience}

Instructions:
- Keep it between 250 and 350 words.
- Use a professional tone.
- Highlight relevant skills and experience.
- Do not invent achievements or experience.
- End with a polite closing.
- Return only the cover letter.
`;

    const coverLetter = await generateContent(prompt);

    return res.status(200).json({
      success: true,
      data: coverLetter,
    });
  } catch (error) {
    console.error("Cover Letter Generation Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate cover letter.",
    });
  }
};