import {
  useQuery,
  // QueryOptions,
  // useMutation,
  // UseMutationOptions,
  // UseQueryOptions,
} from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export interface IQuizAnswer {
  answer: string;
  correct: boolean;
  isSelected?: boolean;
}

export interface IQuizQuestion {
  question: string;
  questionIntro: string;
  time_limit_s: number;
  answers: IQuizAnswer[];
}

const quizUrl = "http://localhost:3002/questions";

const axiosHeaders = {
  //   Origin: "localhost",
  "Content-Type": "application/json",
};

const QUERY_KEY = ["quiz"];

const fetchQuiz = async (): Promise<IQuizQuestion[]> => {
  const quizData = await axios.get(quizUrl, {
    headers: axiosHeaders,
  });
  return quizData.data.data;
};

export const useGetQuiz = () =>
  useQuery<IQuizQuestion[], AxiosError>({
    queryFn: fetchQuiz,
    queryKey: [QUERY_KEY],
    staleTime: Infinity,
  });
