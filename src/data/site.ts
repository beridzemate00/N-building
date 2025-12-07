export const SITE = {
    name: "N-building",
    tagline: "Modern construction. Reliable results.",
    locationShort: "Georgia • Residential & Commercial",
  
    nav: [
      { id: "services", label: "Services" },
      { id: "projects", label: "Projects" },
      { id: "about", label: "About" },
      { id: "process", label: "Process" },
      { id: "contact", label: "Contact" },
    ],
  
    stats: [
      { label: "Years experience", value: "10+" },
      { label: "Projects delivered", value: "120+" },
      { label: "Quality focus", value: "High" },
    ],
  
    services: [
      {
        title: "Residential projects",
        text: "Villas, apartments, renovations, premium finishes, energy-smart upgrades.",
        bullets: ["Turnkey delivery", "Cost control", "Modern aesthetics"],
      },
      {
        title: "Commercial & retail",
        text: "Stores, offices, hospitality. We align design, permitting, and build phases.",
        bullets: ["Fast track options", "Brand-aligned fitout", "Minimal downtime"],
      },
      {
        title: "Industrial & civil",
        text: "Warehouses, structural works, site infrastructure with strong safety governance.",
        bullets: ["Engineering-led", "Compliance focus", "Lifecycle thinking"],
      },
    ],
  
    projects: [
      {
        name: "Coastal Residence",
        tag: "Residential",
        note: "Modern villa concept with durable materials and clean geometry.",
      },
      {
        name: "City Retail Fitout",
        tag: "Commercial",
        note: "Brand-first interior layout optimized for customer flow.",
      },
      {
        name: "Logistics Hub",
        tag: "Industrial",
        note: "Structural + infrastructure planning for long-term performance.",
      },
    ],
  
    process: [
      { title: "Consultation", text: "Goals, budget, feasibility, timeline." },
      { title: "Design & Planning", text: "Concept, estimates, materials, permits." },
      { title: "Build", text: "Site execution with QA and reporting." },
      { title: "Handover", text: "Final checks, documentation, warranty." },
    ],
  
    contact: {
      phone: "+995 555 70 70 35",
      email: "",
      address: "Batumi / Tbilisi (add exact address)",
    },
  } as const;
  