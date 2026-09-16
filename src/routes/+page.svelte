<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>German Shepherd Dog Club of St. Louis</title>
</svelte:head>

{#if data.slides.length > 0}
	<div class="-mx-6 -mt-8 mb-8 rounded-t-lg overflow-hidden">
		<Carousel slides={data.slides} />
	</div>
{/if}

<PageHeader title={data.title} />

<div class="cms-content">
	{@html data.body}
</div>
