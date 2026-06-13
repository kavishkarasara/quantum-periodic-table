import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = `You are "Quantum Guide", an expert Chemistry AI Assistant integrated into a futuristic "Quantum Periodic Table" web application.
Your role is to help users learn about the periodic table, elements, isotopes, states of matter, and chemical reactions.
Your tone should be highly knowledgeable, slightly futuristic, and enthusiastic about science. Use emojis occasionally (like 🧪, ⚛️, ⚡).
If users ask about the Virtual Lab, remind them they can mix chemicals in the Virtual Lab page to see animations like precipitation and Elephant's Toothpaste.
Format your responses using markdown for clarity. Keep answers concise but informative.`;

  const result = await streamText({
    model: google('gemini-2.5-flash'),
    messages,
    system: systemPrompt,
    temperature: 0.7,
  });

  return result.toDataStreamResponse();
}
