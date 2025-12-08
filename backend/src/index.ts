import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { contactRouter } from "./routes/contact.js";
import { projectsRouter } from "./routes/projects.js";

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT || 5000);
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`N-building API v2 running on http://localhost:${PORT}`);
});
