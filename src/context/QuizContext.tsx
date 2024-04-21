import { createContext } from "react";

import { IQuizQuestion, IQuizAnswer } from "../hooks/useGetQuiz";
import { AxiosError } from "axios";

type QuizContextType = {
  questions: IQuizQuestion[];
  questionIndex: number;
  isCorrectAnswersShown: boolean;
  quizScores: number[];
  quizTotalScore: number;
  isQuizEnded: boolean;
  isAnswersSelected: boolean;
  isPending: boolean;
  isError: boolean;
  error: AxiosError | null;
  readyBtnClicked: () => void;
  answerClicked: (item: IQuizAnswer) => void;
  getSelectedAnswers: () => IQuizAnswer[];
  reloadQuiz: () => void;
};

export const QuizContext = createContext<QuizContextType>({
  questions: [],
  questionIndex: 0,
  isCorrectAnswersShown: false,
  isQuizEnded: false,
  quizScores: [],
  quizTotalScore: 0,
  isAnswersSelected: false,
  isPending: true,
  isError: false,
  error: null,
  readyBtnClicked: () => {},
  answerClicked: () => {},
  getSelectedAnswers: () => {
    return [];
  },
  reloadQuiz: () => {},
});
