import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from '$lib/markdown';
import raw from '../../../content/pages/breeders.md?raw';

type Breeder = { name: string; url?: string; owners?: string };

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	return {
		title: data.title as string,
		breeders: (data.breeders ?? []) as Breeder[],
		disclaimer: marked.parseInline(content.trim()) as string
	};
};
