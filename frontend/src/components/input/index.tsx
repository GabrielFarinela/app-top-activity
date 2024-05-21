import React from 'react';
import { InputContainer, StyledInput, StyledLabel } from './styles';

export interface IInput{
   label: string;
	type: React.HTMLInputTypeAttribute | undefined;
	placeholder?: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
	error?: boolean;
	name?: string
}

const Input: React.FC<IInput> = ({
	label,
	type,
	placeholder,
	value,
	onChange,
	error = false,
	name
    
}) => {
	return (
		<InputContainer>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput name={name} style={{ border: error ? '1px solid red' : undefined }} onChange={onChange} value={value} placeholder={placeholder} type={type} />
		</InputContainer>
	);
};

export default Input;