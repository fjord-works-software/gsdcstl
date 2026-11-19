<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Web Award — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} />

{#if data.heading}
	<h2 class="text-base font-display font-semibold text-primary-dark mb-3">{data.heading}</h2>
{/if}
<ol class="list-decimal pl-6 space-y-1 text-gray-700">
	{#each data.placings as p}
		<li class={p.highlight ? 'font-semibold text-primary-dark' : ''}>
			{p.person ? `${p.club} — ${p.person}` : p.club}
			{#if p.note}<span class="text-green-700">({p.note})</span>{/if}
		</li>
	{/each}
</ol>
