import { useState, useEffect } from "react";
import { Question } from "../utils/types";
import styles from "../styles/QuestionCarousel.module.css";

export default function QuestionCarousel() {
  const questions: Question[] = [
    {
      id: 1,
      question: "Who viewed my Instagram story?",
    },
    {
      id: 2,
      question: "Are the news true?",
    },
    {
      id: 3,
      question: "Do you really know who you are chatting with?",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [previousQuestion, setPreviousQuestion] = useState(questions[0]);
  const [direction, setDirection] = useState("");

  const handleArrowClick = async (direction: string) => {
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
  };

  useEffect(() => {
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
  }, [currentQuestion]);

  return (
    <div className="flex flex-col items-center justify-between absolute top-0 w-full h-screen py-32 lg:py-20 px-6 lg:px-24">
      <button onClick={() => handleArrowClick("up")}>
        <img src="/assets/icons/arrow-up-white-icon.svg" alt="up arrow" />
      </button>
      {questions.map((question) => (
        <p
          key={question.id}
          id={question.id.toString()}
          className={`text-white font-semibold text-5xl lg:text-7xl text-center uppercase absolute top-1/2 -translate-y-1/2 ${
            question.id === currentQuestion.id ? "opacity-100" : "opacity-0"
          }`}
        >
          {question.question}
        </p>
      ))}
      <button onClick={() => handleArrowClick("down")}>
        <img src="/assets/icons/arrow-down-white-icon.svg" alt="down arrow" />
      </button>
    </div>
  );
}
