import { Cell } from 'components/Cell/Cell';
import { Row, FieldWrapper } from './Filed.styled';
import { useApp } from 'context/appContext';

export const Field = () => {
  const {
    mineSweeper: { field },
  } = useApp();

  return (
    <FieldWrapper>
      {field.map((row, i) => {
        return (
          <Row key={i}>
            {row.map((cell, j) => {
              return <Cell value={cell} key={`${i}x${j}`} />;
            })}
          </Row>
        );
      })}
    </FieldWrapper>
  );
};
