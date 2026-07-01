import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing in .env");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export const generateATSSuggestions = async (
  analysis: any
) => {
  const prompt = `
You are an expert ATS Resume Reviewer.

Return ONLY valid JSON.

Do not use markdown.
Do not wrap the response inside \`\`\`.

ATS Report:
${JSON.stringify(analysis, null, 2)}

Return JSON in this exact format:

{
  "summary": "",
  "strengths": [],
  "improvements": [],
  "priority": ""
}
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  try {
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (error) {
    console.error("Gemini Raw Response:", text);

    return {
      summary: "Unable to generate AI suggestions.",
      strengths: [],
      improvements: [],
      priority: "Medium",
    };
  }
};