import React from 'react';
import { Header } from '../signIn/styles';
import Span from '../../components/span';
import { Card, Container, ContainerBlock } from './styles';
import ContentCard from './components/contentCard';

const Favorites: React.FC = () => {
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
			<ContainerBlock>
				{Array.from({ length: 20 }).map((_, index) => (
					<Card key={index}>
						<ContentCard />
					</Card>
				))}
			</ContainerBlock>
		</Container>
	);
};

export default Favorites;