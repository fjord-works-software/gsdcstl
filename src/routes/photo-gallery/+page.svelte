<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Photo Gallery — GSDCSTL</title>
</svelte:head>

<PageHeader title="Photo Gallery" />

<ul class="space-y-2 text-sm">
	<li>
		<a href="/photo-gallery/gallery-1" class="text-primary hover:underline">
			Gallery 1 — 2013 K9 Awards Ceremony
		</a>
	</li>
	<li>
		<a href="/photo-gallery/gallery-2" class="text-primary hover:underline">
			Gallery 2 — 2013 Awards Ceremony
		</a>
	</li>
	<li>
		<a href="/photo-gallery/gallery-3" class="text-primary hover:underline">
			Gallery 3 — 2011 Royal Hecht Awards Ceremony
		</a>
	</li>
</ul>
