import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';
import raw from '../../../../content/pages/membership.md?raw';

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	return { title: data.title as string, body: marked.parse(content) as string };
};
