import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const generateContent = async (
  prompt: string
): Promise<string> => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text ?? "";
};

export const improveResume = async (
  resumeText: string
): Promise<string> => {
  const prompt = `
You are an expert Resume Writer and ATS Optimization Specialist.

Improve the following resume.

Instructions:
- Improve grammar and wording.
- Rewrite weak bullet points using strong action verbs.
- Make the resume ATS-friendly.
- Keep the original meaning.
- Do NOT add fake experience, skills, projects, or certifications.
- Format the output in clean Markdown.
- Return ONLY the improved resume.

Resume:

${resumeText}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text ?? "";
};