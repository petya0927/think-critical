import Layout from "@/components/Layout";
import ResourceCard from "@/components/ResourceCard";
import styles from "@/styles/Help.module.css";
import BackButton from "@/components/BackButton";
import Head from "next/head";

export default function HelpPage() {
  return (
    <Layout>
      <Head>
        <title>Help | #THINK CRITICAL</title>
        <meta
          name="description"
          content="The main aim of the project is to raise awareness of the importance of
          objective thinking. Please note that #CRITICAL THINKING is a campaign
          within the framework of a university project, which is still in its
          infancy. As a resource we have used sites that can provide more
          advanced help on this issue. If you'd like to go deeper into the
          subject, take a look at the document below, which summarises all the
          sources we used to create this page."
        />
      </Head>
      <div className="bg-darkGray">
        <div className="flex flex-col lg:flex-row justify-between gap-8 pt-10 xs:pt-20 md:pt-24 px-7 md:px-20 lg:px-40 pb-0 xs:pb-20 md:pb-24 md:max-w-[calc(1100px+10rem)] lg:max-w-[calc(1100px+20rem)] m-auto">
          <h1 className="text-white font-semibold text-4xl xl:text-5xl tracking-wide text-center md:text-left lg:w-1/2">
            So many things are questionable..
            <br />
            Our aim is to help{" "}
            <span className={styles.imageUnderline}>you.</span>
          </h1>
          <img
            src="/assets/images/help-hero.png"
            alt=""
            className="w-full xs:w-2/3 lg:w-2/3 max-w-xl h-full -mb-20 xs:-mb-40 sm:-mb-48 mx-auto md:mr-0 md:ml-auto lg:-mr-28 rotate-[10.98deg]"
          />
        </div>
      </div>
      <div className="pt-20 xs:pt-40 pb-32 px-7 md:px-20 lg:px-40 md:max-w-[calc(1100px+10rem)] lg:max-w-[calc(1100px+20rem)] mx-auto flex flex-col lg:flex-row items-start gap-[120px]">
        <BackButton className="w-[63px]" />
        <div className="flex flex-col w-full max-w-[905px]">
          <div className="mb-[90px]">
            <p className="text-2xl font-helvetica">
              Critical thinking skills allow you to understand and address
              situations based on all available facts and information.
              Typically, using critical thinking at work involves processing and
              organizing facts, data and other information to define a problem
              and develop effective solutions.
              <br />
              <br />
              This way of thinking not only develops your vision, but also your
              child&apos;s, as it encourages reflection and mature criticism. In
              the following sections, we have put together some useful tips to
              help you learn this technique.
            </p>
          </div>
          <div className="mb-[90px]">
            <div className="mb-[73px]">
              <h2 className="font-semibold text-4xl mb-7">
                Guides for Parents and Their Children
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <ResourceCard
                  title="Mini Guide for 5-9 Years Olds"
                  buttonText="Let's see"
                  image="/assets/images/child-1.png"
                  link="/assets/files/critical_think_5-9.pdf"
                />
                <ResourceCard
                  title="Mini Guide for 10-12 Years Olds"
                  buttonText="Let's see"
                  image="/assets/images/child-2.png"
                  link="/assets/files/critical_think_10-12.pdf"
                />
                <ResourceCard
                  title="Mini Guide for 13 and Olders"
                  buttonText="Let's see"
                  image="/assets/images/child-3.png"
                  link="/assets/files/critical_think_13.pdf"
                />
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <h2 className="font-semibold text-4xl">Guides for Adults</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <ResourceCard
                  title="How to Ask Great Questions?"
                  buttonText="Let's see"
                  image="/assets/images/questionmark.png"
                  link="/assets/files/critical_think_asking_questions.pdf"
                />
                <ResourceCard
                  title="How to Fact Check Like a Pro?"
                  buttonText="Let's see"
                  image="/assets/images/exclamationmark.png"
                  link="/assets/files/critical_think_fact_check.pdf"
                />
              </div>
            </div>
          </div>
          <p className="text-2xl font-helvetica">
            The main aim of the project is to raise awareness of the importance
            of objective thinking. Please note that #CRITICAL THINKING is a
            campaign within the framework of a university project, which is
            still in its infancy. As a resource we have used sites that can
            provide more advanced help on this issue. If you&apos;d like to go
            deeper into the subject, take a look at the document below, which
            summarises all the sources we used to create this page.
          </p>
        </div>
      </div>
    </Layout>
  );
}
