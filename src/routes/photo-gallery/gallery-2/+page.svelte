<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';

	const images = [
		'/images/gallery-2/03292013dannierocky.jpg',
		'/images/gallery-2/03292013judyrocket.jpg',
		'/images/gallery-2/03292013stevemayhem.jpg',
		'/images/gallery-2/03292013judyteko.jpg',
		'/images/gallery-2/03292013gaildarkknight.jpg',
		'/images/gallery-2/03292013larryaquila.jpg',
		'/images/gallery-2/03292013gailnick.jpg',
		'/images/gallery-2/03292013stevejourney2.jpg',
		'/images/gallery-2/03292013lianacaballo.jpg',
		'/images/gallery-2/03292013steveandbutkus.jpg',
		'/images/gallery-2/03292013elizabethandpeanut.jpg',
		'/images/gallery-2/03292013roztopper.jpg',
		'/images/gallery-2/03292013steveandflyer.jpg',
		'/images/gallery-2/03292013lianagregfletcher.jpg',
		'/images/gallery-2/03292013greggail.jpg',
		'/images/gallery-2/03292013gailr.jpg',
		'/images/gallery-2/03292013stevedingle.jpg'
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
	<title>Gallery 2 — GSDCSTL</title>
</svelte:head>

<PageHeader title="2013 GSDC of St. Louis Awards Ceremony" subtitle="March 29, 2013" />

<p class="text-gray-700 mb-6">
	Awards presented for medical alert service dogs, obedience and herding titles, championship and
	grand championship titles, select and ROM awards, and service dog breeder recognition.
</p>

<PhotoGallery {images} {alts} />
