// src/pages/RallyingPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RallyingPage = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    // Phase transition every 2 seconds
    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % 3);
    }, 2000);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          navigate('/party');
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
    navigate('/party');
  };

  const rallyPhases = [
    {
      mainText: "Cả team ơi! Code xong rồi! 🎉",
      subText: "Huy đang hô hào đội hình 8 người...",
      emoji: "📢",
      bgColor: "from-green-200 to-blue-200"
    },
    {
      mainText: "Tối nay đi mừng nhé! 8 người ai cũng phải có mặt! 🍻",
      subText: "Team 8 người đang tập hợp...",
      emoji: "👥👥👥👥",
      bgColor: "from-yellow-200 to-orange-200"
    },
    {
      mainText: "Đi thôi! Quán chờ đội hình hoàn hảo rồi! 🏃‍♂️💨",
      subText: "8 chiến binh đang di chuyển đến quán...",
      emoji: "🏃‍♂️🏃‍♀️💨",
      bgColor: "from-pink-200 to-purple-200"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${rallyPhases[currentPhase].bgColor} flex items-center justify-center p-4`}>
      <div className="max-w-4xl w-full text-center">
        {/* Progress indicator */}
        {/* <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
          <div className="text-sm font-bold">Screen 2/4 - Phase {currentPhase + 1}/3</div>
          <div className="flex space-x-1 mt-1">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index <= currentPhase ? 'bg-green-400' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div> */}

        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-pulse">
            🍻 RALLY TIME! 🍻
          </h1>
          <p className="text-2xl text-gray-700">{rallyPhases[currentPhase].subText}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
          {/* Moving background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-8 left-8 text-4xl animate-bounce">📱</div>
            <div className="absolute top-8 right-8 text-4xl animate-spin">⚡</div>
            <div className="absolute bottom-8 left-8 text-4xl animate-pulse">💬</div>
            <div className="absolute bottom-8 right-8 text-4xl animate-ping">🔔</div>
          </div>

          <div className="relative z-10">
            <div className="text-5xl mb-8 animate-bounce">
              {rallyPhases[currentPhase].emoji}
            </div>
            
            <div className="text-3xl font-bold text-gray-800 mb-8 animate-pulse">
              {rallyPhases[currentPhase].mainText}
            </div>

            {/* Team assembly animation - 8 people */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-6xl animate-bounce">👨‍💻</div>
                <div className="text-lg font-bold text-blue-600">Huy</div>
                <div className="text-sm text-gray-500">Leader</div>
              </div>
              <div className="text-center">
                <div className="text-6xl animate-bounce" style={{animationDelay: '0.1s'}}>👨‍💻</div>
                <div className="text-lg font-bold text-green-600">Trụ</div>
                <div className="text-sm text-gray-500">Right Hand</div>
              </div>
              <div className="text-center">
                <div className="text-6xl animate-bounce" style={{animationDelay: '0.2s'}}>👨‍💻</div>
                <div className="text-lg font-bold text-orange-600">Hiếu</div>
                <div className="text-sm text-gray-500">Left Hand</div>
              </div>
              <div className="text-center">
                <div className="text-6xl animate-bounce" style={{animationDelay: '0.3s'}}>👨‍💻</div>
                <div className="text-lg font-bold text-purple-600">Tá</div>
                <div className="text-sm text-gray-500">Left Side</div>
              </div>
            </div>
            
            {/* Second row for team members */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-6xl animate-bounce" style={{animationDelay: '0.4s'}}>👩‍💻</div>
                <div className="text-lg font-bold text-pink-600">Ngọc Anh</div>
                <div className="text-sm text-gray-500">Heart</div>
              </div>
              <div className="text-center">
                <div className="text-6xl animate-bounce" style={{animationDelay: '0.5s'}}>👩‍💻</div>
                <div className="text-lg font-bold text-indigo-600">Nhàn</div>
                <div className="text-sm text-gray-500">Brain</div>
              </div>
              <div className="text-center">
                <div className="text-6xl animate-bounce" style={{animationDelay: '0.6s'}}>👨‍💻</div>
                <div className="text-lg font-bold text-cyan-600">Toàn</div>
                <div className="text-sm text-gray-500">Runner</div>
              </div>
              <div className="text-center">
                <div className="text-6xl animate-bounce" style={{animationDelay: '0.7s'}}>👨‍💻</div>
                <div className="text-lg font-bold text-red-600">Hưng</div>
                <div className="text-sm text-gray-500">Support</div>
              </div>
            </div>

            {/* Arrow pointing to destination */}
            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-gray-700">Tập hợp đầy đủ!</div>
            </div>

            <div className="text-2xl text-gray-600">
              📍 Đích đến: Quán Nhậu Anh Em - Đặt bàn cho 8 người! ✨
            </div>
          </div>
        </div>

        {/* Next screen hint và nút điều khiển */}
        <div className="text-center mt-8">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 inline-block">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleNextScreen}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Next →
              </button>
              <div className="text-gray-700 font-medium">
                Auto in <span className="text-green-600 font-bold text-xl">{countdown}s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RallyingPage;