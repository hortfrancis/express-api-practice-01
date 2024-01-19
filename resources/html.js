const html = `
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
    <link href="https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,500;1,900&display=swap" rel="stylesheet">

    <style>

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;

        background: linear-gradient(180deg, #d53369 0%, #daae51 100%);
        color: ghostWhite;
        font-family: 'Vollkorn', serif;
        text-align: center;
    } 

    main {
        margin: 0 2rem;
    }

    h1 {

        font-size: 4rem;
        font-weight: 900;
        font-style: italic;
    }

    p {
        font-size: 2rem;
        font-weight: 500;
    }
    
    </style>
    
  </head>
  <body>
    <main>
        <h1>Hello World!</h1>
        <p>This is my test page sent via express</p>
    </main>
  </body>
</html>
`;

export { html };