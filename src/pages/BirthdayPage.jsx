// src/pages/BirthdayPage.jsx  
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const BirthdayPage = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [balloons, setBalloons] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize audio but don't play automatically
    audioRef.current = new Audio('/audios/khuc_hat_mung_sinh_nhat.mp3');
    audioRef.current.loop = true;

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
      // Cleanup audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleRestart = () => {
    navigate('/');
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
        setMusicPlaying(false);
      } else {
        audioRef.current.play().catch((error) => {
          console.log('Không thể phát nhạc:', error);
        });
        setMusicPlaying(true);
      }
    }
  };

  const birthdayPhases = [
    {
      mainText: "🎉 CHÚC MỪNG SINH NHẬT SẾP HUY! 🎉",
      teamText: "Từ toàn bộ thành viên R&D với tình cảm chân thành nhất! 💝",
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
      teamText: "Team R&D with love! 👥",
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
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 animate-pulse drop-shadow-lg">
            {birthdayPhases[currentPhase].mainText}
          </h1>
        </div>

        {/* Video Container - Thay thế div cũ */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl mb-12 relative overflow-hidden">
          {/* Border decorations */}
          <div className="absolute top-4 left-4 text-3xl animate-spin">🎊</div>
          <div className="absolute top-4 right-4 text-3xl animate-bounce">🎁</div>
          <div className="absolute bottom-4 left-4 text-3xl animate-pulse">💝</div>
          <div className="absolute bottom-4 right-4 text-3xl animate-ping">✨</div>

          <div className="relative z-10">
            {/* Video Element */}
            <div className="mb-8">
              <video
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
                controls
                loop
                playsInline
                style={{ maxHeight: '400px' }}
              >
                <source src="/public/videos/6882264787851.mp4" type="video/mp4" />
                <p className="text-gray-600">Trình duyệt của bạn không hỗ trợ video.</p>
              </video>
            </div>

            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {birthdayPhases[currentPhase].teamText}
            </p>
            
            <p className="text-xl md:text-2xl text-gray-700">
              {birthdayPhases[currentPhase].wishText}
            </p>

            {/* Team signatures */}
            {/* <div className="border-t-2 border-gray-200 pt-4">
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
                    <div className={`text-xl font-bold ${member.color} mb-1`}>
                      {member.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {member.role}
                    </div>
                    <div className="text-2xl mt-2">📝</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Special birthday wishes */}
        {/* <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 mb-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">🎯 Lời chúc đặc biệt:</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-100 to-pink-200 rounded-xl p-6">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-bold text-gray-800 mb-2">Thành Công</h4>
              <p className="text-gray-700 text-sm">Chúc sếp đạt được mọi mục tiêu đã đề ra!</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl p-6">
              <div className="text-4xl mb-3">❤️</div>
              <h4 className="font-bold text-gray-800 mb-2">Hạnh Phúc</h4>
              <p className="text-gray-700 text-sm">Chúc sếp luôn vui vẻ và hạnh phúc bên gia đình!</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl p-6">
              <div className="text-4xl mb-3">💪</div>
              <h4 className="font-bold text-gray-800 mb-2">Sức Khỏe</h4>
              <p className="text-gray-700 text-sm">Chúc sếp luôn dồi dào sức khỏe và năng lượng!</p>
            </div>
          </div>
        </div> */}

        {/* Final celebration */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
            <button
              onClick={() => setShowConfetti(!showConfetti)}
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-yellow-500 hover:via-pink-600 hover:to-red-600 transform hover:scale-110 transition-all duration-300 shadow-2xl animate-pulse"
            >
              🎉 CHÚC MỪNG SINH NHẬT! 🎉
            </button>
          </div>

          {/* Music control button - Click to play/pause */}
          <div className="mb-6">
            <button
              onClick={toggleMusic}
              className="bg-white/90 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg hover:bg-white/100 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-2">
                <div className="text-2xl">{musicPlaying ? '🎵' : '🔇'}</div>
                <div className="text-gray-800 font-semibold">
                  {musicPlaying ? 'Happy Birthday Song Playing!' : 'Click to Play Birthday Song!'}
                </div>
                <div className="text-2xl">{musicPlaying ? '🎵' : '🔇'}</div>
              </div>
            </button>
          </div>

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