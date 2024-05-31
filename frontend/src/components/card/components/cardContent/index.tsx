/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Description, ContainerButton, ContainerImage } from "./styles";
import Button from "../../../button";
import Span from "../../../span";
import { searchImages } from "../../../../shared/google/searchImages";
import { useToast } from "../../../../context/ToastContext";
import Loading from "../../../../shared/loading";

interface ICardContent {
	dataCard: any;
}


const CardContent: React.FC<ICardContent> = ({ dataCard }) => {
	const [iconFavorite, setIconFavorite] = useState("favorite-clean");
	const [modalOpen, setModalOpen] = useState(false);
	const [images, setImages] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);

	const { showToast } = useToast();

	const fetchImages = async () => {
		const response = await searchImages(dataCard[0].termo);
		
		const imagesFetched: any[] = [];
		response?.map((item: any) => {
			imagesFetched.push(item.link);
		});
		setImages(imagesFetched);

		setModalOpen(true);
	};

	const createLink = () => {
		return `https://www.google.com/search?q=${dataCard[0].titulo}`;
	};

	return (
		<div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between"}}>
			{dataCard && dataCard.length > 0 && dataCard[0].titulo && dataCard[0].titulo.length > 0 && dataCard[0].descricao.length > 0 ? (
				<>
					<div style={{ margin: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
							<span title={`${dataCard.length > 0 && dataCard[0].titulo}`} style={{ color: "white", fontSize: "1.5rem" }}>{dataCard.length > 0 && dataCard[0].titulo} - (<span title={`#${dataCard.length > 0 && dataCard[0].tag}`} style={{ fontSize: "0.875rem", color: "white", opacity: "0.7" }}>#{dataCard.length > 0 && dataCard[0].tag}</span>)</span>
							<div style={{ display: "flex", alignItems: "center" }}>
								<a target="_blank" href={createLink()}>
									<button style={{ cursor: "pointer", backgroundColor: "transparent", border: "0" }}>
										<img src="src/assets/link.svg" alt="" />
									</button>
								</a>
								<button 
									style={{ cursor: "pointer", backgroundColor: "transparent", border: "0" }}
									onClick={() => {
										setIconFavorite((prevState) => prevState === "favorite-clean" ? "favorite" : "favorite-clean");
									}}
								>
									<img src={`src/assets/${iconFavorite}.svg`} alt="" />
								</button>
							</div>
						</div>
						<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
							<span title={dataCard.length > 0 && dataCard[0].data} style={{ fontSize: "0.875rem", color: "#8D8D99" }}>{dataCard.length > 0 && dataCard[0].data}</span>
							<span title={dataCard.length > 0 && dataCard[0].local} style={{ fontSize: "0.875rem", color: "#8D8D99" }}>{dataCard.length > 0 && dataCard[0].local}</span>
						</div>
						<Description>
							{dataCard.length > 0 && dataCard[0].descricao}
						</Description>
					</div>
					<ContainerButton>
						<Button type="button" onClick={async () => {
							setLoading(true);
							try {
								await fetchImages();
								console.log("open images");
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
				</>
			) : undefined}
		</div>
	);
};

export default CardContent;
