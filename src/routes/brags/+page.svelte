<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Brags — GSDCSTL</title>
</svelte:head>

<PageHeader title="Brags" subtitle="Member's Brag Bulletin Board" />

<div class="space-y-10">
	{#each data.brags as brag}
		<div>
			{#if brag.image}
				<img
					src={resolve(brag.image as any)}
					alt={brag.title}
					class="max-w-xs rounded shadow mb-3"
				/>
			{/if}
			<h3 class="font-semibold text-primary-dark mb-2">{brag.title}</h3>
			<div class="cms-content text-sm">
				{@html brag.body}
			</div>
		</div>
	{/each}
</div>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2 mt-10">More Brags</h2>
<ul class="space-y-1 text-sm">
	<li><a href={resolve('/brags/hall-of-fame')} class="text-primary hover:underline">Hall of Fame</a></li>
	<li><a href={resolve('/brags/wag-n-tongue')} class="text-primary hover:underline">Wag 'N' Tongue Newsletter</a></li>
	<li><a href={resolve('/brags/royal-hecht-awards')} class="text-primary hover:underline">Royal Hecht Awards</a></li>
</ul>
