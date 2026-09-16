export type Award = { category: string; detail: string };
export type Member = { name: string; awards: Award[] };
export type AwardYear = {
	year: number;
	date: string | null;
	chairperson: string | null;
	members: Member[];
};

// One file per year under content/royal-hecht/, editable in the CMS.
const files = import.meta.glob<AwardYear>('/content/royal-hecht/*.json', { eager: true, import: 'default' });

export const awardYears: AwardYear[] = Object.values(files).sort((a, b) => b.year - a.year);

export const findYear = (year: number): AwardYear | undefined =>
	awardYears.find((a) => a.year === year);
