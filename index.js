// 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

const { Configuration, OpenAIApi } = require( "openai");
const express = require('express')
const configuration = new Configuration({
    organization: "org-XD2uElGR4bKz64UbNRrDPMpE",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();







const app = express()
const port = 3080

app.post ('/', async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0
    }) 
    console.log(response.data.choices[0].text);
    res.json({
        data: response.data
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

// curl https://api.openai.com/v1/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer $OPENAI_API_KEY" \
//   -d '{
//     "model": "text-davinci-003",
//     "prompt": "Say this is a test",
//     "max_tokens": 7,
//     "temperature": 0
//   }'
