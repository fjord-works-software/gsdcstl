import matter from 'gray-matter';
import { marked } from '$lib/markdown';

export type Brag = {
	slug: string;
	title: string;
	date: string;
	image?: string;
	body: string;
	/** The quoted call name from a title like `CH Foo — "Diva"`, if there is one. */
	nickname?: string;
	/** The registered name: the title with the call name removed. */
	registeredName: string;
};

// One file per brag under content/brags/, created from the CMS.
const files = import.meta.glob<string>('/content/brags/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

function splitTitle(title: string): { nickname?: string; registeredName: string } {
	const m = title.match(/^(.*?)\s*[—–-]\s*["“']([^"”']+)["”']\s*$/);
	return m ? { registeredName: m[1], nickname: m[2] } : { registeredName: title };
}

/** All brags, newest first. */
export const brags: Brag[] = Object.entries(files)
	.map(([path, raw]) => {
		const { data, content } = matter(raw);
		const title = (data.title ?? '') as string;
		// gray-matter turns unquoted YAML dates into Date objects.
		const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? '');
		return {
			slug: path.split('/').pop()!.replace(/\.md$/, ''),
			title,
			date,
			image: data.image as string | undefined,
			body: marked.parse(content) as string,
			...splitTitle(title)
		};
	})
	.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
