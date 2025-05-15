import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req) {
  try {
    const { message } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Define a strict prompt to keep the answer focused
    const prompt = `
You are a helpful assistant abou abebe. You know about Abebe Tesfaye, a full-stack developer.
Only answer the user's question if it's clearly asked. Do not provide summaries or guess the intent.
If the question is vague or irrelevant, reply with:
"I'm sorry, I need a clearer question to help you."

Context about Abebe Tesfaye:
- Full-stack developer based in Addis Ababa
- Skilled in React, Node.js, MongoDB
- Built an e-commerce site, a portfolio, and an event booking app
- Currently seeking remote developer opportunities

User: ${message}
Answer:
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    return new Response(JSON.stringify({ reply: text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Gemini error:', err);
    return new Response(
      JSON.stringify({ error: 'Failed to get response from Gemini API' }),
      { status: 500 }
    );
  }
}
