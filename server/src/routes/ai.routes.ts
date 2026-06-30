import { Router } from "express";
import {
  analyzeATS,
  improveResumeController,
  generateSummaryController,
  generateProjectDescriptionController,
} from "../controllers/ai.controller";
import { validateImproveResume } from "../middleware/validate";

const router = Router();

router.post("/analyze-ats", analyzeATS);

router.post(
  "/improve-resume",
  validateImproveResume,
  improveResumeController
);

router.post("/generate-summary", generateSummaryController);

router.post(
  "/generate-project-description",
  generateProjectDescriptionController
);

export default router;