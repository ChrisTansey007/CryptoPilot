// const express = require('express');
// const dotenv = require('dotenv');
// const fs = require('fs');

// const app = express();
// app.use(express.json()); // Parse JSON bodies

// app.post('/api/keys', (req, res) => {
//     const { exchangeName, apiKey, secretApiKey } = req.body;

//     // Make sure all the data is provided
//     if (!exchangeName || !apiKey || !secretApiKey) {
//         return res.status(400).send('Missing exchange name, API key, or secret API key');
//     }

//     // Load the current .env file into process.env
//     dotenv.config();

//     // Add the new keys
//     process.env[`${exchangeName.toUpperCase()}_API_KEY`] = apiKey;
//     process.env[`${exchangeName.toUpperCase()}_SECRET_API_KEY`] = secretApiKey;

//     // Generate the updated .env file content
//     const envContent = Object.entries(process.env)
//         .map(([key, value]) => `${key}=${value}`)
//         .join('\n');

//     // Write the new content to the .env file
//     fs.writeFileSync('.env', envContent);

//     res.send('Keys have been set successfully!');
// });

// app.listen(3001, () => console.log('Server is running...'));
