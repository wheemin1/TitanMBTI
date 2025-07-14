import { questionMappings } from "@/data/questions";

export interface MBTIScores {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export interface MBTIResult {
  scores: MBTIScores;
  mbtiType: string;
  dominantTraits: {
    energy: 'E' | 'I';
    information: 'S' | 'N';
    decisions: 'T' | 'F';
    lifestyle: 'J' | 'P';
  };
  percentages: {
    energy: number;
    information: number;
    decisions: number;
    lifestyle: number;
  };
}

export function calculateMBTI(answers: number[]): MBTIResult {
  const scores: MBTIScores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // Calculate raw scores based on answers
  answers.forEach((answer, index) => {
    const mapping = questionMappings[index];
    if (!mapping) return;

    const { dimension, reverse } = mapping;
    const score = reverse ? 6 - answer : answer;

    // Add to appropriate dimension
    if (dimension === 'E') {
      scores.E += score;
      scores.I += 6 - score;
    } else if (dimension === 'I') {
      scores.I += score;
      scores.E += 6 - score;
    } else if (dimension === 'S') {
      scores.S += score;
      scores.N += 6 - score;
    } else if (dimension === 'N') {
      scores.N += score;
      scores.S += 6 - score;
    } else if (dimension === 'T') {
      scores.T += score;
      scores.F += 6 - score;
    } else if (dimension === 'F') {
      scores.F += score;
      scores.T += 6 - score;
    } else if (dimension === 'J') {
      scores.J += score;
      scores.P += 6 - score;
    } else if (dimension === 'P') {
      scores.P += score;
      scores.J += 6 - score;
    }
  });

  // Determine dominant traits
  const dominantTraits = {
    energy: scores.E > scores.I ? 'E' as const : 'I' as const,
    information: scores.S > scores.N ? 'S' as const : 'N' as const,
    decisions: scores.T > scores.F ? 'T' as const : 'F' as const,
    lifestyle: scores.J > scores.P ? 'J' as const : 'P' as const,
  };

  // Calculate percentages
  const percentages = {
    energy: Math.round((scores.E / (scores.E + scores.I)) * 100),
    information: Math.round((scores.N / (scores.S + scores.N)) * 100),
    decisions: Math.round((scores.F / (scores.T + scores.F)) * 100),
    lifestyle: Math.round((scores.P / (scores.J + scores.P)) * 100),
  };

  // Construct MBTI type
  const mbtiType = `${dominantTraits.energy}${dominantTraits.information}${dominantTraits.decisions}${dominantTraits.lifestyle}`;

  return {
    scores,
    mbtiType,
    dominantTraits,
    percentages,
  };
}
