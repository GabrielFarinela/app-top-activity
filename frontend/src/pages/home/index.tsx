/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from 'react';
import { Header } from '../signIn/styles';
import Span from '../../components/span';
import Cards from '../../components/card';
import CardContent from '../../components/card/components/cardContent';
import Loading from '../../shared/loading';
import Cookies from 'js-cookie';

export interface IEvents{
	data: string;
	local: string;
	termo: string;
	titulo: string;
	tag: string;
	descricao: string;
	_id: string;
	eventId: string;
	hasChecked: boolean;
}

const Home: React.FC = () => {
	let numberReq = 1;

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [objectsPerPage] = useState<number>(2);
	const [events, setEvents] = useState<IEvents[]>([]);
	const [loading, setLoading] = useState(false);

	const fetchEvents = async (offset: number = 0) => {
		if(events.length === 0){
			setLoading(true);
		}
		try {
			const response = await fetch(`http://localhost:3000/api/event?limit=10&userId=${Cookies.get("user_id")}&offset=${offset}`);
			if (response.ok) {
				const newEvents: IEvents[] = await response.json();
				const eventsWithDefaultChecked = newEvents.map(event => ({
					...event,
					hasChecked: false
				}));
				setEvents(prevEvents => [...prevEvents, ...eventsWithDefaultChecked]);
			} else {
				console.error('Error fetching events:', response.status);
			}
		} catch (error) {
			console.error('Fetch error:', error);
		} finally {
			setLoading(false);
		}
	};

	const onCallbackAdd = (eventId: string) => {
		setEvents((prevState) => {
			const newPrev = [...prevState];

			const eventIndex = newPrev.findIndex(event => event.eventId === eventId);

			if (eventIndex !== -1) {
				newPrev[eventIndex] = {
					...newPrev[eventIndex],
					hasChecked: true
				};
			}

			return newPrev;
		});
	};

	const onCallbackRemove = (eventId: string) => {
		setEvents((prevState) => {
			const newPrev = [...prevState];

			const eventIndex = newPrev.findIndex(event => event.eventId === eventId);

			if (eventIndex !== -1) {
				newPrev[eventIndex] = {
					...newPrev[eventIndex],
					hasChecked: false
				};
			}

			return newPrev;
		});
	};

	useEffect(() => {
		if(numberReq === 1){
			fetchEvents();
			numberReq = numberReq + 1;
		}
	}, []);

	useEffect(() => {
		const maxPage = Math.ceil(events.length / objectsPerPage);
		if (currentPage === maxPage && maxPage > 1) {
			fetchEvents(events.length);
		}
	}, [currentPage, events.length, objectsPerPage]);

	const handleNextPage = () => {
		const maxPage = Math.ceil(events.length / objectsPerPage);
		if (currentPage < maxPage) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const getDataForCard = (cardIndex: number) => {
		const startIndex = (currentPage - 1) * objectsPerPage;
		const endIndex = startIndex + objectsPerPage;
		return events.slice(startIndex + cardIndex - 1, endIndex + cardIndex - 1);
	};

	const card = useMemo(() => {
		return <CardContent onCallbackAdd={onCallbackAdd} onCallbackRemove={onCallbackRemove} dataCard={getDataForCard(1)} />;
	}, [currentPage, events]);

	const card2 = useMemo(() => {
		return <CardContent onCallbackAdd={onCallbackAdd} onCallbackRemove={onCallbackRemove} dataCard={getDataForCard(2)} />;
	}, [currentPage, events]);

	return (
		<>
			<Header>
				<img src="./src/assets/home.svg" alt="home" />
				<Span
					style={{ display: "flex", justifyContent: "center" }}
					color="#8D8D99"
					size="20px"
				>
					Página inicial
				</Span>
			</Header>
			{loading ? <Loading/> : <Cards
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				children={card}
				children2={card2}
			/>}
		</>
	);
};

export default Home;
