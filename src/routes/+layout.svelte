<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/Header.svelte';
	import NavMenu from '$lib/components/NavMenu.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { navWithGalleries } from '$lib/nav';

	let { children, data } = $props();

	const items = $derived(navWithGalleries(data.galleries));
</script>

<div class="min-h-screen flex flex-col bg-gradient-to-b from-primary-dark/10 to-stone-50">
	<Header />
	<div class="hidden md:block">
		<NavMenu {items} />
	</div>
	<MobileNav {items} />
	<main class="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
		<div class="bg-white shadow-md rounded-lg px-6 py-8">
			{@render children()}
		</div>
	</main>
	<Footer />
</div>
