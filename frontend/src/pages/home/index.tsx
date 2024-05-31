/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from 'react';
import { Header } from '../signIn/styles';
import Span from '../../components/span';
import Cards from '../../components/card';
import CardContent from '../../components/card/components/cardContent';

const Home: React.FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [objectsPerPage] = useState<number>(2);
	const [totalObjects, setTotalObjects] = useState<number>(0);

	useEffect(() => {
		const eventos = localStorage.getItem('eventos');
		if (eventos) {
			const parsedEventos = JSON.parse(eventos);
			setTotalObjects(parsedEventos.length);
		}
	}, []);

	const handleNextPage = () => {
		const maxPage = Math.ceil(totalObjects / objectsPerPage);
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
		const eventos = localStorage.getItem('eventos');
		if (eventos) {
			const parsedEventos = JSON.parse(eventos);
			return parsedEventos.slice(startIndex + cardIndex - 1, endIndex + cardIndex - 1);
		} else {
			return [];
		}
	};

	const card = useMemo(() => {
		return <CardContent dataCard={getDataForCard(1)} />;
	}, [currentPage]);

	const card2 = useMemo(() => {
		return <CardContent dataCard={getDataForCard(2)} />;
	}, [currentPage]);

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
			<Cards
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				children={card}
				children2={card2}
			/>
		</>
	);
};

export default Home;