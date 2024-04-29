import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props => (props.checked ? '#121214' : 'transparent')};
  border: 2px solid #ffffff;
  border-radius: 8px;
  transition: all 150ms;
  position: relative;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  &:hover {
    border-color: #cccccc;
  }

  &:after {
    content: '';
    display: ${props => (props.checked ? 'block' : 'none')};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
