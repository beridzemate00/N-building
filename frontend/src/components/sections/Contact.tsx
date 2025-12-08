import React, { useState } from "react";
import { Container } from "../layout/Container";
import { api } from "../../api/client";
import { BRAND } from "../../config/brand";
import { useI18n } from "../../i18n/I18nContext";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

export const Contact: React.FC = () => {
  const { t } = useI18n();
  const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const update = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(p => ({ ...p, [k]: e.target.value }));
    };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOk(null);
    setErr(null);
    setLoading(true);

    try {
      const res = await api.post("/api/contact", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message
      });
      if (res.data?.ok) {
        setOk(t<string>("contact.ok"));
        setForm(initial);
      } else {
        setErr("Something went wrong. Please try again.");
      }
    } catch (e: any) {
      const msg = e?.response?.data?.error || t<string>("contact.errFallback");
      setErr(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50/50">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="text-sm font-semibold text-brand-600">
              {t<string>("contact.label")}
            </span>
            <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">
              {t<string>("contact.title")}
            </h2>
            <p className="mt-4 text-slate-600">
              {t<string>("contact.text")}
            </p>

            <div className="mt-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-slate-900">
                {t<string>("contact.typicalTitle")}
              </div>
              <div className="text-sm text-slate-600 mt-1">
                {t<string>("contact.typicalText")}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-brand-50 p-3">
                  <div className="text-xs text-slate-500">
                    {t<string>("contact.scopeLabel")}
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    {t<string>("contact.scopeValue")}
                  </div>
                </div>
                <div className="rounded-2xl bg-brand-50 p-3">
                  <div className="text-xs text-slate-500">
                    {t<string>("contact.areaLabel")}
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    {BRAND.serviceAreas.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-soft">
            <div className="grid gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-600">
                  {t<string>("contact.form.name")}
                </label>
                <input
                  value={form.name}
                  onChange={update("name")}
                  required
                  minLength={2}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-200"
                  placeholder={t<string>("contact.form.namePh")}
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  {t<string>("contact.form.email")}
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-200"
                  placeholder={t<string>("contact.form.emailPh")}
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  {t<string>("contact.form.phone")}
                </label>
                <input
                  value={form.phone}
                  onChange={update("phone")}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-200"
                  placeholder={t<string>("contact.form.phonePh")}
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  {t<string>("contact.form.message")}
                </label>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  required
                  minLength={10}
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-200"
                  placeholder={t<string>("contact.form.msgPh")}
                />
              </div>

              {ok && (
                <div className="rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-2 text-sm text-emerald-700">
                  {ok}
                </div>
              )}
              {err && (
                <div className="rounded-xl bg-rose-50 border border-rose-100 px-3 py-2 text-sm text-rose-700">
                  {err}
                </div>
              )}

              <button
                disabled={loading}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-soft bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-60 transition"
              >
                {loading ? t<string>("buttons.sending") : t<string>("buttons.send")}
              </button>

              <p className="text-xs text-slate-400">
                {t<string>("contact.demoNote")}
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};
