/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from 'react';
import { Header } from '../signIn/styles';
import Span from '../../components/span';
import Cards from '../../components/card';
import CardContent from '../../components/card/components/cardContent';
import Loading from '../../shared/loading';

const Home: React.FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [objectsPerPage] = useState<number>(2);
	const [events, setEvents] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);

	const fetchEvents = async (offset: number = 0) => {
		if(events.length === 0)
			setLoading(true);
		try {
			const response = await fetch(`http://localhost:3000/api/event?limit=10&offset=${offset}`);
			if (response.ok) {
				const newEvents = await response.json();
				setEvents(prevEvents => [...prevEvents, ...newEvents]);
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
		fetchEvents();
	}, []);

	useEffect(() => {
		const maxPage = Math.ceil(events.length / objectsPerPage);
		if (currentPage > 1 && currentPage === maxPage - 1) {
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
		return <CardContent dataCard={getDataForCard(1)} />;
	}, [currentPage, events]);

	const card2 = useMemo(() => {
		return <CardContent dataCard={getDataForCard(2)} />;
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
