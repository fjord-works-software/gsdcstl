<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/Header.svelte';
	import NavMenu from '$lib/components/NavMenu.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col bg-gradient-to-b from-primary-light/50 to-white">
	<Header />
	<div class="hidden md:block">
		<NavMenu />
	</div>
	<MobileNav />
	<main class="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
		<div class="bg-white shadow-sm rounded-lg px-6 py-8">
			{@render children()}
		</div>
	</main>
	<Footer />
</div>
