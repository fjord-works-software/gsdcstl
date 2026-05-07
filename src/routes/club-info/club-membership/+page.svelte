<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Club Membership — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} />

<div class="cms-content mb-6">
	{@html data.body}
</div>

<div class="flex gap-4 flex-wrap">
	<a
		href={resolve('/Documents/GSDApplication.pdf' as any)}
		class="inline-block bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary-dark transition-colors"
	>
		Download Application (PDF)
	</a>
	<a href={resolve('/club-info/constitution-by-laws')} class="inline-block text-primary hover:underline text-sm py-2">
		View Constitution & By-Laws →
	</a>
</div>
