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

<section class="bg-gray-50 border border-gray-200 rounded p-4 text-sm text-gray-700 max-w-2xl">
	<h2 class="font-display font-bold text-primary mb-3">Point System</h2>
	<div class="grid grid-cols-2 gap-4 mb-4">
		{#each data.pointClasses as pointClass}
			<div>
				<p class="font-semibold mb-1">{pointClass.label}</p>
				<ul class="space-y-0.5">
					{#each pointClass.places ?? [] as place}
						<li>{place}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
	{#if data.pointsNote}<p class="text-gray-500 text-xs">{data.pointsNote}</p>{/if}

	{#if data.specialAwards.length}
		<h2 class="font-display font-bold text-primary mt-4 mb-2">Special Awards</h2>
		<ul class="space-y-1">
			{#each data.specialAwards as award}
				<li>{award}</li>
			{/each}
		</ul>
	{/if}
</section>
