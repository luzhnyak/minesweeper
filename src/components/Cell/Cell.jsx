import { colorNumber, colorBackground } from 'model/colorNumber';
import { CellButton } from './Cell.styled';
import { FaBomb, FaFlag } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useApp } from 'context/appContext';

export const Cell = ({ value }) => {
  const [statusCell, setStatusCell] = useState('close');
  const {
    setMineCount,
    setOpenCount,
    mineCount,
    openCount,
    isNewGame,
    setIsNewGame,
    isGameOver,
    setIsGameOver,
    isWinner,
  } = useApp();

  useEffect(() => {
    if (isNewGame) {
      setStatusCell('close');
    }
  }, [isNewGame]);

  useEffect(() => {
    if (isGameOver) {
      if (statusCell === 'blast') return;
      setStatusCell('open');
    }
  }, [isGameOver, statusCell]);

  const handleClick = event => {
    event.preventDefault();
    console.log(isWinner());
    console.log(mineCount, openCount);
    setIsNewGame(false);
    if (statusCell === 'open') return;

    if (event.button === 2) {
      if (statusCell === 'flag') {
        setStatusCell('close');
        setMineCount(prewMineCount => prewMineCount - 1);
      } else if (statusCell === 'close') {
        setStatusCell('flag');
        setMineCount(prewMineCount => prewMineCount + 1);
      }
      return;
    }

    if (statusCell === 'flag') return;

    if (event.button === 0) {
      setStatusCell('open');
      setOpenCount(prev => prev + 1);
    }
    if (value === -1) {
      setIsGameOver(true);
      setStatusCell('blast');
    }
  };

  const handleContextMenu = event => event.preventDefault();

  return (
    <CellButton
      className={statusCell}
      color={colorNumber(value)}
      background={colorBackground(statusCell)}
      status={statusCell}
      onMouseDown={handleClick}
      onContextMenu={handleContextMenu}
    >
      {value === -1 && (statusCell === 'open' || statusCell === 'blast') && (
        <FaBomb />
      )}
      {value > 0 && statusCell === 'open' && value}
      {statusCell === 'flag' && <FaFlag color="blue" />}
    </CellButton>
  );
};
