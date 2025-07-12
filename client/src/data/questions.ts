export const questions = [
  "에렌의 '땅울림'은 인류사 전체로 보면 불가피한 정의이자 필요악이라고 본다.",
  "'땅울림'을 멈춰도 엘디아 학살 위험이 남는다면, 차라리 끝까지 진행해야 한다고 생각한다.",
  "내가 미카사라면, 마지막 순간에도 '에렌을 지키는 일'이 동료보다 우선일 것이다.",
  "에렌 사후, 미카사가 장과 가정을 꾸렸다 해도 에렌이라면 이해했을 것이라 본다.",
  "'사람을 죽인' 라이너가 자살 충동을 보이자, 먼저 그의 죄책감에 공감했다.",
  "왕정 쿠데타를 이끈 에르빈의 결단은 '역사적 진보'라 평가한다.",
  "조사병단 해산 뒤에도 한지처럼 연구 데이터를 파일·폴더별로 정리해 둘 것 같다.",
  "처음 벽 밖 땅을 밟으면 모래 냄새부터 맡고 조용히 관찰했을 듯하다.",
  "지크의 '엘디아 안락사' 계획은 냉정하지만 논리적 해결책이라고 본다.",
  "장의 '헌병단에 들어가 편히 살겠다' 발언에 현실 감각이 느껴져 공감했다.",
  "한지가 초대형 거인을 막다 최후를 맞은 선택을 '학문적 숭고함'이라 본다.",
  "에르빈의 돌격은 감정이 아닌 전략적으로도 최선이었다고 생각한다.",
  "코니 어머니가 거인으로 등장했을 때, 먼저 그의 감정을 이해하려 했다.",
  "가비가 사샤를 쏘았을 때, 가비의 입장도 일부 이해됐다.",
  "리바이‑케니 총격 추격전에서, 나도 즉시 지형을 활용해 회피 동선을 그렸을 듯하다.",
  "케니의 '모두 뭔가의 노예였다'는 말이 삶의 본질을 찌른다고 느꼈다.",
  "히스토리아의 임신이 정치적 포석일 가능성을 먼저 계산했다.",
  "'2000년 전 유미르'가 결국 자유 의지로 선택했다는 해석에 동의한다.",
  "베르톨트에게 항복을 설득하던 아르민의 대화법에 전략적 통찰을 느꼈다.",
  "사샤의 '고기 절도' 장면을 장기적 식량 전략으로 보는 편이다.",
  "한지의 거인 실험은 윤리적 논쟁보다 지식 추구가 우선이라고 본다.",
  "나라면 조사병단보다 헌병단을 선택해 내근을 선호했을 것이다.",
  "바다에 처음 도달했을 때, 들어가기보다 먼저 풍경을 감상했을 것이다.",
  "레벨리오서 '미안하다'는 라이너의 사과에 마음이 먼저 움직였다.",
  "내가 지크라면 팔코가 외침 범위 밖에 나갈 때까지 기다렸을 것이다.",
  "아르민 대신 에르빈이 살았어야 한다고 생각한다.",
  "나는 '반(反) 예거파'에 공감한다.",
  "히즈루 대표 키요미의 무역 제안을 국가 전략 차원에서 긍정 평가한다.",
  "리바이가 '짐승 거인은 내가 죽인다'고 맹세할 때 같은 결연함을 느꼈다.",
  "내가 『진격의 거인』 세계관에서 태어난다면, 리바이가 아닌 아르민으로 태어나길 원한다.",
  "플록과 한지의 대치에서, 이념보다 먼저 인명 피해를 최소화할 방법을 찾았다.",
  "가비가 감옥에서 사과할 때, 단번에 진심 여부를 파악하려 했다.",
  "훈련병 시절 '벽 밖 여행' 꿈을 듣고, 위험 대비 계획서를 먼저 썼을 것 같다.",
  "사샤가 고기 나눠 먹자고 할 때, 식량 재고부터 계산했을 것 같다.",
  "에르빈의 '진실 추구' 집착이 때로는 조직에 위험이 된다고 느꼈다.",
  "위험함에도 불구하고 거인 사체를 직접 만져 조직감을 확인하고 싶다.",
  "사샤 아버지는 정말 훌륭한 인물이라고 생각한다.",
  "전투에서 감정보다는 전략과 논리를 우선시한다.",
  "미래의 계획을 세우는 것보다 현재 상황에 집중하는 편이다."
];

// Question mapping to MBTI dimensions
export const questionMappings = [
  { dimension: 'T', reverse: false }, // 1 - T (thinking)
  { dimension: 'J', reverse: false }, // 2 - J (judging)
  { dimension: 'F', reverse: false }, // 3 - F (feeling)
  { dimension: 'F', reverse: false }, // 4 - F/N (feeling/intuition)
  { dimension: 'F', reverse: false }, // 5 - F (feeling)
  { dimension: 'J', reverse: false }, // 6 - N/J (intuition/judging)
  { dimension: 'J', reverse: false }, // 7 - J (judging)
  { dimension: 'S', reverse: false }, // 8 - S/I (sensing/introversion)
  { dimension: 'T', reverse: false }, // 9 - T (thinking)
  { dimension: 'T', reverse: false }, // 10 - T (thinking)
  { dimension: 'N', reverse: false }, // 11 - N (intuition)
  { dimension: 'J', reverse: false }, // 12 - J (judging)
  { dimension: 'F', reverse: false }, // 13 - F (feeling)
  { dimension: 'F', reverse: false }, // 14 - F (feeling)
  { dimension: 'S', reverse: false }, // 15 - S (sensing)
  { dimension: 'N', reverse: false }, // 16 - N (intuition)
  { dimension: 'T', reverse: false }, // 17 - T (thinking)
  { dimension: 'N', reverse: false }, // 18 - N (intuition)
  { dimension: 'T', reverse: false }, // 19 - N/T (intuition/thinking)
  { dimension: 'T', reverse: false }, // 20 - T (thinking)
  { dimension: 'T', reverse: false }, // 21 - T (thinking)
  { dimension: 'I', reverse: false }, // 22 - I/J (introversion/judging)
  { dimension: 'S', reverse: false }, // 23 - S (sensing)
  { dimension: 'F', reverse: false }, // 24 - F (feeling)
  { dimension: 'F', reverse: false }, // 25 - F (feeling)
  { dimension: 'T', reverse: false }, // 26 - T/J (thinking/judging)
  { dimension: 'F', reverse: false }, // 27 - F/N (feeling/intuition)
  { dimension: 'J', reverse: false }, // 28 - J (judging)
  { dimension: 'J', reverse: false }, // 29 - J (judging)
  { dimension: 'N', reverse: false }, // 30 - N (intuition)
  { dimension: 'T', reverse: false }, // 31 - T (thinking)
  { dimension: 'S', reverse: false }, // 32 - S (sensing)
  { dimension: 'J', reverse: false }, // 33 - J (judging)
  { dimension: 'T', reverse: false }, // 34 - T (thinking)
  { dimension: 'F', reverse: false }, // 35 - F (feeling)
  { dimension: 'S', reverse: false }, // 36 - S (sensing)
  { dimension: 'F', reverse: false }, // 37 - F (feeling)
  { dimension: 'T', reverse: false }, // 38 - T (thinking)
  { dimension: 'S', reverse: false }, // 39 - S (sensing)
  { dimension: 'S', reverse: false }, // 40 - S (sensing)
];
