import { questions } from "@/public/questions";
import { getAllQuestionIds, getQuestionData } from "@/utils/quesions";
import { Question } from "@/utils/types";

export default function Question({ questionData }: { questionData: Question }) {
  return (
    <>
      {questionData.id}
      {questionData.question}
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllQuestionIds();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const questionData = getQuestionData(params.id);

  return {
    props: {
      questionData,
    },
  };
}
