import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import { awardYears, findYear } from '$lib/royal-hecht';

export const entries: EntryGenerator = () => awardYears.map((a) => ({ year: String(a.year) }));

export const load: PageServerLoad = ({ params }) => {
	const data = findYear(parseInt(params.year));
	if (!data) error(404, `No award data found for ${params.year}`);
	return { data };
};
