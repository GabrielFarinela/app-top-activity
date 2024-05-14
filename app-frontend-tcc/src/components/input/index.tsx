import React from 'react';
import { InputContainer, StyledInput, StyledLabel } from './styles';

export interface IInput{
   label: string;
	type: React.HTMLInputTypeAttribute | undefined;
	placeholder?: string;
}

const Input: React.FC<IInput> = ({
	label,
	type,
	placeholder
    
}) => {
	return (
		<InputContainer>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput placeholder={placeholder} type={type} />
		</InputContainer>
	);
};

export default Input;