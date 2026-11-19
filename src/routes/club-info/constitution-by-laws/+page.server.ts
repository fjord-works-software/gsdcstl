import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from '$lib/markdown';
import raw from '../../../../content/pages/constitution-by-laws.md?raw';

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	return {
		title: data.title as string,
		revision_note: data.revision_note as string,
		pdf: (data.pdf as string | undefined) ?? '/club-info/GSDCSTL-Bylaws-9.16.2025.pdf',
		body: marked.parse(content) as string
	};
};
