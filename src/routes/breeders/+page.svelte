<script lang="ts">
	import { base } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Breeders — GSDCSTL</title>
</svelte:head>

<PageHeader title="Breeder Directory" />

<ul class="space-y-4 mb-6">
	<li>
		<a href="http://www.cimarron-gsd.com" class="font-medium text-primary hover:underline" target="_blank" rel="noopener">
			Cimarron Shepherds
		</a>
		<p class="text-sm text-gray-600">Steve Dobbins</p>
	</li>
	<li>
		<a href="https://www.facebook.com/Forest-Knoll-German-Shepherds-120186668142208/" class="font-medium text-primary hover:underline" target="_blank" rel="noopener">
			Forest Knoll German Shepherds
		</a>
		<p class="text-sm text-gray-600">Butch &amp; Gail Stiefferman</p>
	</li>
</ul>

<p class="text-xs text-gray-500 border-t border-gray-200 pt-4">
	<strong>Please note:</strong> Neither the German Shepherd Dog Club of St. Louis nor its Web
	management team endorses the breeders listed above, including statements of the health, quality or
	soundness of any of the dogs described. Prospective buyers should independently investigate all
	dogs represented here, including whether they are suitable for the purposes for which they are
	being considered. By continuing to read the material posted here, the reader specifically
	acknowledges that the above is understood by the user, and that the user specifically agrees to be
	bound and does hereby release the German Shepherd Dog Club of St. Louis, Inc. and its Web
	management team from any and all claims for any matters related to any animals referenced. It is
	the responsibility of the buyer to interview breeders prior to entering an agreement. There is no
	substitute for an educated buyer.
</p>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2 mt-6">Breeder Resources</h2>
<ul class="space-y-1 text-sm">
	<li><a href="{base}/breeders/stud-dogs" class="text-primary hover:underline">Stud Dogs</a></li>
	<li><a href="{base}/breeders/whelping-box" class="text-primary hover:underline">Whelping Box</a></li>
</ul>
