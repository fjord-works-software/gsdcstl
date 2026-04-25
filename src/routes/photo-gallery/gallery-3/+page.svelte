<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';

	const images = [
		resolve('/images/gallery-3/03292013dannierocky.jpg' as any),
		resolve('/images/gallery-3/03292013judyrocket.jpg' as any),
		resolve('/images/gallery-3/03292013stevemayhem.jpg' as any),
		resolve('/images/gallery-3/03292013judyteko.jpg' as any),
		resolve('/images/gallery-3/03292013gaildarkknight.jpg' as any),
		resolve('/images/gallery-3/03292013larryaquila.jpg' as any),
		resolve('/images/gallery-3/03292013gailnick.jpg' as any),
		resolve('/images/gallery-3/03292013stevejourney2.jpg' as any),
		resolve('/images/gallery-3/03292013lianacaballo.jpg' as any),
		resolve('/images/gallery-3/03292013steveandbutkus.jpg' as any),
		resolve('/images/gallery-3/03292013elizabethandpeanut.jpg' as any),
		resolve('/images/gallery-3/03292013roztopper.jpg' as any),
		resolve('/images/gallery-3/03292013steveandflyer.jpg' as any),
		resolve('/images/gallery-3/03292013lianagregfletcher.jpg' as any),
		resolve('/images/gallery-3/03292013greggail.jpg' as any),
		resolve('/images/gallery-3/03292013gailr.jpg' as any),
		resolve('/images/gallery-3/03292013stevedingle.jpg' as any)
	];

	const alts = [
		'Dannie and Rocky',
		'Judy and Rocket',
		'Steve and Mayhem',
		'Judy and Teko',
		'Gail and Dark Knight',
		'Larry and Aquila',
		'Gail and Nick',
		'Steve and Journey',
		'Liana and Caballo',
		'Steve and Butkus',
		'Elizabeth and Peanut',
		'Roz and Topper',
		'Steve and Flyer',
		'Liana, Greg, and Fletcher',
		'Greg and Gail',
		'Gail',
		'Steve and Dingle'
	];
</script>

<svelte:head>
	<title>Gallery 3 — GSDCSTL</title>
</svelte:head>

<PageHeader title="2013 GSDC of St. Louis Awards Ceremony" subtitle="March 29, 2013" />

<p class="text-gray-700 mb-6">
	Awards presented for medical alert service dogs, obedience and herding titles, championship and
	grand championship titles, select and ROM awards, and service dog breeder recognition.
</p>

<PhotoGallery {images} {alts} />
