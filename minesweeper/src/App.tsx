import { Routes, Route } from 'react-router-dom';
import MainMenu from './menu/MainMenu';
import GameCreation from './menu/GameCreation';
import ActiveGame from './menu/ActiveGame';
export default function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/create" element={<GameCreation />} />
        <Route path="/play" element={<ActiveGame />} />
      </Routes>
    </div>
  );
}

