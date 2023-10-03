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
  //   const [isWinner, setIsWinner] = useState(false);

  //   setInterval(() => {
  //     setTimeGeme(prevTimeGeme => prevTimeGeme + 1);
  //   }, 1000);

  const newGame = () => {
    setIsNewGame(true);
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
      return true;
    } else {
      return false;
    }
  };

  //   const logIn = () => {
  //     setIsLoggedIn(true);
  //     setUsername('Mango');
  //   };

  //   const logOut = () => {
  //     setIsLoggedIn(false);
  //     setUsername(null);
  //   };

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
