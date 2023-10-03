import { FaSmile, FaDizzy } from 'react-icons/fa';
import { HeaderWrapper, Button } from './Header.styled';
import { useApp } from 'context/appContext';

export const Header = () => {
  const { mineCount, newGame, timeGeme, isWinner } = useApp();
  return (
    <HeaderWrapper>
      <span>{mineCount}</span>
      <Button onClick={newGame} backgrouncolor="lightgreen">
        {!isWinner() && <FaDizzy />}
        {isWinner() && <FaSmile />}
      </Button>
      <span>{timeGeme}</span>
    </HeaderWrapper>
  );
};
