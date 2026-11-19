import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';
import { asset } from '$app/paths';
import type { Asset } from '$app/types';
import raw from '../../content/pages/home.md?raw';

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	const slides = ((data.slides ?? []) as Array<{ image: string; alt?: string }>).map((s) => ({
		// Slide image paths come from CMS content, so they're plain strings, not typed Asset literals.
		src: asset(s.image as Asset),
		alt: s.alt ?? ''
	}));
	return { title: data.title as string, body: marked.parse(content) as string, slides };
};
