import React, { useState } from 'react';
import { InputContainer, StyledInput, StyledLabel, ToggleButton } from './styles';

export interface IInput {
  label: string;
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  error?: boolean;
  name?: string;
  disabled?: boolean;
}

const Input: React.FC<IInput> = ({
	label,
	type,
	placeholder,
	value,
	onChange,
	error = false,
	disabled = false,
	name
}) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = () => {
		setShowPassword((prevState) => !prevState);
	};

	return (
		<InputContainer>
			<StyledLabel>{label}</StyledLabel>
			<div style={{ position: 'relative' }}>
				<StyledInput
					disabled={disabled}
					name={name}
					style={{ color: disabled ? '#8D8D99' : "white", border: error ? '1px solid red' : undefined }}
					onChange={onChange}
					value={value}
					placeholder={placeholder}
					type={showPassword ? 'text' : type}
				/>
				{type === 'password' && (
					<ToggleButton type="button" onClick={handleTogglePassword}>
						{showPassword ? 'Esconder' : 'Mostrar'}
					</ToggleButton>
				)}
			</div>
		</InputContainer>
	);
};

export default Input;
