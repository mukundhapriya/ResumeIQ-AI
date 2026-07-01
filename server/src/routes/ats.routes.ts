import { Router } from "express";
import { analyzeResume } from "../controllers/ats.controller";
import { upload } from "../config/multer";

const router = Router();

router.post(
  "/analyze",
  upload.single("resume"),
  analyzeResume
);

export default router;