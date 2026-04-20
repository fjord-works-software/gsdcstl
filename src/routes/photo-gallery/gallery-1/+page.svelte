<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';

	const images = [
		'/images/gallery-1/rothandbellsaandt.jpg',
		'/images/gallery-1/duncanandricosa.jpg',
		'/images/gallery-1/beattieandvicsa.jpg',
		'/images/gallery-1/monticelliand-onyxxsaandcs.jpg',
		'/images/gallery-1/robertsonandamorsa.jpg',
		'/images/gallery-1/wilsonandronjacs.jpg',
		'/images/gallery-1/margulandmeikytanded.jpg',
		'/images/gallery-1/beiltrota.jpg',
		'/images/gallery-1/meikytrota.jpg',
		'/images/gallery-1/onyxxtrota.jpg',
		'/images/gallery-1/renotrota.jpg',
		'/images/gallery-1/ricotrota.jpg',
		'/images/gallery-1/ronjatrota.jpg',
		'/images/gallery-1/victrota.jpg',
		'/images/gallery-1/frazierposthumousforodin.jpg',
		'/images/gallery-1/mofccarolmartina.jpg'
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
	<title>Gallery 1 — GSDCSTL</title>
</svelte:head>

<PageHeader title="2013 GSDC of St. Louis K9 Awards Ceremony" subtitle="September 15, 2013" />

<p class="text-gray-700 mb-6">
	A ceremony recognizing law enforcement K9s and their handlers with awards including Suspect
	Apprehension &amp; Tracking, Controlled Substance detection, and a posthumous service award for
	Odin.
</p>

<PhotoGallery {images} {alts} />
