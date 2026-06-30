import { Router } from "express";
import {
  signup,
  login,
  getCurrentUser,
} from "../controllers/auth.controller";
import {
  validateSignup,
  validateLogin,
} from "../middleware/validate";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/signup", validateSignup, signup);
router.post("/login", validateLogin, login);

router.get("/me", authenticate, getCurrentUser);

export default router;