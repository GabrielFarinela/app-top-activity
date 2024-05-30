import React, { ReactNode } from 'react';
import { Box, ButtonNext, Container, Row } from './styles';

interface FlexBoxProps {
  transparent: string;
  width: string;
  height: string;
  children?: ReactNode;
  position?: string;
  border?: string;
  styleinline?: string;
}

interface ICard {
	children: ReactNode;
	children2: ReactNode;
	handlePreviousPage: () => void;
	handleNextPage: () => void;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const FlexBox: React.FC<FlexBoxProps> = ({ transparent, width, height, children, position, border, styleinline }) => (
	<Box styleinline={styleinline ?? ""} border={border ?? ""} position={position ?? ""} transparent={transparent} width={width} height={height}>{children}</Box>
);

const Card: React.FC<ICard> = ({
	children,
	children2,
	handleNextPage,
	handlePreviousPage

}) => {
	return (
		<Container>
			<Row>
				<FlexBox 
					styleinline="@media (max-width: 1400px) { width: 10%; }
                            @media (max-width: 900px) { display: none; }" 
					transparent="transparent" 
					width="20%" 
					height="80%" 
				/>
				<FlexBox 
					styleinline="@media (max-width: 1400px) { width: 80%; }
                            @media (max-width: 900px) { width: 100%; }" 
					border="1px solid #000" 
					transparent="#202024"
					width="60%" 
					height="80%" 
				>{children}</FlexBox>
				<FlexBox 
					styleinline="@media (max-width: 1400px) { width: 10%; }
                            @media (max-width: 900px) { display: none; }" 
					position="relative" 
					transparent="transparent" 
					width="20%" 
					height="80%" 
				>
					<ButtonNext 
						positionscreen="bottom: 0"
						onClick={() => {
							handlePreviousPage();
						}}
					>
						<div style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100%"   
						}} >
							<img style={{ userSelect: "none" }} src="./src/assets/buttonUp.svg" alt="button-up" />
						</div>
					</ButtonNext>
				</FlexBox>
			</Row>
			<Row className='2-row'>
				<FlexBox 
					styleinline="@media (max-width: 1400px) { width: 10%; }
                            @media (max-width: 900px) { display: none; }" 
					transparent="transparent" 
					width="20%" 
					height="80%" 
				/>
				<FlexBox 
					styleinline="@media (max-width: 1400px) { width: 80%; }
                            @media (max-width: 900px) { width: 100%; }" 
					border="1px solid #000" 
					transparent="#202024" 
					width="60%" 
					height="80%" 
				>{children2}</FlexBox>
				<FlexBox 
					styleinline="@media (max-width: 1400px) { width: 10%; }
                            @media (max-width: 900px) { display: none; }" 
					position="relative" 
					transparent="transparent" 
					width="20%" 
					height="80%" 
				>
					<ButtonNext 
						positionscreen="top: 0"
						onClick={() => {
							handleNextPage();
						}}
					>
						<div style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100%"   
						}} >
							<img style={{ userSelect: "none" }} src="./src/assets/buttonDown.svg" alt="button-up" />
						</div>
					</ButtonNext>
				</FlexBox>
			</Row>
		</Container>
	);
};

export default Card;