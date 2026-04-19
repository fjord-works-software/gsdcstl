<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';
</script>

<svelte:head>
	<title>Gallery 1 — GSDCSTL</title>
</svelte:head>

<PageHeader
	title="2013 GSDC of St. Louis K9 Awards Ceremony"
	subtitle="September 15, 2013"
/>

<p class="text-gray-700 mb-6">
	A ceremony recognizing law enforcement K9s and their handlers with awards including Suspect
	Apprehension &amp; Tracking, Controlled Substance detection, and a posthumous service award for
	Odin.
</p>

<PhotoGallery />
