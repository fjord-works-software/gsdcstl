import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import raw from '../../../../content/pages/veterinary-links.md?raw';

type Section = { heading: string; links?: { label: string; url?: string }[] };

export const load: PageServerLoad = () => {
	const { data } = matter(raw);
	return {
		title: data.title as string,
		sections: (data.sections ?? []) as Section[]
	};
};
