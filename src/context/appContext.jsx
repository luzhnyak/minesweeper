import { Minesweeper } from 'model/MineSweeper';
import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const useApp = () => useContext(AppContext);

const mineSweeper = new Minesweeper(10, 10, 10);
mineSweeper.generateField();

export const AppProvider = ({ children }) => {
  const [mineCount, setMineCount] = useState(0);
  const [openCount, setOpenCount] = useState(0);
  const [timeGeme, setTimeGeme] = useState(0);
  const [isNewGame, setIsNewGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  // const [mineSweeper, setMineSweeper] = useState(new Minesweeper(10, 10, 10));

  //   const [isWinner, setIsWinner] = useState(false);

  //   setInterval(() => {
  //     setTimeGeme(prevTimeGeme => prevTimeGeme + 1);
  //   }, 1000);
  // useEffect(() => {
  //   setMineCount(mineSweeper.cellCount('flag'));
  //   setOpenCount(mineSweeper.cellCount('open'));
  //   console.log(mineSweeper.cellCount('flag'));
  // }, [mineSweeper]);

  const newGame = () => {
    setIsNewGame(true);
    mineSweeper.closeAll();
    mineSweeper.generateField();
    setTimeGeme(0);
    setMineCount(0);
    setOpenCount(0);
    setIsGameOver(false);
  };

  const isWinner = () => {
    const { fieldWidth, fieldHeight, maxMines } = mineSweeper;

    if (
      maxMines === mineCount &&
      fieldHeight * fieldWidth === mineCount + openCount
    ) {
      mineSweeper.openAll();
      return true;
    } else {
      return false;
    }
  };

  return (
    <AppContext.Provider
      value={{
        mineSweeper,
        mineCount,
        openCount,
        timeGeme,
        isNewGame,
        isGameOver,
        isWinner,
        setMineCount,
        setOpenCount,
        setTimeGeme,
        setIsNewGame,
        setIsGameOver,
        newGame,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
