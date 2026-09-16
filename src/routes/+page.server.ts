import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';
import raw from '../../content/pages/home.md?raw';

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	const slides = ((data.slides ?? []) as Array<{ image: string; alt?: string }>).map((s) => ({
		src: s.image,
		alt: s.alt ?? ''
	}));
	return { title: data.title as string, body: marked.parse(content) as string, slides };
};
