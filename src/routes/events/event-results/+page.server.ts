import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import raw from '../../../../content/pages/event-results.md?raw';
import type { Photo } from '$lib/photos';

type Placement = {
	title: string;
	dog: string;
	sire?: string;
	dam?: string;
	breeders?: string;
	owners?: string;
};

type Show = { show: string; judge?: string; placements?: Placement[] };

export const load: PageServerLoad = () => {
	const { data } = matter(raw);
	return {
		title: data.title as string,
		heading: (data.heading ?? '') as string,
		resultsPdf: (data.results_pdf ?? '') as string,
		shows: (data.shows ?? []) as Show[],
		photos: (data.photos ?? []) as Photo[]
	};
};
