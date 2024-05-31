import React from 'react';
import { InputContainer, StyledInput, StyledLabel } from './styles';

export interface IInputArea{
   label: string;
	value: string;
	error?: boolean;
	onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined
}

const InputArea: React.FC<IInputArea> = ({
	label,
	value,
	onChange,
	error = false
    
}) => {
	return (
		<InputContainer>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput style={{ border: error ? '1px solid red' : undefined }} onChange={onChange} value={value}/>
		</InputContainer>
	);
};

export default InputArea;