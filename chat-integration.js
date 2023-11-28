const OpenAI = require("openai");

const openai = new OpenAI();

const chat = async (mensagem) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: mensagem }],
    model: "gpt-4-1106-preview",
  });

  return completion.choices[0].message.content;
}

module.exports = chat;
