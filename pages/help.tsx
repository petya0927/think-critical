import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Help.module.css";

export default function HelpPage() {
  const router = useRouter();

  return (
    <Layout>
      <div className="bg-darkGray">
        <div className="flex flex-col md:flex-row justify-between gap-32 xs:gap-0 pt-10 xs:pt-20  md:pt-24 pb-10 xs:pb-64 relative px-7 md:px-32 xl:px-80 max-w-[2000px] m-auto">
          <h1 className="text-white font-semibold text-4xl xl:text-5xl tracking-wide text-center md:text-left md:w-2/5">
            So many things are questionable.. Our aim is to help{" "}
            <span className={styles.imageUnderline}>you.&nbsp;</span>
          </h1>
          <img
            src="/assets/images/help-hero.png"
            alt=""
            className="w-full xs:w-2/3 md:w-1/2 max-w-2xl ml-auto rotate-[10.98deg] xs:absolute xs:top-56 md:top-auto right-8 lg:right-20 2xl:right-40"
          />
        </div>
      </div>
      <div className="pt-20 xs:pt-60 pb-32 px-7 md:px-32 xl:px-80 2xl:px-[500px] max-w-[2000px] m-auto flex flex-col gap-16">
        <Link
          href=""
          onClick={() => router.back()}
          className="xl:absolute xl:left-40 xl:mr-auto"
        >
          <img
            src="/assets/icons/arrow-back-green-icon.svg"
            className="cursor-pointer"
          />
        </Link>
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
            child's, as it encourages reflection and mature criticism. In the
            following sections, we have put together some useful tips to help
            you learn this technique.
          </p>
        </div>
        <div>
          <div className="mb-16">
            <h2 className="font-semibold text-4xl mb-7">
              Guides for Parents and Their Children
            </h2>
            <div className="flex flex-col md:flex-row gap-5">
              <Card
                title="Mini Guide for 5-9 Years Olds"
                buttonText="Let's see"
                image="/assets/images/child-1.png"
              />
              <Card
                title="Mini Guide for 10-12 Years Olds"
                buttonText="Let's see"
                image="/assets/images/child-2.png"
              />
              <Card
                title="Mini Guide for 13 and Olders"
                buttonText="Let's see"
                image="/assets/images/child-3.png"
              />
            </div>
          </div>
          <div className="">
            <h2 className="font-semibold text-4xl mb-7">Guides for Adults</h2>
            <div className="flex flex-col md:flex-row gap-5">
              <Card
                title="How to Ask Great Questions?"
                buttonText="Let's see"
                image="/assets/images/questionmark.png"
              />
              <Card
                title="How to Fact Check Like a Pro?"
                buttonText="Let's see"
                image="/assets/images/exclamationmark.png"
              />
            </div>
          </div>
        </div>
        <p className="text-2xl font-helvetica">
          The main aim of the project is to raise awareness of the importance of
          objective thinking. Please note that #CRITICAL THINKING is a campaign
          within the framework of a university project, which is still in its
          infancy. As a resource we have used sites that can provide more
          advanced help on this issue. If you'd like to go deeper into the
          subject, take a look at the document below, which summarises all the
          sources we used to create this page.
        </p>
      </div>
    </Layout>
  );
}
