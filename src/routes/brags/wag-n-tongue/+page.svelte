<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Wag 'N' Tongue — GSDCSTL</title>
</svelte:head>

<PageHeader title="Wag 'N' Tongue" subtitle="Club newsletter archive — 1986 to 2018" />

<ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
	{#each data.newsletters as n}
		<li>
			<a
				href={resolve(`/Documents/Wags/${n.file}` as any)}
				class="block p-2 rounded border border-gray-200 hover:border-primary hover:text-primary transition-colors text-gray-700"
				target="_blank"
				rel="noopener"
			>
				{n.label}
			</a>
		</li>
	{/each}
</ul>
