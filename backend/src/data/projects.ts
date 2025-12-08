export type Project = {
  id: string;
  title: string;
  location: string;
  year: number;
  tags: string[];
  summary: string;
  cover: string;
};

export const projects: Project[] = [
  {
    id: "nb-01",
    title: "Apartment Full Refresh",
    location: "Batumi",
    year: 2024,
    tags: ["Painting", "Plastering", "Doors"],
    summary: "Smooth wall restoration, modern paint palette, and door alignment & hardware upgrade.",
    cover: "/projects/p1.svg"
  },
  {
    id: "nb-02",
    title: "Kitchen & Bathroom Fixes",
    location: "Tbilisi",
    year: 2023,
    tags: ["Plumbing", "Electrical"],
    summary: "Leak repair, fixture replacement, lighting upgrade, and safe outlet rework with clean finishing.",
    cover: "/projects/p2.svg"
  },
  {
    id: "nb-03",
    title: "Office Layout Update",
    location: "Kutaisi",
    year: 2022,
    tags: ["Wall Changes", "Painting"],
    summary: "Partition removal for open space, surface leveling, and bright professional interior repaint.",
    cover: "/projects/p3.svg"
  },
  {
    id: "nb-04",
    title: "Hallway & Entry Upgrade",
    location: "Batumi",
    year: 2024,
    tags: ["Painting", "Electrical"],
    summary: "New lighting, switch upgrades, and a clean, durable paint system for high-traffic areas.",
    cover: "/projects/p4.svg"
  }
];
