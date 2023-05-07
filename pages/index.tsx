import Header from "@/components/Header";
import LoaderOverlay from "@/components/LoaderOverlay";
import Menu from "@/components/Menu";
import QuestionCarousel from "@/components/QuestionCarousel";
import styles from "@/styles/Index.module.css";
import { getQuestions } from "@/utils/quesions";
import { useState } from "react";

export default function Index({ questions }: { questions: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen relative overflow-hidden">
      <LoaderOverlay />
      <div className="absolute w-[200vw] xs:w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125">
        <img src="./assets/images/background.png" className={styles.bg} />
      </div>
      <Menu isMenuOpen={isMenuOpen} />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
