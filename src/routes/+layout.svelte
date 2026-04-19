<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/Header.svelte';
	import NavMenu from '$lib/components/NavMenu.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col bg-gradient-to-b from-primary-light/20 to-white">
	<Header />
	<div class="hidden md:block">
		<NavMenu />
	</div>
	<MobileNav />
	<main class="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
		{@render children()}
	</main>
	<Footer />
</div>
