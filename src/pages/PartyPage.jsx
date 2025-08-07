// src/pages/PartyPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PartyPage = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(20);
  const [moiEffects, setMoiEffects] = useState([]);

  useEffect(() => {
    // Phase transition every 2 seconds
    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % 3);
    }, 2000);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          navigate('/birthday');
          return 20;
        }
        return prev - 1;
      });
    }, 1000);

    // Mói mói mói effects - tạo hiệu ứng bay liên tục
    const moiInterval = setInterval(() => {
      const newMoi = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
        rotation: Math.random() * 360,
        size: Math.random() * 20 + 15,
        speed: Math.random() * 3 + 2
      };
      setMoiEffects(prev => [...prev.slice(-20), newMoi]); // Keep only last 20
    }, 300);

    return () => {
      clearInterval(phaseInterval);
      clearInterval(countdownInterval);
      clearInterval(moiInterval);
    };
  }, [navigate]);

  const handleNextScreen = () => {
    navigate('/birthday');
  };

  const partyPhases = [
    {
      mainText: "Cả team ơi! Cheers cho thành công! 🥂",
      truText: "Dạ! Sếp tin tưởng thì em phải cố! 💪",
      hieuText: "Anh Huy ơi, code em cũng đẹp mà! 😏",
      toanText: "Em xin... một ly trà đá ạ! 😅",
      ngocanhText: "Em không uống... không chịu được! 🍷",
      nhanText: "Em không uống được ít! 😊",
      taText: "Đến giờ nâng cốc rồi ae ơi! 🍻",
      hungText: "Mói mói mói! Cheers anh em! 🍺",
      mood: "🥳"
    },
    {
      mainText: "Đây là đội hình hoàn hảo của anh! 🤝",
      truText: "Dạ! Cánh tay phải luôn sẵn sàng! 🚀",
      hieuText: "Cánh tay trái cũng không kém! 🤚",
      taText: "Lườn trái backup đây anh! 😆",
      ngocanhText: "Chị làm... tim của team nhé! 💝",
      nhanText: "Em là não bộ phụ trách think! 🧠",
      toanText: "Còn anh em làm chân chạy bộ! 🦵",
      hungText: "Mói mói! Support team mạnh mẽ! 💪",
      mood: "😄"
    },
    {
      mainText: "8 người 8 màu, cùng nhau chiến thắng! 🌈",
      truText: "Em vừa tay vừa lườn, đa năng! 💪🫁",
      hieuText: "Vậy sao em chỉ có 1 vai trò? 🤔",
      taText: "Em về sớm, mai standup 9h! 🏃‍♂️",
      ngocanhText: "Chị cũng về thôi, đủ rồi! 😅",
      nhanText: "Nhóm chat mai chia sẻ code nhé! 💬",
      toanText: "Mai tiếp tục sprint 2! 🏃‍♂️💨",
      hungText: "Mói mói mói! Về nhà ngủ ngon! 😴",
      mood: "🥴"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-red-200 to-pink-200 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Progress indicator */}
        {/* <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
          <div className="text-sm font-bold">Screen 3/4 - Phase {currentPhase + 1}/3</div>
          <div className="flex space-x-1 mt-1">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index <= currentPhase ? 'bg-orange-400' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
          <div className="text-xs mt-1 text-orange-300">6s per screen</div>
        </div> */}

        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-bounce">
            🍻 TEAM PARTY TIME! 🎉
          </h1>
          <p className="text-xl text-gray-700">Quán Nhậu Anh Em - Đội hình 8 người hoành tráng!</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
          {/* Party atmosphere */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 left-8 text-3xl animate-spin">🎊</div>
            <div className="absolute top-8 right-12 text-2xl animate-bounce">🍻</div>
            <div className="absolute bottom-8 left-12 text-2xl animate-pulse">🥳</div>
            <div className="absolute bottom-4 right-8 text-3xl animate-ping">✨</div>
            <div className="absolute top-1/2 left-4 text-2xl animate-bounce">🎵</div>
            <div className="absolute top-1/2 right-4 text-2xl animate-bounce">🎶</div>
          </div>

          {/* Mói mói mói flying effects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {moiEffects.map((moi) => (
              <div
                key={moi.id}
                className="absolute text-orange-500 font-bold animate-bounce"
                style={{
                  left: `${moi.x}px`,
                  bottom: `${moi.y - window.innerHeight}px`,
                  transform: `rotate(${moi.rotation}deg)`,
                  fontSize: `${moi.size}px`,
                  animation: `fly-up ${moi.speed}s linear infinite`,
                  zIndex: 5
                }}
              >
                MÓI!
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes fly-up {
              from {
                transform: translateY(0px) rotate(0deg);
                opacity: 1;
              }
              to {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
              }
            }
          `}</style>

          {/* Huy in center - The Boss */}
          <div className="text-center mb-8">
            <div className="text-5xl animate-bounce mb-4">{partyPhases[currentPhase].mood}</div>
            <div className="text-4xl font-bold text-red-600 mb-4">Sếp Huy - The Boss</div>
            <div className="bg-red-100 rounded-2xl p-3 border-4 border-red-500 max-w-2xl mx-auto">
              <p className="text-gray-800 font-bold text-xl">
                {partyPhases[currentPhase].mainText}
              </p>
            </div>
          </div>

          {/* Team formation - 8 members arranged around */}
          <div className="relative">
            {/* Top row - Arms */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* Hiếu - Cánh tay trái */}
              <div className="text-center relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-green-600">
                  ← CÁNH TAY TRÁI 🤚
                </div>
                <div className="text-5xl animate-pulse mb-2">🍺</div>
                <div className="text-xl font-bold text-green-600 mb-2">Hiếu</div>
                <div className="bg-green-100 rounded-xl p-3 border-l-4 border-green-500">
                  <p className="text-gray-800 text-sm font-medium">
                    {partyPhases[currentPhase].hieuText}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-4xl animate-bounce">🤝</div>
              </div>

              {/* Trụ - Cánh tay phải */}
              <div className="text-center relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-blue-600">
                  CÁNH TAY PHẢI 💪 →
                </div>
                <div className="text-5xl animate-pulse mb-2">🍻</div>
                <div className="text-xl font-bold text-blue-600 mb-2">Trụ</div>
                <div className="bg-blue-100 rounded-xl p-3 border-r-4 border-blue-500">
                  <p className="text-gray-800 text-sm font-medium">
                    {partyPhases[currentPhase].truText}
                  </p>
                </div>
              </div>
            </div>

            {/* Middle row - Core team */}
            <div className="grid grid-cols-5 gap-4 mb-8">
              {/* Ngọc Anh - Tim của team */}
              <div className="text-center relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-pink-600">
                  💝 TIM
                </div>
                <div className="text-4xl animate-pulse mb-2">🍷</div>
                <div className="text-lg font-bold text-pink-600 mb-2">Ngọc Anh</div>
                <div className="bg-pink-100 rounded-xl p-2 border-l-4 border-pink-500">
                  <p className="text-gray-800 text-xs font-medium">
                    {partyPhases[currentPhase].ngocanhText}
                  </p>
                </div>
              </div>

              {/* Tá - Lườn trái */}
              <div className="text-center relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-600">
                  🫁 LƯỜN
                </div>
                <div className="text-4xl animate-pulse mb-2">🧃</div>
                <div className="text-lg font-bold text-orange-600 mb-2">Tá</div>
                <div className="bg-orange-100 rounded-xl p-2 border-l-4 border-orange-500">
                  <p className="text-gray-800 text-xs font-medium">
                    {partyPhases[currentPhase].taText}
                  </p>
                </div>
              </div>

              {/* Nhàn - Não bộ */}
              <div className="text-center relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-indigo-600">
                  🧠 NÃO BỘ
                </div>
                <div className="text-4xl animate-pulse mb-2">🥤</div>
                <div className="text-lg font-bold text-indigo-600 mb-2">Nhàn</div>
                <div className="bg-indigo-100 rounded-xl p-2 border-r-4 border-indigo-500">
                  <p className="text-gray-800 text-xs font-medium">
                    {partyPhases[currentPhase].nhanText}
                  </p>
                </div>
              </div>

              {/* Hưng - Support */}
              <div className="text-center relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-red-600">
                  🛡️ SUPPORT
                </div>
                <div className="text-4xl animate-pulse mb-2">🍺</div>
                <div className="text-lg font-bold text-red-600 mb-2">Hưng</div>
                <div className="bg-red-100 rounded-xl p-2 border-r-4 border-red-500">
                  <p className="text-gray-800 text-xs font-medium">
                    {partyPhases[currentPhase].hungText}
                  </p>
                </div>
              </div>

              {/* Toàn - Chân chạy bộ */}
              <div className="text-center relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-red-600">
                  🛡️ CHÂN CHẠY BỘ
                </div>
                <div className="text-4xl animate-pulse mb-2">🍻</div>
                <div className="text-lg font-bold text-red-600 mb-2">Toàn</div>
                <div className="bg-red-100 rounded-xl p-2 border-r-4 border-red-500">
                  <p className="text-gray-800 text-xs font-medium">
                    {partyPhases[currentPhase].toanText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transition hint */}
        {countdown <= 5 && (
          <div className="text-center mt-8 animate-pulse">
            <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4 inline-block">
              <div className="text-2xl mb-2">🎂</div>
              <p className="text-gray-700 font-medium">Ơ... Hôm nay là sinh nhật sếp mà! 🎉</p>
              <p className="text-sm text-gray-600">Chuyển sang chế độ chúc mừng sinh nhật...</p>
            </div>
          </div>
        )}

        {/* Next screen hint và nút điều khiển */}
        <div className="text-center mt-6">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 inline-block">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleNextScreen}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Next →
              </button>
              <div className="text-gray-700 font-medium">
                Auto in <span className="text-red-600 font-bold text-xl">{countdown}s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyPage;