import React, { ReactNode } from 'react';
import StyledButton from './styles';

export interface IButton{
   children: ReactNode;
	type: "button" | "submit" | undefined
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<IButton> = ({
	children,
	type,
	onClick

}) => {
	return (
		<StyledButton onClick={onClick} type={type}>
			{children}
		</StyledButton>
	);
};

export default Button;