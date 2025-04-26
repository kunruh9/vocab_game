export interface Word {
  word: string;
  definition: string;
  example: string;
}

export interface GameState {
  score: number;
  currentQuestion: number;
  isGameOver: boolean;
  words: Word[];
  currentWord: Word | null;
}

export interface GameResult {
  score: number;
  totalQuestions: number;
} 