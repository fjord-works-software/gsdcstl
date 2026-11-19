import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from '$lib/markdown';
import { asset, resolve } from '$app/paths';
import type { Asset } from '$app/types';
import { brags } from '$lib/brags';
import { galleries } from '$lib/galleries';
import raw from '../../content/pages/home.md?raw';

type Hero = { eyebrow?: string; heading: string; text: string };
type Centennial = { heading: string; text: string; link_label?: string; link?: string };
type Meeting = { when: string; time: string; place: string };

// CMS links are plain strings: site paths get the base path, full web addresses pass through.
const link = (href: string) => (href.startsWith('/') ? resolve(href as any) : href);

// Image paths come from CMS content, so they're plain strings, not typed Asset literals.
const img = (path: string) => asset(path as Asset);

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	const hero = data.hero as Hero;
	const centennial = data.centennial as Centennial;
	const meeting = data.meeting as Meeting;

	// The first photo of the first two galleries (in CMS order) for the "Club life" section.
	const clubPhotos = galleries
		.filter((g) => g.photos.length > 0)
		.slice(0, 2)
		.map((g) => ({
			src: img(g.photos[0].image),
			alt: g.photos[0].caption ?? g.title,
			gallery: g.title,
			slug: g.slug
		}));

	const latestBrags = brags
		.filter((b) => b.image)
		.slice(0, 3)
		.map((b) => ({ nickname: b.nickname, registeredName: b.registeredName, src: img(b.image!) }));

	return {
		title: data.title as string,
		body: marked.parse(content) as string,
		hero,
		centennial: { ...centennial, link: centennial.link ? link(centennial.link) : undefined },
		meeting: {
			...meeting,
			directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(meeting.place)}`
		},
		clubPhotos,
		latestBrags
	};
};
