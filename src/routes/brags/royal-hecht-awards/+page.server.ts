import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';
import raw from '../../../../content/pages/royal-hecht-awards.md?raw';
import { awardYears } from '$lib/royal-hecht';

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	return {
		title: data.title as string,
		subtitle: data.subtitle as string,
		body: marked.parse(content) as string,
		years: awardYears.map((a) => a.year)
	};
};
