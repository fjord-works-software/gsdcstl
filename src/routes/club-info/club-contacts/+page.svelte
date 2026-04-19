<svelte:head>
	<title>Club Contacts — GSDCSTL</title>
</svelte:head>

<h1 class="text-2xl font-serif font-bold text-primary mb-1">Officers & Board Members</h1>
<p class="text-gray-500 text-sm mb-6">2025 · Club Phone: <a href="tel:6364955864" class="text-primary hover:underline">636-495-5864</a></p>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-3">Officers</h2>
<table class="w-full text-sm border-collapse mb-8">
	<tbody>
		{#each [
			{ title: 'President', name: 'Jayne Faupl', email: 'President@gsdcstl.org' },
			{ title: 'Vice President', name: 'Laura Shearin', email: 'VicePresident@gsdcstl.org' },
			{ title: 'Treasurer', name: 'Pam Aman', email: 'Treasurer@gsdcstl.org' },
			{ title: 'Recording Secretary', name: 'Laura Marrocco', email: 'RecSec@gsdcstl.org' },
			{ title: 'Corresponding Secretary', name: 'Linda VanVickle', email: 'CorrSec@gsdcstl.org' },
		] as officer, i}
			<tr class={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
				<td class="px-3 py-2 font-semibold text-primary-dark border-t border-gray-200 w-48">{officer.title}</td>
				<td class="px-3 py-2 border-t border-gray-200">{officer.name}</td>
				<td class="px-3 py-2 border-t border-gray-200">
					<a href="mailto:{officer.email}" class="text-primary hover:underline">{officer.email}</a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-3">Board of Directors</h2>
<ul class="list-disc pl-6 space-y-1 text-gray-700">
	<li>Steve Dobbins</li>
	<li>Larry Duerbeck</li>
	<li>Margaret O'Neill</li>
	<li>Brian Paschke</li>
	<li>Butch Stiefferman <span class="text-gray-400 text-xs">(past president)</span></li>
</ul>
