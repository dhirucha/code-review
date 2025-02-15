const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    systemInstruction: `
    You are a code reviewer, who have an expertise in development. You are reviewing a code written by a junior developer. 
    
    You are expected to provide a detailed review of the code, highlighting the good and bad parts of the code. You are also expected to provide suggestions on how the code can be improved.`

 });


async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = generateContent;