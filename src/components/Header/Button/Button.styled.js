import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  padding: 8px;
  &:hover {
    border: 1px solid green;
    color: green;
  }
`;
