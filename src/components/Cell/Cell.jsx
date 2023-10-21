import { colorNumber, colorBackground } from 'model/colorNumber';
import { CellButton } from './Cell.styled';
import { FaBomb, FaFlag } from 'react-icons/fa';
import { useApp } from 'context/appContext';
// import { useRef } from 'react';
// import { useEffect, useState } from 'react';

export const Cell = ({ cell: { value, status }, i, j, setOpen }) => {
  // const [statusCell, setStatusCell] = useState('close');
  const {
    setIsNewGame,
    setIsGameOver,
    // isWinner,
    mineSweeper,
    setMineCount,
    setOpenCount,
  } = useApp();

  const handleClick = event => {
    event.preventDefault();

    if (status === 'open' || status === 'blast') return;

    setIsNewGame(false);

    if (event.button === 0) {
      mineSweeper.changeStatus(i, j, 'open');
      setOpenCount(prev => prev + 1);

      if (value === 0) {
        mineSweeper.openAuto(i, j);

        setOpenCount(mineSweeper.cellCount('open'));
      }
      if (value === -1) {
        mineSweeper.changeStatus(i, j, 'blast');
        setOpenCount(prev => prev + 1);

        mineSweeper.openAll();
        setIsGameOver(true);
      }
    }
  };

  const handleContextMenu = event => {
    event.preventDefault();

    if (status === 'flag') {
      mineSweeper.changeStatus(i, j, 'close');
      // setStatusCell('close');
      setMineCount(prev => prev - 1);
    } else if (status === 'close') {
      mineSweeper.changeStatus(i, j, 'flag');
      setMineCount(prev => prev + 1);
      // setStatusCell('flag');
    }
  };

  // const touchStartTime = useRef(0);
  // const touchEndTime = useRef(0);

  // const handleTouchStart = () => {
  //   touchStartTime.current = new Date().getTime();
  // };

  // const handleTouchEnd = () => {
  //   touchEndTime.current = new Date().getTime();
  //   const touchDuration = touchEndTime.current - touchStartTime.current;

  //   if (touchDuration >= 500) {
  //     alert('Long tap');
  //   }
  // };

  return (
    <CellButton
      className={status}
      color={colorNumber(value)}
      background={colorBackground(status)}
      status={status}
      onMouseDown={handleClick}
      onContextMenu={handleContextMenu}
      // onTouchStart={handleTouchStart}
      // onTouchEnd={handleTouchEnd}
    >
      {value === -1 && (status === 'open' || status === 'blast') && <FaBomb />}
      {value > 0 && status === 'open' && value}
      {status === 'flag' && <FaFlag color="blue" />}
    </CellButton>
  );
};
