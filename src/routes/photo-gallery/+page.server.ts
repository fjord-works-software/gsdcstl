import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';
import raw from '../../../content/pages/photo-gallery.md?raw';
import { galleries } from '$lib/galleries';

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	return {
		title: data.title as string,
		body: marked.parse(content) as string,
		galleries: galleries.map((g) => ({
			slug: g.slug,
			title: g.title,
			subtitle: g.subtitle,
			count: g.photos.length
		}))
	};
};
