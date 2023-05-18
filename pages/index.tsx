import MainHeader from "@/components/MainHeader";
import LoaderOverlay from "@/components/LoaderOverlay";
import Menu from "@/components/Menu";
import QuestionCarousel from "@/components/QuestionCarousel";
import styles from "@/styles/Index.module.css";
import { getQuestions } from "@/utils/quesions";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Index({ questions }: { questions: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen relative overflow-hidden bg-[#121212]">
      <Head>
        <title>#THINK CRITICAL</title>
        <meta
          name="description"
          content="#THINK CRITICAL © is a social campaign created as part of a university project to raise awareness of the importance of objective decision-making and critical thinking. The design was made at Media and Design Institue, Eger, 2023 (EKKE MDI) by Hajdu Boro. Consultant was Vajdics Tamás. Web development by petya0927."
        />
      </Head>
      <LoaderOverlay />
      <Link
        href="/resthere"
        className={`absolute top-3/4 md:top-2/3 left-10 md:left-20 lg:left-40 w-1/5 md:w-1/6 lg:w-1/12 -rotate-[24deg] z-10 ${styles.float}`}
      >
        <img src="/assets/images/astronaut.svg" />
      </Link>
      <div className="absolute w-[200vw] xs:w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125">
        <img src="./assets/images/background.png" className={styles.bg} />
      </div>
      <Menu isMenuOpen={isMenuOpen} isMainPage />
      <MainHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <QuestionCarousel questions={questions} />
    </div>
  );
}

export async function getStaticProps() {
  const questions = await getQuestions();

  return {
    props: {
      questions,
    },
  };
}
