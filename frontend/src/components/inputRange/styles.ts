import styled from 'styled-components';

export const RangeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 5px;   
  background: #d3d3d3;  
  outline: none;  
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%; 
    background: #00B37E; 
    cursor: pointer; 
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
    background: #00B37E;
    cursor: pointer;
  }
`;
