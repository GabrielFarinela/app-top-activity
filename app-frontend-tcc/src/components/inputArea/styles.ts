import styled from 'styled-components';

const StyledInput = styled.textarea`
    appearance: none;
    border: none;
    outline: none;
    border: 1px solid #00b37e;
    background-color: #121214;
    width: calc(100% - 22px);
    border-radius: 8px;
    height: 100px;
    color: white;
    padding: 10px;
    position: relative;
    resize: none;
    max-height: 100px;
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

export { InputContainer, StyledLabel, StyledInput };