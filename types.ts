
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  github?: string;
  linkedin?: string;
  resumeUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
