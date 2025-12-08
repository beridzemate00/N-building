import React, { useState } from "react";
import { Container } from "../components/layout/Container";
import { api } from "../api/client";
import type { ContactMessage } from "../types";
import { useI18n } from "../i18n/I18nContext";

export const AdminPage: React.FC = () => {
  const { t } = useI18n();
  const [token, setToken] = useState(import.meta.env.VITE_ADMIN_TOKEN || "demo-admin");
  const [items, setItems] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get("/api/contact", {
        headers: { "x-admin-token": token }
      });
      setItems(res.data.items || []);
    } catch (e: any) {
      setItems([]);
      setError(e?.response?.data?.error || "Unauthorized or server unavailable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10">
      <Container>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <span className="text-sm font-semibold text-brand-600">
              {t<string>("buttons.admin")}
            </span>
            <h1 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              {t<string>("admin.title")}
            </h1>
            <p className="text-sm text-slate-600 mt-2">
              {t<string>("admin.subtitle")}
            </p>
          </div>
          <a
            href="/"
            className="text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            ← Home
          </a>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
          <div className="grid md:grid-cols-[1fr_auto] gap-3 items-end">
            <div>
              <label className="text-xs font-semibold text-slate-600">
                {t<string>("admin.tokenLabel")}
              </label>
              <input
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-200"
                placeholder={t<string>("admin.tokenPh")}
              />
            </div>
            <button
              onClick={load}
              disabled={loading || token.trim().length === 0}
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-soft bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-60 transition"
            >
              {loading ? t<string>("admin.loading") : t<string>("admin.load")}
            </button>
          </div>

          {error && (
            <div className="mt-4 rounded-xl bg-rose-50 border border-rose-100 px-3 py-2 text-sm text-rose-700">
              {error}
            </div>
          )}

          <div className="mt-6 grid gap-3">
            {!loading && items.length === 0 && !error && (
              <div className="text-sm text-slate-500">
                {t<string>("admin.empty")}
              </div>
            )}

            {items.map(m => (
              <div key={m.id} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex flex-wrap items-center gap-2 justify-between">
                  <div className="text-sm font-semibold text-slate-900">
                    {m.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {new Date(m.createdAt).toLocaleString()}
                  </div>
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  {m.email} {m.phone ? `• ${m.phone}` : ""}
                </div>
                <p className="mt-3 text-sm text-slate-700 whitespace-pre-wrap">
                  {m.message}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-6">
          Demo admin: secure this properly before real deployment.
        </p>
      </Container>
    </div>
  );
};
