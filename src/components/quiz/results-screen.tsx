import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, RotateCcw, Copy, Check } from "lucide-react";
import { useState } from "react";

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

interface ResultsScreenProps {
  result: QuizResult;
  onRestart: () => void;
}

export function ResultsScreen({ result, onRestart }: ResultsScreenProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = window.location.origin;
    const shareText = `나는 ${result.character.name} (${result.mbtiType}) 타입이야! 🎯\n\n"${result.character.title}"\n\n진격의 거인 MBTI 테스트 해보기 👇`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: '진격의 거인 MBTI 테스트',
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        // 공유가 취소되거나 실패한 경우 클립보드로 복사
        handleCopyUrl();
      }
    } else {
      handleCopyUrl();
    }
  };

  const handleCopyUrl = async () => {
    try {
      const shareUrl = window.location.origin;
      const shareText = `나는 ${result.character.name} (${result.mbtiType}) 타입이야! 🎯\n\n"${result.character.title}"\n\n진격의 거인 MBTI 테스트 해보기 👇\n${shareUrl}`;

      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('클립보드 복사 실패:', error);
    }
  };

  const getPercentage = (type: 'energy' | 'information' | 'decisions' | 'lifestyle') => {
    switch (type) {
      case 'energy':
        return Math.round((result.scores.E / (result.scores.E + result.scores.I)) * 100);
      case 'information':
        return Math.round((result.scores.N / (result.scores.S + result.scores.N)) * 100);
      case 'decisions':
        return Math.round((result.scores.F / (result.scores.T + result.scores.F)) * 100);
      case 'lifestyle':
        return Math.round((result.scores.P / (result.scores.J + result.scores.P)) * 100);
      default:
        return 50;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="result-card"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-aot-green to-aot-teal bg-clip-text text-transparent mb-4"
          >
            🎯 분석 완료!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600"
          >
            당신의 진격의 거인 캐릭터는...
          </motion.p>
        </div>

        {/* Character Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Card className="mb-8 overflow-hidden border-2 border-aot-teal/20 shadow-2xl">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-aot-green/10 to-aot-teal/10 p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={result.character.imageUrl}
                        alt={result.character.name}
                        className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-xl"
                      />
                      <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-aot-teal text-white text-lg px-4 py-1">
                        {result.mbtiType}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {result.character.name}
                    </h2>
                    <p className="text-xl text-aot-teal font-semibold mb-4">
                      {result.character.title}
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {result.character.description}
                    </p>

                    {/* Traits */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {result.character.traits.map((trait, index) => (
                        <Badge key={index} variant="secondary" className="bg-aot-amber/20 text-aot-dark">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Detailed Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Card className="mb-8 border-2 border-aot-green/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                📊 상세 성격 분석
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                {result.character.analysis}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* MBTI Scores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <Card className="mb-8 border-2 border-aot-amber/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                📈 성격 점수
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">외향성 (E)</span>
                    <span className="text-aot-teal font-bold">{getPercentage('energy')}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-aot-green to-aot-teal h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${getPercentage('energy')}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">직관성 (N)</span>
                    <span className="text-aot-teal font-bold">{getPercentage('information')}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-aot-green to-aot-teal h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${getPercentage('information')}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">감정형 (F)</span>
                    <span className="text-aot-teal font-bold">{getPercentage('decisions')}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-aot-green to-aot-teal h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${getPercentage('decisions')}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">인식형 (P)</span>
                    <span className="text-aot-teal font-bold">{getPercentage('lifestyle')}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-aot-green to-aot-teal h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${getPercentage('lifestyle')}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={handleShare}
            size="lg"
            className="bg-gradient-to-r from-aot-green to-aot-teal hover:from-aot-green/90 hover:to-aot-teal/90 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Share2 className="mr-2 h-5 w-5" />
            결과 공유하기
          </Button>

          <Button
            onClick={handleCopyUrl}
            variant="outline"
            size="lg"
            className="border-2 border-aot-teal text-aot-teal hover:bg-aot-teal hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            {copied ? (
              <>
                <Check className="mr-2 h-5 w-5" />
                복사됨!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-5 w-5" />
                링크 복사
              </>
            )}
          </Button>

          <Button
            onClick={onRestart}
            variant="outline"
            size="lg"
            className="border-2 border-gray-400 text-gray-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            다시하기
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}