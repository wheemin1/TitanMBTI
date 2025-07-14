import { characterImages } from './character-images';

export interface Character {
  name: string;
  mbtiType: string;
  title: string;
  description: string;
  analysis: string;
  imageUrl: string;
  traits: string[];
}

export const characters: Record<string, Character> = {
  ISTJ: {
    name: "미카사 아커만",
    mbtiType: "ISTJ",
    title: "신뢰할 수 있는 수호자",
    description: "당신은 미카사 아커만과 같은 성격입니다. 충실하고 실용적이며, 맡은 바 책임을 다하는 사람입니다.",
    analysis: "미카사처럼 당신은 전통과 질서를 중시하며, 가족과 소중한 사람들을 지키기 위해 헌신합니다. 현실적이고 실용적인 접근을 선호하며, 안정과 보안을 추구합니다. 감정보다는 논리와 사실에 기반해 판단하며, 일관성 있고 신뢰할 수 있는 성격입니다.",
    imageUrl: "/images/characters/istj.jpg",
    traits: ["충실함", "실용적", "책임감", "보호본능", "현실적"]
  },
  ISFJ: {
    name: "페트라 랄",
    mbtiType: "ISFJ",
    title: "따뜻한 수호자",
    description: "당신은 페트라 랄과 같은 성격입니다. 다른 사람을 배려하고 돌보는 따뜻한 마음을 가진 사람입니다.",
    analysis: "페트라처럼 당신은 다른 사람의 감정과 필요를 민감하게 감지하며, 조화로운 관계를 만들어가는 데 능숙합니다. 섬세하고 배려심 많으며, 팀워크를 중시합니다. 안정적이고 신뢰할 수 있으며, 다른 사람들의 성장을 도우려 합니다.",
    imageUrl: "/images/characters/isfj.jpg",
    traits: ["배려심", "섬세함", "팀워크", "안정감", "협력적"]
  },
  INFJ: {
    name: "아르민 알레르토",
    mbtiType: "INFJ",
    title: "통찰력 있는 이상주의자",
    description: "당신은 아르민 알레르토와 같은 성격입니다. 깊은 통찰력과 이상을 추구하는 전략적 사고를 가진 사람입니다.",
    analysis: "아르민처럼 당신은 복잡한 상황을 분석하고 미래를 내다보는 능력이 뛰어납니다. 창의적이고 독창적인 사고를 하며, 인류애와 이상을 추구합니다. 직관적이고 통찰력이 뛰어나며, 전략적 사고로 문제를 해결합니다.",
    imageUrl: "/images/characters/infj.jpg",
    traits: ["통찰력", "전략적", "이상주의", "창의적", "분석력"]
  },
  INTJ: {
    name: "리바이 아커만",
    mbtiType: "INTJ",
    title: "완벽주의 전략가",
    description: "당신은 리바이 아커만과 같은 성격입니다. 냉철한 판단력과 완벽을 추구하는 전략적 사고를 가진 사람입니다.",
    analysis: "리바이처럼 당신은 효율성과 완벽을 추구하며, 장기적인 비전을 가지고 체계적으로 계획을 세웁니다. 독립적이고 자신감이 있으며, 높은 기준을 설정하고 이를 달성하기 위해 노력합니다. 냉정하고 논리적인 사고를 바탕으로 결정을 내립니다.",
    imageUrl: "/images/characters/intj.jpg",
    traits: ["완벽주의", "효율성", "독립적", "전략적", "냉정함"]
  },
  ISTP: {
    name: "유미르",
    mbtiType: "ISTP",
    title: "실용적 현실주의자",
    description: "당신은 유미르와 같은 성격입니다. 현실적이고 실용적이며, 상황에 따라 유연하게 대처하는 사람입니다.",
    analysis: "유미르처럼 당신은 실용적이고 현실적인 접근을 선호하며, 상황에 따라 유연하게 적응합니다. 독립적이고 자유로운 영혼을 가지고 있으며, 필요할 때 결단력 있게 행동합니다. 감정보다는 논리와 사실에 기반해 판단합니다.",
    imageUrl: "/images/characters/istp.jpg",
    traits: ["현실적", "유연함", "독립적", "적응력", "실용적"]
  },
  ISFP: {
    name: "히스토리아 레이스",
    mbtiType: "ISFP",
    title: "따뜻한 이상주의자",
    description: "당신은 히스토리아 레이스와 같은 성격입니다. 따뜻한 마음과 강한 개인적 가치관을 가진 사람입니다.",
    analysis: "히스토리아처럼 당신은 개인적 가치와 원칙을 중시하며, 다른 사람의 감정에 공감하는 능력이 뛰어납니다. 조용하지만 확고한 신념을 가지고 있으며, 필요할 때 용기를 내어 행동합니다. 평화로운 관계를 선호하며, 자신만의 방식으로 세상에 기여하고자 합니다.",
    imageUrl: "/images/characters/isfp.jpg",
    traits: ["공감능력", "개인적 가치", "평화로움", "용기", "진정성"]
  },
  INFP: {
    name: "베르톨트 후버",
    mbtiType: "INFP",
    title: "내적 갈등의 이상주의자",
    description: "당신은 베르톨트 후버와 같은 성격입니다. 깊은 내적 갈등과 이상을 가진 복잡한 사람입니다.",
    analysis: "베르톨트처럼 당신은 강한 개인적 가치관과 이상을 가지고 있지만, 현실과의 괴리에서 오는 내적 갈등을 경험합니다. 조용하고 내성적이며, 깊이 있는 사고를 합니다. 다른 사람의 감정을 이해하는 능력이 뛰어나며, 평화와 조화를 추구합니다.",
    imageUrl: "/images/characters/infp.jpg",
    traits: ["내적 갈등", "이상주의", "깊이", "공감능력", "평화추구"]
  },
  INTP: {
    name: "애니 레온하트",
    mbtiType: "INTP",
    title: "냉철한 분석가",
    description: "당신은 애니 레온하트와 같은 성격입니다. 독립적이고 분석적인 사고를 가진 사람입니다.",
    analysis: "애니처럼 당신은 논리적이고 객관적인 사고를 중시하며, 복잡한 시스템과 아이디어를 분석하는 데 능숙합니다. 독립적이고 자유로운 사고를 하며, 전통적인 방식에 얽매이지 않습니다. 감정보다는 논리를 우선시하며, 효율성을 추구합니다.",
    imageUrl: "/images/characters/intp.jpg",
    traits: ["논리적", "분석적", "독립적", "객관적", "효율성"]
  },
  ESTP: {
    name: "에렌 예거",
    mbtiType: "ESTP",
    title: "열정적 행동가",
    description: "당신은 에렌 예거와 같은 성격입니다. 열정적이고 직접적인 행동을 선호하는 사람입니다.",
    analysis: "에렌처럼 당신은 즉각적이고 직접적인 행동을 선호하며, 현재 순간에 집중합니다. 에너지가 넘치고 모험을 좋아하며, 도전적인 상황에서 활력을 얻습니다. 실용적이고 현실적인 접근을 하며, 자유와 독립을 중시합니다.",
    imageUrl: "/images/characters/estp.jpg",
    traits: ["열정적", "행동력", "직접적", "모험적", "자유추구"]
  },
  ESFP: {
    name: "코니 슈프링어",
    mbtiType: "ESFP",
    title: "활발한 엔터테이너",
    description: "당신은 코니 슈프링어와 같은 성격입니다. 밝고 활발하며 사람들과 어울리기를 좋아하는 사람입니다.",
    analysis: "코니처럼 당신은 사교적이고 활발하며, 다른 사람들과 함께 있을 때 에너지를 얻습니다. 즐거운 경험을 추구하며, 분위기를 밝게 만드는 능력이 있습니다. 현재 순간을 즐기며, 자발적이고 유연한 성격입니다.",
    imageUrl: "/images/characters/esfp.jpg",
    traits: ["사교적", "활발함", "즐거움", "자발성", "유연성"]
  },
  ENFP: {
    name: "사샤 브라우스",
    mbtiType: "ENFP",
    title: "열정적 영감가",
    description: "당신은 사샤 브라우스와 같은 성격입니다. 열정적이고 창의적이며 새로운 가능성을 탐구하는 사람입니다.",
    analysis: "사샤처럼 당신은 열정적이고 창의적이며, 새로운 아이디어와 가능성에 흥미를 느낍니다. 사람들과의 관계를 중시하며, 다른 사람들에게 영감을 주는 능력이 있습니다. 자유롭고 독창적인 사고를 하며, 변화와 다양성을 추구합니다.",
    imageUrl: "/images/characters/enfp.jpg",
    traits: ["열정적", "창의적", "영감", "자유로움", "다양성"]
  },
  ENTP: {
    name: "한지 조에",
    mbtiType: "ENTP",
    title: "혁신적 발명가",
    description: "당신은 한지 조에와 같은 성격입니다. 호기심이 많고 창의적이며 새로운 아이디어를 탐구하는 사람입니다.",
    analysis: "한지처럼 당신은 지적 호기심이 강하고, 새로운 아이디어와 가능성을 탐구하는 것을 좋아합니다. 창의적이고 독창적인 사고를 하며, 복잡한 문제를 해결하는 데 능숙합니다. 토론과 아이디어 교환을 즐기며, 변화와 혁신을 추구합니다.",
    imageUrl: "/images/characters/entp.jpg",
    traits: ["호기심", "창의적", "혁신적", "지적", "탐구정신"]
  },
  ESTJ: {
    name: "장 키르슈타인",
    mbtiType: "ESTJ",
    title: "효율적 관리자",
    description: "당신은 장 키르슈타인과 같은 성격입니다. 체계적이고 효율적이며 리더십을 가진 사람입니다.",
    analysis: "장처럼 당신은 체계적이고 조직적인 접근을 선호하며, 효율성과 질서를 중시합니다. 리더십이 있고 책임감이 강하며, 목표를 달성하기 위해 계획적으로 행동합니다. 현실적이고 실용적인 사고를 하며, 전통과 규칙을 존중합니다.",
    imageUrl: "/images/characters/estj.jpg",
    traits: ["체계적", "리더십", "효율성", "책임감", "현실적"]
  },
  ESFJ: {
    name: "라이너 브라운",
    mbtiType: "ESFJ",
    title: "따뜻한 협력자",
    description: "당신은 라이너 브라운과 같은 성격입니다. 다른 사람을 배려하고 조화로운 관계를 만들어가는 사람입니다.",
    analysis: "라이너처럼 당신은 다른 사람의 감정과 필요를 민감하게 감지하며, 조화로운 관계를 만드는 데 능숙합니다. 책임감이 강하고 헌신적이며, 팀워크를 중시합니다. 전통적인 가치를 존중하며, 안정과 보안을 추구합니다.",
    imageUrl: "/images/characters/esfj.jpg",
    traits: ["배려심", "조화추구", "책임감", "헌신적", "팀워크"]
  },
  ENFJ: {
    name: "마르코 보트",
    mbtiType: "ENFJ",
    title: "영감을 주는 리더",
    description: "당신은 마르코 보트와 같은 성격입니다. 다른 사람들에게 영감을 주고 이끄는 자연스러운 리더십을 가진 사람입니다.",
    analysis: "마르코처럼 당신은 다른 사람들의 잠재력을 보고 이를 키워주는 능력이 뛰어납니다. 카리스마가 있고 영감을 주는 리더이며, 팀의 화합과 성장을 중시합니다. 이상주의적이고 비전을 가지고 있으며, 다른 사람들을 돕고 지원하는 것을 좋아합니다.",
    imageUrl: "/images/characters/enfj.jpg",
    traits: ["영감", "리더십", "비전", "카리스마", "성장지향"]
  },
  ENTJ: {
    name: "엘빈 스미스",
    mbtiType: "ENTJ",
    title: "전략적 지휘관",
    description: "당신은 엘빈 스미스와 같은 성격입니다. 강력한 리더십과 전략적 사고를 가진 지휘관입니다.",
    analysis: "엘빈처럼 당신은 강력한 리더십과 전략적 사고를 가지고 있으며, 큰 그림을 그리는 능력이 뛰어납니다. 목표 지향적이고 결단력이 있으며, 복잡한 상황에서도 냉정하게 판단합니다. 효율성과 성과를 중시하며, 장기적인 비전을 가지고 조직을 이끕니다.",
    imageUrl: "/images/characters/entj.jpg",
    traits: ["리더십", "전략적", "결단력", "비전", "목표지향"]
  }
};

export const getCharacterMatch = (mbtiType: string): Character => {
  const character = characters[mbtiType as keyof typeof characters] || characters.INFJ;
  return {
    ...character,
    imageUrl: characterImages[mbtiType as keyof typeof characterImages] || character.imageUrl
  };
};