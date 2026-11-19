<script lang="ts">
	import { asset } from '$app/paths';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Constitution &amp; By-Laws — GSDCSTL</title>
</svelte:head>

<div class="flex items-start justify-between mb-4 gap-4">
	<h1 class="text-2xl font-display font-bold text-primary">{data.title}</h1>
	<a
		href={asset(data.pdf)}
		class="shrink-0 bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary-dark transition-colors"
	>
		Download PDF
	</a>
</div>
<p class="text-gray-500 text-sm mb-8">{data.revision_note}</p>

<div class="cms-content text-sm">
	{@html data.body}
</div>
