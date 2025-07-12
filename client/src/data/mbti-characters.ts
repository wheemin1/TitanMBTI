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
  ENFP: {
    name: "에렌 예거",
    mbtiType: "ENFP",
    title: "열정적인 중재자",
    description: "자유를 향한 끝없는 열정과 의지를 가진 캐릭터",
    analysis: "당신은 열정적이고 창의적인 성격으로, 새로운 가능성을 탐색하는 것을 좋아합니다. 진격의 거인 세계에서 당신은 자유를 향한 강한 의지와 동료들에 대한 깊은 애정을 보여줄 것입니다. 때로는 감정적으로 행동하지만, 그 순수한 열정이 주변 사람들에게 큰 영감을 줍니다.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["열정적", "자유로운", "창의적", "감정적", "영감을 주는"]
  },
  INFP: {
    name: "미카사 아커만",
    mbtiType: "INFP",
    title: "중재자",
    description: "조용하지만 강한 내면의 힘을 가진 보호자",
    analysis: "당신은 조용하고 내성적이지만, 강한 도덕적 신념과 보호 본능을 가지고 있습니다. 소중한 사람들을 위해서라면 어떤 희생도 감수할 수 있는 헌신적인 성격입니다. 감정이 깊고 신중하며, 진정한 가치를 중시합니다.",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616c96c8e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["헌신적", "보호적", "조용한", "강한", "도덕적"]
  },
  ENTP: {
    name: "한지 조에",
    mbtiType: "ENTP",
    title: "뜨거운 논쟁가",
    description: "호기심이 넘치고 창의적인 연구자",
    analysis: "당신은 호기심이 넘치고 창의적인 사고를 가진 혁신가입니다. 새로운 아이디어와 가능성을 탐구하는 것을 좋아하며, 기존의 틀에 얽매이지 않는 자유로운 사고를 합니다. 열정적이고 에너지가 넘치며, 복잡한 문제를 해결하는 데 뛰어납니다.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["호기심", "창의적", "혁신적", "열정적", "자유로운"]
  },
  INTJ: {
    name: "에르빈 스미스",
    mbtiType: "INTJ",
    title: "건축가",
    description: "전략적이고 비전을 가진 지도자",
    analysis: "당신은 전략적 사고와 장기적 비전을 가진 천연 지도자입니다. 복잡한 문제를 체계적으로 분석하고 해결하는 능력이 뛰어나며, 목표 달성을 위해 철저한 계획을 세웁니다. 독립적이고 결단력이 있으며, 큰 그림을 보는 능력이 탁월합니다.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["전략적", "비전", "지도력", "독립적", "결단력"]
  },
  ISTP: {
    name: "리바이 아커만",
    mbtiType: "ISTP",
    title: "거장",
    description: "실용적이고 능숙한 문제 해결사",
    analysis: "당신은 실용적이고 현실적인 문제 해결사입니다. 조용하고 과묵하지만, 위기 상황에서 놀라운 집중력과 실행력을 발휘합니다. 감정표현은 서툴지만, 행동으로 자신의 마음을 보여주는 타입입니다. 완벽주의적 성향이 있으며, 자신의 분야에서 최고가 되려고 노력합니다.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["실용적", "능숙한", "집중력", "완벽주의", "과묵한"]
  },
  ENFJ: {
    name: "장 키르슈타인",
    mbtiType: "ENFJ",
    title: "선도자",
    description: "카리스마 있고 영감을 주는 지도자",
    analysis: "당신은 타인을 이끌고 영감을 주는 천연 지도자입니다. 다른 사람들의 감정과 동기를 잘 이해하며, 팀워크를 중시합니다. 책임감이 강하고 헌신적이며, 공동체의 선을 위해 행동합니다. 때로는 다른 사람들의 기대에 부응하려다 자신을 희생하기도 합니다.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["카리스마", "영감", "책임감", "헌신적", "팀워크"]
  },
  INFJ: {
    name: "아르민 아를레르트",
    mbtiType: "INFJ",
    title: "옹호자",
    description: "조용하지만 확고한 신념을 가진 이상주의자",
    analysis: "당신은 조용하고 사려 깊은 이상주의자입니다. 깊은 통찰력과 직관력을 가지고 있으며, 복잡한 상황을 다각도로 분석할 수 있습니다. 평화를 추구하고 갈등을 해결하려 노력하며, 타인의 감정을 깊이 이해합니다. 강한 도덕적 신념을 가지고 있지만, 때로는 이상과 현실 사이에서 고민하기도 합니다.",
    imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["이상주의", "통찰력", "사려깊은", "평화추구", "도덕적"]
  },
  ESFP: {
    name: "사샤 블라우스",
    mbtiType: "ESFP",
    title: "연예인",
    description: "활기차고 친근한 분위기 메이커",
    analysis: "당신은 활기차고 친근한 분위기 메이커입니다. 현재 순간을 즐기고 다른 사람들과 함께 있는 것을 좋아합니다. 낙관적이고 유머러스하며, 주변 사람들에게 즐거움을 선사합니다. 감정 표현이 솔직하고 자연스러우며, 인간관계에서 따뜻함을 보여줍니다.",
    imageUrl: "https://images.unsplash.com/photo-1488207984626-e8b84ee3dff5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["활기찬", "친근한", "낙관적", "유머러스", "따뜻한"]
  },
  ISTJ: {
    name: "베르톨트 후버",
    mbtiType: "ISTJ",
    title: "물류담당자",
    description: "신중하고 책임감 있는 실무자",
    analysis: "당신은 신중하고 책임감 있는 실무자입니다. 전통과 규칙을 중시하며, 주어진 임무를 성실히 완수하려 노력합니다. 조용하고 내성적이지만, 깊은 내면의 갈등을 가지고 있기도 합니다. 안정성을 추구하고 변화를 어려워하지만, 위기 상황에서는 놀라운 힘을 발휘하기도 합니다.",
    imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["신중한", "책임감", "성실한", "안정추구", "내성적"]
  },
  ESTP: {
    name: "코니 스프링어",
    mbtiType: "ESTP",
    title: "사업가",
    description: "활동적이고 적응력이 뛰어난 행동가",
    analysis: "당신은 활동적이고 적응력이 뛰어난 행동가입니다. 현재 순간에 집중하고 즉석에서 문제를 해결하는 능력이 뛰어납니다. 사교적이고 친근하며, 새로운 경험을 추구합니다. 때로는 깊이 생각하기보다 직관적으로 행동하는 경향이 있지만, 위기 상황에서 빠른 판단력을 발휘합니다.",
    imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["활동적", "적응력", "사교적", "직관적", "빠른판단"]
  },
  ISFJ: {
    name: "히스토리아 라이스",
    mbtiType: "ISFJ",
    title: "수호자",
    description: "따뜻하고 배려심 깊은 보호자",
    analysis: "당신은 따뜻하고 배려심 깊은 보호자입니다. 다른 사람들의 필요를 먼저 생각하고 도움을 주려 노력합니다. 겸손하고 성실하며, 조화로운 관계를 유지하려 합니다. 때로는 자신의 필요를 뒤로 미루고 다른 사람을 우선시하기도 하지만, 그 따뜻함이 주변 사람들에게 큰 위로가 됩니다.",
    imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["따뜻한", "배려심", "겸손한", "성실한", "조화추구"]
  },
  ESTJ: {
    name: "라이너 브라운",
    mbtiType: "ESTJ",
    title: "경영자",
    description: "실용적이고 체계적인 지도자",
    analysis: "당신은 실용적이고 체계적인 지도자입니다. 목표를 달성하기 위해 체계적으로 계획을 세우고 실행하는 능력이 뛰어납니다. 책임감이 강하고 의무를 중시하며, 팀의 성과를 위해 노력합니다. 때로는 내면의 갈등을 숨기고 강한 모습을 보이려 하지만, 깊은 마음속에는 따뜻한 감정을 가지고 있습니다.",
    imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["실용적", "체계적", "책임감", "의무감", "목표지향"]
  },
  INTP: {
    name: "지크 예거",
    mbtiType: "INTP",
    title: "논리학자",
    description: "분석적이고 독립적인 사색가",
    analysis: "당신은 분석적이고 독립적인 사색가입니다. 복잡한 문제를 논리적으로 분석하고 독창적인 해결책을 찾는 능력이 뛰어납니다. 객관적이고 냉철한 판단을 내리며, 기존의 틀에 얽매이지 않는 자유로운 사고를 합니다. 때로는 감정보다 논리를 우선시하여 차갑게 느껴질 수 있지만, 진정한 이해와 해결을 추구합니다.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["분석적", "독립적", "논리적", "객관적", "창의적"]
  },
  ISFP: {
    name: "유미르",
    mbtiType: "ISFP",
    title: "모험가",
    description: "자유로운 영혼의 예술가",
    analysis: "당신은 자유로운 영혼의 예술가입니다. 자신만의 가치관과 신념을 가지고 있으며, 진정성을 중시합니다. 조용하고 겸손하지만, 소중한 사람을 위해서는 모든 것을 희생할 수 있는 강한 의지를 가지고 있습니다. 감정이 풍부하고 직관적이며, 자신만의 길을 걸어가는 독립적인 성향이 있습니다.",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["자유로운", "진정성", "겸손한", "희생적", "독립적"]
  },
  ESFJ: {
    name: "페트라 랄",
    mbtiType: "ESFJ",
    title: "집정관",
    description: "따뜻하고 협력적인 조화의 추구자",
    analysis: "당신은 따뜻하고 협력적인 조화의 추구자입니다. 다른 사람들의 감정과 필요를 잘 파악하고 도움을 주려 노력합니다. 사교적이고 친근하며, 팀의 화합을 위해 노력합니다. 전통과 안정을 중시하고, 신뢰할 수 있는 관계를 구축하는 데 능숙합니다. 다른 사람들의 인정과 감사를 받을 때 큰 만족감을 느낍니다.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["따뜻한", "협력적", "사교적", "안정추구", "신뢰적"]
  },
  ENTJ: {
    name: "케니 아커만",
    mbtiType: "ENTJ",
    title: "통솔자",
    description: "카리스마 있고 결단력 있는 지도자",
    analysis: "당신은 카리스마 있고 결단력 있는 지도자입니다. 목표를 달성하기 위해 전략적으로 계획을 세우고 실행하는 능력이 뛰어납니다. 자신감이 넘치고 도전적이며, 복잡한 문제를 해결하는 데 탁월합니다. 때로는 냉정하고 무정하게 보일 수 있지만, 효율성과 성과를 중시하는 실용적인 성향이 있습니다.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    traits: ["카리스마", "결단력", "전략적", "도전적", "효율성"]
  }
};

export function getCharacterMatch(mbtiType: string): Character {
  return characters[mbtiType] || characters.ENFP;
}
