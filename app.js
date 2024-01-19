import express from 'express';
import { listModels, callCompletionAPI, callChatAPI } from './lib/openai.js';

const app = express();

app.get(
    '/list-models',
    // Display a list of available models from the OpenAI API
    async (req, res) => {
        res.send(await listModels());
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