import { Request, Response } from "express";
import { analyzeResumeService } from "../services/ats.service";

export const analyzeResume = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required",
      });
    }

    const { jobDescription } = req.body;

console.log(req.body);
console.log("Job Description:", jobDescription);

const result = await analyzeResumeService(
  req.file.filename,
  jobDescription
);
    return res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};