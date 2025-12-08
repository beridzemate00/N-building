import { useEffect, useMemo, useState } from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

import { Container } from "../../common/Container";
import { SectionTitle } from "../../common/SectionTitle";
import { Toast, type ToastState } from "../../common/Toast";

import { buildWhatsAppLink } from "../../../utils/whatsapp";
import { canSendEmail, sendQuoteEmail } from "../../../utils/emailjs";
import { useI18n } from "../../../i18n/useI18n";
function isEmail(v: string) {
  return /\S+@\S+\.\S+/.test(v);
}
function isPhone(v: string) {
  return /[\d+()\-\s]{6,}/.test(v);
}

export function ContactSection() {
  const { c } = useI18n();

  const WA_NUMBER =
    (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ||
    c.contact.phone;

  const whatsappLink = useMemo(
    () => buildWhatsAppLink(WA_NUMBER, `${c.brand.name}: ${c.quoteModal.title}`),
    [WA_NUMBER, c.brand.name, c.quoteModal.title]
  );

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [projectType, setProjectType] = useState<string>("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (name.trim().length < 2) e.name = "Name is too short";
    if (!(isEmail(contact) || isPhone(contact)))
      e.contact = "Enter phone or email";
    if (message.trim().length < 10) e.message = "Message is too short";
    return e;
  }, [name, contact, message]);

  const isValid = Object.keys(errors).length === 0;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isValid) {
      setToast({
        type: "error",
        title: "Please check the form",
        subtitle: "Fill name, contact, and a short project description.",
      });
      return;
    }

    if (!canSendEmail()) {
      setToast({
        type: "error",
        title: "Email service not configured",
        subtitle: "Add EmailJS env keys to enable sending.",
      });
      return;
    }

    try {
      setSending(true);

      await sendQuoteEmail({
        name: name.trim(),
        contact: contact.trim(),
        projectType: projectType || undefined,
        message: message.trim(),
      });

      setToast({
        type: "success",
        title: "Request sent",
        subtitle: "We’ll contact you soon.",
      });

      setName("");
      setContact("");
      setProjectType("");
      setMessage("");
    } catch {
      setToast({
        type: "error",
        title: "Could not send request",
        subtitle: "Try WhatsApp or call us directly.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-14 md:py-20">
      <Container>
        <SectionTitle
          eyebrow={c.sections.contact.eyebrow}
          title={c.sections.contact.title}
          subtitle={c.sections.contact.subtitle}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Info card */}
          <div className="rounded-3xl border border-brand-100 bg-white p-6">
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-brand-50 p-2">
                  <Phone className="h-4 w-4 text-brand-700" />
                </div>
                <span>{c.contact.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-brand-50 p-2">
                  <Mail className="h-4 w-4 text-brand-700" />
                </div>
                <span>{c.contact.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-brand-50 p-2">
                  <MapPin className="h-4 w-4 text-brand-700" />
                </div>
                <span>{c.contact.address}</span>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            <div className="mt-6 h-44 rounded-2xl border border-brand-100 bg-gradient-to-br from-white to-brand-50" />
            <div className="mt-2 text-[10px] text-slate-500">
              {c.contact.mapNote}
            </div>
          </div>

          {/* Form card */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-brand-100 bg-white p-6"
          >
            <div className="grid gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={[
                  "rounded-xl border px-4 py-3 text-sm outline-none",
                  errors.name
                    ? "border-amber-300 focus:border-amber-400"
                    : "border-brand-100 focus:border-brand-300",
                ].join(" ")}
                placeholder={c.contact.placeholders.name}
              />

              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className={[
                  "rounded-xl border px-4 py-3 text-sm outline-none",
                  errors.contact
                    ? "border-amber-300 focus:border-amber-400"
                    : "border-brand-100 focus:border-brand-300",
                ].join(" ")}
                placeholder={c.contact.placeholders.contact}
              />

              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="rounded-xl border border-brand-100 px-4 py-3 text-sm outline-none focus:border-brand-300"
              >
                <option value="">{c.quoteModal.projectTypeLabel}</option>
                {c.contact.projectTypes.map((p: string) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={[
                  "min-h-[120px] rounded-xl border px-4 py-3 text-sm outline-none",
                  errors.message
                    ? "border-amber-300 focus:border-amber-400"
                    : "border-brand-100 focus:border-brand-300",
                ].join(" ")}
                placeholder={c.contact.placeholders.desc}
              />

              <button
                disabled={sending}
                className={[
                  "rounded-xl px-5 py-3 text-sm font-semibold text-white transition",
                  sending ? "bg-brand-300" : "bg-brand-500 hover:bg-brand-600",
                ].join(" ")}
              >
                {sending ? "Sending..." : c.hero.primaryCta}
              </button>

              <div className="text-[10px] text-slate-500">
                {canSendEmail()
                  ? c.contact.demoNote.replace("Demo", "Live")
                  : c.contact.demoNote}
              </div>
            </div>
          </form>
        </div>
      </Container>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </section>
  );
}
