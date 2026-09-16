import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import { galleries, findGallery } from '$lib/galleries';

export const entries: EntryGenerator = () => galleries.map((g) => ({ slug: g.slug }));

export const load: PageServerLoad = ({ params }) => {
	const gallery = findGallery(params.slug);
	if (!gallery) error(404, `No gallery found for ${params.slug}`);
	return { gallery };
};
