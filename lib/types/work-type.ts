export type WorkLink = {
  title: string;
  link: string;
};

export type WorkItem = {
  id: number;
  company: string;
  position: string;
  badge: string;
  date: string;
  image: string[];
  description: string[];
  link: WorkLink[];
};
