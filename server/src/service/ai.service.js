const { ChatTogetherAI } = require("@langchain/community/chat_models/togetherai");
require("dotenv").config();

const llm = new ChatTogetherAI({
  apiKey: process.env.TOGETHER_API_KEY,
  model: process.env.AI_MODEL, 
  temperature: 0.6, 
  maxTokens: 300, 
});

module.exports = { llm };
