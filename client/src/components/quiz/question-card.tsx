import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: string;
  questionIndex: number;
  currentQuestion: number;
  selectedValue?: number;
  onAnswer: (questionIndex: number, value: number) => void;
}

export function QuestionCard({ 
  question, 
  questionIndex, 
  currentQuestion,
  selectedValue,
  onAnswer 
}: QuestionCardProps) {
  const isActive = questionIndex === currentQuestion;
  
  return (
    <motion.div
      id={`question-${questionIndex}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: questionIndex * 0.1 }}
      className={cn(
        "question-card transition-all duration-300",
        isActive && "active"
      )}
    >
      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <div className="text-sm font-semibold text-aot-teal mb-2">
              질문 {questionIndex + 1}
            </div>
            <h3 className="text-xl font-semibold text-aot-dark leading-relaxed">
              {question}
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>전혀 아니다</span>
              <span>매우 그렇다</span>
            </div>
            
            <div className="flex justify-center items-center space-x-3">
              {[1, 2, 3, 4, 5].map((value) => {
                const getSize = (val: number) => {
                  if (val === 1 || val === 5) return "w-16 h-16 text-lg";
                  if (val === 2 || val === 4) return "w-14 h-14 text-base";
                  return "w-12 h-12 text-sm";
                };
                
                return (
                  <Button
                    key={value}
                    variant="outline"
                    className={cn(
                      "likert-btn rounded-full border-2 font-semibold transition-all duration-200",
                      getSize(value),
                      selectedValue === value 
                        ? "bg-aot-teal text-white border-aot-teal" 
                        : "border-gray-300 hover:border-aot-teal hover:bg-aot-teal hover:text-white"
                    )}
                    onClick={() => onAnswer(questionIndex, value)}
                  >
                    {value}
                  </Button>
                );
              })}
            </div>
            
            <div className="flex justify-center space-x-2 mt-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <div
                  key={value}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    selectedValue === value ? "bg-aot-teal" : "bg-gray-300"
                  )}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
