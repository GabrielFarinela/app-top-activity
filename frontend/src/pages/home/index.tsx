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

	const apiEndpoint = 'http://localhost:3000/api/user';
	const itemData = {
		"nome": "GuiIIIII",
		"username": "DSASDG",
		"senha": "DSAADSDS"
	};

	fetch(apiEndpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(itemData)
	})
		.then(response => {
			if (response.status >= 200 && response.status < 300) {
				console.log('Item inserted successfully!');
			} else {
				console.error('Error inserting item:', response.status);
			}
		})
		.catch(error => {
			console.error('Fetch error:', error);
		});

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