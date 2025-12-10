import { Router } from "express";
import { z } from "zod";
import { messages } from "../memory/messages.js";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  phone: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(10).max(2000)
});

export const contactRouter = Router();

contactRouter.post("/", (req, res) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: "Invalid form data",
      details: parsed.error.flatten()
    });
  }

  const data = parsed.data;

  const newMsg = {
    id: crypto.randomUUID(),
    name: data.name,
    email: data.email,
    phone: data.phone || undefined,
    message: data.message,
    createdAt: new Date().toISOString()
  };

  messages.push(newMsg);

  console.log("--- New Quote Received ---");
  console.log(newMsg);
  console.log("--------------------------");

  return res.status(201).json({ ok: true, id: newMsg.id });
});

// Lightweight admin read endpoint (demo token)
contactRouter.get("/", (req, res) => {
  const token = (req.headers["x-admin-token"] as string | undefined) || "";
  const required = process.env.ADMIN_TOKEN || "demo-admin";

  if (token !== required) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.json({ items: messages });
});
