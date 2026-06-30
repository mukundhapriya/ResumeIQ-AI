import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

import routes from "./routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(helmet());

app.use(morgan("dev"));

app.use("/api", routes);

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "ResumeIQ AI Backend Running",
  });
});

export default app;