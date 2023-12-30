import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();

const configuration = new Configuration({
    organization: "org-YDjGzb9KxiTEXETZAGLM0EAx",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{"role":"user", "content": "Hello, how are you?"}],
})
console.log(response.data.data);