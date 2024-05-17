import React, { ReactNode } from 'react';

export interface IGrid{
   children: ReactNode;
	style?: React.CSSProperties | undefined;
}

const Grid: React.FC<IGrid> = ({
	children,
	style
   
}) => {
	return (
		<div style={style}>
			{children}
		</div>
	);
};

export default Grid;