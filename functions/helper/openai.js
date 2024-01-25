const OpenAI = require("openai");

async function getOpenAIResponse({chatHistory, maxTokens = null, temperature = null}) {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    try {
      const completion = await openai.chat.completions.create({
        messages: chatHistory,
        model: "gpt-4",
        max_tokens: maxTokens,
        temperature: temperature
      });
      return completion.choices[0];
    } catch (error) {
      throw error;
    }
  }



module.exports = {getOpenAIResponse}