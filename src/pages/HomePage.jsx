// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const navigate = useNavigate();

  const screens = [
    { path: '/coding', name: 'Pair Programming', emoji: '💻' },
    { path: '/rallying', name: 'Rally for Drinks', emoji: '📢' },
    { path: '/party', name: 'Team Party', emoji: '🍻' },
    { path: '/birthday', name: 'Birthday Celebration', emoji: '🎂' }
  ];

  useEffect(() => {
    // Auto navigate through screens every 10 seconds
    const interval = setInterval(() => {
      const nextScreen = (currentScreen + 1) % screens.length;
      setCurrentScreen(nextScreen);
      navigate(screens[nextScreen].path);
    }, 10000);

    // Navigate to first screen immediately
    navigate(screens[0].path);

    return () => clearInterval(interval);
  }, [currentScreen, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-8">🎉 Team Adventure 🎉</h1>
        <p className="text-2xl mb-12">Auto-transitioning through our story...</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {screens.map((screen, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentScreen(index);
                navigate(screen.path);
              }}
              className={`p-6 rounded-2xl transition-all duration-300 ${
                currentScreen === index 
                  ? 'bg-white text-gray-800 scale-110' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <div className="text-4xl mb-2">{screen.emoji}</div>
              <div className="font-semibold">{screen.name}</div>
            </button>
          ))}
        </div>

        <div className="flex justify-center space-x-2">
          {screens.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentScreen ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;