import React, { useState } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const Container = styled.div`
  position: relative;
`;

const CustomInput = styled.input`
  height: 50px;
  width: 100%;
  padding: 10px;
  border: 1px solid #00B37E;
  border-radius: 8px;
  background-color: #121214;
  color: white;
  font-size: 16px;
  box-sizing: border-box;

  &::-webkit-calendar-picker-indicator {
    filter: invert(100%);
    cursor: pointer;
  }

  &:focus {
    background-color: #121214;
    outline: none;
  }
`;

const Label = styled.label`
  position: absolute;
  top: -17px;
  left: 0;
  color: #8D8D99;
  font-size: 13px;
`;

interface InputDataProps {
  label: string;
}

const InputData: React.FC<InputDataProps> = ({ label }) => {
	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newDate = new Date(e.target.value);
		setSelectedDate(newDate);
	};

	return (
		<Container>
			<Label>{label}</Label>
			<CustomInput
				type="date"
				value={format(selectedDate, 'yyyy-MM-dd')}
				onChange={handleDateChange}
				placeholder="DD/MM/AAAA"
			/>
		</Container>
	);
};

export default InputData;
