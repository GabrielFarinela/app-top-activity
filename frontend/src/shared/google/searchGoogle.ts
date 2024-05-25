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
	
export async function searchGoogle(query: string, startIndex: number = 1): Promise<SearchResult[] | null> {
	const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${CX}&tbs=evt:1&start=${startIndex}&lr=lang_pt`;
	
	try {
		const response: Response = await fetch(url);
		if (!response.ok) {
			throw new Error('Error in request');
		}
	
		const data: SearchResponse = await response.json();
	
		data.items.forEach(result => {
			const eventMatch = result.snippet.match(/event date: (.*?), location: (.*?)/i);
			if (eventMatch) {
				result.date = eventMatch[1];
				result.location = eventMatch[2];
			}
		});
	
		return data.items;
	} catch (error) {
		console.error('Error:', error);
		return null;
	}
}
 