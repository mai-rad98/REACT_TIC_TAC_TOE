import React, { useEffect, useState } from 'react';
import Square from './Square';
import { checkWinner } from '../utils/checkForWinner';
import { useGameContext } from './GameContext';
import ConfettiAnimation from './ConfettiAnimation';
import '../App.css';

const Board: React.FC = () => {
  const { currentPlayer, changePlayer } = useGameContext(); // Accessing currentPlayer from context

  const [squares, setSquares] = useState(Array(9).fill(''));
  const [winningPlayer, setWinningPlayer] = useState('');
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (cellIdx: number) => {
    const grid = [...squares];
    grid[cellIdx] = currentPlayer;
    setSquares(grid);
    changePlayer();
  };

  const restartGame = () => {
    window.location.reload();
  };

  useEffect(() => {
    const winner = checkWinner(squares);
    if (winner) {
      setWinningPlayer(winner);
    } else if (squares.every((square) => square !== '')) {
      setIsDraw(true);
    }
  }, [squares]);

  const renderDrawModal = () => {
    if (isDraw) {
      return (
        <div className="modal">
          <h2>It's a draw!</h2>
        </div>
      );
    }
  };

  return (
    <div className="board">
      {squares.map((_, index) => (
        <Square
          key={index}
          changePlayer={changePlayer}
          cellIdx={index}
          handleCellClick={handleClick}
          currentGrid={squares}
        />
      ))}
      {winningPlayer && <h2>{winningPlayer} wins!</h2>}
      {winningPlayer && <ConfettiAnimation />}
      {renderDrawModal()}
      <button className="restart-button" onClick={restartGame}>
        Restart
      </button>
    </div>
  );
};

export default Board;
