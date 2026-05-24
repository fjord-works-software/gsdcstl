<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.title} — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} />

<div class="cms-content text-sm">
	{@html data.body}
</div>

<div class="mt-8 pt-4 border-t border-gray-200 text-sm space-y-1">
	<p class="font-semibold text-primary-dark text-base mb-2">More Links</p>
	<ul class="space-y-1">
		<li><a href="/links/veterinary-links" class="text-primary hover:underline">Veterinary &amp; Medical Links</a></li>
		<li><a href="/links/rainbow-bridge" class="text-primary hover:underline">Rainbow Bridge</a></li>
		<li><a href="/links/web-award" class="text-primary hover:underline">Web Award</a></li>
	</ul>
</div>
