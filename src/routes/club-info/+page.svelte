<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Club Info — GSDCSTL</title>
</svelte:head>

<PageHeader title="Club Info" />

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2">Our Mission</h2>
<p class="mb-4 text-gray-700">
	The object of the Club shall be to encourage and promote the breeding of purebred German Shepherd
	Dogs and to do all possible to bring their natural qualities to perfection, to urge members and
	breeders to accept the standard of the breed as adopted by the German Shepherd Dog Club of America
	and approved by the American Kennel Club as the only standard of excellence by which the German
	Shepherd Dog shall be judged. To do all in its power to protect and advance the interests of the
	breed by encouraging sportsmanlike competition at dog shows, obedience trials, and tracking tests,
	to aid with every possible means in demonstrating the German Shepherd Dog's conspicuous ability as
	a companion, war, Red Cross, police, herding, rescue dog, and lead dog for the blind. To conduct
	shows, obedience trials, demonstrations, etc., under the rules of the American Kennel Club, to
	publish literature and periodicals in the interests of the German Shepherd Dog. The Club shall not
	be conducted or operated for a profit, and no part of any profits or remainder or residue from dues
	or donations to the Club shall inure to the benefit of any member or individual.
</p>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2 mt-6">Our History</h2>
<p class="mb-4 text-gray-700">
	The German Shepherd Dog Club of St. Louis was founded in 1926 and incorporated in 1927. We are
	affiliated with the American Kennel Club and the German Shepherd Dog Club of America. In 1960, the
	club set aside one acre to serve as a cemetery for police service dogs at the St. Louis
	Metropolitan Police Department K-9 Corp Cemetery at Fort Belle Fontaine County Park in Spanish
	Lake, MO. (Refurbished Cemetery Honors St. Louis Area Police Dogs). This cemetery is supposed to
	be near the Canine Training School, 1330 Bellefontaine Road, St. Louis, MO.
</p>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2 mt-6">Club Information</h2>
<ul class="space-y-1 text-sm">
	<li>
		<a href={resolve('/club-info/constitution-by-laws')} class="text-primary hover:underline"
			>Constitution &amp; By-Laws</a
		>
	</li>
	<li>
		<a href={resolve('/club-info/club-contacts')} class="text-primary hover:underline">Club Contacts</a>
	</li>
	<li>
		<a href={resolve('/club-info/club-membership')} class="text-primary hover:underline">Club Membership</a>
	</li>
</ul>
