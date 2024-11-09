/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Container, ContainerForm, Header, ImageBottomRight, ImageTopLeft } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import Span from '../../components/span';
import Grid from '../../components/grid';
import { Form, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Loading from '../../shared/loading';
import { useToast } from '../../context/ToastContext';
import { SearchGemini } from '../../shared/google/searchGemini';
// import Checkbox from '../../components/checkbox';

interface SignInProps {} 

const SignIn: React.FC<SignInProps> = () => {
	const navigate = useNavigate(); 
	const { showToast } = useToast();

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [errorSenha, setErrorSenha] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [loading, setLoading] = useState(false);

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

	const resetForm = () => {
		setEmail("");
		setSenha("");
	};

	const onSubmit = async () => {
		try {
			if(email.length === 0){
				showToast('Insira um email válido!', '#E74646');
				setErrorEmail(true);
				return;
			} else {
				setErrorEmail(false);
			}

			if(senha.length === 0){
				showToast('Insira uma senha válida!', '#E74646');
				setErrorSenha(true);
				return;
			} else {
				setErrorSenha(false);
			}

			setLoading(true);
			const user = await findUser(email, senha);
			
			if(user && user.email && user.email.length > 0 && user.senha.length > 0){
				Cookies.set('user_id', user._id);
				Cookies.set('user_nome', user.nome);
				Cookies.set('user_email', user.email);
				Cookies.set('user_senha', user.senha);
				Cookies.set('user_bio', user.bio);
				
				if(!localStorage.getItem('eventos')){
					const events = await SearchGemini();
					localStorage.setItem('eventos', JSON.stringify(events));
				}
				
				navigate("/");
				showToast(`Seja bem vindo de volta ${user.nome}`, '#00875F');
			} else {
				resetForm();
				setErrorEmail(true);
				setErrorSenha(true);	
				showToast('Usuário e/ou senha estão incorretos!', '#E74646');
			}
		} catch (error) {
			Cookies.remove('user_email');
			Cookies.remove('user_senha');
			Cookies.remove('user_id');
			Cookies.remove('user_nome');
			Cookies.remove('user_email');
			Cookies.remove('user_bio');
			console.log(error);
		} finally {
			setLoading(false);
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
				<>
					{loading ? (<Loading/>) : (
						<>
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
									<Input error={errorEmail} onChange={(e) => setEmail(e.target.value)} type="email" value={email} label="Email"/>
									<Grid style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
										<Input error={errorSenha} onChange={(e) => setSenha(e.target.value)} value={senha} type="password" label="Senha"/>
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
						</>
					)}
				</>
			</ContainerForm>
		</Container>
	);
};

export default SignIn;