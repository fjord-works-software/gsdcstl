import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { marked } from '$lib/markdown';
import raw from '../../../../content/pages/show-premium.md?raw';

type Row = { date: string; show?: string; judge?: string; event?: string };
type Secretary = { name?: string; email?: string; phone?: string };
type Button = { label: string; url: string };

export const load: PageServerLoad = () => {
	const { data, content } = matter(raw);
	return {
		title: data.title as string,
		noticeTitle: (data.notice_title ?? '') as string,
		notice: data.notice ? (marked.parseInline(data.notice as string) as string) : '',
		heading: (data.heading ?? '') as string,
		schedule: (data.schedule ?? []) as Row[],
		notes: marked.parse(content.trim()) as string,
		secretary: (data.secretary ?? null) as Secretary | null,
		buttons: (data.buttons ?? []) as Button[]
	};
};
