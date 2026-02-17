import React from "react";
import { Project, Skill, Profile } from "./types";
import SmartShopImage from "./assets/smartshop.png";
import PowerAudit from "./assets/poweraudit.png";
import SariStorePOSImage from "./assets/saristorepos.png";
import Resume from "./assets/Jahasiel_FullStack_Engineer_Resume.pdf";

export const PROFILE: Profile = {
  name: "Jahasiel Dela Pena",
  role: "Full Stack Engineer",
  bio: "FullStack Engineer specializing in React (TypeScript) and Django REST Framework",
  location: "Butuan City, Philippines",
  email: "djahasiel101600@gmail.com",
  github: "https://github.com/djahasiel101600",
  resumeUrl: Resume,
};

export const SKILLS: Skill[] = [
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "TypeScript", icon: "📘", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
  { name: "Python / DRF", icon: "🐍", category: "backend" },
  { name: "PostgreSQL / SQLite", icon: "🐘", category: "backend" },
  { name: "Docker", icon: "🐳", category: "devops" },
  { name: "Redis", icon: "🔴", category: "tools" },
  {
    name: "Gemini / OpenAI / Cursor / Codepilot",
    icon: "🤖",
    category: "tools",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "SariStorePOS",
    description:
      "Full-stack POS system for retail businesses featuring inventory management, barcode scanning, multi-payment methods, batch tracking, shift reconciliation, and real-time analytics. Built with React 19/TypeScript and Django REST Framework",
    image: SariStorePOSImage,
    tags: ["React", "Django Rest Framework", "SQLite", "Websockets", "Redis"],
    link: SariStorePOSImage,
    github: "#",
    category: "fullstack",
  },
  {
    id: "2",
    title: "Power Audit Attendance System",
    description:
      "Full-stack RFID-based attendance solution featuring real-time tracking.",
    image: PowerAudit,
    tags: ["Python", "C++", "React", "SQLite", "Websockets", "Redis", "Celery"],
    link: PowerAudit,
    category: "fullstack",
  },
  {
    id: "3",
    title: "SmartShop Value Comparator",
    description:
      "A simple web app for consumers that compares products using its price and unit to get the best value",
    image: SmartShopImage,
    tags: ["React Typescript"],
    link: SmartShopImage,
    github: "#",
    category: "frontend",
  },
];
