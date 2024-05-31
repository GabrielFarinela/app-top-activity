import styled from 'styled-components';

const StyledInput = styled.input`
  appearance: none;
  border: none;
  outline: none;
  border: 1px solid #00b37e;
  background-color: #121214;
  width: calc(100% - 22px);
  border-radius: 8px;
  height: 25px;
  color: white;
  padding: 10px;
  position: relative;
`;

const StyledLabel = styled.label`
  font-size: 13px;
  color: #8d8d99;
  position: absolute;
  top: -17px;
  left: 0;
`;

const InputContainer = styled.div`
  position: relative;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #8D8D99;
  cursor: pointer;
`;

export { InputContainer, StyledLabel, StyledInput, ToggleButton };
