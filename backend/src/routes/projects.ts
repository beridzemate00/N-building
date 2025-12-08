import { Router } from "express";
import { projects } from "../data/projects.js";

export const projectsRouter = Router();

projectsRouter.get("/", (_req, res) => {
  res.json({ items: projects });
});
