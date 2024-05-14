import React from 'react';
import { InputContainer, StyledInput, StyledLabel } from './styles';

export interface IInputArea{
   label: string;
}

const InputArea: React.FC<IInputArea> = ({
	label,
    
}) => {
	return (
		<InputContainer>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput />
		</InputContainer>
	);
};

export default InputArea;