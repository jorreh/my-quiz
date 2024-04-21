import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { QuizStyle } from "./Quiz.styles";
import Button from "../ui/button/Button";
import QuizBtn from "../QuizBtn";
import { LoadingScreenStyle } from "../../pages/Quiz/QuizPage.styles";

import { useQuizContext } from "../../hooks/useQuizContext";

import QuizScore from "./quiz-score/QuizScore";

const Quiz = (): React.JSX.Element => {
  const {
    questions,
    questionIndex,
    isCorrectAnswersShown,
    isAnswersSelected,
    isQuizEnded,
    isPending,
    isError,
    error,
    answerClicked,
    readyBtnClicked,
  } = useQuizContext();

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (questionIndex > 0 && !isQuizEnded) {
      setIsAnimating(true);
    }
  }, [questionIndex, isQuizEnded]);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  if (isPending) {
    return (
      <LoadingScreenStyle>
        <h1>Loading quiz data..</h1>
        <div className="loader"></div>
      </LoadingScreenStyle>
    );
  }

  if (isError || error || !questions) {
    return <h1>Error loading quiz data</h1>;
  }

  if (!isQuizEnded) {
    return (
      <QuizStyle>
        <h1>{questions[questionIndex]?.question}</h1>

        <div
          className={clsx("quiz-answers", isAnimating && "quiz-slide")}
          onAnimationEnd={handleAnimationEnd}
        >
          {questions[questionIndex]?.answers.map((item, i) => (
            <QuizBtn
              key={i}
              isSelected={item.isSelected || false}
              correctAnswer={item.correct}
              handleClick={() => answerClicked(item)}
            >
              {item.answer}
            </QuizBtn>
          ))}
        </div>
        <div className="cta-wrapper">
          <Button color="yellow" disabled={!isAnswersSelected} handleClick={readyBtnClicked}>
            {!isAnswersSelected || !isCorrectAnswersShown ? "Ready!" : "Continue"}
          </Button>

          {/* {!isCorrectAnswersShown && <Button color="grey">Geef me een tip...</Button>} */}
        </div>
      </QuizStyle>
    );
  } else {
    return <QuizScore />;
  }
};

export default Quiz;
