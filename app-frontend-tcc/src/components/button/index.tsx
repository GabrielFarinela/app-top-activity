import React, { ReactNode } from 'react';
import StyledButton from './styles';

export interface IButton{
   children: ReactNode;
	type: "button" | "submit" | "reset" | undefined
}

const Button: React.FC<IButton> = ({
	children,
	type

}) => {
	return (
		<StyledButton type={type}>
			{children}
		</StyledButton>
	);
};

export default Button;