// src/pages/AlbumPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumPage = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [countdown, setCountdown] = useState(6);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sparkles, setSparkles] = useState([]);
  const navigate = useNavigate();

//   useEffect(() => {
//     // Phase transition every 2 seconds
//     const phaseInterval = setInterval(() => {
//       setCurrentPhase(prev => (prev + 1) % 3);
//     }, 2000);

//     // Countdown timer
//     const countdownInterval = setInterval(() => {
//       setCountdown(prev => {
//         if (prev <= 1) {
//           navigate('/birthday');
//           return 6;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     // Slideshow auto-advance
//     const slideInterval = setInterval(() => {
//       setCurrentSlide(prev => (prev + 1) % memories.length);
//     }, 1500);

//     // Sparkle effects
//     const sparkleInterval = setInterval(() => {
//       const newSparkle = {
//         id: Date.now() + Math.random(),
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         size: Math.random() * 20 + 10,
//         duration: Math.random() * 2 + 1
//       };
//       setSparkles(prev => [...prev.slice(-25), newSparkle]);
//     }, 200);

//     return () => {
//       clearInterval(phaseInterval);
//       clearInterval(countdownInterval);
//       clearInterval(slideInterval);
//       clearInterval(sparkleInterval);
//     };
//   }, [navigate]);

  const handleNextScreen = () => {
    navigate('/birthday');
  };

  // Memory album data
  const memories = [
    {
      id: 1,
      title: "First Day at Office",
      description: "Khi team 8 người lần đầu họp mặt đầy đủ",
      photo: "🏢",
      date: "2024-01-15",
      participants: ["Huy", "Trụ", "Hiếu", "Tá", "Ngọc Anh", "Nhàn", "Toàn", "Hưng"]
    },
    {
      id: 2,
      title: "Code Review Marathon",
      description: "Buổi review code kỷ lục 8 tiếng liên tục",
      photo: "💻",
      date: "2024-02-20",
      participants: ["Huy", "Trụ", "Hiếu", "Nhàn"]
    },
    {
      id: 3,
      title: "Team Building Adventure",
      description: "Chuyến đi team building đầu tiên của đội hình hoàn hảo",
      photo: "🏔️",
      date: "2024-03-10",
      participants: ["All Team"]
    },
    {
      id: 4,
      title: "Milestone Celebration",
      description: "Ăn mừng đạt được mục tiêu Q1",
      photo: "🎯",
      date: "2024-03-31",
      participants: ["Huy", "Trụ", "Tá", "Toàn", "Hưng"]
    },
    {
      id: 5,
      title: "Coffee & Code Sessions",
      description: "Những buổi sáng coding với cà phê",
      photo: "☕",
      date: "2024-04-15",
      participants: ["Ngọc Anh", "Nhàn", "Hiếu"]
    },
    {
      id: 6,
      title: "Late Night Debugging",
      description: "Đêm thức trắng để fix critical bug",
      photo: "🌙",
      date: "2024-05-02",
      participants: ["Huy", "Trụ", "Hiếu", "Hưng"]
    }
  ];

  const albumPhases = [
    {
      title: "📸 ALBUM KỶ NIỆM TEAM 8 NGƯỜI 📸",
      subtitle: "Những khoảnh khắc đẹp nhất của chúng ta",
      bgColor: "from-purple-400 via-pink-400 to-red-400"
    },
    {
      title: "🎞️ NHỮNG NGÀY THÁNG BÊN NHAU 🎞️", 
      subtitle: "Từ coding đến partying, luôn là một team",
      bgColor: "from-blue-400 via-purple-400 to-pink-400"
    },
    {
      title: "💝 KỶ NIỆM KHÔNG BAO GIỜ PHAI 💝",
      subtitle: "Ready cho celebration sinh nhật sếp Huy!",
      bgColor: "from-yellow-400 via-orange-400 to-red-400"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${albumPhases[currentPhase].bgColor} flex items-center justify-center p-4 relative overflow-hidden`}>
      
      {/* Progress indicator */}
      <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
        <div className="text-sm font-bold">Screen 4/5 - Phase {currentPhase + 1}/3</div>
        <div className="flex space-x-1 mt-1">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index <= currentPhase ? 'bg-purple-400' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
        <div className="text-xs mt-1 text-purple-300">6s per screen</div>
      </div>

      {/* Sparkle effects */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute animate-ping"
            style={{
              left: `${sparkle.x}px`,
              top: `${sparkle.y}px`,
              fontSize: `${sparkle.size}px`,
              animationDuration: `${sparkle.duration}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className="max-w-7xl w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-pulse drop-shadow-lg">
            {albumPhases[currentPhase].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
            {albumPhases[currentPhase].subtitle}
          </p>
        </div>

        {/* Main Album Display */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 mb-8 shadow-2xl">
          
          {/* Current Photo Display */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-inner border-4 border-white">
                <div className="text-9xl mb-4 animate-bounce">
                  {memories[currentSlide].photo}
                </div>
                <div className="absolute top-2 right-2 bg-black/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {currentSlide + 1}/{memories.length}
                </div>
              </div>
              
              {/* Photo frame decoration */}
              <div className="absolute -top-2 -left-2 text-2xl animate-spin">🌟</div>
              <div className="absolute -top-2 -right-2 text-2xl animate-pulse">💫</div>
              <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce">✨</div>
              <div className="absolute -bottom-2 -right-2 text-2xl animate-ping">⭐</div>
            </div>
          </div>

          {/* Photo Details */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              {memories[currentSlide].title}
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              {memories[currentSlide].description}
            </p>
            <div className="bg-gray-100 rounded-xl p-4 inline-block">
              <div className="text-sm text-gray-500 mb-2">📅 {memories[currentSlide].date}</div>
              <div className="text-sm font-semibold text-gray-700">
                👥 Participants: {memories[currentSlide].participants.join(", ")}
              </div>
            </div>
          </div>

          {/* Photo Timeline */}
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
              🎬 Memory Timeline
            </h4>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {memories.map((memory, index) => (
                <div 
                  key={memory.id}
                  className={`text-center p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                    index === currentSlide 
                      ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-400 scale-105' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="text-3xl mb-2">{memory.photo}</div>
                  <div className="text-xs font-semibold text-gray-700">{memory.title}</div>
                  <div className="text-xs text-gray-500">{memory.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Birthday Transition Hint */}
        {currentPhase === 2 && (
          <div className="text-center mb-8 animate-bounce">
            <div className="bg-yellow-100 border border-yellow-400 rounded-2xl p-6 inline-block shadow-lg">
              <div className="text-4xl mb-3">🎂</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Và giờ đây... Moment đặc biệt nhất!
              </h3>
              <p className="text-gray-600">
                Chuyển sang celebration sinh nhật sếp Huy! 🎉
              </p>
            </div>
          </div>
        )}

        {/* Next screen controls */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 inline-block shadow-lg">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleNextScreen}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Next →
              </button>
              <div className="text-gray-700 font-medium">
                Auto in <span className="text-purple-600 font-bold text-xl">{countdown}s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;