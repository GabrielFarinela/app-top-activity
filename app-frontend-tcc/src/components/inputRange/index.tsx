import React, { useState } from 'react';
import styled from 'styled-components';

interface CustomInputProps {
  value: number;
  label: string;
  tipo: string;
  max: number;
  onChange: (value: number) => void;
}

const Container = styled.div`
  position: relative;
`;

const RangeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 1px;
  border: none;
  background: #00B37E; 
  outline: none;
  position: relative;

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

const Label = styled.label`
  position: absolute;
  top: -16px;
  left: 0;
  color: #8D8D99;
  font-size: 13px;
`;

const Value = styled.span`
  position: absolute;
  top: -20px;
  right: 0;
  color: white;
  font-size: 16px;
`;

const CustomInput: React.FC<CustomInputProps> = ({ value: propValue, onChange, label, tipo, max }) => {
	const [value, setValue] = useState(propValue);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = parseInt(e.target.value);
		setValue(newValue);
		onChange(newValue);
	};

	return (
		<Container>
			<Label>{label}</Label>
			<Value>{value} {tipo}</Value>
			<RangeInput
				type="range"
				min={0}
				max={max}
				value={value}
				onChange={handleChange}
			/>
		</Container>
	);
};

export default CustomInput;
