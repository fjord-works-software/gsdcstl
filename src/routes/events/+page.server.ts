import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from '$lib/markdown';
import raw from '../../../content/pages/events.md?raw';

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	return {
		title: data.title as string,
		event_flyer: (data.event_flyer ?? null) as string | null,
		body: marked.parse(content) as string
	};
};
