import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Info } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <section className="max-w-2xl mx-auto px-4 text-center">
      <Card className="shadow-xl">
        <CardContent className="p-8">
          <div className="relative mb-6">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Attack on Titan inspired landscape" 
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl flex items-center justify-center">
              <h1 className="text-white text-2xl font-bold">진격의 거인</h1>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-aot-dark mb-4">
            진격의 거인 MBTI 팬 테스트
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            39개의 질문을 통해 당신의 성격 유형을 분석하고,<br />
            어떤 진격의 거인 캐릭터와 가장 닮았는지 알아보세요!
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <Info className="w-5 h-5 text-yellow-600 mr-2" />
              <span className="text-sm font-medium text-yellow-800">중요한 안내</span>
            </div>
            <p className="text-sm text-yellow-800">
              이 테스트는 공식 MBTI®가 아닌 엔터테인먼트용 팬 테스트입니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">⏱️ 약 5분 소요</span>
            </div>
            <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">📝 39개 질문</span>
            </div>
            <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">🎯 캐릭터 매칭</span>
            </div>
          </div>
          
          <Button 
            onClick={onStart}
            className="bg-aot-green hover:bg-aot-green/90 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105"
            size="lg"
          >
            <Play className="w-5 h-5 mr-2" />
            테스트 시작하기
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
