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

<div class="cms-content mb-6">
	{@html data.body}
</div>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2 mt-6">Breeder Resources</h2>
<ul class="space-y-1 text-sm">
	<li><a href={resolve('/breeders/stud-dogs')} class="text-primary hover:underline">Stud Dogs</a></li>
	<li><a href={resolve('/breeders/whelping-box')} class="text-primary hover:underline">Whelping Box</a></li>
</ul>
