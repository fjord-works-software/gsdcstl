<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Events — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} />

<div class="cms-content mb-6">
	{@html data.body}
</div>

{#if data.event_flyer}
	<img
		src={resolve(data.event_flyer as any)}
		alt="Event Flyer"
		class="max-w-full rounded shadow"
	/>
{/if}
