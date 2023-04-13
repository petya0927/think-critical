import { Question } from "../utils/types";

export default function QuestionCarousel() {
  return (
    <div className="flex flex-col items-center absolute top-0 w-full h-screen py-20">
      <button>
        <img src="/assets/icons/arrow-up-white-icon.svg" alt="up arrow" />
      </button>
      <p className="text-white font-semibold text-7xl text-center my-auto">
        Question
      </p>
      <button>
        <img src="/assets/icons/arrow-down-white-icon.svg" alt="down arrow" />
      </button>
    </div>
  );
}
