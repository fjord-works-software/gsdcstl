<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Veterinary Links — GSDCSTL</title>
</svelte:head>

<PageHeader title="Useful Veterinary & Medical Links" />

<div class="space-y-8 text-sm">

{#each [
	{ heading: 'General', links: [
		{ label: 'American Veterinary Medicine Association', href: 'https://www.avma.org' },
		{ label: 'Merck Veterinary Manual', href: 'https://www.merckvetmanual.com/dog-owners' },
		{ label: 'Animal DNA Testing Services', href: 'https://www.vetdnacenter.com/' },
		{ label: 'Breed Health Problems', href: 'https://www.dogbiz.com/dogs-grp7/germ-shep/german-shepherd-health-issues.html' },
		{ label: 'Aspergillosis — Canine Runny Nose', href: '/Documents/DogMedicine/Aspergillosis%20-%20Canine%20Runny%20Nose.pdf' },
		{ label: 'Cushings Diagnosis Using Dog Hair', href: '/Documents/DogMedicine/Dogs%20Hair%20Cushings%20Diagnosis.pdf' },
		{ label: 'Fibrotic Myopathy', href: 'https://www.gsdhelp.info/neuro/fibroticmyopathy.html' },
		{ label: 'Heart Murmurs and Breeding', href: '/Documents/DogMedicine/Some%20Dogs%20Without%20Heart%20Murmurs%20Aren.pdf' },
		{ label: 'K9 Teeth Care', href: '/Documents/DogMedicine/Keep%20Those%20Pearly%20Whites.pdf' },
		{ label: 'Motion Sickness', href: '/Documents/DogMedicine/What%20to%20Do%20About%20Motion%20Sickness.pdf' },
		{ label: 'Neospora', href: '/Documents/DogMedicine/NEOSPORA.pdf' },
		{ label: 'Pacemakers for Dogs', href: '/Documents/DogMedicine/Pacemakers%20Keep%20Dogs.pdf' },
		{ label: 'Pet Car Safety Restraints', href: '/Documents/DogMedicine/Study%20Shows%20Many%20Pet%20Car%20Safety%20Restraints%20to%20be%20Unsafe.pdf' },
		{ label: 'Spinal Stenosis', href: '/Documents/DogMedicine/Narrowing%20of%20Vertebral%20Canal%20in%20Dogs.pdf' },
		{ label: 'VetGen DNA Testing', href: 'https://www.vetgen.com' },
	]},
	{ heading: 'Breeding, Whelping & Puppies', links: [
		{ label: 'Brucellosis Testing', href: '/Documents/DogMedicine/Test%20for%20this%20Hidden%20Killer%20Before%20Breeding.pdf' },
		{ label: 'Fading Puppy Syndrome', href: 'https://www.revivalanimal.com/articles/Fading-Puppy-Kitten-Syndrome.html?a=rev120810p' },
		{ label: 'Frozen Semen', href: 'https://caninechronicle.com/uncategorized/the-scoop-on-frozen-semen/' },
		{ label: 'Pregnancy Calendar', href: 'https://www.schaferhund.com/gsd_pregnancy.aspx' },
		{ label: 'Puppy Formula Recipe', href: '/Documents/DogMedicine/Puppy%20Formula%20Recipe.pdf' },
	]},
	{ heading: 'Cancer', links: [
		{ label: 'Canine Cancer Breakthrough', href: '/Documents/DogMedicine/A%20Real%20Breakthrough%20In%20The%20Treatment%20Of%20Canine%20Cancer.pdf' },
		{ label: 'Innovative Cancer Treatment (UC Davis)', href: '/Documents/DogMedicine/UC%20Davis%20Veterinarian%20Offers%20Innovative%20Cancer%20Treatment.pdf' },
		{ label: 'Cancer Vaccine', href: '/Documents/DogMedicine/Pet%20Dogs%20Help%20Test%20Cancer%20Vaccine.pdf' },
		{ label: 'Warning Signs of Pet Cancer', href: 'https://www.pawnation.com/2012/08/20/13-warning-signs-of-pet-cancer/?ncid=webmail15' },
	]},
	{ heading: 'Degenerative Myelopathy', links: [
		{ label: 'DM Overview and Resources', href: '/Documents/DogMedicine/GSDDegenerativeMyelopathy.pdf' },
		{ label: 'DM Educational Videos', href: 'https://www.akcchf.org/news-events/multimedia/video/how-to-care-for-a-dog-with-degenerative-myelopathy.html' },
	]},
	{ heading: 'Epilepsy', links: [
		{ label: 'Canine Epilepsy Resources', href: '/Documents/DogMedicine/Canine%20Epilepsy%20and%20Your%20Pet.pdf' },
	]},
	{ heading: 'Gastric Dilation Volvulus (Bloat)', links: [
		{ label: 'Gastric Dilatation — What You Need to Know', href: '/Documents/DogMedicine/Gastric%20Dilatation99.pdf' },
	]},
	{ heading: 'Pancreatic Insufficiency', links: [
		{ label: 'Exocrine Pancreatic Insufficiency', href: 'https://en.wikipedia.org/wiki/Exocrine_pancreatic_insufficiency' },
	]},
	{ heading: 'Toxins & Poisons', links: [
		{ label: 'National Animal Poison Control Center', href: 'https://www.aspca.org/pet-care/animal-poison-control' },
		{ label: 'Household Pet Poisons', href: 'https://wakeup-world.com/2012/03/28/the-a-to-z-of-pet-poisons-what-you-absolutely-must-know/' },
		{ label: 'Rodenticide Poisoning', href: '/Documents/DogMedicine/Rodenticide%20Poisoning.pdf' },
		{ label: 'Spider Bites', href: '/Documents/DogMedicine/Most%20Dogs%20Tolerate%20Spider%20Bites.pdf' },
	]},
	{ heading: 'Weather Related', links: [
		{ label: 'Cold Weather Tips for Pets', href: '/Documents/DogMedicine/Taking%20care%20of%20pets%20in%20cold%20weather.pdf' },
		{ label: 'Hot Weather Safety Protocol', href: '/Documents/DogMedicine/HOT%20WEATHER%20SAFETY%20PROTOCOLS.pdf' },
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
