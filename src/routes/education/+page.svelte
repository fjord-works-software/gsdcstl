<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.title} — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} subtitle={data.subtitle} />

<div class="cms-content mb-8">
	{@html data.body}
</div>

<div class="space-y-4">
	<h2 class="text-lg font-display font-semibold text-primary-dark">Educational Videos</h2>
	<div class="aspect-video max-w-2xl">
		<iframe
			src={data.video_url_1}
			title="GSD Breed Education Part 1"
			class="w-full h-full rounded"
			allowfullscreen
		></iframe>
	</div>
	<div class="aspect-video max-w-2xl">
		<iframe
			src={data.video_url_2}
			title="GSD Breed Education Part 2"
			class="w-full h-full rounded"
			allowfullscreen
		></iframe>
	</div>
</div>
