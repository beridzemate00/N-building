export function buildWhatsAppLink(phone: string, text?: string) {
    const normalized = phone.replace(/[^\d]/g, "");
    const base = `https://wa.me/${normalized}`;
    if (!text) return base;
  
    const msg = encodeURIComponent(text);
    return `${base}?text=${msg}`;
  }
  