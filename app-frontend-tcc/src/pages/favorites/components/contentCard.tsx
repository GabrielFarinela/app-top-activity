import React, { useState } from 'react';
import { Container, ContainerButton } from './style';
import Span from '../../../components/span';
import Button from '../../../components/button';
import { ContainerImage } from '../../../components/card/components/cardContent/styles';

const ContentCard: React.FC = () => {
	const images = ["src/assets/img1.svg", "src/assets/img2.svg", "src/assets/img3.svg", "src/assets/img4.svg", "src/assets/img5.svg","src/assets/img1.svg", "src/assets/img2.svg", "src/assets/img3.svg", "src/assets/img4.svg", "src/assets/img5.svg"];

	const [modalOpen, setModalOpen] = useState(false);
	const [iconFavorite, setIconFavorite] = useState("favorite");

	return (
		<Container>
			<div style={{ margin: "0 20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>
				<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
					<span title={`Festa da uva - R$ 299,90`} style={{ color: "white", fontSize: "1.5rem" }}>Festa da uva - R$ 299,90</span>
					<div style={{ display: "flex", alignItems: "center" }}>
						<a href="">
							<button style={{ cursor: "pointer", backgroundColor: "transparent", border: "0" }}>
								<img src="src/assets/link.svg" alt="" />
							</button>
						</a>
						<button 
							style={{ cursor: "pointer", backgroundColor: "transparent", border: "0" }}
							onClick={() => {
								setIconFavorite((prevState) => prevState === "favorite" ? "favorite-clean" : "favorite");
							}}
						>
							<img src={`src/assets/${iconFavorite}.svg`} alt="" />
						</button>
					</div>
				</div>
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
					<span title="14/05/2024 - subtitulo teste" style={{ fontSize: "0.875rem", color: "#8D8D99" }}>14/05/2024 - subtitulo teste</span>
					<span title="Rua José Rizzo, 447" style={{ fontSize: "0.875rem", color: "#8D8D99" }}>Rua José Rizzo, 447</span>
					<span title="#FESTIVAL, #FESTA" style={{ fontSize: "0.875rem", color: "white", opacity: "0.7" }}>#FESTIVAL, #FESTA</span>
				</div>
			</div>
			<ContainerButton>
				<Button type="button" onClick={() => setModalOpen(true)}>Ver fotos</Button>
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
						maxWidth: "80%",
						overflow: "hidden",
						maxHeight: "80%",
					}}>
						<ContainerImage style={{ overflow: `${images && images.length > 0 ? "auto" : "hidden"}`}}>
							{images && images.length > 0 ? (
								<>
									{images.map((image, index) => (
										<img key={index} src={image} alt={`Imagem ${index}`} style={{ width: "100%", marginBottom: "10px", borderRadius: "8px", border: "2px solid #000" }} />
									))}
								</>
							) : (
								<Span style={{ margin: "20px", textDecoration: "underline", userSelect: "none" }} color="white" size="20px">SEM IMAGENS</Span>
							)}
						</ContainerImage>
						<div style={{ marginTop: "10px" }}>
							<Button type="button" onClick={() => setModalOpen(false)}>Fechar</Button>
						</div>
					</div>
				</div>
			)}
		</Container>
	);
};

export default ContentCard;