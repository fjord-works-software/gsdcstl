<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.title} — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} />

<ul class="space-y-4 mb-6">
	{#each data.breeders as breeder}
		<li>
			{#if breeder.url}
				<a href={breeder.url} class="font-medium text-primary hover:underline" target="_blank" rel="noopener">
					{breeder.name}
				</a>
			{:else}
				<span class="font-medium text-primary">{breeder.name}</span>
			{/if}
			{#if breeder.owners}<p class="text-sm text-gray-600">{breeder.owners}</p>{/if}
		</li>
	{/each}
</ul>

{#if data.disclaimer}
	<p class="text-xs text-gray-500 border-t border-gray-200 pt-4 [&_strong]:font-semibold">
		{@html data.disclaimer}
	</p>
{/if}

<h2 class="text-lg font-display font-semibold text-primary-dark mb-2 mt-6">Breeder Resources</h2>
<ul class="space-y-1 text-sm">
	<li><a href={resolve('/breeders/stud-dogs')} class="text-primary hover:underline">Stud Dogs</a></li>
	<li><a href={resolve('/breeders/whelping-box')} class="text-primary hover:underline">Whelping Box</a></li>
</ul>
