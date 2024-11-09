import React, { useState } from 'react';
import { Header } from '../signIn/styles';
import Span from '../../components/span';
import { Container, ContainerButton, ContainerInput, ContainerInputs } from './styles';
import Button from '../../components/button';
import Input from '../../components/input';
import Cookies from 'js-cookie';
import { useToast } from '../../context/ToastContext';
import Loading from '../../shared/loading';
import LovCategory from '../../components/lov/category';

const MyProfile: React.FC = () => {
	const [errorNome, setErrorNome] = useState(false);
	const [errorSenha, setErrorSenha] = useState(false);

	const [id] = useState(Cookies.get('user_id') ?? "");
	const [nome,setNome] = useState(Cookies.get('user_nome') ?? "");
	const [email,setEmail] = useState(Cookies.get('user_email') ?? "");
	const [senha,setSenha] = useState(Cookies.get('user_senha') ?? "");
	const [categoria, setCagetoria] = useState(Cookies.get('user_categoria') ?? "T");
	
	const [loading,setLoading] = useState(false);

	const { showToast } = useToast();

	const updateUser = async (): Promise<Response | void> => {
		if(nome.length === 0){
			setErrorNome(true);
			showToast("Digite um nome por favor", "#E74646");
			return;
		} else {
			setErrorNome(false);
		}

		if(senha.length === 0){
			setErrorSenha(true);
			showToast("Digite uma senha por favor", "#E74646");
			return;
		} else {
			setErrorSenha(false);
		}

		try {
			const response = await fetch("http://localhost:3000/api/user", {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"id": id,
					"nome": nome,
					"email": email,
					"senha": senha,
					"categoria": categoria
				})
			});
		
			if (!response.ok) {
				const errorData = await response.json();
				showToast(`Erro ao atualizar usuário: ${errorData.message}`, "#E74646");
				throw new Error(errorData.message);
			}
		
			const data = await response.json();
			showToast("Usuário atualizado com sucesso!", "#4BB543");
		
			return data;
		} catch (error) {
			showToast("Erro ao atualizar usuário", "#E74646");
			throw error;
		}
	};

	const submit = async () => {
		setLoading(true);
		try {
			await updateUser();

			Cookies.set('user_nome', nome);
			Cookies.set('user_senha', senha);
			Cookies.set('user_categoria', categoria);
		} catch (error) {
			showToast("Erro ao atualizar seu perfil", "#E74646");
		} finally {
			setLoading(false);
		}
	};

	const getInitials = () => {
		const words = nome.split(' ');
		let initials = '';
		
		words.forEach(word => {
			if (word.length > 0) {
				if(initials.length === 2)
					return initials;
				initials += word[0];
			}
		});
		
		return initials.toUpperCase();
	};

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCagetoria(event.target.value);
		Cookies.set("", event.target.value);
	};

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
				<div style={{ position: "relative" }}>
					<div style={{ 
						borderRadius: "50%", 
						width: "90px", 
						height: "90px", 
						border: "2px solid #8D8D99", 
						display: "flex", 
						alignItems: "center", 
						justifyContent: "center", 
						backgroundColor: "#202024" 
					}}>
						<span style={{ color: "white", fontSize: "32px" }}>{getInitials()}</span>
					</div>
				</div>

				<ContainerInputs>
					<Span color="white" size="25px">Meus dados</Span>
					<ContainerInput>
						<Input error={errorNome} value={nome} onChange={(e) => setNome(e.target.value)} label="Nome" type="text"/>
						<Input disabled value={email} onChange={(e) => setEmail(e.target.value)} label="Email" type="email"/>
						<Input error={errorSenha} value={senha} onChange={(e) => setSenha(e.target.value)} label="Senha" type="password"/>
						<LovCategory 
							handleChange={handleChange}
							value={categoria}
						/>
					</ContainerInput>
				</ContainerInputs>
				<ContainerButton>
					<Button onClick={submit} type="button">Salvar</Button>
				</ContainerButton>
			</Container>
			{loading ? <Loading/> : undefined}
		</>
	);
};

export default MyProfile;