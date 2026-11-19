import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from '$lib/markdown';
import raw from '../../../content/pages/links.md?raw';

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	return { title: data.title as string, body: marked.parse(content) as string };
};
