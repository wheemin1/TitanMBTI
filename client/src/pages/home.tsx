import { useState } from "react";
import { StartScreen } from "@/components/quiz/start-screen";
import { QuestionCard } from "@/components/quiz/question-card";
import { ProgressHeader } from "@/components/quiz/progress-header";
import { ResultsScreen } from "@/components/quiz/results-screen";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/hooks/use-quiz";
import { questions } from "@/data/questions";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<'start' | 'quiz' | 'results'>('start');
  const {
    currentQuestion,
    answers,
    selectAnswer,
    goToNext,
    goToPrevious,
    submitQuiz,
    result,
    isSubmitting,
  } = useQuiz();

  const handleStart = () => {
    setCurrentScreen('quiz');
  };

  const handleAnswer = (questionIndex: number, value: number) => {
    selectAnswer(questionIndex, value);
    
    // Auto-scroll to next question
    setTimeout(() => {
      if (questionIndex < questions.length - 1) {
        goToNext();
      }
    }, 300);
  };

  const handleSubmit = async () => {
    try {
      await submitQuiz();
      setCurrentScreen('results');
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  const handleRestart = () => {
    setCurrentScreen('start');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-aot-light-gray">
      {currentScreen === 'quiz' && (
        <ProgressHeader
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          answers={answers}
          onPrevious={goToPrevious}
        />
      )}
      
      <main className={currentScreen === 'quiz' ? 'pt-32 pb-20' : 'pt-8 pb-20'}>
        {currentScreen === 'start' && (
          <StartScreen onStart={handleStart} />
        )}
        
        {currentScreen === 'quiz' && (
          <section className="max-w-3xl mx-auto px-4">
            <div className="space-y-8">
              {questions.map((question, index) => (
                <QuestionCard
                  key={index}
                  question={question}
                  questionIndex={index}
                  currentQuestion={currentQuestion}
                  selectedValue={answers[index]}
                  onAnswer={handleAnswer}
                />
              ))}
              
              {/* Analysis button shown when all questions are answered */}
              {answers.filter(answer => answer !== undefined).length === questions.length && (
                <div className="text-center pt-8 pb-12">
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-aot-green hover:bg-aot-green/90 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>분석 중...</span>
                      </div>
                    ) : (
                      "성격 분석하기"
                    )}
                  </Button>
                </div>
              )}
            </div>
          </section>
        )}
        
        {currentScreen === 'results' && result && (
          <ResultsScreen
            result={result}
            onRestart={handleRestart}
            isLoading={isSubmitting}
          />
        )}
      </main>
    </div>
  );
}
