import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export type ToastState =
  | { type: "success"; title: string; subtitle?: string }
  | { type: "error"; title: string; subtitle?: string }
  | null;

export function Toast({
  toast,
  onClose,
}: {
  toast: ToastState;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.18 }}
          className="fixed bottom-4 right-4 z-[70] w-[92vw] max-w-sm rounded-2xl border border-brand-100 bg-white p-4 shadow-soft"
          role="status"
        >
          <div className="flex gap-3">
            <div className="mt-0.5">
              {toast.type === "success" ? (
                <CheckCircle2 className="h-5 w-5 text-brand-600" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-900">
                {toast.title}
              </div>
              {toast.subtitle && (
                <div className="mt-0.5 text-xs text-slate-600">
                  {toast.subtitle}
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="rounded-lg px-2 text-xs font-semibold text-slate-500 hover:bg-brand-50"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
