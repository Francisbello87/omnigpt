// 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

const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const configuration = new Configuration({
  organization: "org-XD2uElGR4bKz64UbNRrDPMpE",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3080;

app.post("/", async (req, res) => {
  const { message } = req.body;
  // console.log(message);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  console.log(response.data.choices[0].text);
  res.json({
    // data: response.data,
    message: response.data.choices[0].text,
  });
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
