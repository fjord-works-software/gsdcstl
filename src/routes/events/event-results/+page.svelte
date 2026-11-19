<script lang="ts">
	import { asset } from '$app/paths';
	import type { Asset } from '$app/types';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import BragEntry from '$lib/components/BragEntry.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Event Results — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} />

{#if data.heading || data.resultsPdf}
	<div class="flex items-center justify-between mb-6">
		<h2 class="text-lg font-serif font-semibold text-primary-dark">{data.heading}</h2>
		{#if data.resultsPdf}
			<a
				href={asset(data.resultsPdf as Asset)}
				class="text-sm bg-primary text-white px-3 py-1.5 rounded hover:bg-primary-dark transition-colors"
			>
				Results PDF
			</a>
		{/if}
	</div>
{/if}

<div class="space-y-6">
	{#each data.shows as s}
		<BragEntry show={s.show} judge={s.judge ?? ''} placements={s.placements ?? []} />
	{/each}
</div>

{#if data.photos.length}
	<h2 class="text-lg font-serif font-semibold text-primary-dark mt-8 mb-4">Photos</h2>
	<PhotoGallery photos={data.photos} />
{/if}
