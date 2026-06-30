import { Router } from "express";
import {
  createResume,
  getAllResumes,
  getResumeById,
  updateResume,
  deleteResume,
} from "../controllers/resume.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authenticate, createResume);
router.get("/", authenticate, getAllResumes);
router.get("/:id", authenticate, getResumeById);
router.put("/:id", authenticate, updateResume);
router.delete("/:id", authenticate, deleteResume);

export default router;