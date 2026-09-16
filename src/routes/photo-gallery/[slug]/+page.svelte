<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.gallery.title} — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.gallery.title} subtitle={data.gallery.subtitle} />

<div class="cms-content mb-6">
	{@html data.gallery.body}
</div>

<PhotoGallery photos={data.gallery.photos} />
