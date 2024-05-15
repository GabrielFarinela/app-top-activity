import React, { useState } from "react";
import { Description, ContainerButton, ContainerImage } from "./styles";
import Button from "../../../button";
import Span from "../../../span";

interface ICardContent {
   titulo: string;
   subtitulo: string;
   valor: string;
   endereco: string;
   data: Date;
}

const CardContent: React.FC<ICardContent> = ({ titulo, subtitulo, valor, endereco, data }) => {
	const [text] = useState("Fundada em 2018 pelo professor e cantor Jean Macedo, um apaixonado pela música com mais de 25 anos de experiência no ensino musical, a Fermata tem como objetivo proporcionar uma educação musical de excelência, em que cada estudante pode desenvolver suas habilidades e amor pela música. Fundada em 2018 pelo professor e cantor Jean Macedo, um apaixonado pela música com mais de 25 anos de experiência no ensino musical, a Fermata tem como objetivo proporcionar uma educação musical de excelência, em que cada estudante pode desenvolver suas habilidades e amor pela música. Fundada em 2018 pelo professor e cantor Jean Macedo, um apaixonado pela música com mais de 25 anos de experiência no ensino musical, a Fermata tem como objetivo proporcionar uma educação musical de excelência, em que cada estudante pode desenvolver suas habilidades e amor pela música. Fundada em 2018 pelo professor e cantor Jean Macedo, um apaixonado pela música com mais de 25 anos de experiência no ensino musical, a Fermata tem como objetivo proporcionar uma educação musical de excelência, em que cada estudante pode desenvolver suas habilidades e amor pela música.");

	const [iconFavorite, setIconFavorite] = useState("favorite-clean");
	const [modalOpen, setModalOpen] = useState(false);

	const images = ["src/assets/img1.svg", "src/assets/img2.svg", "src/assets/img3.svg", "src/assets/img4.svg", "src/assets/img5.svg","src/assets/img1.svg", "src/assets/img2.svg", "src/assets/img3.svg", "src/assets/img4.svg", "src/assets/img5.svg"];
	// const images: [] = [];

	return (
		<div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", alignItems: "center" }}>
			<div style={{ margin: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
				<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
					<span title={`${titulo} - R$ ${valor}`} style={{ color: "white", fontSize: "1.5rem" }}>{titulo} - R$ {valor}</span>
					<div style={{ display: "flex", alignItems: "center" }}>
						<a href="">
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
					<span title={subtitulo} style={{ fontSize: "0.875rem", color: "#8D8D99" }}>{data.toLocaleDateString()} - {subtitulo}</span>
					<span title={endereco} style={{ fontSize: "0.875rem", color: "#8D8D99" }}>{endereco}</span>
					<span title="#FESTIVAL, #FESTA" style={{ fontSize: "0.875rem", color: "white", opacity: "0.7" }}>#FESTIVAL, #FESTA</span>
				</div>
				<Description>
					{text}
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
		</div>
	);
};

export default CardContent;
