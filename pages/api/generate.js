import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `Write a cover letter for a ${req.body.job} position.
    Take relevant points from the resume
    ${req.body.pdfText}
    To whomever it may concern,
    `,
    // prompt: "Name my pet",
    temperature: 0.9,
    max_tokens: 400,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(job, pdfText) {
  const capitalizedJob = job[0].toUpperCase() + job.slice(1).toLowerCase();
  const capitalizedResume = pdfText[0].toUpperCase() + pdfText.slice(1);
  return `Name my pet`;
  // return `Write a cover letter for a ${capitalizedJob} position based on the resume ${capitalizedResume}. The cover letter should be 3-4 paragraphs long and should take the relevant details from the resume and expand on them. The cover letter should be written in a professional tone and should be free of spelling and grammar errors. The cover letter should be written in the first person.`;
}
