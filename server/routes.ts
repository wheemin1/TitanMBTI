import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { quizAnswersSchema, insertQuizResultSchema } from "@shared/schema";
import { calculateMBTI } from "../client/src/utils/mbti-calculator";
import { getCharacterMatch } from "../client/src/data/mbti-characters";

export async function registerRoutes(app: Express): Promise<Server> {
  // Submit quiz answers and get MBTI result
  app.post("/api/quiz/submit", async (req, res) => {
    try {
      const { answers, sessionId } = quizAnswersSchema.parse(req.body);
      
      // Calculate MBTI scores and type
      const { scores, mbtiType } = calculateMBTI(answers);
      
      // Get character match
      const characterMatch = getCharacterMatch(mbtiType);
      
      // Save result
      const result = await storage.saveQuizResult({
        sessionId,
        answers,
        mbtiType,
        scores,
        characterMatch: characterMatch.name,
      });
      
      res.json({
        mbtiType,
        scores,
        character: characterMatch,
        sessionId,
      });
    } catch (error) {
      console.error("Error submitting quiz:", error);
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Invalid quiz data" 
      });
    }
  });

  // Get quiz result by session ID
  app.get("/api/quiz/result/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const result = await storage.getQuizResult(sessionId);
      
      if (!result) {
        return res.status(404).json({ message: "Quiz result not found" });
      }
      
      const characterMatch = getCharacterMatch(result.mbtiType);
      
      res.json({
        mbtiType: result.mbtiType,
        scores: result.scores,
        character: characterMatch,
        sessionId: result.sessionId,
      });
    } catch (error) {
      console.error("Error fetching quiz result:", error);
      res.status(500).json({ message: "Error fetching quiz result" });
    }
  });

  // Get quiz statistics
  app.get("/api/quiz/stats", async (req, res) => {
    try {
      const stats = await storage.getQuizStats();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching quiz stats:", error);
      res.status(500).json({ message: "Error fetching quiz statistics" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
