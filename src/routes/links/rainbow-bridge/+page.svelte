<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Rainbow Bridge — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} subtitle={data.subtitle} />

<div class="space-y-6 text-sm text-gray-700">
	{#each data.memorials as entry}
		<div class="border-l-4 border-primary-light pl-4 py-1">
			<p class="font-semibold text-gray-800">{entry.name}</p>
			{#if entry.dates}<p class="text-gray-500">{entry.dates}</p>{/if}
			{#if entry.owner}<p class="text-gray-500">Owner: {entry.owner}</p>{/if}
		</div>
	{/each}
</div>

{#if data.note}
	<p class="mt-8 text-gray-400 text-xs italic [&_a]:underline">
		{@html data.note}
	</p>
{/if}
