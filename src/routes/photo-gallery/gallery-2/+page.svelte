<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';

	const images = [
		resolve('/images/gallery-2/rothandbellsaandt.jpg' as any),
		resolve('/images/gallery-2/duncanandricosa.jpg' as any),
		resolve('/images/gallery-2/beattieandvicsa.jpg' as any),
		resolve('/images/gallery-2/monticelliand-onyxxsaandcs.jpg' as any),
		resolve('/images/gallery-2/robertsonandamorsa.jpg' as any),
		resolve('/images/gallery-2/wilsonandronjacs.jpg' as any),
		resolve('/images/gallery-2/margulandmeikytanded.jpg' as any),
		resolve('/images/gallery-2/beiltrota.jpg' as any),
		resolve('/images/gallery-2/meikytrota.jpg' as any),
		resolve('/images/gallery-2/onyxxtrota.jpg' as any),
		resolve('/images/gallery-2/renotrota.jpg' as any),
		resolve('/images/gallery-2/ricotrota.jpg' as any),
		resolve('/images/gallery-2/ronjatrota.jpg' as any),
		resolve('/images/gallery-2/victrota.jpg' as any),
		resolve('/images/gallery-2/frazierposthumousforodin.jpg' as any),
		resolve('/images/gallery-2/mofccarolmartina.jpg' as any)
	];

	const alts = [
		'Roth and Bell — Suspect Apprehension & Tracking',
		'Duncan and Rico — Suspect Apprehension',
		'Beattie and Vic — Suspect Apprehension',
		'Monticelli and Onyxx — Suspect Apprehension & Controlled Substance',
		'Robertson and Amor — Suspect Apprehension',
		'Wilson and Ronja — Controlled Substance',
		'Margul and Meiky — Tracking & Excellence in Detection',
		'Beil — Trot Award',
		'Meiky — Trot Award',
		'Onyxx — Trot Award',
		'Reno — Trot Award',
		'Rico — Trot Award',
		'Ronja — Trot Award',
		'Vic — Trot Award',
		'Frazier — Posthumous Award for Odin',
		'Member of Ceremony — Carol Martin'
	];
</script>

<svelte:head>
	<title>Gallery 2 — GSDCSTL</title>
</svelte:head>

<PageHeader title="2013 GSDC of St. Louis K9 Awards Ceremony" subtitle="September 15, 2013" />

<p class="text-gray-700 mb-6">
	A ceremony recognizing law enforcement K9s and their handlers with awards including Suspect
	Apprehension &amp; Tracking, Controlled Substance detection, and a posthumous service award for
	Odin.
</p>

<PhotoGallery {images} {alts} />
