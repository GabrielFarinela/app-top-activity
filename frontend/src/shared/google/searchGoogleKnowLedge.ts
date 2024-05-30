	/* eslint-disable @typescript-eslint/no-unused-vars */
	interface Evento {
		titulo: string;
		descricao: string;
		tags: string[];
		endereco: string;
		dataInicio: Date;
		dataFim: Date;
	}
	
export async function buscarEventos(termoBusca: string, localizacao: string): Promise<Evento[]> {
	const eventos = await buscarEventosGoogle(termoBusca, localizacao);
	
	const eventosCombinados = [...eventos];
	const eventosUnicos = eventosCombinados.filter((evento, index) => {
		return eventosCombinados.findIndex(outro => outro.titulo === evento.titulo && outro.dataInicio === evento.dataInicio) === index;
	});
	
	return eventosUnicos;
}
	
async function buscarEventosGoogle(termoBusca: string, localizacao: string): Promise<Evento[]> {
	const urlAPI = 'https://www.googleapis.com/customsearch/v1?';
	
	const parametros = {
		key: 'AIzaSyCqzWAXmUu1A1N4omSVmb_3j78gaPefw3M', 
		cx: '90529f26c461f4cca', 
		q: termoBusca + ' near:' + localizacao, 
		tbm: 'evt', 
	};
	
	
	const params = new URLSearchParams(parametros);
	const urlCompleta = urlAPI + params.toString();
	
	
	const resposta = await fetch(urlCompleta);
	
	
	const dados = await resposta.json();
	
	
	const eventos: Evento[] = [];
	for (const item of dados.items) {
		const evento: Evento = {
			titulo: item.title,
			descricao: item.snippet,
			tags: [], 
			endereco: extrairEndereco(item.link), 
			dataInicio: extrairDataInicio(item.snippet), 
			dataFim: extrairDataFim(item.snippet), 
		};
	
		
		eventos.push(evento);
	}
	
	
	return eventos;
}	

function extrairEndereco(link: string): string {
	
	return '';
}
	
function extrairDataInicio(snippet: string): Date {
	
	return new Date();
}
	
function extrairDataFim(snippet: string): Date {
	
	return new Date();
}
	