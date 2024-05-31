/* eslint-disable @typescript-eslint/no-unused-vars */

const API_KEY: string = 'AIzaSyCqzWAXmUu1A1N4omSVmb_3j78gaPefw3M';
const CX: string = 'b4c8f210889344ac3';
	
export async function searchImages(query: string) {
	const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${CX}&searchType=image`;
	
	try {
		const response: Response = await fetch(url);
		if (!response.ok) {
			throw new Error('Error in request');
		}
	
		const data = await response.json();
	
		return data.items;
	} catch (error) {
		console.error('Error:', error);
		return null;
	}
}
	
 