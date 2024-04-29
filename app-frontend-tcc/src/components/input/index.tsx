import React from 'react';
import { InputContainer, StyledInput, StyledLabel } from './styles';

export interface IInput{
   label: string;
	type: React.HTMLInputTypeAttribute | undefined;
}

const Input: React.FC<IInput> = ({
	label,
	type
    
}) => {
	return (
		<InputContainer>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput type={type} />
		</InputContainer>
	);
};

export default Input;