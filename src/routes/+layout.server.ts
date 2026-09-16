import type { LayoutServerLoad } from './$types';
import { galleries } from '$lib/galleries';

export const load: LayoutServerLoad = () => ({
	galleries: galleries.map((g) => ({ slug: g.slug, title: g.title }))
});
