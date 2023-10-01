import { colorNumber } from 'model/colorNumber';
import { CellButton } from './Cell.styled';
import { FaBomb, FaFlag } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export const Cell = ({ value, setMineCount, isNewGame, setIsNewGame }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlag, setIsFlag] = useState(false);

  useEffect(() => {
    if (isNewGame) {
      setIsFlag(false);
      setIsOpen(false);
    }
  }, [isNewGame]);

  const handleClick = event => {
    event.preventDefault();
    setIsNewGame(false);
    if (isOpen) return;
    if (event.button === 2) {
      setIsFlag(!isFlag);
      setMineCount(prewMineCount => prewMineCount + 1);
    }
    if (isFlag) return;
    if (event.button === 0) setIsOpen(true);
  };

  const handleContextMenu = event => event.preventDefault();

  return (
    <CellButton
      color={colorNumber(value)}
      $isOpen={isOpen}
      onMouseDown={handleClick}
      onContextMenu={handleContextMenu}
    >
      {value === -1 && isOpen && <FaBomb />}
      {value > 0 && isOpen && value}
      {isFlag && <FaFlag color="blue" />}
    </CellButton>
  );
};
