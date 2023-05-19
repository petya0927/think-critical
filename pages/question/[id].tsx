import {
  getAllQuestionIds,
  getQuestionData,
  getResponses,
} from "@/utils/quesions";
import { Question, ResponseT } from "@/utils/types";
import ResponseElement from "@/components/ResponseElement";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import Head from "next/head";

export default function Question({ questionData }: { questionData: Question }) {
  return (
    questionData && (
      <Layout>
        <Head>
          <title>
            {questionData.fields.title.replaceAll("<br/>", " ").toString()} |
            #THINK CRITICAL
          </title>
          <meta name="description" content={questionData.fields.leadText} />
        </Head>
        <div className="bg-white pb-10">
          <div className="flex flex-col gap-16 mt-10 sm:mt-16 px-7 lg:px-0 relative max-w-[905px] m-auto">
            <h1
              className="font-semibold text-4xl sm:text-6xl text-center mx-auto"
              dangerouslySetInnerHTML={{ __html: questionData.fields.title }}
            ></h1>
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
