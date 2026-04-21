<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';

	const images = [
		`${base}/images/gallery-3/02242012dannieandrocky.jpg`,
		`${base}/images/gallery-3/02242012helenfaith.jpg`,
		`${base}/images/gallery-3/02242012judyrocket.jpg`,
		`${base}/images/gallery-3/02242012geralynchance.jpg`,
		`${base}/images/gallery-3/02242012marileephoenix.jpg`,
		`${base}/images/gallery-3/02242012stevebutkus.jpg`,
		`${base}/images/gallery-3/02242012rozeaglerock.jpg`,
		`${base}/images/gallery-3/02242012marileesusan.jpg`,
		`${base}/images/gallery-3/02242012elizabethgregsecretagent.jpg`,
		`${base}/images/gallery-3/02242012rozritz.jpg`,
		`${base}/images/gallery-3/02242012elizabethpeanut.jpg`,
		`${base}/images/gallery-3/02242012stevecharmin.jpg`,
		`${base}/images/gallery-3/02242012stevepinky.jpg`,
		`${base}/images/gallery-3/02242012gregfletcher.jpg`,
		`${base}/images/gallery-3/02242012karenkoko.jpg`,
		`${base}/images/gallery-3/02242012marcia.jpg`
	];

	const alts = [
		'Dannie and Rocky',
		'Helen and Faith',
		'Judy and Rocket',
		'Geralyn and Chance',
		'Marilee and Phoenix',
		'Steve and Butkus',
		'Roz and Eagle Rock',
		'Marilee and Susan',
		'Elizabeth, Greg, and Secret Agent',
		'Roz and Ritz',
		'Elizabeth and Peanut',
		'Steve and Charmin',
		'Steve and Pinky',
		'Greg and Fletcher',
		'Karen and Koko',
		'Marcia'
	];
</script>

<svelte:head>
	<title>Gallery 3 — GSDCSTL</title>
</svelte:head>

<PageHeader title="2011 GSDC of St. Louis Royal Hecht Awards Ceremony" subtitle="February 24, 2012" />

<p class="text-gray-700 mb-6">
	Award presentations for therapy dog, canine good citizen, rally, dual title, best puppy, bred by
	exhibitor, champion, grand champion, and register of merit achievements.
</p>

<PhotoGallery {images} {alts} />
