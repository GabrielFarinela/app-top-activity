import React from 'react';
import { InputContainer, StyledInput, StyledLabel } from './styles';

export interface IInputArea{
   label: string;
	value: string;
	onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined
}

const InputArea: React.FC<IInputArea> = ({
	label,
	value,
	onChange
    
}) => {
	return (
		<InputContainer>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput onChange={onChange} value={value}/>
		</InputContainer>
	);
};

export default InputArea;