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

<div class="cms-content mb-8">
	{@html data.body}
</div>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2 mt-6">Photo Galleries</h2>
<ul class="space-y-2 text-sm">
	<li><a href={resolve('/photo-gallery/gallery-1')} class="text-primary hover:underline">Gallery 1 — 2026 Awards Ceremony</a></li>
	<li><a href={resolve('/photo-gallery/gallery-2')} class="text-primary hover:underline">Gallery 2 — 2013 K9 Awards Ceremony</a></li>
	<li><a href={resolve('/photo-gallery/gallery-3')} class="text-primary hover:underline">Gallery 3 — 2013 Awards Ceremony</a></li>
	<li><a href={resolve('/photo-gallery/gallery-4')} class="text-primary hover:underline">Gallery 4 — 2011 Royal Hecht Awards Ceremony</a></li>
</ul>
