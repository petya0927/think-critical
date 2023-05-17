import Layout from "@/components/Layout";
import ResourceCard from "@/components/ResourceCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "@/styles/Help.module.css";
import BackButton from "@/components/BackButton";

export default function HelpPage() {
  const router = useRouter();

  return (
    <Layout>
      <div className="bg-darkGray">
        <div className="flex flex-col lg:flex-row justify-between gap-8 pt-10 xs:pt-20 md:pt-24 px-7 md:px-32 xl:px-80 pb-10 xs:pb-20 md:pb-24 max-w-[2000px] m-auto">
          <h1 className="text-white font-semibold text-4xl xl:text-5xl tracking-wide text-center md:text-left lg:w-1/2 my-auto">
            So many things are questionable..
            <br />
            Our aim is to help{" "}
            <span className={styles.imageUnderline}>you.</span>
          </h1>
          <img
            src="/assets/images/help-hero.png"
            alt=""
            className="w-full xs:w-2/3 lg:w-2/3 max-w-xl h-full m-auto -mb-20 xs:-mb-40 sm:-mb-48 md:-mr-16 md:ml-auto lg:ml-0 rotate-[10.98deg]"
          />
        </div>
      </div>
      <div className="pt-20 xs:pt-40 pb-32 px-7 md:px-32 xl:px-80 max-w-[2000px] mx-auto flex flex-col gap-16">
        <BackButton className="xl:absolute xl:top-[46rem] mr-auto xl:-translate-x-[140px]" />
        <div>
          <p className="text-2xl font-helvetica">
            Critical thinking skills allow you to understand and address
            situations based on all available facts and information. Typically,
            using critical thinking at work involves processing and organizing
            facts, data and other information to define a problem and develop
            effective solutions.
          </p>
          <br />
          <p className="text-2xl font-helvetica">
            This way of thinking not only develops your vision, but also your
            child&apos;s, as it encourages reflection and mature criticism. In
            the following sections, we have put together some useful tips to
            help you learn this technique.
          </p>
        </div>
        <div>
          <div className="mb-16">
            <h2 className="font-semibold text-4xl mb-7">
              Guides for Parents and Their Children
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
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
          <div className="">
            <h2 className="font-semibold text-4xl mb-7">Guides for Adults</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
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
          The main aim of the project is to raise awareness of the importance of
          objective thinking. Please note that #CRITICAL THINKING is a campaign
          within the framework of a university project, which is still in its
          infancy. As a resource we have used sites that can provide more
          advanced help on this issue. If you&apos;d like to go deeper into the
          subject, take a look at the document below, which summarises all the
          sources we used to create this page.
        </p>
      </div>
    </Layout>
  );
}
