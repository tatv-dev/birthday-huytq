import React, { useState, useEffect } from 'react';
import BirthdayScreen from './BirthdayPage'

const TeamAdventureApp = () => {
  const [currentScreen, setCurrentScreen] = useState(0); // 0: coding, 1: rallying, 2: party, 3 birthday
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showEffects, setShowEffects] = useState(false);

  useEffect(() => {
    // Screen transition every 10 seconds
    const screenInterval = setInterval(() => {
      setCurrentScreen(prev => (prev + 1) % 4);
      setCurrentPhase(0);
    }, 10000);

    // Phase transition every 3.3 seconds (3 phases in 10 seconds)
    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % 3);
      setShowEffects(prev => !prev);
    }, 3333);

    return () => {
      clearInterval(screenInterval);
      clearInterval(phaseInterval);
    };
  }, []);

  // SCREEN 1: PAIR PROGRAMMING
  const CodingScreen = () => {
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
        </div>
      </div>
    );
  };

  // SCREEN 2: RALLYING FOR DRINKS
  const RallyingScreen = () => {
    const rallyPhases = [
      {
        mainText: "Cả team ơi! Code xong rồi! 🎉",
        subText: "Huy đang hô hào đội hình 7 người...",
        emoji: "📢",
        bgColor: "from-green-200 to-blue-200"
      },
      {
        mainText: "Tối nay đi mừng nhé! 7 người ai cũng phải có mặt! 🍻",
        subText: "Team 7 người đang tập hợp...",
        emoji: "👥👥👥",
        bgColor: "from-yellow-200 to-orange-200"
      },
      {
        mainText: "Đi thôi! Quán chờ đội hình hoàn hảo rồi! 🏃‍♂️💨",
        subText: "7 chiến binh đang di chuyển đến quán...",
        emoji: "🏃‍♂️🏃‍♀️💨",
        bgColor: "from-pink-200 to-purple-200"
      }
    ];

    return (
      <div className={`min-h-screen bg-gradient-to-br ${rallyPhases[currentPhase].bgColor} flex items-center justify-center p-4`}>
        <div className="max-w-4xl w-full text-center">
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
              <div className="text-9xl mb-8 animate-bounce">
                {rallyPhases[currentPhase].emoji}
              </div>
              
              <div className="text-4xl font-bold text-gray-800 mb-8 animate-pulse">
                {rallyPhases[currentPhase].mainText}
              </div>

              {/* Team assembly animation - 7 people */}
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
              
              {/* Second row for new members */}
              <div className="grid grid-cols-3 gap-6 mb-8">
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
              </div>

              {/* Arrow pointing to destination */}
              <div className="text-center mb-6">
                <div className="text-6xl animate-pulse">⬇️</div>
                <div className="text-2xl font-bold text-gray-700">Tập hợp đầy đủ!</div>
              </div>

              <div className="text-2xl text-gray-600">
                📍 Đích đến: Quán Nhậu Anh Em - Đặt bàn cho 7 người! ✨
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // SCREEN 3: PARTY TIME
  const PartyScreen = () => {
    const partyPhases = [
      {
        mainText: "Cả team ơi! Cheers cho thành công! 🥂",
        truText: "Dạ! Sếp tin tưởng thì em phải cố! 💪",
        hieuText: "Anh Huy ơi, code em cũng đẹp mà! 😏",
        taText: "Em xin... một ly trà đá ạ! 😅",
        ngocanhText: "Chị uống chút thôi, mai còn làm! 🍷",
        nhanText: "Em cũng vậy, uống cho vui! 😊",
        toanText: "Anh em đã code khổ, giờ nhậu thôi! 🍻",
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
        mood: "😄"
      },
      {
        mainText: "7 người 7 màu, cùng nhau chiến thắng! 🌈",
        truText: "Em vừa tay vừa lườn, đa năng! 💪🫁",
        hieuText: "Vậy sao em chỉ có 1 vai trò? 🤔",
        taText: "Em về sớm, mai standup 9h! 🏃‍♂️",
        ngocanhText: "Chị cũng về thôi, đủ rồi! 😅",
        nhanText: "Nhóm chat mai chia sẻ code nhé! 💬",
        toanText: "Mai tiếp tục sprint 2! 🏃‍♂️💨",
        mood: "🥴"
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-200 via-red-200 to-pink-200 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-bounce">
              🍻 TEAM PARTY TIME! 🎉
            </h1>
            <p className="text-xl text-gray-700">Quán Nhậu Anh Em - Đội hình 7 người hoành tráng!</p>
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

            {/* Huy in center - The Boss */}
            <div className="text-center mb-8">
              <div className="text-9xl animate-bounce mb-4">{partyPhases[currentPhase].mood}</div>
              <div className="text-4xl font-bold text-red-600 mb-4">Sếp Huy - The Boss</div>
              <div className="bg-red-100 rounded-2xl p-6 border-4 border-red-500 max-w-2xl mx-auto">
                <p className="text-gray-800 font-bold text-xl">
                  {partyPhases[currentPhase].mainText}
                </p>
              </div>
            </div>

            {/* Team formation - 7 members */}
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

                {/* Center - Empty space for visual balance */}
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
              <div className="grid grid-cols-3 gap-6 mb-8">
                
                {/* Ngọc Anh - Tim của team */}
                <div className="text-center relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-pink-600">
                    💝 TIM CỦA TEAM
                  </div>
                  <div className="text-5xl animate-pulse mb-2">🍷</div>
                  <div className="text-xl font-bold text-pink-600 mb-2">Ngọc Anh</div>
                  <div className="bg-pink-100 rounded-xl p-3 border-l-4 border-pink-500">
                    <p className="text-gray-800 text-sm font-medium">
                      {partyPhases[currentPhase].ngocanhText}
                    </p>
                  </div>
                </div>

                {/* Center space */}
                <div className="flex items-center justify-center">
                  <div className="text-4xl animate-spin">⭐</div>
                </div>

                {/* Nhàn - Não bộ */}
                <div className="text-center relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-indigo-600">
                    🧠 NÃO BỘ
                  </div>
                  <div className="text-5xl animate-pulse mb-2">🥤</div>
                  <div className="text-xl font-bold text-indigo-600 mb-2">Nhàn</div>
                  <div className="bg-indigo-100 rounded-xl p-3 border-r-4 border-indigo-500">
                    <p className="text-gray-800 text-sm font-medium">
                      {partyPhases[currentPhase].nhanText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom row - Support */}
              <div className="grid grid-cols-3 gap-6">
                
                {/* Tá - Lườn trái */}
                <div className="text-center relative">
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-orange-600">
                    ← LƯỜN TRÁI 🫁
                  </div>
                  <div className="text-5xl animate-pulse mb-2">🧃</div>
                  <div className="text-xl font-bold text-orange-600 mb-2">Tá</div>
                  <div className="bg-orange-100 rounded-xl p-3 border-l-4 border-orange-500">
                    <p className="text-gray-800 text-sm font-medium">
                      {partyPhases[currentPhase].taText}
                    </p>
                  </div>
                </div>

                {/* Toàn - Chân chạy bộ */}
                <div className="text-center relative">
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-cyan-600">
                    🦵 CHÂN CHẠY BỘ
                  </div>
                  <div className="text-5xl animate-pulse mb-2">🍻</div>
                  <div className="text-xl font-bold text-cyan-600 mb-2">Toàn</div>
                  <div className="bg-cyan-100 rounded-xl p-3 border-b-4 border-cyan-500">
                    <p className="text-gray-800 text-sm font-medium">
                      {partyPhases[currentPhase].toanText}
                    </p>
                  </div>
                </div>

                {/* Trụ's second role - Lườn phải */}
                <div className="text-center relative">
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-blue-600">
                    LƯỜN PHẢI 🫁 →
                  </div>
                  <div className="text-5xl animate-pulse mb-2">🫧</div>
                  <div className="text-lg font-bold text-blue-600 mb-2">Trụ (2nd role)</div>
                  <div className="bg-blue-50 rounded-xl p-3 border-r-4 border-blue-300">
                    <p className="text-gray-600 text-xs font-medium">
                      Đa năng - Kiêm lướn phải! 💪
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formation diagram for 7 people */}
            <div className="mt-8 text-center">
              <div className="text-sm text-gray-600 font-medium mb-2">
                📋 Đội hình chiến thuật 7 người:
              </div>
              <div className="bg-gray-100 rounded-lg p-4 max-w-2xl mx-auto">
                <div className="text-xs font-mono leading-relaxed">
                  {"    Hiếu(LH) ---- Huy(BOSS) ---- Trụ(RH)"}
                  <br />
                  {"       |             |             |"}
                  <br />
                  {"   NgocAnh(💝) --- Center --- Nhàn(🧠)"}
                  <br />
                  {"       |             |             |"}
                  <br />
                  {"     Tá(LL) ----- Toàn(🦵) ----- Trụ(RR)"}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  LH=Left Hand | RH=Right Hand | LL=Left Lung | RR=Right Lung
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Screen indicator */}
      <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
        <div className="text-sm font-bold">
          Phase {currentPhase + 1}/4
        </div>
        <div className="flex space-x-1 mt-1">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index <= currentScreen ? 'bg-green-400' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Render current screen */}
      {currentScreen === 0 && <CodingScreen />}
      {currentScreen === 1 && <RallyingScreen />}
      {currentScreen === 2 && <PartyScreen />}
      {currentScreen === 3 && <BirthdayScreen />}
    </div>
  );
};

export default TeamAdventureApp;