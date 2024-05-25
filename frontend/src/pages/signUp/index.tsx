import React, { useState } from 'react';
import { Container, ContainerForm, Header, ImageBottomRight, ImageTopLeft } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import Span from '../../components/span';
import Grid from '../../components/grid';
import { Form, useNavigate } from 'react-router-dom';
import Loading from '../../shared/loading';
import { useToast } from '../../context/ToastContext';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
	const navigate = useNavigate(); 
	const { showToast }  = useToast();

	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [senhaConfirmacao, setSenhaConfirmacao] = useState("");
	const [errorNome, setErrorNome] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorSenha, setErrorSenha] = useState(false);
	const [loading, setLoading] = useState(false);

	const insertUser = async (): Promise<Response | void> => {
		try {
			const response = await fetch("http://localhost:3000/api/user", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"nome": nome,
					"email": email,
					"senha": senha
				})
			});
	
			if (response.status >= 200 && response.status < 300) {
				console.log('Item inserted successfully!');
				return response;
			} else {
				console.error('Error inserting item:', response.status);
				return response;
			}
		} catch (error) {
			showToast("Erro ao adicionar usuário", "#E74646");
			resetForm();
			console.error('Fetch error:', error);
			
			throw error;
		} 
	};

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
		setNome("");
		setEmail("");
		setSenha("");
		setSenhaConfirmacao("");
	};

	const onSubmit = async () => {
		try {
			setLoading(true);

			if(!(nome.length > 0)){
				showToast('Insira um nome válido!', '#E74646');
				setErrorNome(true);
				return;
			} else
				setErrorNome(false);

			if(!(email.length > 0)){
				showToast('Insira um email válido!', '#E74646');
				setErrorEmail(true);
				return;
			} else 
				setErrorEmail(false);
					
			if(senha !== senhaConfirmacao || senha.length === 0 || senhaConfirmacao.length === 0){
				setErrorSenha(true);
				showToast('Senhas não conferem!', '#E74646');
				return;
			} else
				setErrorSenha(false);

			const user = await findUser(email, senha);

			if(user){
				showToast('Ja existe um usuário com este email!', '#FFBF00');
				resetForm();
				return;
			}
			
			const response = await insertUser();

			if(response && response.status >= 200 && response.status < 300){
				showToast('Usuário criado com sucesso!', '#00875F');
				navigate("/signIn");
			}
			else{
				setErrorNome(true);
				setErrorEmail(true);
				setErrorSenha(true);
				resetForm();
			}

		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
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
					</>
				)
				}
			</ContainerForm>
		</Container>
	);
};

export default SignUp;
