// src/pages/CodingPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CodingPage = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showEffects, setShowEffects] = useState(false);
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    // Phase transition every 2 seconds (3 phases in 6 seconds)
    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % 3);
      setShowEffects(prev => !prev);
    }, 2000);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          navigate('/rallying');
          return 20;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(phaseInterval);
      clearInterval(countdownInterval);
    };
  }, [navigate]);

  const handleNextScreen = () => {
    navigate('/rallying');
  };

  const codingPhases = [
    {
      truText: "Ể... cái bug này sao lạ thế nhỉ? 🤔",
      huyText: "Để anh xem thử... 👀",
      truMood: "🥴",
      huyMood: "😎"
    },
    {
      truText: "Anh ơi, em thử cách này được không? 💭",
      huyText: "Ừm, idea hay đó! Thử đi! 👍",
      truMood: "😅",
      huyMood: "🤓"
    },
    {
      truText: "YES! Chạy rồi anh ơi! 🎉",
      huyText: "Perfect! Tối nay đi mừng! 🍻",
      truMood: "😄",
      huyMood: "🥳"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Progress indicator */}
        {/* <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
          <div className="text-sm font-bold">Screen 1/4 - Phase {currentPhase + 1}/3</div>
          <div className="flex space-x-1 mt-1">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index <= currentPhase ? 'bg-blue-400' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div> */}

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-bounce">
            💻 PAIR PROGRAMMING TIME 💻
          </h1>
          <p className="text-xl text-gray-600">Sếp Huy & Developer Trụ</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-4 left-4 text-2xl animate-spin">⚡</div>
          <div className="absolute top-4 right-4 text-2xl animate-pulse">💡</div>
          <div className="absolute bottom-4 right-4 text-2xl animate-bounce">🚀</div>
          
          <div className="flex justify-between items-end relative">
            {/* Trụ */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                {showEffects && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="animate-ping text-blue-400 text-xs">💧</div>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-8xl animate-pulse">{codingPhases[currentPhase].truMood}</div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">Trụ</div>
                  <div className="text-sm text-gray-500">Full Stack Developer</div>
                </div>

                <div className="relative bg-blue-100 rounded-2xl p-4 border-l-4 border-blue-500">
                  <p className="text-gray-800 font-medium">
                    {codingPhases[currentPhase].truText}
                  </p>
                  <div className="absolute -right-2 top-4 w-4 h-4 bg-blue-100 transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Monitor */}
            <div className="mx-8 text-center">
              <div className="bg-gray-800 rounded-lg p-6 relative animate-pulse">
                <div className="text-green-400 text-xs font-mono">
                  <div>{'> npm run dev'}</div>
                  <div className="animate-pulse mt-1">{'> Building...'}</div>
                  <div className="text-yellow-400 mt-1">{'⚠ Warning: Bug detected'}</div>
                  <div className="text-green-400 mt-1 animate-bounce">{'✅ Fixed! Ready to deploy!'}</div>
                </div>
              </div>
              <div className="text-2xl mt-2">💻</div>
            </div>

            {/* Huy */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="text-center mb-4">
                  <div className="text-8xl animate-bounce">{codingPhases[currentPhase].huyMood}</div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">Huy</div>
                  <div className="text-sm text-gray-500">Tech Lead</div>
                </div>

                <div className="relative bg-purple-100 rounded-2xl p-4 border-r-4 border-purple-500">
                  <p className="text-gray-800 font-medium">
                    {codingPhases[currentPhase].huyText}
                  </p>
                  <div className="absolute -left-2 top-4 w-4 h-4 bg-purple-100 transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next screen hint và nút điều khiển */}
        <div className="text-center mt-8">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 inline-block">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleNextScreen}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Next →
              </button>
              <div className="text-gray-600 font-medium">
                Auto in <span className="text-blue-600 font-bold text-xl">{countdown}s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingPage;