<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.title} — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} />

<iframe
	src={data.google_calendar_url}
	title="GSDCSTL Club Calendar"
	class="w-full rounded border border-gray-300"
	style="height: 600px;"
	frameborder="0"
	scrolling="no"
></iframe>
