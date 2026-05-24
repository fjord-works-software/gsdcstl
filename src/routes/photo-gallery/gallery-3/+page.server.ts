import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';
import raw from '../../../../content/pages/gallery-3.md?raw';

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	return {
		title: data.title as string,
		subtitle: data.subtitle as string,
		body: marked.parse(content) as string
	};
};
