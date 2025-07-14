
// 캐릭터 이미지 파일 관리
// 이미지 파일을 client/public/images/characters/ 폴더에 넣어주세요

export const characterImages = {
  // MBTI 타입별 기본 이미지 경로
  INTJ: "/images/characters/intj.jpg",
  INTP: "/images/characters/intp.jpg", 
  ENTJ: "/images/characters/entj.jpg",
  ENTP: "/images/characters/entp.jpg",
  INFJ: "/images/characters/infj.jpg",
  INFP: "/images/characters/infp.jpg",
  ENFJ: "/images/characters/enfj.jpg",
  ENFP: "/images/characters/enfp.jpg",
  ISTJ: "/images/characters/istj.jpg",
  ISFJ: "/images/characters/isfj.jpg",
  ESTJ: "/images/characters/estj.jpg",
  ESFJ: "/images/characters/esfj.jpg",
  ISTP: "/images/characters/istp.jpg",
  ISFP: "/images/characters/isfp.jpg",
  ESTP: "/images/characters/estp.jpg",
  ESFP: "/images/characters/esfp.jpg",
};

// 이미지 추가 방법:
// 1. client/public/images/characters/ 폴더 생성
// 2. 캐릭터 이미지 파일을 해당 폴더에 넣기 (예: intj.jpg, enfp.png 등)
// 3. 위의 characterImages 객체에서 경로 수정
// 4. 지원 형식: .jpg, .jpeg, .png, .webp
