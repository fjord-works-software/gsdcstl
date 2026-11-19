import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import raw from '../../../../content/pages/royal-hecht-awards.md?raw';
import { awardYears } from '$lib/royal-hecht';

type PointClass = { label: string; places?: string[] };

export const load: PageServerLoad = () => {
	const { data } = matter(raw);
	return {
		title: data.title as string,
		subtitle: data.subtitle as string,
		pointClasses: (data.point_classes ?? []) as PointClass[],
		pointsNote: (data.points_note ?? '') as string,
		specialAwards: (data.special_awards ?? []) as string[],
		years: awardYears.map((a) => a.year)
	};
};
