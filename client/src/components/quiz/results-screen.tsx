import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Share2, Twitter, Link, RefreshCw } from "lucide-react";
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

  const handleShare = async (platform: string) => {
    const shareText = `진격의 거인 MBTI 테스트 결과: ${result.mbtiType} - ${result.character.name}`;
    const shareUrl = `${window.location.origin}/result/${result.sessionId}`;

    try {
      if (platform === 'twitter') {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(twitterUrl, '_blank');
      } else if (platform === 'copy') {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        toast({
          title: "링크가 복사되었습니다!",
          description: "클립보드에 결과 링크가 복사되었습니다.",
        });
      }
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
        <Card className="shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-aot-dark mb-2">
                당신의 진격의 거인 MBTI는 {result.mbtiType}입니다
              </h2>
              <div className="bg-gradient-to-r from-aot-green to-aot-teal text-white rounded-2xl p-6 mb-6">
                <div className="text-5xl font-bold mb-2">
                  {result.mbtiType}
                </div>
                <div className="text-xl font-semibold">
                  {result.character.title}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <img 
                  src={result.character.imageUrl} 
                  alt={result.character.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-2xl font-bold text-aot-dark mb-2">
                  {result.character.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {result.character.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {result.character.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-aot-teal text-white rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-aot-dark">마음</span>
                    <span className="text-sm text-gray-600">{percentages.E}%</span>
                  </div>
                  <Progress value={percentages.E} className="mb-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>외향형</span>
                    <span>내향형</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-aot-dark">에너지</span>
                    <span className="text-sm text-gray-600">{percentages.N}%</span>
                  </div>
                  <Progress value={percentages.N} className="mb-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>직관형</span>
                    <span>현실형</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-aot-dark">본성</span>
                    <span className="text-sm text-gray-600">{percentages.F}%</span>
                  </div>
                  <Progress value={percentages.F} className="mb-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>감정형</span>
                    <span>사고형</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-aot-dark">전술</span>
                    <span className="text-sm text-gray-600">{percentages.P}%</span>
                  </div>
                  <Progress value={percentages.P} className="mb-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>인식형</span>
                    <span>판단형</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-bold text-aot-dark mb-3">성격 분석</h4>
              <p className="text-gray-700 leading-relaxed">
                {result.character.analysis}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => handleShare('twitter')}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Twitter className="w-4 h-4 mr-2" />
                트위터 공유
              </Button>
              <Button 
                onClick={() => handleShare('copy')}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <Link className="w-4 h-4 mr-2" />
                링크 복사
              </Button>
              <Button 
                onClick={onRestart}
                className="bg-aot-green hover:bg-aot-green/90 text-white"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                다시 테스트
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
