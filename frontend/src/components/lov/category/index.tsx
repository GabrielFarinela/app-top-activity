import React from 'react';
import styled from 'styled-components';

export interface ILovCategory{
	handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	value: string;
}

const Select = styled.select`
  border: 1px solid #00B37E;
  background-color: #121214;
  color: #FFFFFF;
  padding: 8px;
  height: 45px;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  
  &:focus {
    border-color: #00E676;
  }
`;

const Option = styled.option`
  background-color: #121214;
  color: #FFFFFF;
`;

const LovCategory: React.FC<ILovCategory> = ({
	handleChange,
	value
}) => {
	const options = [
		"Música", "Arte e Cultura", "Tecnologia", "Esportes e Fitness", "Gastronomia", "Negócios e Networking",
		"Moda e Beleza", "Bem-estar e Saúde", "Cinema e Audiovisual", "Literatura e Livros",
		"Ciência e Pesquisa", "Voluntariado e Comunidade", "Religião e Espiritualidade",
		"Meio Ambiente e Sustentabilidade", "Artesanato e DIY", "Viagem e Aventura",
		"Stand-up e Humor", "Games e E-sports", "Animais e Pets"
	];

	return (
		<Select value={value} onChange={handleChange}>
			<option value="T">Selecione uma categoria</option>
			{options.map((option, index) => (
				<Option key={`${option}-${index}`} value={option}>
					{option}
				</Option>
			))}
		</Select>
	);
};

export default LovCategory;
