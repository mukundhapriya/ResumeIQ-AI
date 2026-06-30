import { Router } from "express";

import authRoutes from "./auth.routes";
import resumeRoutes from "./resume.routes";
import aiRoutes from "./ai.routes";

const router = Router();

router.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
  });
});

router.use("/auth", authRoutes);
router.use("/resumes", resumeRoutes);
router.use("/ai", aiRoutes);

export default router;