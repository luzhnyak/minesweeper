import { FaSmile, FaDizzy, FaGrinAlt } from 'react-icons/fa';
import { HeaderWrapper, Button } from './Header.styled';
import { useApp } from 'context/appContext';

export const Header = () => {
  const { mineCount, newGame, timeGeme, isWinner, isGameOver } = useApp();
  return (
    <HeaderWrapper>
      <h1>
        {isWinner() && 'You win!'}
        {!isWinner() && isGameOver && 'You lost!'}
        {!isGameOver && 'MineSweeper'}
      </h1>
      <div>
        <span>{(10 - mineCount).toString().padStart(3, '0')}</span>
        <Button onClick={newGame} backgrouncolor="lightgreen">
          {!isWinner() && isGameOver && <FaDizzy />}
          {!isGameOver && <FaSmile />}
          {isWinner() && <FaGrinAlt />}
        </Button>
        <span>{timeGeme.toString().padStart(3, '0')}</span>
      </div>
    </HeaderWrapper>
  );
};
