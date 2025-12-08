import { motion } from "framer-motion";
import { SITE } from "../../data/site";
import { Container } from "../common/Container";
import { scrollToId } from "../../utils/scroll";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <motion.div
      id="mobile-menu"
      initial={false}
      animate={open ? "open" : "closed"}
      variants={{
        open: { height: "auto", opacity: 1 },
        closed: { height: 0, opacity: 0 },
      }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden md:hidden"
    >
      <Container>
        <div className="pb-4">
          <div className="grid gap-1 rounded-2xl border border-brand-100 bg-white p-2">
            {SITE.nav.map((n) => (
              <button
                key={n.id}
                onClick={() => {
                  scrollToId(n.id);
                  onClose();
                }}
                className="rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {n.label}
              </button>
            ))}

            <button
              onClick={() => {
                scrollToId("contact");
                onClose();
              }}
              className="mt-1 rounded-xl bg-brand-500 px-3 py-2 text-left text-sm font-semibold text-white"
            >
              Get a quote
            </button>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
