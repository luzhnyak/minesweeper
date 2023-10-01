import { mineSweeper } from 'model/MineSweeper';
import { Container } from './App.styled';
import { Header } from './Header/Header';
import { Field } from './Field/Field';
import { useEffect, useRef, useState } from 'react';

export const App = () => {
  const [mineCount, setMineCount] = useState(0);
  const [timeGeme, setTimeGeme] = useState(0);
  const [isNewGame, setIsNewGame] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    console.log('time');
    setInterval(() => {
      setTimeGeme(prevTimeGeme => prevTimeGeme + 1);
    }, 1000);
  }, []);

  const newGame = () => {
    setIsNewGame(true);
    mineSweeper.generateField();
    setTimeGeme(0);
    setMineCount(0);
  };

  return (
    <Container>
      <Header mineCount={mineCount} newGame={newGame} timeGeme={timeGeme} />
      <Field
        mineSweeper={mineSweeper}
        setMineCount={setMineCount}
        isNewGame={isNewGame}
        setIsNewGame={setIsNewGame}
      />
    </Container>
  );
};
