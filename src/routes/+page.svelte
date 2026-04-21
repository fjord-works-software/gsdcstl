<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Carousel from '$lib/components/Carousel.svelte';

	const slides = [
		{ src: `${base}/images/slide790.jpg`, alt: 'German Shepherd Dog Club of St. Louis' },
		{ src: `${base}/images/slide791.jpg`, alt: 'German Shepherd Dog Club of St. Louis' }
	];
</script>

<svelte:head>
	<title>German Shepherd Dog Club of St. Louis</title>
</svelte:head>

<div class="-mx-6 -mt-8 mb-8 rounded-t-lg overflow-hidden">
	<Carousel {slides} />
</div>

<PageHeader title="About Us" />

<p class="mb-4">
	The members of the German Shepherd Dog Club of St. Louis, Inc. would like to introduce ourselves
	to you and invite you to come meet us.
</p>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2">Who We Are</h2>
<p class="mb-4">
	The club was formed to encourage and promote the breeding of German Shepherd Dogs and to bring
	their natural qualities to perfection. We urge members to accept the
	<a href="https://www.akc.org" class="text-primary hover:underline">AKC</a> standard as the only
	standard of excellence; to protect and advance the interests of the breed; and to encourage
	sportsmanlike competition at dog shows and companion dog events.
</p>
<p class="mb-4">
	Our membership is made up of anyone interested in the German Shepherd Dog — breeders, obedience
	enthusiasts, herding and rally competitors, and dog lovers alike.
</p>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2">Our Activities</h2>
<ul class="list-disc pl-6 mb-4 space-y-1">
	<li>8–10 club meetings per year</li>
	<li>At least 2 specialty shows annually</li>
	<li>Obedience and rally trials</li>
	<li>Seminars on obedience, tracking, grooming, health, and breeding</li>
</ul>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2">Useful Links</h2>
<ul class="space-y-1">
	<li>
		<a href="https://www.akc.org" class="text-primary hover:underline"
			>American Kennel Club (AKC)</a
		>
	</li>
	<li>
		<a href="https://www.gsdca.org" class="text-primary hover:underline"
			>German Shepherd Dog Club of America (GSDCA)</a
		>
	</li>
	<li>
		<a href="https://www.offa.org" class="text-primary hover:underline"
			>Orthopedic Foundation for Animals (OFA)</a
		>
	</li>
	<li>
		<a
			href="https://www.facebook.com/German-Shepherd-Dog-Club-of-St-Louis-130909666994242/"
			class="text-primary hover:underline">GSDCSTL on Facebook</a
		>
	</li>
</ul>
