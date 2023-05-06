import { questions } from "@/public/questions";

export function getAllQuestionIds() {
  const ids = questions.map((question) => ({
    params: { id: question.id.toString() },
  }));

  return ids;
}

export function getQuestionData(id: string) {
  const question = questions.find((question) => question.id === Number(id));

  return question;
}