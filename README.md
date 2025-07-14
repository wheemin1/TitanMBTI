# Attack on Titan MBTI Quiz

진격의 거인 캐릭터와 연결된 MBTI 성격 테스트 웹 애플리케이션

## 🎯 Features

- **42개의 한국어 질문**: 진격의 거인 세계관을 바탕으로 한 시나리오 기반 질문
- **16개의 MBTI 캐릭터 매칭**: 미카사 아커만(ISTJ), 에렌 예거(ESTP) 등 모든 MBTI 유형
- **부드러운 스크롤링**: 질문 간 자연스러운 이동과 진행률 표시
- **실시간 진행률 추적**: 현재 진행 상황을 시각적으로 확인
- **결과 분석**: "당신의 진격의 거인 MBTI는 XXX입니다" 형식의 상세한 분석
- **반응형 디자인**: 모바일과 데스크톱 모두에서 최적화된 사용자 경험

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom Attack on Titan theme
- **Routing**: Wouter
- **Animations**: Framer Motion
- **Storage**: Local Storage (No backend required)

## 🚀 Deployment

### GitHub Repository
```bash
git clone https://github.com/wheemin1/TitanMBTI.git
cd TitanMBTI
npm install
npm run build
```

### Netlify Deployment
1. Connect this repository to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy automatically on every GitHub push

## 📝 MBTI Character Mappings

| MBTI | 캐릭터 | 설명 |
|------|--------|------|
| ISTJ | 미카사 아커만 | 신뢰할 수 있는 수호자 |
| ESTP | 에렌 예거 | 열정적인 모험가 |
| INTJ | 리바이 아커만 | 완벽주의 전략가 |
| INFJ | 아르민 알레르토 | 통찰력 있는 이상주의자 |
| ENFP | 하네스 | 열정적인 활동가 |
| ENTP | 장 키르슈타인 | 창의적 토론가 |
| ISFP | 히스토리아 레이스 | 따뜻한 이상주의자 |
| ESFP | 사샤 브라우스 | 자유로운 연예인 |
| ENTJ | 에르빈 스미스 | 대담한 지도자 |
| ESTJ | 도트 픽시스 | 엄격한 관리자 |
| ISFJ | 페트라 랄 | 따뜻한 수호자 |
| ESFJ | 크리스타 렌츠 | 친절한 협력자 |
| ISTP | 유미르 | 실용적 현실주의자 |
| INTP | 한지 조에 | 창의적 사색가 |
| ENFJ | 마르코 보트 | 카리스마 있는 지도자 |
| INFP | 베르톨트 후버 | 조용한 이상주의자 |

## 🎨 Theme Colors

- **Primary**: Attack on Titan green (#2d5016)
- **Secondary**: Teal (#5c9e9e)
- **Accent**: Amber (#d49c3d)
- **Background**: Light gray (#f5f5f5)

## 📱 Features Details

### Quiz System
- 42개의 시나리오 기반 질문
- 5점 척도 응답 (매우 동의하지 않음 ~ 매우 동의함)
- 차별화된 버튼 크기 (1,5번 크게, 2,4번 중간, 3번 작게)
- 부드러운 스크롤링과 진행률 표시

### Result Analysis
- MBTI 유형 계산 알고리즘
- 캐릭터 매칭 시스템
- 상세한 성격 분석
- 특성별 점수 표시

### User Experience
- 반응형 디자인
- 진격의 거인 테마 색상
- 직관적인 네비게이션
- 로컬 스토리지 결과 저장

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 License

MIT License