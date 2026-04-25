<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';

	const images = [
		resolve('/images/gallery-4/02242012dannieandrocky.jpg' as any),
		resolve('/images/gallery-4/02242012helenfaith.jpg' as any),
		resolve('/images/gallery-4/02242012judyrocket.jpg' as any),
		resolve('/images/gallery-4/02242012geralynchance.jpg' as any),
		resolve('/images/gallery-4/02242012marileephoenix.jpg' as any),
		resolve('/images/gallery-4/02242012stevebutkus.jpg' as any),
		resolve('/images/gallery-4/02242012rozeaglerock.jpg' as any),
		resolve('/images/gallery-4/02242012marileesusan.jpg' as any),
		resolve('/images/gallery-4/02242012elizabethgregsecretagent.jpg' as any),
		resolve('/images/gallery-4/02242012rozritz.jpg' as any),
		resolve('/images/gallery-4/02242012elizabethpeanut.jpg' as any),
		resolve('/images/gallery-4/02242012stevecharmin.jpg' as any),
		resolve('/images/gallery-4/02242012stevepinky.jpg' as any),
		resolve('/images/gallery-4/02242012gregfletcher.jpg' as any),
		resolve('/images/gallery-4/02242012karenkoko.jpg' as any),
		resolve('/images/gallery-4/02242012marcia.jpg' as any)
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
	<title>Gallery 4 — GSDCSTL</title>
</svelte:head>

<PageHeader title="2011 GSDC of St. Louis Royal Hecht Awards Ceremony" subtitle="February 24, 2012" />

<p class="text-gray-700 mb-6">
	Award presentations for therapy dog, canine good citizen, rally, dual title, best puppy, bred by
	exhibitor, champion, grand champion, and register of merit achievements.
</p>

<PhotoGallery {images} {alts} />
