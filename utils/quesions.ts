import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE_ID as string,
  accessToken: process.env.ACCESS_TOKEN as string,
});

export async function getQuestions() {
  const res = await client.getEntries({content_type: "question"});
  
  return res.items;
}

export async function getAllQuestionIds() {
  const questions = await getQuestions();

  const ids = questions.map((question) => ({
    params: { id: question.sys.id },
  }));

  return ids;
}

export async function getQuestionData(id: string) {
  const question = await client.getEntry(id);

  return question;
}

export async function getResponses(id: string) {
  const response = await client.getEntries({
    content_type: "response",
    "sys.id": id,
  });

  return response.items;
}