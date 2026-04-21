<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import BragEntry from '$lib/components/BragEntry.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';

	const showPhotos = [
		`${base}/images/bruno-bob-gsdcstl-5.12.19.jpg`,
		`${base}/images/sat-wd-von-loar.jpg`,
		`${base}/images/sun-bob-faithrock-maverick.jpg`,
		`${base}/images/sun-wb-luzak.jpg`,
		`${base}/images/jackson-wd-bow-march19-futurity.jpg`
	];
	const showPhotoAlts = [
		'Best of Breed — Bruno',
		"Winner's Dog — Von Loar Red Rum Gomez",
		"Sunday Best of Breed — Faithrock's Maverick",
		"Winner's Bitch — Luzak's Jyn",
		"Winner's Dog — Jackson"
	];

	const shows = [
		{
			show: 'Saturday 5/11/19 PM',
			judge: 'Mrs. Candee Foss',
			placements: [
				{
					title: 'Best of Breed',
					dog: "CH Faithrock's Wyatt Earp V Tin Roof RN TC",
					sire: "RBIS GCHB Class Act's Shot Through The Heart Windfall-Hillside RN CGC TC",
					dam: "FaithRock You've Got A Friend",
					breeders: 'Terry and Larry Rock and Rita Rooney',
					owners: 'Laura & Tony Marracco & Terry Rock'
				},
				{
					title: "Winner's Dog",
					dog: 'Von Loar Red Rum Gomez of Karizma',
					sire: "GCH Karizma's Montego Bay Von Loar",
					dam: "Karizma's Galla Von Loar",
					breeders: 'Miguel Gomez & Carlos Arguimbau',
					owners: 'Miguel Gomez & Carlos Arguimbau'
				}
			]
		},
		{
			show: 'Sunday 5/12/19 AM',
			judge: 'Ms. Christina M. Halliday',
			placements: [
				{
					title: 'Best of Breed',
					dog: "Faithrock's Maverick",
					sire: "RBIS GCHB Class Act's Shot Through The Heart Windfall-Hillside RN CGC TC",
					dam: "FaithRock You've Got A Friend",
					breeders: 'Terry and Larry Rock and Rita Rooney',
					owners: 'Linda Van Vickel and Terry Rock'
				},
				{
					title: "Winner's Bitch",
					dog: 'Luzak\'s Jyn of Rogue One Rivendell',
					sire: 'GCH Karizma\'s Malawi Kaleef Von Loar RN PT CGC',
					dam: 'Rivendell-Tebe Nobe Here I Come PT',
					breeders: 'Scott Leitz & Jennifer & Paul Root, Jene & Isabelle Dupzyk',
					owners: 'Elizabeth Wilkerson & Jennifer & Paul Root'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Event Results — GSDCSTL</title>
</svelte:head>

<PageHeader title="Event Results" />

<div class="flex items-center justify-between mb-6">
	<h2 class="text-lg font-serif font-semibold text-primary-dark">May 11 & 12, 2019 Specialty Shows</h2>
	<a
		href="{base}/events/May-2019-GSDCSTL-Results.pdf"
		class="text-sm bg-primary text-white px-3 py-1.5 rounded hover:bg-primary-dark transition-colors"
	>
		Results PDF
	</a>
</div>

<div class="space-y-6">
	{#each shows as s}
		<BragEntry show={s.show} judge={s.judge} placements={s.placements} />
	{/each}
</div>

<h2 class="text-lg font-serif font-semibold text-primary-dark mt-8 mb-4">Photos</h2>
<PhotoGallery images={showPhotos} alts={showPhotoAlts} />
