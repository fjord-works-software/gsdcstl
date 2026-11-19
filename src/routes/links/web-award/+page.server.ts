import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import raw from '../../../../content/pages/web-award.md?raw';

type Placing = { club: string; person?: string; highlight?: boolean; note?: string };

export const load: PageServerLoad = () => {
	const { data } = matter(raw);
	return {
		title: data.title as string,
		heading: (data.heading ?? '') as string,
		placings: (data.placings ?? []) as Placing[]
	};
};
