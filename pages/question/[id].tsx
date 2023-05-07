import PageHeader from "@/components/PageHeader";
import {
  getAllQuestionIds,
  getQuestionData,
  getResponses,
} from "@/utils/quesions";
import { Question, ResponseT } from "@/utils/types";
import Menu from "@/components/Menu";
import { useState } from "react";
import ResponseElement from "@/components/ResponseElement";

export default function Question({ questionData }: { questionData: Question }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    questionData && (
      <div className="bg-white pb-20">
        <Menu isMenuOpen={isMenuOpen} isMainPage={false} />
        <PageHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="flex flex-col gap-16 items-center mt-10 sm:mt-16 px-7 md:px-32 xl:px-80 2xl:px-[500px]">
          <h1 className="font-semibold text-4xl md:text-6xl text-center">
            {questionData.fields.title}
          </h1>
          <p className="text-2xl">{questionData.fields.leadText}</p>
          {questionData.fields.response.map(
            (response: ResponseT, index: number) => (
              <ResponseElement key={index} response={response} />
            )
          )}
        </div>
      </div>
    )
  );
}

export async function getStaticPaths() {
  const paths = await getAllQuestionIds();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const questionData = await getQuestionData(params.id);
  const responses = await getResponses(questionData.sys.id);

  return {
    props: {
      questionData,
      responses,
    },
  };
}
