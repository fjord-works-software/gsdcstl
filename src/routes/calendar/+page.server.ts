import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import raw from '../../../content/pages/calendar-main.md?raw';

export const load: PageServerLoad = () => {
	const { data } = matter(raw);
	return {
		title: data.title as string,
		google_calendar_url: data.google_calendar_url as string
	};
};
