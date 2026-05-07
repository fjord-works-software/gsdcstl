<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	const slides = [
		{ src: resolve('/images/slide790.jpg' as any), alt: 'German Shepherd Dog Club of St. Louis' },
		{ src: resolve('/images/slide791.jpg' as any), alt: 'German Shepherd Dog Club of St. Louis' }
	];
</script>

<svelte:head>
	<title>German Shepherd Dog Club of St. Louis</title>
</svelte:head>

<div class="-mx-6 -mt-8 mb-8 rounded-t-lg overflow-hidden">
	<Carousel {slides} />
</div>

<PageHeader title={data.title} />

<div class="cms-content">
	{@html data.body}
</div>
