import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as
  | string
  | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
  | string
  | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
  | string
  | undefined;

export type QuotePayload = {
  name: string;
  contact: string;
  projectType?: string;
  message: string;
};

export function canSendEmail() {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}

export async function sendQuoteEmail(payload: QuotePayload) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS env vars are missing");
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: payload.name,
      contact: payload.contact,
      projectType: payload.projectType ?? "Not specified",
      message: payload.message,
      source: "N-building website",
    },
    { publicKey: PUBLIC_KEY }
  );
}
