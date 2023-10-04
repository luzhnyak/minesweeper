import { colorNumber, colorBackground } from 'model/colorNumber';
import { CellButton } from './Cell.styled';
import { FaBomb, FaFlag } from 'react-icons/fa';
import { useApp } from 'context/appContext';
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

  // useEffect(() => {
  //   console.log('status', status);
  //   setStatusCell(status);
  // }, [status]);

  // useEffect(() => {
  //   if (isNewGame) {
  //     // setStatusCell('close');
  //     mineSweeper.changeStatus(i, j, 'close');
  //     // status = 'close';
  //   }
  // }, [isNewGame, status]);

  // useEffect(() => {
  //   if (isGameOver) {
  //     if (status === 'blast') return;
  //     // setStatusCell('open');
  //     // status = 'open';
  //     mineSweeper.changeStatus(i, j, 'open');
  //   }
  // }, [isGameOver, mineSweeper]);

  const handleClick = event => {
    event.preventDefault();

    if (status === 'open' || status === 'blast') return;

    setIsNewGame(false);

    if (event.button === 2) {
      if (status === 'flag') {
        mineSweeper.changeStatus(i, j, 'close');
        // setStatusCell('close');
        setMineCount(prev => prev - 1);
      } else if (status === 'close') {
        mineSweeper.changeStatus(i, j, 'flag');
        setMineCount(prev => prev + 1);
        // setStatusCell('flag');
      }
      return;
    }

    if (status === 'flag') return;

    if (event.button === 0) {
      mineSweeper.changeStatus(i, j, 'open');
      setOpenCount(prev => prev + 1);
      // setStatusCell('open');
    }

    if (value === 0) {
      mineSweeper.openAuto(i, j);

      setOpenCount(mineSweeper.cellCount('open'));

      // console.log(mineSweeper.cellCount('open'));
    }
    if (value === -1) {
      mineSweeper.changeStatus(i, j, 'blast');
      setOpenCount(prev => prev + 1);
      // setStatusCell('blast');
      mineSweeper.openAll();
      setIsGameOver(true);
    }
  };

  const handleContextMenu = event => event.preventDefault();

  return (
    <CellButton
      className={status}
      color={colorNumber(value)}
      background={colorBackground(status)}
      status={status}
      onMouseDown={handleClick}
      onContextMenu={handleContextMenu}
    >
      {value === -1 && (status === 'open' || status === 'blast') && <FaBomb />}
      {value > 0 && status === 'open' && value}
      {status === 'flag' && <FaFlag color="blue" />}
    </CellButton>
  );
};
