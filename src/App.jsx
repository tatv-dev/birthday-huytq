// src/App.jsx
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CodingPage from './pages/CodingPage';
import RallyingPage from './pages/RallyingPage';
import PartyPage from './pages/PartyPage';
import BirthdayPage from './pages/BirthdayPage';
import AlbumPage from './pages/AlbumPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/coding" element={<CodingPage />} />
      <Route path="/rallying" element={<RallyingPage />} />
      <Route path="/party" element={<PartyPage />} />
      <Route path="/album" element={<AlbumPage />} />
      <Route path="/birthday" element={<BirthdayPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;