import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
  border: 1px solid gray;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${props => props.backgrouncolor};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  svg {
    width: 20px;
    height: 20px;
  }
  &:hover {
    border: 1px solid green;
    color: green;
  }
`;
