import Navbar from "@/components/Navbar";
import {
  getAllQuestionIds,
  getQuestionData,
  getResponses,
} from "@/utils/quesions";
import { Question, ResponseT } from "@/utils/types";
import Menu from "@/components/Menu";
import { useState } from "react";
import ResponseElement from "@/components/ResponseElement";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";

export default function Question({ questionData }: { questionData: Question }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    questionData && (
      <Layout>
        <div className="bg-white pb-52">
          <div className="flex flex-col gap-16 items-center mt-10 sm:mt-16 px-7 md:px-32 xl:px-80 2xl:px-[500px] relative max-w-[2000px] m-auto">
            <h1 className="font-semibold text-4xl md:text-6xl text-center max-w-[790px]">
              {questionData.fields.title}
            </h1>
            <BackButton />
            <p className="text-2xl">{questionData.fields.leadText}</p>
            {questionData.fields.response.map(
              (response: ResponseT, index: number) => (
                <ResponseElement key={index} response={response} />
              )
            )}
          </div>
        </div>
      </Layout>
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
