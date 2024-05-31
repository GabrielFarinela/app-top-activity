import React, { useState } from 'react';
import { Header } from '../signIn/styles';
import Span from '../../components/span';
import { Container, ContainerButton, ContainerInput, ContainerInputs, ContainerMain } from './styles';
import Button from '../../components/button';
import Input from '../../components/input';
import InputArea from '../../components/inputArea';
import Cookies from 'js-cookie';
import { useToast } from '../../context/ToastContext';
import Loading from '../../shared/loading';

const MyProfile: React.FC = () => {
	const [nome,setNome] = useState(Cookies.get('user_nome') ?? "");
	const [email,setEmail] = useState(Cookies.get('user_email') ?? "");
	const [senha,setSenha] = useState(Cookies.get('user_senha') ?? "");
	const [bio,setBio] = useState(Cookies.get('user_bio') ?? "");
	const [loading,setLoading] = useState(false);

	const { showToast } = useToast();

	const updateUser = async (): Promise<Response | void> => {
		try {
			const response = await fetch("http://localhost:3000/api/user", {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"nome": nome,
					"email": email,
					"senha": senha,
					"bio": bio
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
			Cookies.set('user_email', email);
			Cookies.set('user_senha', senha);
			Cookies.set('user_bio', bio);
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

				<ContainerMain>
					<ContainerInputs>
						<Span color="white" size="25px">Meus dados</Span>
						<ContainerInput>
							<Input value={nome} onChange={(e) => setNome(e.target.value)} label="Nome" type="text"/>
							<Input value={email} onChange={(e) => setEmail(e.target.value)} label="Email" type="email"/>
							<Input value={senha} onChange={(e) => setSenha(e.target.value)} label="Senha" type="password"/>
							<InputArea value={bio} onChange={(e) => setBio(e.target.value)} label="Bio"/>
						</ContainerInput>
					</ContainerInputs>
				</ContainerMain>
				<ContainerButton>
					<Button onClick={submit} type="button">Salvar</Button>
				</ContainerButton>
			</Container>
			{loading ? <Loading/> : undefined}
		</>
	);
};

export default MyProfile;