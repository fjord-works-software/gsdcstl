<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Royal Hecht Awards — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} subtitle={data.subtitle} />

<div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 mb-10">
	{#each data.years as year}
		<a
			href={resolve('/brags/royal-hecht-awards/[year]', { year: String(year) })}
			class="block text-center py-2 px-1 rounded border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
		>
			{year}
		</a>
	{/each}
</div>

<section class="bg-gray-50 border border-gray-200 rounded p-4 text-sm text-gray-700 max-w-2xl cms-content">
	{@html data.body}
</section>
