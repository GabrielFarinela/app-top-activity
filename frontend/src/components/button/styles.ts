import styled from 'styled-components';

const StyledButton = styled.button`
  height: 60px;
  width: 100%;
  background-color: #00875F;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  padding: 0 20px;
  cursor: pointer;
  position: relative;

  &:hover{
    opacity: 0.8;
  }
`;

export default StyledButton;