import { useState, useEffect } from "react";
import { Question } from "../utils/types";
import styles from "../styles/QuestionCarousel.module.css";
import Link from "next/link";

export default function QuestionCarousel({
  questions,
}: {
  questions: Question[];
}) {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions && questions[0]
  );
  const [previousQuestion, setPreviousQuestion] = useState<Question>(
    questions && questions[0]
  );
  const [direction, setDirection] = useState("");

  const handleArrowClick = async (direction: string) => {
    if (currentQuestion) {
      setPreviousQuestion(currentQuestion);
      if (direction === "up") {
        setDirection("up");
        if (currentQuestion.id === 1) {
          setCurrentQuestion(questions[questions.length - 1]);
        } else {
          setCurrentQuestion(questions[currentQuestion.id - 2]);
        }
      } else {
        setDirection("down");
        if (currentQuestion.id === questions.length) {
          setCurrentQuestion(questions[0]);
        } else {
          setCurrentQuestion(questions[currentQuestion.id]);
        }
      }
    }
  };

  useEffect(() => {
    if (currentQuestion && previousQuestion) {
      const previousQuestionElement = document.getElementById(
        previousQuestion.id.toString()
      );
      const currentQuestionElement = document.getElementById(
        currentQuestion.id.toString()
      );
      if (direction === "up") {
        previousQuestionElement?.classList.add(styles.fadeOutUp);
        currentQuestionElement?.classList.add(styles.fadeInUp);
      } else {
        previousQuestionElement?.classList.add(styles.fadeOutDown);
        currentQuestionElement?.classList.add(styles.fadeInDown);
      }

      setTimeout(() => {
        previousQuestionElement?.classList.remove(styles.fadeOutUp);
        previousQuestionElement?.classList.remove(styles.fadeOutDown);
        currentQuestionElement?.classList.remove(styles.fadeInUp);
        currentQuestionElement?.classList.remove(styles.fadeInDown);
      }, 500);
    }
  }, [currentQuestion, previousQuestion]);

  return (
    <div className="flex flex-col items-center justify-between absolute top-0 w-full h-screen py-32 lg:py-20 px-6 lg:px-24">
      <button onClick={() => handleArrowClick("up")}>
        <img src="/assets/icons/arrow-up-white-icon.svg" alt="up arrow" />
      </button>
      {questions &&
        currentQuestion &&
        questions.map((question) => (
          <Link
            href={`/question/${question.id}`}
            key={question.id}
            id={question.id.toString()}
            className={`text-white font-semibold text-5xl lg:text-7xl text-center uppercase absolute top-1/2 -translate-y-1/2 px-10 sm:px-20 lg:px-32 ${
              question.id === currentQuestion.id
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
          >
            {question.question}
          </Link>
        ))}
      <button onClick={() => handleArrowClick("down")}>
        <img src="/assets/icons/arrow-down-white-icon.svg" alt="down arrow" />
      </button>
    </div>
  );
}
