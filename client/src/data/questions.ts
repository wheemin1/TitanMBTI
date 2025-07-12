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
  "히스토리아가 왕위를 받아들인 결정은 현실적으로 옳은 선택이었다고 본다.",
  "벽 안 사람들이 거인의 정체를 모르고 살았던 것이 오히려 평화로웠다고 생각한다.",
  "마를리 전사들의 어린 시절 세뇌 교육을 보면서 분노보다는 안타까움을 느꼈다.",
  "파라디 섬의 '악마'라는 편견이 완전히 틀렸다는 것을 증명하고 싶다.",
  "조사병단원들의 희생은 인류 발전을 위한 숭고한 헌신이라고 생각한다.",
  "거인화 능력자들의 수명 제한은 운명적으로 받아들여야 한다고 본다.",
  "월 마리아 탈환 작전에서 개인적 감정보다 전략을 우선시해야 한다고 생각했다.",
  "진실을 알게 된 후에도 벽 안의 평범한 일상이 그리웠을 것이다.",
  "사샤의 죽음은 전쟁의 비극을 상징하는 의미 있는 희생이라고 본다.",
  "라이너와 베르톨트의 정체가 밝혀졌을 때, 배신감보다는 복잡한 심정이었다.",
  "거인의 비밀을 파헤치는 과정에서 호기심이 두려움을 압도했을 것이다.",
  "아르민의 희생 정신은 진정한 용기의 표현이라고 생각한다.",
  "엘디아와 마를리의 역사적 갈등은 대화로 해결할 수 있다고 믿는다.",
  "조사병단 가입은 개인의 자유의지보다는 사명감에서 비롯된다고 본다.",
  "거인의 힘을 가진 자들의 운명은 미리 정해져 있다고 생각한다.",
  "벽 밖 세계의 발견은 두려움보다는 흥미진진한 모험이라고 여겼을 것이다.",
  "에렌의 변화 과정을 보면서 환경이 사람을 바꾼다는 것을 실감했다.",
  "거인화 실험의 윤리적 문제보다는 과학적 가치에 더 주목했을 것이다.",
  "파라디 섬 주민들의 기억 조작은 때로는 필요악이었다고 생각한다.",
  "진격의 거인의 능력은 미래를 바꿀 수 있는 희망적인 힘이라고 본다.",
  "마를리의 전사 프로그램은 체계적이고 효율적인 시스템이라고 평가한다.",
  "벽신교의 존재는 사회 안정을 위한 필요한 장치였다고 생각한다.",
  "거인 대전의 역사는 인류가 반복하는 전쟁의 본질을 보여준다고 본다.",
  "진격의 거인 세계에서 진정한 자유는 존재할 수 있다고 믿는다."
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