export type Project = {
  id: string;
  title: string;
  location: string;
  year: number;
  tags: string[];
  summary: string;
  cover: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
};
