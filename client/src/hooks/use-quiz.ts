import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { questions } from "@/data/questions";

interface QuizResult {
  mbtiType: string;
  scores: {
    E: number;
    I: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
  };
  character: {
    name: string;
    title: string;
    description: string;
    analysis: string;
    imageUrl: string;
    traits: string[];
  };
  sessionId: string;
}

export function useQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | undefined)[]>(new Array(questions.length).fill(undefined));
  const [result, setResult] = useState<QuizResult | null>(null);

  const generateSessionId = () => {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  };

  const submitMutation = useMutation({
    mutationFn: async (data: { answers: number[]; sessionId: string }) => {
      const response = await apiRequest("POST", "/api/quiz/submit", data);
      return response.json();
    },
    onSuccess: (data) => {
      setResult(data);
    },
  });

  const selectAnswer = useCallback((questionIndex: number, value: number) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = value;
      return newAnswers;
    });
  }, []);

  const goToNext = useCallback(() => {
    const nextIndex = currentQuestion + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestion(nextIndex);
      // Smooth scroll to next question
      setTimeout(() => {
        const nextQuestionElement = document.getElementById(`question-${nextIndex}`);
        if (nextQuestionElement) {
          nextQuestionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [currentQuestion]);

  const goToPrevious = useCallback(() => {
    const prevIndex = currentQuestion - 1;
    if (prevIndex >= 0) {
      setCurrentQuestion(prevIndex);
      // Smooth scroll to previous question
      setTimeout(() => {
        const prevQuestionElement = document.getElementById(`question-${prevIndex}`);
        if (prevQuestionElement) {
          prevQuestionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [currentQuestion]);

  const submitQuiz = useCallback(async () => {
    // Filter out undefined answers
    const completeAnswers = answers.filter((answer): answer is number => answer !== undefined);

    if (completeAnswers.length !== questions.length) {
      return alert("모든 질문에 답해주세요.");
    }

    const sessionId = generateSessionId();
    try {
        await submitMutation.mutateAsync({
            answers: completeAnswers,
            sessionId
        });
    } catch (error) {
        console.error("Failed to submit quiz:", error);
        alert("퀴즈 제출에 실패했습니다.");
    }
  }, [answers, submitMutation]);

  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(undefined));
    setResult(null);
  }, []);

  const getProgress = useCallback(() => {
    const completedAnswers = answers.filter(answer => answer !== undefined).length;
    return {
      completed: completedAnswers,
      total: questions.length,
      percentage: Math.round((completedAnswers / questions.length) * 100)
    };
  }, [answers]);

  return {
    currentQuestion,
    answers,
    result,
    selectAnswer,
    goToNext,
    goToPrevious,
    submitQuiz,
    resetQuiz,
    getProgress,
    isSubmitting: submitMutation.isPending,
    submitError: submitMutation.error,
  };
}