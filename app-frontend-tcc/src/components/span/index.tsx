import React, { ReactNode } from 'react';
import { StyledSpan } from './styles';

export interface ISpan{
   children: ReactNode;
   size: string;
   color: string;
	style?: React.CSSProperties | undefined;
}

const Span: React.FC<ISpan> = ({
	children,
	color,
	size,
	style

}) => {
	return (
		<StyledSpan
			style={style}
			color={color}
			size={size}
		>
			{children}
		</StyledSpan>
	);
};

export default Span;