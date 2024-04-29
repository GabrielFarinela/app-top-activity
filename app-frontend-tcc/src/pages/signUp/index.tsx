import React from 'react';
import { Container, ContainerForm, Form, Header } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import Span from '../../components/span';
import Grid from '../../components/grid';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<Container>
			<Header>
				<img src="./src/assets/cadastrar.svg" alt="cadastrar" />
				<Span 
					style={{ 
						display: "flex", 
						justifyContent: "center" 
					}} 
					color="#8D8D99" 
					size="20px"
				>
					Cadastro
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
						Cadastrar
				</Span>
				<Form onSubmit={handleSubmit}>
					<Grid style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
						<Input type="text" label="Nome completo"/>
						<Input type="email" label="Email"/>
						<Input type="password" label="Senha"/>
						<Input type="password" label="Confirme sua senha"/>
					</Grid>
					<Grid style={{ marginTop: "0px" }}>
						<Button type="submit">Cadastrar</Button>
						<Grid style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
							<Span color="#fff" size="14px">Já possui uma conta?<a href="http://" style={{ color: "#fff", marginLeft: "5px" }}>Entre clicando aqui</a></Span>
						</Grid>
					</Grid>
				</Form>
			</ContainerForm>
		</Container>
	);
};

export default SignUp;
