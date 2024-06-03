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

	const onCallback = (eventId: string) => {
		console.log(eventId);
		setEvents((prevState) => {
			const newPrev = [...prevState];

			const filteredList = newPrev.filter((event) => event.eventId.toString() !== eventId.toString());

			return filteredList;
		});
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
							<ContentCard onCallback={onCallback} event={event}/>
						</Card>
					)) : (
						<Span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} color="#8D8D99" size="20px">favorite algum evento e ele aparecerá aqui</Span>
					)}
				</ContainerBlock>}
		</Container>
	);
};

export default Favorites;
