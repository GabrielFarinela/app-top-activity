import React, { useState } from 'react';
import { Header } from '../signIn/styles';
import Span from '../../components/span';
import { Card, Container, ContainerBlock } from './styles';
import ContentCard from './components/contentCard';
import Loading from '../../shared/loading';

const Favorites: React.FC = () => {
	const [loading] = useState(false);
	const [events] = useState([]);

	return (
		<Container>
			<Header>
				<img src="./src/assets/favorite.svg" alt="favorite" />
				<Span
					style={{
						display: "flex",
						justifyContent: "center"
					}}
					color="#8D8D99"
					size="20px"
				>
                    Favoritos
				</Span>
			</Header>
			{loading ? <Loading /> :
				<ContainerBlock>
					{events.length > 0 ? events.map((index) => (
						<Card key={index}>
							<ContentCard />
						</Card>
					)) : (
						<Span color="#8D8D99" size="20px">Nenhum evento favorito encontrado.</Span>
					)}
				</ContainerBlock>}
		</Container>
	);
};

export default Favorites;
