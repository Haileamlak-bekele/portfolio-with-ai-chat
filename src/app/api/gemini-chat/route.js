// File: src/app/api/gemini-chat/route.js
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req) {
  try {
    const { message } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const context = `
👤 Profile:
Name: Haileamalk Bekele Ayalew
Location: Addis Ababa, Ethiopia
Role: Full-Stack Developer
Experience: 1+ years building scalable web and mobile applications
Seeking: Remote full-stack developer opportunities

🎓 Education:
- student at Debre Markos University, Ethiopia
- Bachelor of Software Engineering (Expected Graduation: June 2025)
  - Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering
  - Capstone Project: Developed a merchant delivery platform using MERN stack which track orders in real-time.
  - Achievements: will Gratuate soon with a strong academic record and practical project experience., 

🧠 Skills:
- Frontend: React.js, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+)
- Backend: Node.js, Express.js, RESTful APIs
- Databases: MongoDB, SQL (PostgreSQL)
- Mobile: React Native
- Tools & DevOps: Git, GitHub, Vercel, Postman, 
- State Management: Redux Toolkit, Context API
- Animations: Framer Motion
- Testing: Jest (basic), Manual testing
- Languages: English (fluent), Amharic (fluent)

📦 Projects:
1. **E-Commerce Platform-shoe shop**
   - Stack: HTML, CSS, JavaScript
   - Features: Product listing, cart
   - Role: Full development from scratch
   - Live: https://shoe-shope-project-mmpl-53g4o8c5c-haileamlak-bekeles-projects.vercel.app

2. **AI integrated-Portfolio Website**
   - Stack: Next.js, Tailwind CSS, Framer Motion
   - Features: Animated sections, responsive design, contact form
   - Purpose: Personal branding and project showcase
   - Hosted on: Vercel

3. **Amole wallet app**
   - Platform: React Native
   - Features: Browse events, book tickets, payment integration, transfer to wallet
   - Role: Mobile app developer + API integration
   -github: 

   4. **Merchant Delivery Platform**
    - Stack: MERN (MongoDB, Express.js, React.js, Node.js)
    - Features: Real-time order tracking, merchant dashboard, user authentication
    - Role: Full-stack developer
    - Status: In development, expected completion by may 2025
    - GitHub:
5. **movie Website**
    - Stack: HTML,CSS, JavaScript, free APIs (The Movie Database API)
    - Features: Tranding Movie listings, search functionality, responsive design, movie recommendations based on user selected movie
    - Role: Full development from scratch
    - Live: https://haileamlak-bekele.github.io/HB-movie-center/

🎯 Strengths:
- Strong UI/UX focus
- Rapid learner and passionate problem solver
- Experience working in agile environments
- Able to collaborate effectively on Git-based teams

📈 Career Goals:
- Contribute to impactful projects in remote teams
- Expand into cloud-native and scalable architectures (learning AWS)

💬 Fun Fact:
Haileamalk enjoys reading tech blogs and mentoring junior devs occasionally. 
- He is a fan of the Marvel Cinematic Universe and enjoys discussing tech trends and innovations.
- He is also a football enthusiast and enjoys playing and watching matches in his free time.
- He is a spiritual person and enjoys reading the Bible.
`;


    const prompt = `
You are a helpful assistant answering questions about Haileamlak Bekele. you are embeded in his portfolio.
Use the context below to provide specific, clear, and complete answers.

${context}

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
