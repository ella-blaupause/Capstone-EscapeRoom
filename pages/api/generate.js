import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(request, response) {
  if (!configuration.apiKey) {
    response.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      },
    });
    return;
  }

  const question = request.body.question || "";
  if (question.trim().length === 0) {
    response.status(400).json({
      error: {
        message: "Bitte gib eine Frage ein!",
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(question),
      temperature: 0.5,
    });
    response.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      response.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      response.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(question) {
  const capitalizedQuestion =
    question[0].toUpperCase() + question.slice(1).toLowerCase();
  return `Gib 2 mögliche Antworten.

 Frage:Welches Körperteil ermöglicht es uns, zu hören?
Antwort: Ohr oder Gehör
Frage: ${capitalizedQuestion}
Antwort:`;
}
