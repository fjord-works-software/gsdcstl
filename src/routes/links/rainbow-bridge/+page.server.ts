import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from '$lib/markdown';
import raw from '../../../../content/pages/rainbow-bridge.md?raw';

type Memorial = { name: string; dates?: string; owner?: string };

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	return {
		title: data.title as string,
		subtitle: data.subtitle as string,
		memorials: (data.memorials ?? []) as Memorial[],
		note: marked.parseInline(content.trim()) as string
	};
};
