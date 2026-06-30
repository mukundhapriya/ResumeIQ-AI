import { Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middleware/auth.middleware";

export const createResume = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { title } = req.body;

    const resume = await prisma.resume.create({
      data: {
        title,
        content: {},
        userId: req.user!.userId,
      },
    });

    return res.status(201).json(resume);
  } catch {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getAllResumes = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const resumes = await prisma.resume.findMany({
      where: {
        userId: req.user!.userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      count: resumes.length,
      resumes,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getResumeById = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const resume = await prisma.resume.findFirst({
      where: {
        id,
        userId: req.user!.userId,
      },
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    return res.status(200).json({
      success: true,
      resume,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const updateResume = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const id = req.params.id as string;
    const { title, content } = req.body;

    const existingResume = await prisma.resume.findFirst({
      where: {
        id,
        userId: req.user!.userId,
      },
    });

    if (!existingResume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    const updatedResume = await prisma.resume.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Resume updated successfully",
      resume: updatedResume,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const deleteResume = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const existingResume = await prisma.resume.findFirst({
      where: {
        id,
        userId: req.user!.userId,
      },
    });

    if (!existingResume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    await prisma.resume.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Resume deleted successfully",
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};