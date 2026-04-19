<svelte:head>
	<title>Rainbow Bridge — GSDCSTL</title>
</svelte:head>

<h1 class="text-2xl font-serif font-bold text-primary mb-2">Rainbow Bridge</h1>
<p class="text-gray-500 text-sm mb-6 italic">In memory of our beloved German Shepherds</p>

<div class="space-y-6 text-sm text-gray-700">

{#each [
	{ name: 'Black Oak\'s "The Godfather" — "Mikey"', dates: '08/01/2004 – 09/04/2014', owner: 'Marcia Hadley' },
	{ name: 'J-Mac\'s RB Rocket J Shepherd CGC TDI RN TDIA TDIAOV ThD ORT', dates: '01/05/2003 – 06/13/2014', owner: 'Judy McDowell' },
	{ name: 'Cara', dates: '02/02/2003 – 07/23/2013', owner: 'Marcia Hadley' },
	{ name: 'Cimarron\'s Utter Chaos', dates: '04/19/2012 – 06/17/2013', owner: 'Steve Dobbins' },
	{ name: 'Cimarron\'s Listen To Her Heart OFA', dates: '03/21/2005 – 06/03/2013', owner: 'Steve Dobbins' },
	{ name: 'Cimarron\'s Reaction to Action RN OFA — "Roxey"', dates: '04/20/2000 – 05/20/2013', owner: 'Steve Dobbins' },
] as entry}
	<div class="border-l-4 border-primary-light pl-4 py-1">
		<p class="font-semibold text-gray-800">{entry.name}</p>
		<p class="text-gray-500">{entry.dates}</p>
		<p class="text-gray-500">Owner: {entry.owner}</p>
	</div>
{/each}

</div>

<p class="mt-8 text-gray-400 text-xs italic">
	To add a memorial, please contact the <a href="/club-info/club-contacts" class="underline">recording secretary</a>.
</p>
