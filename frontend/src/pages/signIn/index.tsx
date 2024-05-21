import React, { useState } from 'react';
import { Container, ContainerForm, Header, ImageBottomRight, ImageTopLeft } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import Span from '../../components/span';
import Grid from '../../components/grid';
import { Form, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
// import Checkbox from '../../components/checkbox';

interface SignInProps {} 

const SignIn: React.FC<SignInProps> = () => {
	const navigate = useNavigate(); 

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [error, setError] = useState(false);

	const findUser = async (email: string, senha: string) => {
		try {
			const url = `http://localhost:3000/api/user?email=${email}&senha=${senha}`;
			const response = await fetch(url);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	const onSubmit = async () => {
		try {
			const user = await findUser(email, senha);
			
			if(user && user.email && user.email.length > 0 && user.senha.length > 0){
				Cookies.set('user_email', user.email);
				Cookies.set('user_senha', user.senha);
				navigate("/");
			} else {
				setError(true);	
				navigate("/signIn");
			}
		} catch (error) {
			console.log(error);
		}
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
			<ImageTopLeft>
				<img src="/src/assets/verde-top-left.svg" alt="" />
			</ImageTopLeft>
			<ImageBottomRight>
				<img src="/src/assets/verde-bottom-right.svg" alt="" />
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
						Entrar
				</Span>
				<Form style={{ display: "flex", flexDirection: "column", gap: "50px" }} onSubmit={onSubmit}>
					<Grid style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "50px" }}>
						<Input error={error} onChange={(e) => setEmail(e.target.value)} type="email" value={email} label="Email"/>
						<Grid style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
							<Input error={error} onChange={(e) => setSenha(e.target.value)} value={senha} type="password" label="Senha"/>
							{/* <Checkbox labelText="Matenha-me conectado" /> */}
						</Grid>
					</Grid>
					<Grid style={{ marginTop: "0px" }}>
						<Button type="submit">Entrar</Button>
						<Grid style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
							<Span color="#fff" size="14px">Não tem uma conta?<span onClick={() => navigate("/signUp")} style={{ textDecoration: "underline", cursor: "pointer", color: "#fff", marginLeft: "5px" }}>Cadastre-se clicando aqui</span></Span>
						</Grid>
					</Grid>
				</Form>
			</ContainerForm>
		</Container>
	);
};

export default SignIn;
