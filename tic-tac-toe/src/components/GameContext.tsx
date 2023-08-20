import React, { createContext, useContext, useState } from 'react';

type GameContextType = {
  currentPlayer: string;
  changePlayer: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

type GameProviderProps = {
  children: React.ReactNode; // Define children prop
};

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <GameContext.Provider value={{ currentPlayer, changePlayer }}>
      {children}
    </GameContext.Provider>
  );
};
