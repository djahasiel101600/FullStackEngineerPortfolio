
import { GoogleGenAI } from "@google/genai";
import { PROFILE, SKILLS, PROJECTS } from "../constants";

export const chatWithAssistant = async (history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    You are an AI version of ${PROFILE.name}, a ${PROFILE.role}. 
    Your goal is to answer questions about ${PROFILE.name}'s professional work, skills, and experience.
    
    Context about ${PROFILE.name}:
    - Bio: ${PROFILE.bio}
    - Location: ${PROFILE.location}
    - Skills: ${SKILLS.map(s => s.name).join(', ')}
    - Notable Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}
    
    Guidelines:
    - Be professional, friendly, and slightly witty.
    - If asked about contact info, mention the email: ${PROFILE.email}.
    - If you don't know something specific about the user's personal life, politely refocus on professional skills.
    - Keep answers concise.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topP: 0.8,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting to my brain. Please try again in a moment!";
  }
};
