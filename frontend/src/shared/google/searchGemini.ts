import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
	
const apiKey = "AIzaSyCzdBrCLpc659zoMDgtl36XScp2W-7Lzcs";
const genAI = new GoogleGenerativeAI(apiKey);
	
const model = genAI.getGenerativeModel({
	model: "gemini-1.5-flash",
});
	
const generationConfig = {
	temperature: 0,
	topP: 0.95,
	topK: 64,
	maxOutputTokens: 15000,
	responseMimeType: "application/json",
};
	
const safetySettings = [
	{
		category: HarmCategory.HARM_CATEGORY_HARASSMENT,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
	},
	{
		category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
	},
	{
		category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
	},
	{
		category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
		threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
	},
];

const insertEvents = async (events: Array<{ titulo: string, tag: string, data: string, local: string, descricao: string, termo: string }>): Promise<Response | void> => {
	try {
		const response = await fetch("http://localhost:3000/api/event", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(events)
		});
	
		if (response.status >= 200 && response.status < 300) {
			console.log('Events inserted successfully!');
			return response;
		} else {
			console.error('Error inserting events:', response.status);
			return response;
		}
	} catch (error) {
		console.error('Fetch error:', error);
		throw error;
	}
};
	
export async function SearchGemini() {
	const chatSession = model.startChat({
		generationConfig,
		safetySettings,
	});
	
	const result = await chatSession.sendMessage(`Gemini, preciso da sua ajuda para encontrar eventos gastronômicos que vão acontecer no Rio Grande do Sul em 2024.
														   		Por favor, liste 30 eventos com as seguintes informações:
														   		- Título do evento em uma propriedade titulo
														   		- Descrição do evento bem detalhada com no mínimo 400 caracteres em uma propriedade descricao
														   		- Mes em que normalmente occorre em uma propriedade data
														   		- Local do evento em uma propriedade local
														   		- Tag que indique sobre o que é o evento em uma propriedade tag
														   		- Uma palavra-chave para pesquisar através do Google Imagens sobre o evento em uma propriedade termo`);
	const text = result.response.text();

	const itens = JSON.parse(text);

	await insertEvents(itens);
	
	return itens;
}