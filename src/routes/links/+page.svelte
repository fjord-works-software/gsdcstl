<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Links — GSDCSTL</title>
</svelte:head>

<PageHeader title="Links" />

<div class="space-y-8 text-sm">

	<section>
		<ul class="space-y-2">
			<li>
				<a href="http://www.gsdca.org/" class="text-primary hover:underline" target="_blank" rel="noopener">The German Shepherd Dog Club of America</a>
				— is our parent club. Their site has a lot of information about German Shepherd Dogs.
			</li>
			<li>
				<a href="http://gsdca.org/events/junior-handling" class="text-primary hover:underline" target="_blank" rel="noopener">The German Shepherd Dog Club of America Junior Program</a>
				— A program supporting the youth handlers, who are the future of our breed, German Shepherd Dog.
			</li>
			<li><a href="http://www.akc.org/" class="text-primary hover:underline" target="_blank" rel="noopener">The American Kennel Club</a></li>
			<li><a href="http://www.onofrio.com/" class="text-primary hover:underline" target="_blank" rel="noopener">Jack Onofrio Dog Shows, LLC</a></li>
			<li><a href="https://foytrentdogshows.com/" class="text-primary hover:underline" target="_blank" rel="noopener">Foy Trent Dog Shows, LLC</a></li>
			<li><a href="http://infodog.com/" class="text-primary hover:underline" target="_blank" rel="noopener">Info Dog</a></li>
		</ul>
	</section>

	<section>
		<h2 class="text-base font-serif font-semibold text-primary-dark border-b border-gray-200 pb-1 mb-2">Important Links</h2>
		<ul class="space-y-1">
			<li><a href="http://www.gsdca.org/" class="text-primary hover:underline" target="_blank" rel="noopener">German Shepherd Dog Club of America</a></li>
			<li><a href="http://www.gsdca-wda.org/" class="text-primary hover:underline" target="_blank" rel="noopener">GSDCA Working Dog Association</a></li>
			<li><a href="http://www.akc.org/" class="text-primary hover:underline" target="_blank" rel="noopener">The American Kennel Club</a></li>
			<li><a href="http://www.museumofthedog.org/" class="text-primary hover:underline" target="_blank" rel="noopener">The American Kennel Club Museum of the Dog</a></li>
			<li><a href="http://www.offa.org/" class="text-primary hover:underline" target="_blank" rel="noopener">Orthopedic Foundation for Animals</a></li>
			<li><a href="http://www.gsdca.org/GSDReviewed/index.html" class="text-primary hover:underline" target="_blank" rel="noopener">GSD Reviewed</a></li>
			<li><a href="http://gsdcc.homestead.com/welcome.html" class="text-primary hover:underline" target="_blank" rel="noopener">German Shepherd Dog Club of Canada</a></li>
			<li><a href="http://www.gsdleague.co.uk/" class="text-primary hover:underline" target="_blank" rel="noopener">German Shepherd Dog League of Great Britain</a></li>
			<li><a href="http://www.schaeferhund.de/" class="text-primary hover:underline" target="_blank" rel="noopener">Germany's National German Shepherd Club</a></li>
			<li><a href="http://www.ahba-herding.org/" class="text-primary hover:underline" target="_blank" rel="noopener">American Herding Breed Association</a></li>
			<li><a href="http://www.mwdtsa.org/" class="text-primary hover:underline" target="_blank" rel="noopener">United Schutzhund Clubs of America / Military Working Dog Team Support Association</a></li>
		</ul>
	</section>

	<section>
		<h2 class="text-base font-serif font-semibold text-primary-dark border-b border-gray-200 pb-1 mb-2">Herding</h2>
		<ul class="space-y-1">
			<li><a href="http://www.ahba-herding.org/" class="text-primary hover:underline" target="_blank" rel="noopener">American Herding Breeds Association</a></li>
			<li><a href="https://www.asca.org/" class="text-primary hover:underline" target="_blank" rel="noopener">Australian Shepherd Club of America</a></li>
			<li><a href="http://www.gatewayasc.org/" class="text-primary hover:underline" target="_blank" rel="noopener">Gateway Australian Shepherd Club</a></li>
			<li><a href="http://www.blueboniff.com/midwestherding/index.htm" class="text-primary hover:underline" target="_blank" rel="noopener">Midwest Herding Connection</a></li>
		</ul>
	</section>

	<section>
		<h2 class="text-base font-serif font-semibold text-primary-dark border-b border-gray-200 pb-1 mb-2">Training</h2>
		<ul class="space-y-1">
			<li><a href="http://www.nadac.com/" class="text-primary hover:underline" target="_blank" rel="noopener">North American Dog Agility Council, Inc.</a></li>
			<li><a href="http://www.tdi-dog.org/" class="text-primary hover:underline" target="_blank" rel="noopener">Therapy Dogs International, Inc. (TDI)</a></li>
			<li><a href="http://www.akc.org/events/cgc/index.cfm" class="text-primary hover:underline" target="_blank" rel="noopener">AKC's Canine Good Citizen (CGC) Program</a></li>
			<li><a href={resolve('/Documents/Training/Satisfying%20the%20Urge%20to%20Herd.pdf' as any)} class="text-primary hover:underline" target="_blank" rel="noopener">Satisfying the Urge to Herd (PDF)</a></li>
		</ul>
	</section>

	<section>
		<h2 class="text-base font-serif font-semibold text-primary-dark border-b border-gray-200 pb-1 mb-2">Dog Show Superintendents</h2>
		<ul class="space-y-1">
			<li><a href="http://www.onofrio.com/" class="text-primary hover:underline" target="_blank" rel="noopener">Onofrio Dog Shows</a></li>
			<li><a href="https://foytrentdogshows.com/" class="text-primary hover:underline" target="_blank" rel="noopener">Foy Trent Dog Shows</a></li>
			<li><a href="http://www.bleakneyshowservices.com/" class="text-primary hover:underline" target="_blank" rel="noopener">Margaret Bleakney Shows</a></li>
			<li><a href="http://infodog.com/" class="text-primary hover:underline" target="_blank" rel="noopener">MB-F (Infodog) Dog Shows</a></li>
		</ul>
	</section>

	<section>
		<h2 class="text-base font-serif font-semibold text-primary-dark border-b border-gray-200 pb-1 mb-2">Regional GSD Clubs</h2>
		<ul class="space-y-1">
			<li><a href="http://www.gsdca.org/join-the-gsdca/regional-clubs" class="text-primary hover:underline" target="_blank" rel="noopener">Regional German Shepherd Dog Club Links</a></li>
		</ul>
	</section>

	<section>
		<h2 class="text-base font-serif font-semibold text-primary-dark border-b border-gray-200 pb-1 mb-2">Rescue</h2>
		<ul class="space-y-1">
			<li><a href="http://www.agsra.com/" class="text-primary hover:underline" target="_blank" rel="noopener">German Shepherd Dog Club of America — Breed Rescue</a></li>
			<li><a href="http://www.agsra.com/" class="text-primary hover:underline" target="_blank" rel="noopener">American German Shepherd Dog Rescue Association</a></li>
			<li><a href="http://www.caninepetrescue.com/home/" class="text-primary hover:underline" target="_blank" rel="noopener">Canine Pet Rescue</a></li>
			<li><a href="http://www.serendipitygsd.org/" class="text-primary hover:underline" target="_blank" rel="noopener">Serendipity German Shepherd Dog Rescue</a></li>
			<li><a href="http://www.pawstoppersinc.com/" class="text-primary hover:underline" target="_blank" rel="noopener">PAWStoppers</a></li>
		</ul>
	</section>

	<section>
		<h2 class="text-base font-serif font-semibold text-primary-dark border-b border-gray-200 pb-1 mb-2">Recipes</h2>
		<ul class="space-y-1">
			<li><a href={resolve('/Documents/Beef%20Liver%20Bait.pdf' as any)} class="text-primary hover:underline" target="_blank" rel="noopener">Beef Liver Cake / Beef Liver Bait (PDF)</a></li>
		</ul>
	</section>

	<section>
		<h2 class="text-base font-serif font-semibold text-primary-dark border-b border-gray-200 pb-1 mb-2">More Links</h2>
		<ul class="space-y-1">
			<li><a href={resolve('/links/veterinary-links')} class="text-primary hover:underline">Veterinary &amp; Medical Links</a></li>
			<li><a href={resolve('/links/rainbow-bridge')} class="text-primary hover:underline">Rainbow Bridge</a></li>
			<li><a href={resolve('/links/web-award')} class="text-primary hover:underline">Web Award</a></li>
		</ul>
	</section>

</div>
