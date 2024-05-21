import React, { useMemo } from 'react';
import { Header } from '../signIn/styles';
import Span from '../../components/span';
import Card from '../../components/card';
import CardContent from '../../components/card/components/cardContent';

const Home: React.FC = () => {

	const card = useMemo(() => {
		return <CardContent 
			data={new Date} 
			endereco="rua josé rizzo, 447"
			subtitulo="subtitulo teste"
			titulo="titulo teste"
			valor="399"
		/>;
	}, []);

	const card2 = useMemo(() => {
		return <CardContent 
			data={new Date} 
			endereco="rua josé rizzo, 447"
			subtitulo="subtitulo teste"
			titulo="titulo teste"
			valor="399"
		/>;
	}, []);

	return (
		<>
			<Header>
				<img src="./src/assets/home.svg" alt="home" />
				<Span 
					style={{ 
						display: "flex", 
						justifyContent: "center" 
					}} 
					color="#8D8D99" 
					size="20px"
				>
					Página inicial
				</Span>
			</Header>
			<Card 
				children={card} 
				children2={card2}
			/>
		</>
	);
};

export default Home;