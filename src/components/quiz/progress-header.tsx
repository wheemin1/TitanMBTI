import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronUp } from "lucide-react";

interface ProgressHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  answers: (number | undefined)[];
  onPrevious: () => void;
}

export function ProgressHeader({ 
  currentQuestion, 
  totalQuestions, 
  answers, 
  onPrevious 
}: ProgressHeaderProps) {
  const completedAnswers = answers.filter(answer => answer !== undefined).length;
  const progressPercentage = (completedAnswers / totalQuestions) * 100;
  
  const getEstimatedTime = () => {
    const remainingQuestions = totalQuestions - completedAnswers;
    const estimatedMinutes = Math.ceil(remainingQuestions * 0.13); // ~8 seconds per question
    return completedAnswers === totalQuestions ? '완료!' : `약 ${estimatedMinutes}분 남음`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold text-aot-dark">진격의 거인 MBTI 테스트</h1>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onPrevious}
              disabled={currentQuestion === 0}
              className="p-2 rounded-full"
            >
              <ChevronUp className="w-4 h-4" />
            </Button>
            <span className="text-sm text-gray-600 font-medium">
              {completedAnswers} / {totalQuestions}
            </span>
          </div>
        </div>
        
        <Progress value={progressPercentage} className="mb-2" />
        
        <div className="flex justify-between text-xs text-gray-500">
          <span>시작</span>
          <span>{getEstimatedTime()}</span>
          <span>완료</span>
        </div>
      </div>
    </header>
  );
}
