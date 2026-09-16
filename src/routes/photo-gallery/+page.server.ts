import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';
import raw from '../../../content/pages/photo-gallery.md?raw';
import g1 from '../../../content/pages/gallery-1.md?raw';
import g2 from '../../../content/pages/gallery-2.md?raw';
import g3 from '../../../content/pages/gallery-3.md?raw';
import g4 from '../../../content/pages/gallery-4.md?raw';

// The index is derived from each gallery's own front matter so renaming a
// gallery in the CMS updates this list automatically.
const galleries = [g1, g2, g3, g4].map((src, i) => {
	const { data } = matter(src);
	return {
		href: `/photo-gallery/gallery-${i + 1}`,
		label: `Gallery ${i + 1}`,
		title: data.title as string,
		count: (data.photos ?? []).length
	};
});

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	return { title: data.title as string, body: marked.parse(content) as string, galleries };
};
