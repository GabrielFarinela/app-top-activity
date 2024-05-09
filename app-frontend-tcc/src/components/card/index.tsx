import React, { ReactNode } from 'react';
import { Box, ButtonNext, Container, Row } from './styles';

interface FlexBoxProps {
  transparent: string;
  width: string;
  height: string;
  children?: ReactNode;
  position?: string;
  border?: string;
  styleInline?: string;
}

interface ICard {
	children: ReactNode;
	children2: ReactNode;
}

const FlexBox: React.FC<FlexBoxProps> = ({ transparent, width, height, children, position, border, styleInline }) => (
	<Box styleInline={styleInline ?? ""} border={border ?? ""} position={position ?? ""} transparent={transparent} width={width} height={height}>{children}</Box>
);

const Card: React.FC<ICard> = ({
	children,
	children2

}) => {
	return (
		<Container className='container'>
			<Row className='1-row'>
				<FlexBox 
					styleInline="@media (max-width: 1400px) { width: 10%; }
                            @media (max-width: 900px) { display: none; }" 
					transparent="transparent" 
					width="20%" 
					height="80%" 
				/>
				<FlexBox 
					styleInline="@media (max-width: 1400px) { width: 80%; }
                            @media (max-width: 900px) { width: 100%; }" 
					border="1px solid #000" 
					transparent="#202024"
					width="60%" 
					height="80%" 
				>{children}</FlexBox>
				<FlexBox 
					styleInline="@media (max-width: 1400px) { width: 10%; }
                            @media (max-width: 900px) { display: none; }" 
					position="relative" 
					transparent="transparent" 
					width="20%" 
					height="80%" 
				>
					<ButtonNext 
						positionScreen="bottom: 0" 
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
					styleInline="@media (max-width: 1400px) { width: 10%; }
                            @media (max-width: 900px) { display: none; }" 
					transparent="transparent" 
					width="20%" 
					height="80%" 
				/>
				<FlexBox 
					styleInline="@media (max-width: 1400px) { width: 80%; }
                            @media (max-width: 900px) { width: 100%; }" 
					border="1px solid #000" 
					transparent="#202024" 
					width="60%" 
					height="80%" 
				>{children2}</FlexBox>
				<FlexBox 
					styleInline="@media (max-width: 1400px) { width: 10%; }
                            @media (max-width: 900px) { display: none; }" 
					position="relative" 
					transparent="transparent" 
					width="20%" 
					height="80%" 
				>
					<ButtonNext 
						positionScreen="top: 0"
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