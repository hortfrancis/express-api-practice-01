import express from 'express';
import {
    listModels,
    promptChatAPI,
    callCompletionAPI,
    callChatAPI
} from './lib/openai.js';

const app = express();

// Middleware 
app.use(express.json());

app.get(
    '/list-models',
    // Display a list of available models from the OpenAI API
    async (req, res) => {
        res.send(await listModels());
    }
)

app.post(
    '/chat-input',
    // Chat response to user prompt input
    async (req, res) => {
        const data = req.body;
        res.send(await promptChatAPI(data.message));
    }
)

app.get(
    '/chat-completion',
    // Return a default chat completion from the OpenAI API
    // Model: GPT-3.5 
    async (req, res) => {
        res.send(await callChatAPI())
    }
)

app.get(
    '/completion',
    // Return a text default completion from the OpenAI API
    async (req, res) => {
        res.send(await callCompletionAPI());
    }
);

export default app;