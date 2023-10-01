import { Cell } from 'components/Cell/Cell';
import { Row } from './Filed.styled';

export const Field = ({
  mineSweeper: { field },
  setMineCount,
  isNewGame,
  setIsNewGame,
}) => {
  return field.map((row, i) => {
    return (
      <Row key={i}>
        {row.map((cell, j) => {
          return (
            <Cell
              value={cell}
              key={`${i}x${j}`}
              setMineCount={setMineCount}
              isNewGame={isNewGame}
              setIsNewGame={setIsNewGame}
            />
          );
        })}
      </Row>
    );
  });
};
