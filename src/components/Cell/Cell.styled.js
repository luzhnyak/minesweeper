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
  border: 2px solid blue;
  border-top-color: white;
  border-left-color: white;
  border-right-color: gray;
  border-bottom-color: gray;
  padding: 0px;
  color: ${props => props.color};
  background-color: lightgray;
  svg {
    width: 20px;
    height: 20px;
    background-color: transparent;
  }
  &:hover {
    border: 1px solid gray;
  }
  &.open {
    border: 1px solid gray;
    background-color: white;
  }
  &.blast {
    border: 1px solid gray;
    background-color: red;
  }
`;
