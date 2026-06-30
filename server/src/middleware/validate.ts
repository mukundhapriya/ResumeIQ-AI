import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const signupSchema = z.object({
  name: z.string().trim().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});
const improveResumeSchema = z.object({
  resumeText: z
    .string()
    .trim()
    .min(50, "Resume should contain at least 50 characters.")
    .max(50000, "Resume is too large."),
});

export const validateSignup = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = signupSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: result.error.issues[0].message,
    });
  }

  req.body = result.data;
  next();
};

export const validateLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: result.error.issues[0].message,
    });
  }

  req.body = result.data;
  next();
};
export const validateImproveResume = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = improveResumeSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.issues[0].message,
    });
  }

  req.body = result.data;
  next();
};