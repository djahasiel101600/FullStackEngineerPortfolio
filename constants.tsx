import React from "react";
import { Project, Skill, Profile } from "./types";
import SmartShopImage from "./assets/smartshop.png";

export const PROFILE: Profile = {
  name: "Jahasiel Dela Pena",
  role: "Full Stack Engineer",
  bio: "FullStack Engineer specializing in React (TypeScript) and Django REST Framework",
  location: "Butuan City, Philippines",
  email: "djahasiel101600@gmail.com",
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
    image: "https://picsum.photos/seed/shop/800/600",
    tags: ["React", "Django Rest Framework", "SQLite", "Websockets", "Redis"],
    link: "#",
    github: "#",
    category: "fullstack",
  },
  {
    id: "2",
    title: "Smart Attendance & Energy Consumption Tracking System",
    description:
      "Full-stack RFID-based attendance solution featuring real-time tracking.",
    image: "https://picsum.photos/seed/ai/800/600",
    tags: ["Python", "C++", "React", "SQLite"],
    link: "#",
    category: "fullstack",
  },
  {
    id: "3",
    title: "SmartShop Value Comparator",
    description:
      "A simple web app for consumers that compares products using its price and unit to get the best value",
    image: SmartShopImage,
    tags: ["React Typescript"],
    link: "#",
    github: "#",
    category: "frontend",
  },
];
