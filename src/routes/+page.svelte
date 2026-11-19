<script lang="ts">
	import { resolve } from '$app/paths';
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

<img
	src={resolve('/images/gsdcstl-100-year-logo-large.png' as any)}
	alt="German Shepherd Dog Club of St. Louis — 100 Years, 1927–2027: A Century of Companionship, Excellence & Heritage"
	class="mx-auto mb-6 w-48 sm:float-right sm:ml-8 sm:mb-4 sm:w-56"
/>

<PageHeader title={data.title} />

<div class="cms-content">
	{@html data.body}
</div>
