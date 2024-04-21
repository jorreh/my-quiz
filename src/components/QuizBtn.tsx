import React from "react";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

import { useQuizContext } from "../hooks/useQuizContext";

import { QuizAnswerButtonStyle } from "./ui/button/Button.styles";

type Props = {
  color?: string;
  isSelected?: boolean;
  correctAnswer: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function QuizBtn({
  isSelected = false,
  correctAnswer,
  handleClick,
  children,
}: PropsWithChildren<Props>) {
  const { isCorrectAnswersShown } = useQuizContext();

  return (
    <QuizAnswerButtonStyle
      onClick={handleClick}
      className={clsx({
        selected: isSelected,
        "show-answer": isCorrectAnswersShown,
        correct: correctAnswer,
        incorrect: !correctAnswer,
      })}
    >
      {children}
    </QuizAnswerButtonStyle>
  );
}
