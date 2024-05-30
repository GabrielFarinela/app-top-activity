/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Description, ContainerButton, ContainerImage } from "./styles";
import Button from "../../../button";
import Span from "../../../span";
import Loading from "../../../../shared/loading";

interface ICardContent {
	dataCard: any;
}


const CardContent: React.FC<ICardContent> = ({ dataCard }) => {
	const [iconFavorite, setIconFavorite] = useState("favorite-clean");
	const [modalOpen, setModalOpen] = useState(false);

	const images = ["src/assets/img1.svg", "src/assets/img2.svg", "src/assets/img3.svg", "src/assets/img4.svg", "src/assets/img5.svg","src/assets/img1.svg", "src/assets/img2.svg", "src/assets/img3.svg", "src/assets/img4.svg", "src/assets/img5.svg"];

	return (
		<div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", alignItems: "center" }}>
			{dataCard ? (
				<>
					<div style={{ margin: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
							<span title={`${dataCard && dataCard.title ? dataCard.title : ""}`} style={{ color: "white", fontSize: "1.5rem" }}>{dataCard && dataCard.title ? dataCard.title : ""}(<span title="#..." style={{ fontSize: "0.875rem", color: "white", opacity: "0.7" }}>#...</span>)</span>
							<div style={{ display: "flex", alignItems: "center" }}>
								<a target="_blank" href={`${dataCard && dataCard.link ? dataCard.link : ""}`}>
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
							<span title={""} style={{ fontSize: "0.875rem", color: "#8D8D99" }}>{""} - {""}</span>
							<span title={""} style={{ fontSize: "0.875rem", color: "#8D8D99" }}>{""}</span>
						</div>
						<Description>
							{dataCard && dataCard.snippet ? dataCard.snippet : ""}
						</Description>
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
								width: "80%",
								maxWidth: "900px",
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
				</>
			) : <Loading />}
		</div>
	);
};

export default CardContent;
