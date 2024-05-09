import React from 'react';

interface ICardContent {
   titulo: string;
   subtitulo: string;
   valor: string;
   endereco: string;
   data: Date;
   fotos: string[]
}

const CardContent: React.FC<ICardContent> = ({
	data,
	endereco,
	fotos,
	subtitulo,
	titulo,
	valor
   
}) => {
	return (
		<>
			<>{data}</>
			<>{endereco}</>
			<>{fotos}</>
			<>{subtitulo}</>
			<>{titulo}</>
			<>{valor}</>
		</>
	);
};

export default CardContent;