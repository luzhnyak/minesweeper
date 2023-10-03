import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  border: 1px solid gray;
  padding: 8px;
  h1 {
    padding: 0;
    margin: 0 0 4px 0;
    font-size: 20px;
    text-align: center;
  }
  div {
    display: flex;
    justify-content: center;
    gap: 90px;
    align-items: center;
    span {
      font-size: 36px;
      font-weight: 900;
      color: darkred;
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${props => props.backgrouncolor};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid gray;
  border-top-color: white;
  border-left-color: white;
  border-right-color: green;
  border-bottom-color: green;
  svg {
    width: 20px;
    height: 20px;
  }
  &:hover {
    border: 1px solid green;
    color: green;
  }
`;
