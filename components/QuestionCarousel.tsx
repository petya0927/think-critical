import { useState } from "react";
import { Question } from "../utils/types";
import styles from "../styles/QuestionCarousel.module.css";

export default function QuestionCarousel() {
  const questions: Question[] = [
    {
      id: 1,
      question: "What is your name?",
    },
    {
      id: 2,
      question: "What is your age?",
    },
    {
      id: 3,
      question: "What is your favorite color?",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [direction, setDirection] = useState("");

  const handleArrowClick = (direction: string) => {
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

  return (
    <div className="flex flex-col items-center justify-between absolute top-0 w-full h-screen py-32 lg:py-20 px-6">
      <button onClick={() => handleArrowClick("up")}>
        <img src="/assets/icons/arrow-up-white-icon.svg" alt="up arrow" />
      </button>
      {/* <p className="text-white font-semibold text-5xl lg:text-7xl text-center">
        {currentQuestion.question}
      </p> */}
      {questions.map((question) => (
        <p
          key={question.id}
          className={[
            `text-white font-semibold text-5xl lg:text-7xl text-center hidden ${
              question.id === currentQuestion.id ? styles.active : ""
            }`,
            direction === "up" ? styles.fadeInUp : styles.fadeInDown,
          ].join(" ")}
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
