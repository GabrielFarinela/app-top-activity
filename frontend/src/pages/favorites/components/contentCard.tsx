/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Container, ContainerButton } from './style';
import Span from '../../../components/span';
import Button from '../../../components/button';
import { ContainerImage } from '../../../components/card/components/cardContent/styles';
import { IEvents } from '../../home';
import { searchImages } from '../../../shared/google/searchImages';
import { useToast } from '../../../context/ToastContext';
import Loading from '../../../shared/loading';
import Cookies from 'js-cookie';

interface IContentCard {
	event: IEvents;
	onCallback: (eventId: string) => void;
}

const ContentCard: React.FC<IContentCard> = ({
	event,
	onCallback
}) => {
	const [images, setImages] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);

	const [modalOpen, setModalOpen] = useState(false);
	const [iconFavorite, setIconFavorite] = useState("favorite");

	const { showToast } = useToast();

	const fetchImages = async () => {
		const response = await searchImages(event.termo);

		const imagesFetched: any[] = [];
		response?.map((item: any) => {
			imagesFetched.push(item.link);
		});
		setImages(imagesFetched);

		setModalOpen(true);
	};

	const removeFavorite = async (): Promise<Response | void> => {
		try {
			const response = await fetch("http://localhost:3000/api/eventUser", {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					userId: Cookies.get('user_id'),
					eventId: event._id
				})
			});
	
			if (response.status >= 200 && response.status < 300) {
				showToast("Evento removido dos favoritos", "#4BB543");
				return response;
			} else {
				showToast("Erro ao remover evento dos favoritos", "#E74646");
				return response;
			}

		} catch (error) {
			showToast("Erro ao processar requisição", "#E74646");
			throw error;
		}
	};

	const onClickFavorite = async () => {
		await removeFavorite();
		setIconFavorite((prevState) => prevState === "favorite" ? "favorite-clean" : "favorite");
		onCallback(event._id);
	};

	const createLink = () => {
		if (!event) {
			return '';
		}
		
		const titleAndLocation = `${event.titulo}`;
		const encodedTitleAndLocation = encodeURIComponent(titleAndLocation);
		
		return `https://www.google.com/search?q=${encodedTitleAndLocation}`;
	};

	return (
		<Container>
			<div style={{ margin: "0 20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>
				<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
					<span title={event.titulo} style={{ color: "white", fontSize: "1.5rem" }}>{event.titulo}</span>
					<div style={{ display: "flex", alignItems: "center" }}>
						<a target="_blank" href={createLink()}>
							<button style={{ cursor: "pointer", backgroundColor: "transparent", border: "0" }}>
								<img src="src/assets/link.svg" alt="" />
							</button>
						</a>
						<button 
							style={{ cursor: "pointer", backgroundColor: "transparent", border: "0" }}
							onClick={() => {
								onClickFavorite();
							}}
						>
							<img src={`src/assets/${iconFavorite}.svg`} alt="" />
						</button>
					</div>
				</div>
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
					<span title={event.data} style={{ fontSize: "0.875rem", color: "#8D8D99" }}>{event.data}</span>
					<span title={event.local} style={{ fontSize: "0.875rem", color: "#8D8D99" }}>{event.local}</span>
					<span title={event.tag} style={{ fontSize: "0.875rem", color: "white", opacity: "0.7" }}>{event.tag}</span>
				</div>
			</div>
			<ContainerButton>
				<Button type="button" onClick={async () => {
					setLoading(true);
					try {
						await fetchImages();
					} catch (error) {
						showToast("Erro ao carregar imagens", '#E74646');
					} finally {
						setLoading(false);
					}
				}}>{loading ? <Loading height="25px" width="25px"/> : (<>Ver fotos</>)}</Button>
			</ContainerButton>
			{modalOpen && (
				<div style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					zIndex: 9999
				}}>
					<div style={{
						backgroundColor: "#202024",
						border: "1px solid black",
						boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
						padding: "20px",
						borderRadius: "8px",
						width: "80%",
						maxWidth: "900px",
						overflow: "hidden",
						maxHeight: "80%",
					}}>
						<ContainerImage style={{ overflow: `${images && images.length > 0 ? "auto" : "hidden"}`, minHeight: "100px", position: "relative"}}>
							{images && images.length > 0 ? (
								<>
									{images.map((image, index) => (
										<img key={index} src={image} alt={`Imagem ${index}`} style={{ maxWidth: "auto", height: "200px", marginBottom: "10px", borderRadius: "8px", border: "2px solid #000" }} />
									))}
								</>
							) : (
								<Span style={{ position: "absolute", transform: "translate(275%, 88%)", margin: "20px", textDecoration: "underline", userSelect: "none" }} color="white" size="20px">SEM IMAGENS</Span>
							)}
						</ContainerImage>
						<div style={{ marginTop: "10px" }}>
							<Button type="button" onClick={() => {
								setModalOpen(false);
								setImages([]);
							}}>Fechar</Button>
						</div>
					</div>
				</div>
			)}
		</Container>
	);
};

export default ContentCard;