import Header from "@/components/Header";
import LoaderOverlay from "@/components/LoaderOverlay";
import QuestionCarousel from "@/components/QuestionCarousel";
import styles from "@/styles/Index.module.css";
import { getQuestions } from "@/utils/quesions";

export default function Index({ questions }: { questions: any }) {
  return (
    <div className="h-screen relative overflow-hidden">
      <LoaderOverlay />
      <div className="absolute w-[200vw] xs:w-screen h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125">
        <img src="./assets/images/background.png" className={styles.bg} />
      </div>
      <Header />
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
