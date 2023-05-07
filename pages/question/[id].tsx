import { getAllQuestionIds, getQuestionData } from "@/utils/quesions";
import { Question } from "@/utils/types";

export default function Question({ questionData }: { questionData: Question }) {
  return (
    <>
      {questionData.sys.id}
      {questionData.fields.title}
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllQuestionIds();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const questionData = await getQuestionData(params.id);

  return {
    props: {
      questionData,
    },
  };
}
