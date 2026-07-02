import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import atsRoutes from "./routes/ats.routes";
import routes from "./routes";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://resume-iq-ai-chi.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api", routes);
app.use("/api/ats", atsRoutes);

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "ResumeIQ AI Backend Running",
  });
});

export default app;