<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Club Info — GSDCSTL</title>
</svelte:head>

<PageHeader title="Club Info" />

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2">Our History</h2>
<p class="mb-4 text-gray-700">
	The German Shepherd Dog Club of St. Louis was founded in 1926 and incorporated in 1927. We are
	affiliated with the American Kennel Club and the German Shepherd Dog Club of America.
</p>
<p class="mb-4 text-gray-700">
	In 1960, the club set aside one acre to serve as a cemetery for police service dogs at the St.
	Louis Metropolitan Police Department K-9 Corp Cemetery at Fort Belle Fontaine County Park in
	Spanish Lake, MO. This cemetery is near the Canine Training School at 1330 Bellefontaine Road,
	St. Louis, MO.
</p>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2 mt-6">Club Information</h2>
<ul class="space-y-1 text-sm">
	<li>
		<a href="/club-info/constitution-by-laws" class="text-primary hover:underline"
			>Constitution &amp; By-Laws</a
		>
	</li>
	<li>
		<a href="/club-info/club-contacts" class="text-primary hover:underline">Club Contacts</a>
	</li>
	<li>
		<a href="/club-info/club-membership" class="text-primary hover:underline">Club Membership</a>
	</li>
</ul>
