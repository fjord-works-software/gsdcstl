<svelte:head>
	<title>Hall of Fame — GSDCSTL</title>
</svelte:head>

<h1 class="text-2xl font-serif font-bold text-primary mb-6">Hall of Fame</h1>

<table class="w-full text-sm border-collapse">
	<thead>
		<tr class="bg-primary text-white">
			<th class="text-left px-3 py-2">Date</th>
			<th class="text-left px-3 py-2">Title</th>
			<th class="text-left px-3 py-2">Dog</th>
			<th class="text-left px-3 py-2">Member(s)</th>
		</tr>
	</thead>
	<tbody>
		{#each [
			{ date: 'May 3, 2015', title: 'Grand Champion-Bronze', dog: "GCH CH Cimarron's Lovin' Touchin' Squeezin'", member: 'Steve Dobbins' },
			{ date: 'Aug. 9, 2014', title: 'Champion', dog: "CH Devine's Rockstar", member: 'Glenn Murphy, Kelly Murphy, Jennifer Souster, Gail Stiefferman' },
			{ date: '2014', title: 'Register of Merit', dog: 'Multiple achievements', member: 'Various members' },
			{ date: '2013', title: 'Champion', dog: 'Multiple champions', member: 'Various members' },
			{ date: '2012', title: 'Grand Champion', dog: 'Multiple Grand Champions', member: 'Various members' },
			{ date: '2011', title: 'Champion & Therapy Dog', dog: 'Multiple achievements', member: 'Various members' },
		] as row, i}
			<tr class={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
				<td class="px-3 py-2 border-t border-gray-200 text-gray-500">{row.date}</td>
				<td class="px-3 py-2 border-t border-gray-200 font-medium text-primary-dark">{row.title}</td>
				<td class="px-3 py-2 border-t border-gray-200">{row.dog}</td>
				<td class="px-3 py-2 border-t border-gray-200 text-gray-600">{row.member}</td>
			</tr>
		{/each}
	</tbody>
</table>
