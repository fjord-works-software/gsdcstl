import matter from 'gray-matter';
import { marked } from '$lib/markdown';
import type { Photo } from '$lib/photos';

export type Gallery = {
	slug: string;
	title: string;
	subtitle: string;
	order: number;
	body: string;
	photos: Photo[];
};

// One file per gallery under content/galleries/, editable in the CMS. Adding a
// file here adds a gallery — no route or component changes needed.
const files = import.meta.glob<string>('/content/galleries/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

export const galleries: Gallery[] = Object.entries(files)
	.map(([path, raw]) => {
		const { data, content } = matter(raw);
		return {
			slug: path.split('/').pop()!.replace(/\.md$/, ''),
			title: (data.title ?? '') as string,
			subtitle: (data.subtitle ?? '') as string,
			order: (data.order ?? Number.MAX_SAFE_INTEGER) as number,
			body: marked.parse(content) as string,
			photos: (data.photos ?? []) as Photo[]
		};
	})
	.sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));

export const findGallery = (slug: string): Gallery | undefined =>
	galleries.find((g) => g.slug === slug);
