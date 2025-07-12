import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Share2, Link, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ResultsScreenProps {
  result: {
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
  };
  onRestart: () => void;
  isLoading: boolean;
}

export function ResultsScreen({ result, onRestart, isLoading }: ResultsScreenProps) {
  const { toast } = useToast();

  const calculatePercentage = (score1: number, score2: number) => {
    const total = score1 + score2;
    return Math.round((score1 / total) * 100);
  };

  const percentages = {
    E: calculatePercentage(result.scores.E, result.scores.I),
    N: calculatePercentage(result.scores.N, result.scores.S),
    F: calculatePercentage(result.scores.F, result.scores.T),
    P: calculatePercentage(result.scores.P, result.scores.J),
  };

  const handleShare = async () => {
    const shareText = `진격의 거인 MBTI 테스트 결과: ${result.mbtiType} - ${result.character.name}`;
    const shareUrl = `${window.location.origin}/result/${result.sessionId}`;

    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      toast({
        title: "링크가 복사되었습니다!",
        description: "클립보드에 결과 링크가 복사되었습니다.",
      });
    } catch (error) {
      toast({
        title: "공유 실패",
        description: "공유 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Card className="shadow-xl">
          <CardContent className="p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aot-teal mx-auto mb-4"></div>
            <p className="text-lg">결과를 분석하고 있습니다...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="result-card"
      >
        <Card className="shadow-2xl border-2 border-gray-200">
          <CardContent className="p-10">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                당신의 진격의 거인 MBTI는 <span className="text-aot-green">{result.mbtiType}</span>입니다
              </h2>
              <div className="bg-gradient-to-br from-aot-green via-aot-teal to-blue-600 text-white rounded-3xl p-8 mb-8 shadow-lg">
                <div className="text-6xl font-bold mb-3 drop-shadow-lg text-white">
                  {result.mbtiType}
                </div>
                <div className="text-2xl font-semibold opacity-95 text-white">
                  {result.character.title}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <div className="text-center bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <img 
                  src={result.character.imageUrl} 
                  alt={result.character.name}
                  className="w-56 h-56 object-cover rounded-2xl mx-auto mb-6 shadow-xl border-4 border-white"
                />
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {result.character.name}
                </h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {result.character.description}
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {result.character.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg border border-blue-300"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-lg">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-gray-900 text-lg">마음</span>
                    <span className="text-lg font-semibold text-aot-green">{percentages.E}%</span>
                  </div>
                  <Progress value={percentages.E} className="mb-3 h-3" />
                  <div className="flex justify-between text-sm font-medium text-gray-600">
                    <span>외향형</span>
                    <span>내향형</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-lg">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-gray-900 text-lg">에너지</span>
                    <span className="text-lg font-semibold text-aot-green">{percentages.N}%</span>
                  </div>
                  <Progress value={percentages.N} className="mb-3 h-3" />
                  <div className="flex justify-between text-sm font-medium text-gray-600">
                    <span>직관형</span>
                    <span>현실형</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-lg">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-gray-900 text-lg">본성</span>
                    <span className="text-lg font-semibold text-aot-green">{percentages.F}%</span>
                  </div>
                  <Progress value={percentages.F} className="mb-3 h-3" />
                  <div className="flex justify-between text-sm font-medium text-gray-600">
                    <span>감정형</span>
                    <span>사고형</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-lg">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-gray-900 text-lg">전술</span>
                    <span className="text-lg font-semibold text-aot-green">{percentages.P}%</span>
                  </div>
                  <Progress value={percentages.P} className="mb-3 h-3" />
                  <div className="flex justify-between text-sm font-medium text-gray-600">
                    <span>인식형</span>
                    <span>판단형</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 mb-8 border-2 border-blue-100 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-3 text-2xl">📊</span>
                성격 분석
              </h4>
              <p className="text-gray-800 leading-relaxed text-lg">
                {result.character.analysis}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={handleShare}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg"
                size="lg"
              >
                <Link className="w-5 h-5 mr-2" />
                링크 복사
              </Button>
              <Button 
                onClick={onRestart}
                className="bg-aot-green hover:bg-aot-green/90 text-white px-6 py-3 text-lg"
                size="lg"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                다시 테스트
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
