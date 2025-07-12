export const questions = [
  "에렌의 '땅울림'은 인류사 전체로 보면 불가피한 정의이자 필요악이라고 본다.",
  "'땅울림'을 멈춰도 엘디아 학살 위험이 남는다면, 차라리 끝까지 진행해야 한다고 생각한다.",
  "내가 미카사라면, 마지막 순간에도 '에렌을 지키는 일'이 동료보다 우선일 것이다.",
  "에렌 사후, 미카사가 장과 가정을 꾸렸다 해도 내가 에렌이라면 이해했을 것이다.",
  "'사람을 죽인' 라이너가 자살 충동을 보이자, 먼저 그의 죄책감에 공감했다.",
  "왕정 쿠데타를 이끈 엘빈 스미스의 결단은 '역사적 진보'라 평가한다.",
  "조사병단 해산 뒤에도 한지처럼 연구 데이터를 파일·폴더별로 정리해 둘 것 같다.",
  "지크의 '에르디아 안락사' 계획은 냉정하지만 논리적 해결책이라고 본다.",
  "쟝 키르슈타인의 '헌병단에 들어가 편히 살겠다' 발언에 현실 감각이 느껴져 공감했다.",
  "한지가 초대형 거인을 막다 최후를 맞은 선택을 '학문적 숭고함'이라 본다.",
  "엘빈의 돌격은 감정이 아닌 전략적으로도 최선이었다고 생각한다.",
  "코니 어머니가 거인으로 등장했을 때, 먼저 그의 감정을 이해하려 했다.",
  "가비가 사샤를 쏘았을 때, 가비의 입장도 일부 이해됐다.",
  "리바이‑케니 총격 추격전에서, 나도 즉시 지형을 활용해 회피 동선을 그렸을 듯하다.",
  "케니의 '모두 뭔가의 노예였다'는 말이 삶의 본질을 찌른다고 느꼈다.",
  "'2000년 전 유미르'가 결국 자유 의지로 선택했다는 해석에 동의한다.",
  "사샤의 '고기 절도' 장면을 장기적 식량 전략으로 보는 편이다.",
  "한지의 거인 실험은 윤리적 논쟁보다 지식 추구가 우선이라고 본다.",
  "나라면 조사병단보다 헌병단을 선택해 내근을 선호했을 것이다.",
  "바다에 처음 도달했을 때, 들어가기보다 먼저 풍경을 감상했을 것이다.",
  "레벨리오에서 라이너가 '미안하다'고 사과할 때 마음이 먼저 움직였다.",
  "내가 지크라면 팔코가 외침 범위 밖으로 벗어나길 기다렸을 것이다.",
  "아르민 대신 에르빈이 살았어야 한다고 생각한다.",
  "나는 '반(反) 예거파'에 더 공감한다.",
  "히즈루 대표 키요미의 무역 제안을 국가 전략 차원에서 긍정 평가한다.",
  "리바이가 '짐승 거인은 내가 죽인다'고 맹세할 때 같은 결연함을 느꼈다.",
  "내가 『진격의 거인』 세계관에서 태어난다면, 리바이가 아닌 아르민으로 태어나길 원한다.",
  "가비가 감옥에서 사과할 때, 단번에 진심 여부를 파악하려 했다.",
  "훈련병 시절 '벽 밖 여행' 꿈을 듣고, 위험 대비 계획서를 먼저 썼을 것 같다.",
  "사샤가 고기 나눠 먹자고 할 때, 식량 재고부터 계산했을 것 같다.",
  "엘빈의 '진실 추구' 집착이 때로는 조직에 위험이 된다고 느꼈다.",
  "위험함에도 불구하고 거인을 직접 만져 조직감을 확인하고 싶다.",
  "'월 교'의 존재는 사회 안정을 위한 필요한 장치였다고 본다.",
  "진격의 거인 세계에서도 진정한 자유는 존재할 수 있다고 믿는다.",
  "벽 밖 세계의 발견은 두려움보다 흥미진진한 모험이라고 여겼을 것이다.",
  "파라디 섬 주민들의 기억 조작은 때로는 필요악이었다고 생각한다.",
  "조사병단 가입은 개인의 자유의지보다 사명감에서 비롯된다고 본다.",
  "에르디아와 마레의 역사적 갈등은 대화로 해결할 수 있다고 믿는다.",
  "마레의 전사 프로그램은 체계적이고 효율적인 시스템이라고 평가한다.",
  "거인의 비밀을 파헤치는 과정에서 호기심이 두려움을 압도했을 것이다.",
  "라이너와 베르톨트의 정체가 밝혀졌을 때, 배신감보다는 복잡한 심정이었다.",
  "가족과 동료 사이에서 선택해야 한다면, 가족을 우선시할 것이다."
];

// Question mapping to MBTI dimensions
export const questionMappings = [
  { dimension: 'T', reverse: false }, // 1 - T/J
  { dimension: 'J', reverse: false }, // 2 - J
  { dimension: 'F', reverse: false }, // 3 - F
  { dimension: 'F', reverse: false }, // 4 - F/N
  { dimension: 'F', reverse: false }, // 5 - F
  { dimension: 'J', reverse: false }, // 6 - N/J
  { dimension: 'J', reverse: false }, // 7 - J
  { dimension: 'T', reverse: false }, // 8 - T
  { dimension: 'T', reverse: false }, // 9 - T
  { dimension: 'N', reverse: false }, // 10 - N
  { dimension: 'J', reverse: false }, // 11 - J
  { dimension: 'F', reverse: false }, // 12 - F
  { dimension: 'F', reverse: false }, // 13 - F
  { dimension: 'S', reverse: false }, // 14 - S
  { dimension: 'N', reverse: false }, // 15 - N
  { dimension: 'N', reverse: false }, // 16 - N
  { dimension: 'T', reverse: false }, // 17 - T
  { dimension: 'T', reverse: false }, // 18 - T
  { dimension: 'I', reverse: false }, // 19 - I/J
  { dimension: 'S', reverse: false }, // 20 - S
  { dimension: 'F', reverse: false }, // 21 - F
  { dimension: 'F', reverse: false }, // 22 - F
  { dimension: 'T', reverse: false }, // 23 - T/J
  { dimension: 'F', reverse: false }, // 24 - F/N
  { dimension: 'J', reverse: false }, // 25 - J
  { dimension: 'J', reverse: false }, // 26 - J
  { dimension: 'N', reverse: false }, // 27 - N
  { dimension: 'S', reverse: false }, // 28 - S
  { dimension: 'J', reverse: false }, // 29 - J
  { dimension: 'T', reverse: false }, // 30 - T
  { dimension: 'F', reverse: false }, // 31 - F
  { dimension: 'S', reverse: false }, // 32 - S
  { dimension: 'T', reverse: false }, // 33 - T/J
  { dimension: 'N', reverse: false }, // 34 - N
  { dimension: 'N', reverse: false }, // 35 - N/P
  { dimension: 'T', reverse: false }, // 36 - T/J
  { dimension: 'J', reverse: false }, // 37 - J
  { dimension: 'F', reverse: false }, // 38 - F/N
  { dimension: 'T', reverse: false }, // 39 - T/J
  { dimension: 'N', reverse: false }, // 40 - N/P
  { dimension: 'F', reverse: false }, // 41 - F/N
  { dimension: 'F', reverse: false }, // 42 - F
];