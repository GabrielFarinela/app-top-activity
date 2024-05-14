import React, { useEffect, useState } from "react";
import { Description } from "./styles";

interface ICardContent {
   titulo: string;
   subtitulo: string;
   valor: string;
   endereco: string;
   data: Date;
}

const CardContent: React.FC<ICardContent> = () => {
	const images = ["src/assets/img1.svg", "src/assets/img2.svg", "src/assets/img3.svg", "src/assets/img4.svg", "src/assets/img5.svg"];

	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	});
	const [text] = useState("Fundada em 2018 pelo professor e cantor Jean Macedo, um apaixonado pela música com mais de 25 anos de experiência no ensino musical, a Fermata tem como objetivo proporcionar uma educação musical de excelência, em que cada estudante pode desenvolver suas habilidades e amor pela música.");

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		};
	
		window.addEventListener('resize', handleResize);
	
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const [ iconFavorite, setIconFavorite ] = useState("favorite-clean");
	const [ activeImageIndex, setActiveImageIndex ] = useState(0);
	
	const handleImageChange = (direction: string) => {
		const imagesLength = images.length;
		let newActiveImageIndex = activeImageIndex;
			
		if (direction === "next") {
			if (activeImageIndex + 4 > imagesLength) {
				newActiveImageIndex = 0;
			} else {
				newActiveImageIndex += 1;
			}
		}
			
		else if (direction === "prev") {
			if (activeImageIndex === 0) {
				newActiveImageIndex = imagesLength - 3;
			} else {
				newActiveImageIndex -= 1;
			}
		}
			
		setActiveImageIndex(newActiveImageIndex);
	};

	const quantasMostrar = (act: number) => {
		if(windowSize.width > 1200)
			return act + 3;
		else if(windowSize.width <= 600)
			return act + 1;
		else if(windowSize.width <= 1200)
			return act + 2;
	};

	return (
		<div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
			<div style={{ margin: "20px 20px 0px 20px", display: "flex", flexDirection: "column", gap: "15px" }}>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<span style={{ color: "white", fontSize: "1.5rem" }}>Festa da uva - R$ 299,90</span>
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
				<div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
					<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
						<span style={{ fontSize: "0.875rem", color: "#8D8D99" }}>24/03/2024 - 15h</span>
						<span style={{ fontSize: "0.875rem", color: "#8D8D99" }}>R. Ludovíco Cavinato, 1431 - Nossa Sra. da Saúde, Caxias do Sul - RS, 95032-620</span>
					</div>
					<Description>
						{text}
					</Description>
				</div>
			</div>
			<div style={{ marginBottom: "20px", width: "100%" }}>
				<div style={{ display: `${windowSize.width <= 350 ? "none" : "flex"}`, justifyContent: "center", alignItems: "center" }}>
					<button onClick={() => handleImageChange("prev")} style={{ cursor: "pointer", border: "0", backgroundColor: "transparent", marginRight: "10px" }}>
						<img src="src/assets/buttonLeft.svg" alt="" />
					</button>
					<div style={{ display: "flex", gap: "20px" }}>
						{images.slice(activeImageIndex, quantasMostrar(activeImageIndex)).map((x, index) => (
							<div key={`${x}-${index}`}>
								<img style={{ borderRadius: "8px" }} src={x} alt="" />
							</div>
						))}
					</div>
					<button onClick={() => handleImageChange("next")} style={{ cursor: "pointer", border: "0", backgroundColor: "transparent", marginLeft: "10px" }}>
						<img src="src/assets/buttonRight.svg" alt="" />
					</button>
				</div>
				{windowSize.width >= 193 && (
					<div style={{ display: `${windowSize.width <= 350 ? "flex" : "none"}`, color: "#8D8D99", fontStyle: "italic", fontSize: "0.75rem", textAlign: "center", margin: "30px" }}>Aumente o tamanho da tela para ver as imagens</div>
				)}
			</div>
		</div>
	);
};

export default CardContent;