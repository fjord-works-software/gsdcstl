<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Rainbow Bridge — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} subtitle={data.subtitle} />

<div class="cms-content">
	{@html data.body}
</div>
