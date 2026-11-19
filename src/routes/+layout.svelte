<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { navWithGalleries } from '$lib/nav';

	let { children, data } = $props();

	const items = $derived(navWithGalleries(data?.galleries));

	// The homepage lays out its own full-width sections; every other page sits in a card.
	const isHome = $derived(page.route.id === '/');
</script>

<div class="min-h-screen flex flex-col bg-cream">
	<Header {items} />
	{#if isHome}
		<main class="flex-1">
			{@render children()}
		</main>
	{:else}
		<main class="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 pt-4 pb-20">
			<div class="rounded-[28px] bg-white px-6 py-8 sm:px-12 sm:py-12">
				{@render children()}
			</div>
		</main>
	{/if}
	<Footer />
</div>
