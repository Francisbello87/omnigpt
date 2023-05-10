// 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

const { Configuration, OpenAIApi } = require("openai");

// import { Configuration, OpenAIApi } from "openai";
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const configuration = new Configuration({
  organization: "org-I94y0JzmY2MWm7bXv46hlihW",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3080;

// app.post("/", async (req, res) => {
//   const { message } = req.body;
//   // console.log(message);
//   const response = await openai.createCompletion(
//     {
//       model: "text-davinci-003",
//       prompt: `${message}`,
//       max_tokens: 100,
//       temperature: 0.5,
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//     }
//   );
//   console.log(response.data.choices[0].text);
//   res.json({
//     // data: response.data,
//     message: response.data.choices[0].text,
//   });
// });


app.post('/api/completions', async (req, res) => {
  const { message  } = req.body;
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `${message}`,
      max_tokens: 50, // Adjust the number of tokens as per your requirements
      temperature: 0.7 // Adjust the temperature as per your requirements
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      }
    });
    console.log(response.data.choices[0].text);
    res.json({ message: response.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// curl https://api.openai.com/v1/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer $OPENAI_API_KEY" \
//   -d '{
//     "model": "text-davinci-003",
//     "prompt": "Say this is a test",
//     "max_tokens": 7,
//     "temperature": 0
//   }'
