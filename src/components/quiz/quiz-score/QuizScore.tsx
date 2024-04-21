// import React from "react";
import { QuizAEndedStyle } from "../Quiz.styles";
import { useQuizContext } from "../../../hooks/useQuizContext";

export default function QuizScore() {
  const { quizTotalScore, reloadQuiz } = useQuizContext();

  return (
    <QuizAEndedStyle>
      <div className="wrapper">
        <h1>Score: {quizTotalScore}%</h1>

        {quizTotalScore >= 75 && <span className="emoji">&#129395;</span>}
        {quizTotalScore >= 50 && quizTotalScore < 75 && <span className="emoji">&#128556;</span>}
        {quizTotalScore < 50 && quizTotalScore > 0 && <span className="emoji">&#128546;</span>}
        {quizTotalScore === 0 && <span className="emoji">&#128514;</span>}

        <button className="retry-ico" onClick={reloadQuiz}>
          &#8617;
        </button>
      </div>
    </QuizAEndedStyle>
  );
}
