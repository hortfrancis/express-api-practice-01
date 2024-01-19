import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

// Check which AI models are available from the OpenAI API 
async function listModels() {

    const list = await openai.models.list();

    const models = [];
    for await (const model of list) {
        models.push(model);
    }
    return models;
}

// Basic text completion model: disjointed responses
async function callCompletionAPI() {
    const completion = await openai.completions.create({
        model: 'davinci-002',
        prompt: 'Give me bad news in a lighthearted way.',
        max_tokens: 60,
        temperature: 1,
    });

    return completion.choices[0].text;
}

// Basic chat completion model: GPT-3.5
async function callChatAPI() {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Review lemons as if you are hungry.' }],
        model: 'gpt-3.5-turbo',
        max_tokens: 60,
    });

    return chatCompletion.choices[0].message.content;
}


export {
    listModels,
    callCompletionAPI,
    callChatAPI
}