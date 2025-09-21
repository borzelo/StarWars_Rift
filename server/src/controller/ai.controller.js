const { llm } = require("../service/ai.service");

class AiController {
  static async getAnswer(req, res) {
    try {
      const { question } = req.body ?? {};

      if (typeof question !== "string" || question.trim().length === 0) {
        return res.status(400).json({
          success: false,
          message: "Вопрос должен быть непустой строкой.",
        });
      }

      const answerMessage = await llm.invoke([
        [
          "system",
          "Ты ассистент, который отвечает на вопросы по теме - StarWars, если пользователь уводит тему, то возвращай в мир StarWars. Отвечай строго на русском языке",
        ], 
        ["human", question], 
      ]);

      let answerContent = answerMessage?.content;

      if (Array.isArray(answerContent)) {
        answerContent = answerContent
          .map((part) => (typeof part === "string" ? part : part?.text ?? ""))
          .join("\n")
          .trim();
      }

      if (typeof answerContent !== "string") {
        answerContent = String(answerContent ?? "");
      }

      res.json({ success: true, answer: answerContent });
    } catch (error) {
      console.error(
        "[AiController:getAnswer] Ошибка при вызове модели:",
        error
      );

      res.status(500).json({
        success: false,
        message: "Не удалось получить ответ от модели. Попробуйте позже.",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  }
}

module.exports = AiController;
