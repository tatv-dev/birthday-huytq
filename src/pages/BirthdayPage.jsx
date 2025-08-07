// src/pages/BirthdayPage.jsx  
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BirthdayPage = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [balloons, setBalloons] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Phase transition every 2 seconds
    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % 3);
      setShowConfetti(prev => !prev);
    }, 2000);

    // Auto confetti effect
    const confettiInterval = setInterval(() => {
      setShowConfetti(prev => !prev);
    }, 3000);

    // Balloons floating effect
    const balloonInterval = setInterval(() => {
      const newBalloon = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        size: Math.random() * 30 + 20,
        color: ['🎈', '🟡', '🔴', '🔵', '🟢', '🟣'][Math.floor(Math.random() * 6)],
        speed: Math.random() * 2 + 1
      };
      setBalloons(prev => [...prev.slice(-15), newBalloon]);
    }, 800);

    // Flowers floating effect
    const flowerInterval = setInterval(() => {
      const newFlower = {
        id: Date.now() + Math.random() * 1000,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        size: Math.random() * 25 + 15,
        flower: ['🌸', '🌺', '🌻', '🌷', '🌹', '💐'][Math.floor(Math.random() * 6)],
        speed: Math.random() * 2.5 + 1.5
      };
      setFlowers(prev => [...prev.slice(-12), newFlower]);
    }, 1200);

    return () => {
      clearInterval(phaseInterval);
      clearInterval(confettiInterval);
      clearInterval(balloonInterval);
      clearInterval(flowerInterval);
    };
  }, []);

  const handleRestart = () => {
    navigate('/');
  };

  const birthdayPhases = [
    {
      mainText: "🎉 CHÚC MỪNG SINH NHẬT SẾP HUY! 🎉",
      teamText: "Từ toàn bộ 8 thành viên team với tình cảm chân thành nhất! 💝",
      wishText: "Chúc sếp luôn khỏe mạnh, thành công và hạnh phúc!",
      mood: "🎂",
      bgColor: "from-pink-300 via-purple-300 to-indigo-400"
    },
    {
      mainText: "🎁 CẢM ƠN SẾP VÌ TẤT CẢ! 🎁",
      teamText: "Sếp đã luôn là người lãnh đạo tuyệt vời và tạo động lực cho team! 🚀",
      wishText: "Dưới sự dẫn dắt của sếp, team ngày càng mạnh mẽ!",
      mood: "🏆",
      bgColor: "from-yellow-300 via-orange-300 to-red-400"
    },
    {
      mainText: "🎊 CHÚC TUỔI MỚI THÀNH CÔNG HƠN NỮA! 🎊",
      teamText: "Từ Huy, Trụ, Hiếu, Tá, Ngọc Anh, Nhàn, Toàn, Hưng - Team 8 người hoàn hảo! 👥",
      wishText: "Năm mới, niềm vui mới, thành công mới!",
      mood: "🥳",
      bgColor: "from-green-300 via-blue-300 to-purple-400"
    }
  ];

  const ConfettiEffect = () => (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Confetti */}
      {[...Array(60)].map((_, i) => (
        <div
          key={`confetti-${i}`}
          className={`absolute animate-bounce ${showConfetti ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        >
          {['🎉', '🎊', '🌟', '💼', '🏆', '🎂', '🎈', '✨', '🎁', '💝'][Math.floor(Math.random() * 10)]}
        </div>
      ))}

      {/* Floating Balloons */}
      {balloons.map((balloon) => (
        <div
          key={`balloon-${balloon.id}`}
          className="absolute animate-pulse"
          style={{
            left: `${balloon.x}px`,
            bottom: `${balloon.y - window.innerHeight}px`,
            fontSize: `${balloon.size}px`,
            animation: `float-up ${balloon.speed + 8}s linear infinite`,
            zIndex: 40
          }}
        >
          {balloon.color}
        </div>
      ))}

      {/* Floating Flowers */}
      {flowers.map((flower) => (
        <div
          key={`flower-${flower.id}`}
          className="absolute animate-spin"
          style={{
            left: `${flower.x}px`,
            bottom: `${flower.y - window.innerHeight}px`,
            fontSize: `${flower.size}px`,
            animation: `float-up ${flower.speed + 6}s linear infinite, gentle-spin 3s ease-in-out infinite`,
            zIndex: 35
          }}
        >
          {flower.flower}
        </div>
      ))}

      <style jsx>{`
        @keyframes float-up {
          from {
            transform: translateY(0px);
            opacity: 1;
          }
          to {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }

        @keyframes gentle-spin {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
        }
      `}</style>
    </div>
  );

  return (
    <div className={`min-h-screen bg-gradient-to-br ${birthdayPhases[currentPhase].bgColor} flex items-center justify-center p-4 relative overflow-hidden`}>
      <ConfettiEffect />
      
      <div className="max-w-6xl w-full text-center relative z-10">
        {/* Progress indicator */}
        <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
          <div className="text-sm font-bold">Screen 4/4 - Final 🎂</div>
          <div className="flex space-x-1 mt-1">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index <= currentPhase ? 'bg-pink-400' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
          <div className="text-xs mt-1 text-pink-300">Manual restart</div>
        </div>

        {/* Floating birthday elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${Math.random() * 30 + 20}px`
              }}
            >
              {['🎂', '🎈', '🎁', '🌟', '💖'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>

        <div className="mb-12">
          <div className="text-5xl mb-6 animate-bounce">{birthdayPhases[currentPhase].mood}</div>
          <h1 className="text-3xl md:text-2xl font-bold text-white mb-6 animate-pulse drop-shadow-lg">
            {birthdayPhases[currentPhase].mainText}
          </h1>
        </div>

        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl mb-8 relative">
          {/* Border decorations */}
          <div className="absolute top-4 left-4 text-3xl animate-spin">🎊</div>
          <div className="absolute top-4 right-4 text-3xl animate-bounce">🎁</div>
          <div className="absolute bottom-4 left-4 text-3xl animate-pulse">💝</div>
          <div className="absolute bottom-4 right-4 text-3xl animate-ping">✨</div>

          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
              {birthdayPhases[currentPhase].teamText}
            </p>
            
            <p className="text-base md:text-xl text-gray-700 mb-8">
              {birthdayPhases[currentPhase].wishText}
            </p>

            {/* Team signatures */}
            <div className="border-t-2 border-gray-200 pt-2">
              <h3 className="text-xl font-bold text-gray-800 mb-6">🖋️ Ký tên toàn bộ team:</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-8 gap-6">
                {[
                  { name: "Huy", role: "Leader 👑", color: "text-red-600" },
                  { name: "Trụ", role: "Right Hand 💪", color: "text-blue-600" },
                  { name: "Hiếu", role: "Left Hand 🤚", color: "text-green-600" },
                  { name: "Tá", role: "Left Lung 🫁", color: "text-orange-600" },
                  { name: "Ngọc Anh", role: "Heart 💝", color: "text-pink-600" },
                  { name: "Nhàn", role: "Brain 🧠", color: "text-indigo-600" },
                  { name: "Toàn", role: "Runner 🦵", color: "text-cyan-600" },
                  { name: "Hưng", role: "Support 🛡️", color: "text-red-600" }
                ].map((member, index) => (
                  <div 
                    key={index}
                    className="text-center animate-bounce"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`text-base font-bold ${member.color} mb-1`}>
                      {member.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {member.role}
                    </div>
                    <div className="text-2xl mt-2">📝</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Special birthday wishes */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">🎯 Lời chúc đặc biệt:</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-100 to-pink-200 rounded-xl p-4">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-bold text-gray-800 mb-2">Thành Công</h4>
              <p className="text-gray-700 text-sm">Chúc sếp đạt được mọi mục tiêu đã đề ra!</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl p-4">
              <div className="text-4xl mb-3">❤️</div>
              <h4 className="font-bold text-gray-800 mb-2">Hạnh Phúc</h4>
              <p className="text-gray-700 text-sm">Chúc sếp luôn vui vẻ và hạnh phúc bên gia đình!</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl p-4">
              <div className="text-4xl mb-3">💪</div>
              <h4 className="font-bold text-gray-800 mb-2">Sức Khỏe</h4>
              <p className="text-gray-700 text-sm">Chúc sếp luôn dồi dào sức khỏe và năng lượng!</p>
            </div>
          </div>
        </div>

        {/* Final celebration */}
        <div className="text-center">
          <button
            onClick={() => setShowConfetti(!showConfetti)}
            className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white px-12 py-6 rounded-full text-2xl font-bold hover:from-yellow-500 hover:via-pink-600 hover:to-red-600 transform hover:scale-110 transition-all duration-300 shadow-2xl animate-pulse mb-6"
          >
            🎉 CHÚC MỪNG SINH NHẬT! 🎉
          </button>
          
          <p className="mb-8 text-white text-xl font-semibold drop-shadow-lg">
            💖 Với tình cảm vô hạn từ Team 8 người! 💖
          </p>

          {/* Restart button */}
          <button
            onClick={handleRestart}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            🔄 Bắt đầu lại từ đầu
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayPage;