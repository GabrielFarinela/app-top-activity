import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonBack } from './styles';

const NotFound: React.FC = () => {
	const navigate = useNavigate();

	React.useEffect(() => {
		navigate('/notFoundPage');
	}, [navigate]);

	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '40px',
			height: '100vh',
			width: '100vw',
		}}>
			<h1 style={{ fontSize: "40px", color: "#8D8D99" }}>Página não encontrada</h1>
			<p style={{ fontSize: "40px", color: "#8D8D99" }}>A rota que você acessou não existe.</p>
			<a href="/"><ButtonBack>Voltar para casa</ButtonBack></a>
		</div>
	);
};

export default NotFound;
