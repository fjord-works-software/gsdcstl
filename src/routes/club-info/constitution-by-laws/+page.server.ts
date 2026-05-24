import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';
import raw from '../../../../content/pages/constitution-by-laws.md?raw';

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	return {
		title: data.title as string,
		revision_note: data.revision_note as string,
		body: marked.parse(content) as string
	};
};
