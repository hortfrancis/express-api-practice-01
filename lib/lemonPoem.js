import { promptChatAPI } from './openai.js';

async function generateLemonPoem() {

    let poem = await promptChatAPI(
        "Write a short, expressive poem about lemons, as if you are hungry. Just four lines!"
    );
    const lines = poem.split(/\n/);
    const poemArr = [];
    for (const line of lines) {
        poemArr.push(`<span>${line}</span>`);
    }

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head> 
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>HTML Test</title>
        <link rel="stylesheet" href="style.css">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,500;1,500&display=swap" rel="stylesheet">
        
        <style>

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;

            background-color: #acbb5f;
            background-image: linear-gradient(62deg, #acbb5f 0%, #ecb338 100%);            
            color: ghostWhite;
            font-family: 'Vollkorn', serif;
            text-align: gold;
        } 

        main {
            margin: 0 3rem;
        }

        h1 {
            margin-bottom: 1rem;
            font-size: 1rem;
            font-weight: 500;
            text-transform: uppercase;
        }

        p {
            font-size: 2rem;
            font-weight: 500;
        }

        p.poem {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            font-style: italic;
            letter-spacing: 0.04ch;
        </style>
        
    </head>
    <body>
        <main>
            <h1>A generated poem</h1>
            <p class="poem">
                ${poemArr.join('')}
            </p>
        </main>
    </body>
    </html>
    `;
}

export {
    generateLemonPoem
};