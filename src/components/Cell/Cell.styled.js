import styled from 'styled-components';

export const CellButton = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  border: 1px solid blue;
  padding: 0px;
  color: ${props => props.color};
  background-color: ${props => (props.$isOpen ? 'white' : 'lightgray')};
  svg {
    width: 20px;
    height: 20px;
  }
  &:hover {
    border: 1px solid red;
  }
`;
