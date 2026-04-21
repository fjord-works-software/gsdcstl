<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import AwardTable from '$lib/components/AwardTable.svelte';

	const rows = [
		{ date: 'May 3, 2015', title: 'Grand Champion-Bronze', dog: "GCH CH Cimarron's Lovin' Touchin' Squeezin'", member: 'Steve Dobbins' },
		{ date: 'Aug. 9, 2014', title: 'Champion', dog: "CH Devine's Rockstar", member: 'Glenn Murphy, Kelly Murphy, Jennifer Souster, Gail Stiefferman' },
		{ date: '2014', title: 'Register of Merit', dog: 'Multiple achievements', member: 'Various members' },
		{ date: '2013', title: 'Champion', dog: 'Multiple champions', member: 'Various members' },
		{ date: '2012', title: 'Grand Champion', dog: 'Multiple Grand Champions', member: 'Various members' },
		{ date: '2011', title: 'Champion & Therapy Dog', dog: 'Multiple achievements', member: 'Various members' },
	];
</script>

<svelte:head>
	<title>Hall of Fame — GSDCSTL</title>
</svelte:head>

<PageHeader title="Hall of Fame" />
<AwardTable {rows} />
