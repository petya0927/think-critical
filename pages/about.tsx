import Layout from "@/components/Layout";
import styles from "@/styles/About.module.css";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | #THINK CRITICAL</title>
        <meta
          name="description"
          content="#THINK CRITICAL is a social campaign within the framework of a
          university project to promote the conscious and purposeful use of
          critical thinking, especially among young people. The task was to
          build the image of a campaign, but we realised that the best
          platform to capture the theme would be to build a website, so we
          extended the campaign to include more people."
        />
      </Head>
      <div className="bg-darkGray">
        <div className="flex flex-col lg:flex-row justify-between gap-8 pt-10 xs:pt-20 md:pt-24 pb-10 xs:pb-20 md:pb-24 px-7 md:px-20 lg:px-40 md:max-w-[calc(1100px+10rem)] lg:max-w-[calc(1100px+20rem)] m-auto">
          <h1 className="text-white font-semibold text-4xl xl:text-5xl tracking-wide text-left w-full my-auto z-10">
            About the <span className={styles.imageUnderline}>Campaign</span>
            <br />
            in a Nutshell
          </h1>
        </div>
      </div>
      <div className="pt-20 xs:pt-40 px-7 md:px-20 lg:px-40 md:max-w-[calc(1100px+10rem)] lg:max-w-[calc(1100px+20rem)] m-auto flex flex-col lg:flex-row items-start gap-16">
        <BackButton className="w-[63px]" />
        <div className="flex flex-col w-full max-w-[905px]">
          <div className="mb-28">
            <h2 className="font-semibold text-[40px] mb-6">
              What is Critical Thinking?
            </h2>
            <p className="text-2xl font-helvetica">
              Critical thinking is the process of examining and evaluating
              information in a careful and thoughtful way. It involves asking
              questions, analyzing arguments and evidence, and considering
              different perspectives. By doing this, you can make informed
              judgments and decisions based on evidence and reasoning, rather
              than just accepting things at face value. Essentially, critical
              thinking helps you to think for yourself and make well-reasoned
              decisions.
            </p>
          </div>
          <div className="mb-28">
            <h2 className="font-semibold text-[40px] mb-6">
              What is #THINK CRITICAL?
            </h2>
            <p className="text-2xl font-helvetica">
              #THINK CRITICAL is a social campaign within the framework of a
              university project to promote the conscious and purposeful use of
              critical thinking, especially among young people. The task was to
              build the image of a campaign, but we realised that the best
              platform to capture the theme would be to build a website, so we
              extended the campaign to include more people.
              <br />
              We think it&apos;s important to talk about the importance of
              critical thinking because in the fast-paced world of our time,
              people don&apos;t pay enough attention to critical thinking and
              often forget to question the relevance and value of certain events
              or information. The site does not seek to list problems, but to
              provide solutions to situations that are present in our daily
              lives, but not necessarily questioned. The reader will find
              answers to a total of 10 questions that are representative of the
              issues just mentioned.
              <br />
              The site was designed by Hajdu Boro, whose consultant was Vajdics
              Tamás. The site was created by Unyi Péter Álmos. The project was
              made at the Media and Design Institute, Eger (EKCU) in 2023.
            </p>
          </div>
          <div className="mb-28">
            <h2 className="font-semibold text-[40px] mb-6">Resource Pool</h2>
            <p className="text-2xl font-helvetica mb-6">
              Without these resources, this project would not be where it is
              today. Please feel free to check out the links and delve deeper
              into the topic.
            </p>
            <Link
              href="https://docs.google.com/document/d/10d-5AQ4uTuPq3iebtDf1o3I4IBlivSL7paMvFiNjgHw"
              target="_blank"
              className="font-semibold text-2xl leading-7 text-white bg-primary rounded-xl uppercase tracking-wide text-center w-full px-6 py-2"
            >
              LET&apos;S SEE
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
