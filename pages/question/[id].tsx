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
            {questionData.fields.title.toString().replaceAll("<br/>", " ")} |
            #THINK CRITICAL
          </title>
          <meta name="description" content={questionData.fields.leadText} />
        </Head>
        <div>
          <div className="flex flex-col gap-16 py-10 sm:py-10 px-7 md:px-20 lg:px-40 md:max-w-[calc(1100px+10rem)] lg:max-w-[calc(1100px+20rem)] mx-auto relative">
            <h1
              className="font-semibold text-4xl sm:text-6xl text-center mx-auto"
              dangerouslySetInnerHTML={{ __html: questionData.fields.title }}
            ></h1>
            <BackButton className="relative lg:absolute lg:left-20 lg:top-52 w-fit" />
            <div className="flex flex-col gap-16 max-w-[905px] mx-auto">
              <p className="text-2xl">{questionData.fields.leadText}</p>
              {questionData.fields.response.map(
                (response: ResponseT, index: number) => (
                  <ResponseElement key={index} response={response} />
                )
              )}
            </div>
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
