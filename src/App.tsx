import { useState } from 'react'
import GameCard from './components/GameCard'
import { GameState } from './types/game'
import vocabularyData from './data/vocabulary.json'

function App() {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    currentQuestion: 0,
    isGameOver: false,
    words: vocabularyData.sort(() => Math.random() - 0.5).slice(0, 10),
    currentWord: vocabularyData[0]
  });

  const checkAnswer = (answer: string) => {
    const isCorrect = answer.toLowerCase() === gameState.currentWord?.word.toLowerCase();
    return {
      isCorrect,
      feedback: isCorrect ? 'Correct!' : `Incorrect. Answer: ${gameState.currentWord?.word}`
    };
  };

  const handleAnswerSubmit = (answer: string) => {
    const { isCorrect } = checkAnswer(answer);
    
    setGameState(prev => {
      const newScore = isCorrect ? prev.score + 1 : prev.score;
      const nextQuestion = prev.currentQuestion + 1;
      const isGameOver = nextQuestion >= 10 || nextQuestion >= prev.words.length;
      
      return {
        ...prev,
        score: newScore,
        currentQuestion: nextQuestion,
        isGameOver,
        currentWord: isGameOver ? null : prev.words[nextQuestion]
      };
    });
  };

  const handleQuit = () => {
    setGameState(prev => ({
      ...prev,
      isGameOver: true
    }));
  };

  if (gameState.isGameOver) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Game Over!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Final Score: {gameState.score}/10
              </p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => window.location.reload()}
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <GameCard
      definition={gameState.currentWord?.definition || ''}
      onAnswerSubmit={handleAnswerSubmit}
      onQuit={handleQuit}
      score={gameState.score}
      currentQuestion={gameState.currentQuestion}
      checkAnswer={checkAnswer}
    />
  );
}

export default App
