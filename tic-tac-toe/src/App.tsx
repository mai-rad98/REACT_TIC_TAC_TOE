import './App.css';
import React from 'react';
import Board from './components/Board';
import { GameProvider } from './components/GameContext';

const App: React.FC = () => {
  return (
    <GameProvider>
      <div className="h1">Lets Play</div>

      <Board />
    </GameProvider>
  );
};

export default App;
