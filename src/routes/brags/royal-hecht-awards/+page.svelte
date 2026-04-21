<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import awards from '$lib/data/royal-hecht-awards.json';
	const years = awards.map((a) => a.year).sort((a, b) => b - a);
</script>

<svelte:head>
	<title>Royal Hecht Awards — GSDCSTL</title>
</svelte:head>

<PageHeader
	title="Royal Hecht Member Awards"
	subtitle="Annual member achievement awards presented by the GSDC of St. Louis."
/>

<div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 mb-10">
	{#each years as year}
		<a
			href="{base}/brags/royal-hecht-awards/{year}"
			class="block text-center py-2 px-1 rounded border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
		>
			{year}
		</a>
	{/each}
</div>

<section class="bg-gray-50 border border-gray-200 rounded p-4 text-sm text-gray-700 max-w-2xl">
	<h2 class="font-serif font-bold text-primary mb-3">Point System</h2>
	<div class="grid grid-cols-2 gap-4 mb-4">
		<div>
			<p class="font-semibold mb-1">Class of 6+ entries:</p>
			<ul class="space-y-0.5">
				<li>1st place — 5 points</li>
				<li>2nd place — 4 points</li>
				<li>3rd place — 3 points</li>
				<li>4th place — 2 points</li>
			</ul>
		</div>
		<div>
			<p class="font-semibold mb-1">Class of 2 entries:</p>
			<ul class="space-y-0.5">
				<li>1st place — 1 point</li>
				<li>2nd place — 0 points</li>
			</ul>
		</div>
	</div>
	<p class="text-gray-500 text-xs">Competition required for points to count.</p>

	<h2 class="font-serif font-bold text-primary mt-4 mb-2">Special Awards</h2>
	<ul class="space-y-1">
		<li>GSDC of St. Louis Novice Obedience Award</li>
		<li>GSDC of St. Louis Advanced Obedience Award</li>
		<li>GSDC of St. Louis Dual Achievement Award</li>
		<li>GSDC of St. Louis Junior Handler Award</li>
		<li>GSDC of St. Louis Service Dog Breeder Award</li>
	</ul>
</section>
