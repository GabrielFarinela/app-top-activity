import React, { useState } from 'react';
import { Container, ContainerForm, Header, ImageBottomRight, ImageTopLeft } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import Span from '../../components/span';
import Grid from '../../components/grid';
import { Form, useNavigate } from 'react-router-dom';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
	const navigate = useNavigate(); 

	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [senhaConfirmacao, setSenhaConfirmacao] = useState("");
	const [errorNome, setErrorNome] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorSenha, setErrorSenha] = useState(false);

	const inserUser = async () => {
		fetch("http://localhost:3000/api/user", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"nome": nome,
				"email": email,
				"senha": senha
			})
		})
			.then(response => {
				if (response.status >= 200 && response.status < 300) {
					console.log('Item inserted successfully!');
				} else {
					console.error('Error inserting item:', response.status);
				}
			})
			.catch(error => {
				console.error('Fetch error:', error);
			});
	};

	const onSubmit = async () => {
		try {
			if(!(nome.length > 0)){
				setErrorNome(true);
				return;
			} else
				setErrorNome(false);

			if(!(email.length > 0)){
				setErrorEmail(true);
				return;
			} else 
				setErrorEmail(false);
					
			if(senha !== senhaConfirmacao || senha.length === 0 || senhaConfirmacao.length === 0){
				setErrorSenha(true);
				return;
			} else
				setErrorSenha(false);

			await inserUser();

			navigate("/signIn");
		} catch (error) {
			console.log(error);
		}
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
			<ImageTopLeft>
				<img src="/src/assets/verde-top-right.svg" alt="" />
			</ImageTopLeft>
			<ImageBottomRight>
				<img src="/src/assets/verde-bottom-left.svg" alt="" />
			</ImageBottomRight>
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
				<Form style={{ display: "flex", flexDirection: "column", gap: "50px" }} onSubmit={onSubmit}>
					<Grid style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
						<Input error={errorNome} onChange={(e) => setNome(e.target.value)} type="text" label="Nome completo"/>
						<Input error={errorEmail} onChange={(e) => setEmail(e.target.value)} type="email" label="Email"/>
						<Input error={errorSenha} onChange={(e) => setSenha(e.target.value)} type="password" label="Senha"/>
						<Input error={errorSenha} onChange={(e) => setSenhaConfirmacao(e.target.value)} type="password" label="Confirme sua senha"/>
					</Grid>
					<Grid style={{ marginTop: "0px" }}>
						<Button type="submit">Cadastrar</Button>
						<Grid style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
							<Span color="#fff" size="14px">Já possui uma conta?<span onClick={() => navigate("/signIn")} style={{ textDecoration: "underline", cursor: "pointer", color: "#fff", marginLeft: "5px" }}>Entre clicando aqui</span></Span>
						</Grid>
					</Grid>
				</Form>
			</ContainerForm>
		</Container>
	);
};

export default SignUp;
