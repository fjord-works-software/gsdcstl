import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from '$lib/markdown';
import raw from '../../../content/pages/education.md?raw';

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	return {
		title: data.title as string,
		subtitle: data.subtitle as string,
		video_url_1: data.video_url_1 as string,
		video_url_2: data.video_url_2 as string,
		body: marked.parse(content) as string
	};
};
