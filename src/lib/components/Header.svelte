<script lang="ts">
	import { resolve } from '$app/paths';
	import NavMenu from '$lib/components/NavMenu.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import type { NavItem } from '$lib/nav';

	let { items }: { items: NavItem[] } = $props();
</script>

<!-- Utility bar -->
<div class="bg-primary-deep text-[13px] text-parchment-muted">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-1">
		<span><span class="hidden sm:inline">Est. 1927 · </span>Serving the Greater St. Louis Area</span>
		<a
			href="https://www.facebook.com/German-Shepherd-Dog-Club-of-St-Louis-130909666994242/"
			target="_blank"
			rel="noopener"
			class="text-accent-light hover:underline">Facebook</a
		>
	</div>
</div>

<header class="relative z-30 border-b border-primary bg-primary-dark">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4 sm:gap-6">
		<!-- min-w-0 lets the name wrap on phones; on desktop it must keep its width beside the menu -->
		<a href={resolve('/')} class="flex min-w-0 items-center gap-3 sm:gap-3.5 xl:shrink-0">
			<img
				src={resolve('/images/gsdcstl-100-year-logo.png' as any)}
				alt="German Shepherd Dog Club of St. Louis 100 Years, 1927–2027"
				class="h-12 w-12 shrink-0 rounded-full bg-white object-contain p-0.5 sm:h-14 sm:w-14"
			/>
			<span class="flex min-w-0 flex-col">
				<span class="font-display text-base font-bold leading-tight text-white sm:text-xl">German Shepherd Dog Club</span>
				<span class="text-xs font-semibold uppercase tracking-[0.18em] text-accent">of St. Louis, Inc.</span>
			</span>
		</a>

		<div class="hidden xl:flex items-center gap-2">
			<NavMenu {items} />
			<a
				href={resolve('/club-info/club-membership')}
				class="ml-1 whitespace-nowrap rounded-full bg-accent px-5 py-3 font-semibold text-primary-dark hover:bg-accent-light transition-colors"
			>
				Join Us
			</a>
		</div>

		<MobileNav {items} />
	</div>
</header>
