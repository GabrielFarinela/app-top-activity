import React from 'react';
import { Container, ContainerForm, Form, Header } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import Span from '../../components/span';
import Grid from '../../components/grid';
import Checkbox from '../../components/checkbox';

interface SignInProps {} 

const SignIn: React.FC<SignInProps> = () => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<Container>
			<Header>
				<img src="./src/assets/entrar.svg" alt="entrar" />
				<Span 
					style={{ 
						display: "flex", 
						justifyContent: "center" 
					}} 
					color="#8D8D99" 
					size="20px"
				>
					Entrar
				</Span>
			</Header>
			<ContainerForm>
				<Span 
					style={{ 
						display: "flex", 
						justifyContent: "center" 
					}} 
					color="#fff" 
					size="32px"
				>
						Entrar
				</Span>
				<Form onSubmit={handleSubmit}>
					<Grid style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "50px" }}>
						<Input type="email" label="Email"/>
						<Grid style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
							<Input type="password" label="Senha"/>
							<Checkbox labelText="Matenha-me conectado" />
						</Grid>
					</Grid>
					<Grid style={{ marginTop: "0px" }}>
						<Button type="submit">Entrar</Button>
						<Grid style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
							<Span color="#fff" size="14px">Não tem uma conta?<a href="http://" style={{ color: "#fff", marginLeft: "5px" }}>Cadastre-se clicando aqui</a></Span>
						</Grid>
					</Grid>
				</Form>
			</ContainerForm>
		</Container>
	);
};

export default SignIn;
