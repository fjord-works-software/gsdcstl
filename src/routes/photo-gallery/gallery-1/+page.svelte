<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';

	const images = [
		`${base}/images/gallery-1/678767082_122094941444427772_2341627369910192194_n.jpg`,
		`${base}/images/gallery-1/678788401_122094941396427772_70842235834849359_n.jpg`,
		`${base}/images/gallery-1/678894865_122094941348427772_2952621405570769075_n.jpg`,
		`${base}/images/gallery-1/678894865_122094941408427772_4462919413444185423_n.jpg`,
		`${base}/images/gallery-1/679327570_122094941516427772_8529105337218170317_n.jpg`,
		`${base}/images/gallery-1/679436284_122094941312427772_186227748098865038_n.jpg`,
		`${base}/images/gallery-1/679470014_122095649126427772_5387873074868984145_n.jpg`,
		`${base}/images/gallery-1/679637622_122094941384427772_5466245668820372600_n.jpg`,
		`${base}/images/gallery-1/680003645_122094941360427772_1524785096650794060_n.jpg`,
		`${base}/images/gallery-1/680033446_122094941480427772_7806254980287181797_n.jpg`,
		`${base}/images/gallery-1/680230690_122094941300427772_8671737019527196638_n.jpg`,
		`${base}/images/gallery-1/680242333_122094941504427772_2484211791528824148_n.jpg`,
		`${base}/images/gallery-1/680342777_122095649162427772_2769197228539385490_n.jpg`,
		`${base}/images/gallery-1/680358842_122094941528427772_5853300498625220291_n.jpg`,
		`${base}/images/gallery-1/680470560_122094941372427772_7566711629819841772_n.jpg`,
		`${base}/images/gallery-1/680492106_122095649114427772_5461130047347676651_n.jpg`,
		`${base}/images/gallery-1/680830997_122095649102427772_2934782225156185604_n.jpg`,
		`${base}/images/gallery-1/680974093_122094941456427772_7116911862178034038_n.jpg`
	];

	const alts = Array.from({ length: 18 }, (_, i) => `Gallery 1 photo ${i + 1}`);
</script>

<svelte:head>
	<title>Gallery 1 — GSDCSTL</title>
</svelte:head>

<PageHeader title="2026 GSDC of St. Louis Awards Ceremony" subtitle="April 21, 2026" />

<p class="text-gray-700 mb-6">
	GSDCSTL presented 14 plaques and 1 certificate to members for their dogs’ achievements in 2025. Congratulations to all. Great job.
</p>

<PhotoGallery {images} {alts} />
