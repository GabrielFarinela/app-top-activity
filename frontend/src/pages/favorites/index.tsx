/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Header } from '../signIn/styles';
import Span from '../../components/span';
import { Card, Container, ContainerBlock } from './styles';
import ContentCard from './components/contentCard';
import Loading from '../../shared/loading';
import { IEvents } from '../home';
import Cookies from 'js-cookie';

const Favorites: React.FC = () => {
	let numberReq = 1;

	const [loading, setLoading] = useState(false);
	const [events, setEvents] = useState<IEvents[]>([]);

	const fetchEvents = async (userId: string) => {
		setLoading(true);
		try {
			const response = await fetch(`http://localhost:3000/api/event?userId=${userId}`);
			if (response.ok) {
				const newEvents: IEvents[] = await response.json();
				setEvents(newEvents);
			} else {
				console.error('Error fetching events:', response.status);
			}
		} catch (error) {
			console.error('Fetch error:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if(numberReq === 1){
			fetchEvents(Cookies.get("user_id") ?? "");
			numberReq = numberReq + 1;
		}
	}, []);

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
					{events.length > 0 ? events.map((event: IEvents) => (
						<Card key={`${event.eventId}evento${event.titulo}`}>
							<ContentCard event={event}/>
						</Card>
					)) : (
						<Span color="#8D8D99" size="20px">Nenhum evento favorito encontrado.</Span>
					)}
				</ContainerBlock>}
		</Container>
	);
};

export default Favorites;
