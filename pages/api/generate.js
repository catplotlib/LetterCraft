import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.job, req.body.pdfText),
    temperature: 0.9,
    temperature: 0.7,
    max_tokens: 400,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(job, pdfText) {
  console.log(job);
  console.log(pdfText);
  const capitalizedJob = job[0].toUpperCase() + job.slice(1).toLowerCase();
  return `Write a cover letter for a ${capitalizedJob} position based on the resume provided. The cover letter should be 3-4 paragraphs long and should take the relevant details from the resume ${pdfText}`;
}
