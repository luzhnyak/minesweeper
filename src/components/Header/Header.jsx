import { FaSmile } from 'react-icons/fa';
import { HeaderWrapper } from './Header.styled';
import { Button } from './Button/Button.styled';

export const Header = ({ mineCount, newGame, timeGeme }) => {
  return (
    <HeaderWrapper>
      <span>{mineCount}</span>
      <Button onClick={newGame}>
        <FaSmile />
      </Button>
      <span>{timeGeme}</span>
    </HeaderWrapper>
  );
};
