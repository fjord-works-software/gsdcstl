<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';

	const sections = [
		{
			heading: 'German Shepherd Dog Organizations',
			links: [
				{ label: 'German Shepherd Dog Club of America (GSDCA)', href: 'http://www.gsdca.org/' },
				{ label: 'GSDCA Junior Program', href: 'http://gsdca.org/events/junior-handling' },
				{ label: 'GSDCA Working Dog Association', href: 'http://www.gsdca-wda.org/' },
				{ label: 'GSD Review', href: 'http://www.gsdca.org/GSDReviewed/index.html' },
				{ label: 'GSDCA Regional Clubs', href: 'http://www.gsdca.org/join-the-gsdca/regional-clubs' },
				{ label: 'German Shepherd Dog Club of Canada', href: 'http://gsdcc.homestead.com/welcome.html' },
				{ label: 'German Shepherd Dog League (UK)', href: 'http://www.gsdleague.co.uk/' },
				{ label: "Germany's SV (Schäferhund)", href: 'http://www.schaeferhund.de/' },
				{ label: 'American German Shepherd Rescue Association', href: 'http://www.agsra.com/' }
			]
		},
		{
			heading: 'Dog Sport & Registry',
			links: [
				{ label: 'American Kennel Club (AKC)', href: 'http://www.akc.org/' },
				{ label: 'AKC Canine Good Citizen', href: 'http://www.akc.org/events/cgc/index.cfm' },
				{ label: 'Orthopedic Foundation for Animals (OFA)', href: 'http://www.offa.org/' },
				{ label: 'Museum of the Dog', href: 'http://www.museumofthedog.org/' },
				{ label: 'American Herding Breeds Association', href: 'http://www.ahba-herding.org/' },
				{ label: 'NADAC (Agility)', href: 'http://www.nadac.com/' },
				{ label: 'Therapy Dogs International', href: 'http://www.tdi-dog.org/' },
				{ label: 'US Military Working Dog Teams Association', href: 'http://www.mwdtsa.org/' }
			]
		},
		{
			heading: 'Show Superintendents',
			links: [
				{ label: 'Jack Onofrio Dog Shows', href: 'http://www.onofrio.com/' },
				{ label: 'Foy Trent Dog Shows', href: 'https://foytrentdogshows.com/' },
				{ label: 'Info Dog', href: 'http://infodog.com/' }
			]
		}
	];
</script>

<svelte:head>
	<title>Links — GSDCSTL</title>
</svelte:head>

<PageHeader title="Links" />

<div class="space-y-8 text-sm mb-8">
	{#each sections as section}
		<section>
			<h2 class="text-base font-serif font-semibold text-primary-dark border-b border-gray-200 pb-1 mb-2">
				{section.heading}
			</h2>
			<ul class="space-y-1">
				{#each section.links as link}
					<li>
						<a href={link.href} class="text-primary hover:underline" target="_blank" rel="noopener">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</div>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2">More Links</h2>
<ul class="space-y-1 text-sm">
	<li><a href="/links/veterinary-links" class="text-primary hover:underline">Veterinary Links</a></li>
	<li><a href="/links/rainbow-bridge" class="text-primary hover:underline">Rainbow Bridge</a></li>
	<li><a href="/links/web-award" class="text-primary hover:underline">Web Award</a></li>
</ul>
