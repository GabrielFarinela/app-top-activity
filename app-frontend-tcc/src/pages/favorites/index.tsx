import React from 'react';
import { Header } from '../signIn/styles';
import Span from '../../components/span';

const Favorites: React.FC = () => {
	return (
		<>
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
		</>
	);
};

export default Favorites;