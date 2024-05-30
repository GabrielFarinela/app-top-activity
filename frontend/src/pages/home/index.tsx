/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Header } from '../signIn/styles';
import Span from '../../components/span';
import Cards from '../../components/card';
import CardContent from '../../components/card/components/cardContent';
import { SearchGemini } from '../../shared/google/searchGemini';

const Home: React.FC = () => {
	const [loadingData, setLoadingData] = useState<boolean>(true);
	const [fetchData, setFetchData] = useState({});
	const [currentPage, setCurrentPage] = useState<number>(1);

	const hasFetchedData = useRef(false);

	const buscarDados = async () => {
		if (!hasFetchedData.current) {
			const result = await SearchGemini();

			setFetchData((prevState) => ({ ...prevState, ...result }));

			hasFetchedData.current = true;
		}
	};

	const fetchDataApi = async () => {
		await buscarDados();
		setLoadingData(false);
	};

	useEffect(() => {
		if (loadingData) {
			fetchDataApi();
		}
	});

	useEffect(() => {
		console.log(fetchData);
	}, [fetchData]);

	const handleNextPage = () => {
	};

	const handlePreviousPage = () => {
	};

	const getDataForCard = () => {
	};

	const card = useMemo(() => {
		return <CardContent dataCard={getDataForCard()} />;
	}, [fetchData, currentPage]);

	const card2 = useMemo(() => {
		return <CardContent dataCard={getDataForCard()} />;
	}, [fetchData, currentPage]);

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
				setCurrentPage={setCurrentPage}
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				children={card} 
				children2={card2} 
			/>
		</>
	);
};

export default Home;
