const OpenAI = require("openai");

async function getOpenAIResponse({prompt, maxTokens = null, temperature = null}) {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
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