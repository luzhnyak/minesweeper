import { Cell } from 'components/Cell/Cell';
import { Row, FieldWrapper } from './Filed.styled';
import { useApp } from 'context/appContext';

export const Field = () => {
  const {
    mineSweeper: { field },
  } = useApp();

  const setOpen = (i, j) => {
    return false;
  };

  return (
    <FieldWrapper>
      {field.map((row, i) => {
        return (
          <Row key={i}>
            {row.map((cell, j) => {
              return (
                <Cell
                  cell={cell}
                  i={i}
                  j={j}
                  setOpen={setOpen(i, j)}
                  key={`${i}x${j}`}
                />
              );
            })}
          </Row>
        );
      })}
    </FieldWrapper>
  );
};
