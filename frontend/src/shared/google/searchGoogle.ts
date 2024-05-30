/* eslint-disable @typescript-eslint/no-unused-vars */
export type SearchResult = {
	title: string;
	link: string;
	snippet: string;
	date?: string;
	location?: string;
 };
 
export type SearchResponse = {
		items: SearchResult[];
	};
	
const API_KEY: string = 'AIzaSyCqzWAXmUu1A1N4omSVmb_3j78gaPefw3M';
const CX: string = '90529f26c461f4cca';
	
export async function searchGoogle(query: string, location?: string, startIndex: number = 1): Promise<SearchResult[] | null> {
	let url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${CX}&tbs=evt:1`;
 
	// Add location parameter if provided
	if (location) {
		url += `&lr=${encodeURIComponent(location)}`;
	}
	
	try {
		const response: Response = await fetch(url);
		if (!response.ok) {
			throw new Error('Error in request');
		}
	
		const data: SearchResponse = await response.json();
	
		// No need to modify snippets, look for relevant keywords within results
		return data.items;
	} catch (error) {
		console.error('Error:', error);
		return null;
	}
}
	
 