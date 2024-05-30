import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
	
const apiKey = "AIzaSyCzdBrCLpc659zoMDgtl36XScp2W-7Lzcs";
const genAI = new GoogleGenerativeAI(apiKey);
	
const model = genAI.getGenerativeModel({
	model: "gemini-1.5-flash",
});
	
const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 64,
	maxOutputTokens: 8192,
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
	
export async function SearchGemini() {
	const chatSession = model.startChat({
		generationConfig,
		safetySettings,
	});
	
	const result = await chatSession.sendMessage("Gemini, preciso da sua ajuda para encontrar eventos que vão acontecer em farroupilha, rio grande do sul e região em 2024. Liste para mim 40 eventos de forma aleatória com as seguintes informações, titulo do evento, descrição do evento bem detalhada com minimo de 400 caracteres, data do evento e local do evento, link do evento, tag que indique sobre o que é o evento, termo para que eu busque por imagens sobre este evento na api do google search");
	const text = result.response.text();

	return JSON.parse(text);
}