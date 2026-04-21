<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Show Premium — GSDCSTL</title>
</svelte:head>

<PageHeader title="Show Premium" />

<div class="bg-primary-light/10 border border-primary-light rounded p-4 mb-6 text-sm text-gray-700">
	<p class="font-semibold text-primary-dark mb-1">⚠ Venue Change</p>
	<p>Purina Farms cancelled due to storm damage. New location: <strong>Candlewood Suites, 2501 Sunrise Dr., Springfield, IL 62703</strong></p>
</div>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-3">
	GSDC of St. Louis / Illini GSDC with Midwest Futurity
</h2>

<table class="w-full text-sm border-collapse mb-6">
	<thead>
		<tr class="bg-primary text-white">
			<th class="text-left px-3 py-2">Date & Show</th>
			<th class="text-left px-3 py-2">Judge</th>
			<th class="text-left px-3 py-2">Event</th>
		</tr>
	</thead>
	<tbody>
		{#each [
			{ date: 'Friday 5/9/25 AM', show: 'GSDC of St. Louis', judge: 'Michel Chaloux', event: 'Specialty Conformation' },
			{ date: 'Saturday 5/10/25 PM', show: 'GSDC of St. Louis', judge: 'Cyndi Flautt', event: 'Junior Showmanship & Specialty Conformation' },
			{ date: 'Friday 5/9/25 PM', show: 'Illini GSDC', judge: 'Donna Conod', event: '4–6 Month Puppy & Specialty Conformation' },
			{ date: 'Saturday 5/10/25 AM', show: 'Illini GSDC', judge: 'Butch Stiefferman', event: 'Junior Showmanship & Breed' },
			{ date: 'Sunday 5/11/25', show: 'Midwest Futurity', judge: 'George Berstler', event: 'Futurity' },
		] as row, i}
			<tr class={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
				<td class="px-3 py-2 border-t border-gray-200">
					<div class="font-semibold">{row.date}</div>
					<div class="text-gray-500 text-xs">{row.show}</div>
				</td>
				<td class="px-3 py-2 border-t border-gray-200">{row.judge}</td>
				<td class="px-3 py-2 border-t border-gray-200">{row.event}</td>
			</tr>
		{/each}
	</tbody>
</table>

<p class="text-sm text-gray-700 mb-1">
	<strong>Temperament Test (TC)</strong> following Saturday PM conformation. Evaluator: Butch Stiefferman.
</p>
<p class="text-sm text-gray-700 mb-4">
	<strong>Entries close:</strong> Wednesday, April 23, 2025
</p>

<h2 class="text-base font-serif font-semibold text-primary-dark mb-2">Show Secretary</h2>
<p class="text-sm text-gray-700 mb-6">
	Val Harrington ·
	<a href="mailto:valerieharrington123@gmail.com" class="text-primary hover:underline">valerieharrington123@gmail.com</a>
	· <a href="tel:7089064803" class="text-primary hover:underline">708-906-4803</a>
</p>

<div class="flex gap-3 flex-wrap">
	<a
		href="https://www.dogzibit.com/project/2025-gsdca-futurity-maturity/"
		class="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary-dark transition-colors"
	>
		Futurity/Maturity Premium & Entries
	</a>
</div>
