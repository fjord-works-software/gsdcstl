<svelte:head>
	<title>Veterinary Links — GSDCSTL</title>
</svelte:head>

<h1 class="text-2xl font-serif font-bold text-primary mb-6">Useful Veterinary & Medical Links</h1>

<div class="space-y-8 text-sm">

{#each [
	{ heading: 'General', links: [
		{ label: 'American Veterinary Medicine Association', href: 'https://www.avma.org' },
		{ label: 'Merck Veterinary Manual', href: 'https://www.merckvetmanual.com' },
		{ label: 'Animal DNA Testing Services', href: '#' },
		{ label: 'Breed Health Problems', href: '#' },
		{ label: 'Aspergillosis — Canine Runny Nose', href: '#' },
		{ label: 'Cushings Diagnosis Using Dog Hair', href: '#' },
		{ label: 'Fibrotic Myopathy', href: '#' },
		{ label: 'Heart Murmurs and Breeding', href: '#' },
		{ label: 'K9 Teeth Care', href: '#' },
		{ label: 'Motion Sickness', href: '#' },
		{ label: 'Neospora', href: '#' },
		{ label: 'Pacemakers for Dogs', href: '#' },
		{ label: 'Pet Car Safety Restraints', href: '#' },
		{ label: 'Spinal Stenosis', href: '#' },
		{ label: 'VetGen DNA Testing', href: 'https://www.vetgen.com' },
	]},
	{ heading: 'Breeding, Whelping & Puppies', links: [
		{ label: 'Brucellosis Testing', href: '#' },
		{ label: 'Fading Puppy Syndrome', href: '#' },
		{ label: 'Frozen Semen', href: '#' },
		{ label: 'Pregnancy Calendar', href: '#' },
		{ label: 'Puppy Formula Recipe', href: '#' },
	]},
	{ heading: 'Cancer', links: [
		{ label: 'Canine Cancer Breakthrough', href: '#' },
		{ label: 'Innovative Cancer Treatment (UC Davis)', href: '#' },
		{ label: 'Cancer Vaccine', href: '#' },
		{ label: 'Warning Signs of Pet Cancer', href: '#' },
	]},
	{ heading: 'Degenerative Myelopathy', links: [
		{ label: 'DM Overview and Resources', href: '#' },
		{ label: 'DM Educational Videos', href: '#' },
	]},
	{ heading: 'Epilepsy', links: [
		{ label: 'Canine Epilepsy Resources', href: '#' },
	]},
	{ heading: 'Gastric Dilation Volvulus (Bloat)', links: [
		{ label: 'Gastric Dilatation — What You Need to Know', href: '#' },
	]},
	{ heading: 'Pancreatic Insufficiency', links: [
		{ label: 'Exocrine Pancreatic Insufficiency', href: '#' },
	]},
	{ heading: 'Toxins & Poisons', links: [
		{ label: 'National Animal Poison Control Center', href: 'https://www.aspca.org/pet-care/animal-poison-control' },
		{ label: 'Household Pet Poisons', href: '#' },
		{ label: 'Rodenticide Poisoning', href: '#' },
		{ label: 'Spider Bites', href: '#' },
	]},
	{ heading: 'Weather Related', links: [
		{ label: 'Cold Weather Tips for Pets', href: '#' },
		{ label: 'Hot Weather Safety Protocol', href: '#' },
	]},
] as section}
	<section>
		<h2 class="text-base font-serif font-semibold text-primary-dark border-b border-gray-200 pb-1 mb-2">{section.heading}</h2>
		<ul class="space-y-1">
			{#each section.links as link}
				<li>
					{#if link.href !== '#'}
						<a href={link.href} class="text-primary hover:underline" target="_blank" rel="noopener">{link.label}</a>
					{:else}
						<span class="text-gray-600">{link.label}</span>
					{/if}
				</li>
			{/each}
		</ul>
	</section>
{/each}

</div>
