import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';

const files = import.meta.glob('../../../content/brags/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

export const load: PageServerLoad = () => {
	const brags = Object.values(files).map((raw) => {
		const { data, content } = matter(raw as string);
		return { ...(data as { title: string; date: string; image?: string }), body: marked.parse(content) as string };
	});
	brags.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return { brags };
};
