import { users, quizResults, type User, type InsertUser, type QuizResult, type InsertQuizResult } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveQuizResult(result: InsertQuizResult): Promise<QuizResult>;
  getQuizResult(sessionId: string): Promise<QuizResult | undefined>;
  getQuizStats(): Promise<{
    totalTests: number;
    typeDistribution: Record<string, number>;
    averageScores: {
      E: number;
      I: number;
      S: number;
      N: number;
      T: number;
      F: number;
      J: number;
      P: number;
    };
  }>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private quizResults: Map<string, QuizResult>;
  private currentUserId: number;
  private currentQuizId: number;

  constructor() {
    this.users = new Map();
    this.quizResults = new Map();
    this.currentUserId = 1;
    this.currentQuizId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveQuizResult(result: InsertQuizResult): Promise<QuizResult> {
    const id = this.currentQuizId++;
    const quizResult: QuizResult = {
      id,
      sessionId: result.sessionId,
      answers: result.answers as number[],
      mbtiType: result.mbtiType,
      scores: result.scores,
      characterMatch: result.characterMatch,
      completedAt: new Date(),
    };
    this.quizResults.set(result.sessionId, quizResult);
    return quizResult;
  }

  async getQuizResult(sessionId: string): Promise<QuizResult | undefined> {
    return this.quizResults.get(sessionId);
  }

  async getQuizStats(): Promise<{
    totalTests: number;
    typeDistribution: Record<string, number>;
    averageScores: {
      E: number;
      I: number;
      S: number;
      N: number;
      T: number;
      F: number;
      J: number;
      P: number;
    };
  }> {
    const results = Array.from(this.quizResults.values());
    const totalTests = results.length;
    
    if (totalTests === 0) {
      return {
        totalTests: 0,
        typeDistribution: {},
        averageScores: {
          E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
        }
      };
    }

    const typeDistribution: Record<string, number> = {};
    const scoreSum = {
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    };

    results.forEach(result => {
      typeDistribution[result.mbtiType] = (typeDistribution[result.mbtiType] || 0) + 1;
      Object.keys(scoreSum).forEach(key => {
        scoreSum[key as keyof typeof scoreSum] += result.scores[key as keyof typeof result.scores];
      });
    });

    const averageScores = Object.fromEntries(
      Object.entries(scoreSum).map(([key, sum]) => [key, sum / totalTests])
    ) as typeof scoreSum;

    return {
      totalTests,
      typeDistribution,
      averageScores,
    };
  }
}

export const storage = new MemStorage();
