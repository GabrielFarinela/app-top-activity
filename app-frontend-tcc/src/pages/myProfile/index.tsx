import React, { useState } from 'react';
import { Header } from '../signIn/styles';
import Span from '../../components/span';
import { Container, ContainerButton, ContainerInput, ContainerInputs, ContainerMain } from './styles';
import Button from '../../components/button';
import Input from '../../components/input';
import InputArea from '../../components/inputArea';
import InputData from '../../components/inputData';
import InputRange from '../../components/inputRange';

const MyProfile: React.FC = () => {
	const [ value, setValue ] = useState(0);

	return (
		<>
			<Header>
				<img src="./src/assets/profile.svg" alt="user" />
				<Span 
					style={{ 
						display: "flex", 
						justifyContent: "center" 
					}} 
					color="#8D8D99" 
					size="20px"
				>
					Meu perfil
				</Span>
			</Header>
			<Container>
				<div style={{ position: "relative"}}>
					<button style={{ border: "0", backgroundColor: "transparent", position: "absolute", bottom: -5, right: -10, cursor: "pointer" }}>
						<img style={{ maxWidth: "30px", height: "auto" }} src="src/assets/foto.svg" alt="foto" />
					</button>
					<img style={{ borderRadius: "50%", maxWidth: "90px", border: "2px solid #8D8D99" }} src="https://avatars.githubusercontent.com/u/84156560?v=4" alt="" />
				</div>
				<ContainerMain>
					<ContainerInputs>
						<Span color="white" size="25px">Meus dados</Span>
						<ContainerInput>
							<Input label="Nome" type="text"/>
							<Input label="Email" type="email"/>
							<InputArea label="Bio"/>
						</ContainerInput>
					</ContainerInputs>
					{/* <HR /> */}
					<ContainerInputs>
						<Span color="white" size="25px">Opções de busca</Span>
						<ContainerInput>
							<Input label="Buscar evento" type="text"/>
							<InputData label="Data início"/>
							<InputData label="Data fim"/>
							<InputRange label="Distância" tipo="km" max={300} onChange={(e) => setValue(e)} value={value}/>
							<InputRange label="Valor" tipo="R$" max={2500} onChange={(e) => setValue(e)} value={value}/>
						</ContainerInput>
					</ContainerInputs>
				</ContainerMain>
				<ContainerButton>
					<Button type="submit">Salvar</Button>
				</ContainerButton>
			</Container>
		</>
	);
};

export default MyProfile;