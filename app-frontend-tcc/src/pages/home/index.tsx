import React from 'react';
import { Header } from '../signIn/styles';
import Span from '../../components/span';
import Card from '../../components/card';

const Home: React.FC = () => {
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
					Home
				</Span>
			</Header>
			<Card 
				children={
					// <CardContent 
					// 	data={new Date} 
					// 	endereco="rua josé rizzo, 447"
					// 	fotos={["foto1","foto2","foto3","foto4"]}
					// 	subtitulo="subtitulo teste"
					// 	titulo="titulo teste"
					// 	valor="399"
					// />
					<></>
				} 
				children2={
					// <CardContent 
					// 	data={new Date} 
					// 	endereco="rua josé rizzo, 447"
					// 	fotos={["foto1","foto2","foto3","foto4"]}
					// 	subtitulo="subtitulo teste"
					// 	titulo="titulo teste"
					// 	valor="399"
					// />
					<></>
				}
			/>
		</>
	);
};

export default Home;