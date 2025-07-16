
import { useState, useCallback } from "react";
import { questions } from "@/data/questions";
import { calculateMBTI } from "@/utils/mbti-calculator";
import { getCharacterMatch } from "@/data/mbti-characters";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generateSessionId = () => {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  };

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

    setIsSubmitting(true);

    try {
      // Calculate MBTI locally
      const { scores, mbtiType } = calculateMBTI(completeAnswers);
      
      // Get character match
      const characterMatch = getCharacterMatch(mbtiType);
      
      const sessionId = generateSessionId();
      
      const quizResult: QuizResult = {
        mbtiType,
        scores,
        character: characterMatch,
        sessionId
      };

      // Save to localStorage for persistence between page refreshes
      localStorage.setItem('aot-mbti-result', JSON.stringify({
        ...quizResult,
        answers: completeAnswers,
        completedAt: new Date().toISOString()
      }));

      // 약간의 지연 추가
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setResult(quizResult);
      return quizResult;
    } catch (error) {
      console.error("Failed to process quiz:", error);
      alert("퀴즈 처리에 실패했습니다.");
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }, [answers]);

  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(undefined));
    setResult(null);
    // Clear localStorage
    localStorage.removeItem('aot-mbti-result');
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
    isSubmitting,
    submitError: null,
  };
}
