<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import AwardTable from '$lib/components/AwardTable.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Hall of Fame — GSDCSTL</title>
</svelte:head>

<PageHeader title="Hall of Fame" />
<AwardTable rows={data.rows} />
