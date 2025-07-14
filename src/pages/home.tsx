
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
    
    // Auto-scroll to next question or submit button
    setTimeout(() => {
      if (questionIndex < questions.length - 1) {
        goToNext();
      } else {
        // 모든 질문이 완료되면 제출 버튼으로 스크롤
        const submitSection = document.getElementById('submit-section');
        if (submitSection) {
          submitSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
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
                <div id="submit-section" className="text-center pt-12 pb-16 bg-gradient-to-r from-aot-green/10 to-aot-teal/10 rounded-2xl border-2 border-aot-green/20 mx-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    🎉 모든 질문 완료!
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    당신의 진격의 거인 캐릭터를 분석해드리겠습니다
                  </p>
                  <Button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    size="lg"
                    className="bg-gradient-to-r from-aot-green to-aot-teal hover:from-aot-green/90 hover:to-aot-teal/90 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        분석 중...
                      </>
                    ) : (
                      '🔍 성격 분석하기'
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
          />
        )}
      </main>
    </div>
  );
}
