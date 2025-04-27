import React, { useState } from 'react';

interface GameCardProps {
  definition: string;
  onAnswerSubmit: (answer: string) => void;
  onQuit: () => void;
  score: number;
  currentQuestion: number;
  checkAnswer: (answer: string) => { isCorrect: boolean; feedback: string };
}

const GameCard: React.FC<GameCardProps> = ({
  definition,
  onAnswerSubmit,
  onQuit,
  score,
  checkAnswer,
}) => {
  const [userInput, setUserInput] = useState('');
  const [feedback, setResult] = useState<{ message: string; isCorrect: boolean } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isCorrect, feedback: feedbackMessage } = checkAnswer(userInput);
    setResult({
      message: feedbackMessage,
      isCorrect
    });
    
    // Wait for 2 seconds before moving to next question
    setTimeout(() => {
      onAnswerSubmit(userInput);
      setUserInput('');
      setResult(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Score: {score}/10
              </h2>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                onClick={onQuit}
              >
                Quit Game
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  Definition: {definition}
                </p>
              </div>

              {feedback && (
                <div className={`p-4 rounded-lg ${feedback.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {feedback.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the word..."
                  autoFocus
                  disabled={feedback !== null}
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  disabled={feedback !== null}
                >
                  Check Answer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard; 