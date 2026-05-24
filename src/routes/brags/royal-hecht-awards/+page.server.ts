import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';
import raw from '../../../../content/pages/royal-hecht-awards.md?raw';
import awardsData from '../../../lib/data/royal-hecht-awards.json';

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	const years = (awardsData as Array<{ year: number }>).map((a) => a.year).sort((a, b) => b - a);
	return {
		title: data.title as string,
		subtitle: data.subtitle as string,
		body: marked.parse(content) as string,
		years
	};
};
