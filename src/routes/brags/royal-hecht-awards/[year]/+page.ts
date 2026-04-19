import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import awards from '$lib/data/royal-hecht-awards.json';

export const entries: EntryGenerator = () => awards.map((a) => ({ year: String(a.year) }));

export const load: PageLoad = ({ params }) => {
	const year = parseInt(params.year);
	const data = awards.find((a) => a.year === year);
	if (!data) error(404, `No award data found for ${year}`);
	return { data };
};
