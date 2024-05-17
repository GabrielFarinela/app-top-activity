import styled from 'styled-components';

export const ButtonBack = styled.button`
  background-color: #202024;
  color: white;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
  height: 80px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;