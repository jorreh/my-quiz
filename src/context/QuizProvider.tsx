import React, { useState, useEffect } from "react";
import { QuizContext } from "./QuizContext";

import { IQuizQuestion, IQuizAnswer, useGetQuiz } from "../hooks/useGetQuiz";

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<IQuizQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isCorrectAnswersShown, setIsCorrectAnswersShown] = useState(false);
  const [quizScores, setQuizScores] = useState<number[]>([]);

  const { data: quizData, isPending, isError, error } = useGetQuiz();

  const calculateScore = () => {
    return (
      Number((quizScores.reduce((sum, score) => sum + score, 0) / quizScores.length).toFixed(2)) ||
      0
    );
  };

  const quizTotalScore = calculateScore();

  const isQuizEnded = questions.length > 0 && questionIndex > questions.length - 1;

  const getSelectedAnswers = (): IQuizAnswer[] => {
    return questions[questionIndex]?.answers.filter((answer) => answer.isSelected) || [];
  };

  const isAnswersSelected = getSelectedAnswers().length > 0;

  useEffect(() => {
    if (quizData) {
      setQuestions(quizData);
    }
  }, [quizData]);

  function answerClicked(item: IQuizAnswer) {
    if (isCorrectAnswersShown) {
      return;
    }

    const updatedQuestions = questions.map((question) => ({
      ...question,
      answers: question.answers.map((answer) =>
        answer === item ? { ...answer, isSelected: !answer.isSelected } : answer
      ),
    }));

    setQuestions(updatedQuestions);
  }

  function updateScore() {
    const correctAnswers = questions[questionIndex].answers.filter(({ correct }) => correct).length;

    const correctSelectedAnswers = questions[questionIndex].answers.filter(
      ({ correct, isSelected }) => correct && isSelected
    ).length;

    const score = (correctSelectedAnswers / correctAnswers) * 100;

    setQuizScores((scores) => [...scores, Number(score.toFixed(2))]);
  }

  function goToNextQuestion() {
    setQuestionIndex((prevIndex) => prevIndex + 1);
  }

  function readyBtnClicked() {
    if (isQuizEnded) {
      return;
    }

    setIsCorrectAnswersShown((prev) => !prev);

    if (!isCorrectAnswersShown) {
      updateScore();
    } else {
      goToNextQuestion();
    }
  }

  function reloadQuiz() {
    setQuestionIndex(0);
    setQuestions(quizData || []);
    setQuizScores([]);
  }

  const quizContextValue = {
    questions,
    questionIndex,
    isCorrectAnswersShown,
    isAnswersSelected,
    quizScores,
    quizTotalScore,
    isQuizEnded,
    isPending,
    isError,
    error,
    answerClicked,
    goToNextQuestion,
    getSelectedAnswers,
    readyBtnClicked,
    reloadQuiz,
  };

  return <QuizContext.Provider value={quizContextValue}>{children}</QuizContext.Provider>;
};
