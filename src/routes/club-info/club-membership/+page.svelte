<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Club Membership — GSDCSTL</title>
</svelte:head>

<PageHeader title="How to Join" />

<p class="text-gray-700 mb-4">
	We welcome anyone interested in the German Shepherd Dog. To become a member of the German Shepherd
	Dog Club of St. Louis, Inc.:
</p>

<ol class="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
	<li>Obtain a membership application (link below).</li>
	<li>Submit the application with two sponsors to the recording secretary or a club officer at a meeting.</li>
	<li>Pay yearly dues: <strong>$30 individual</strong> or <strong>$50 household</strong>.</li>
	<li>Sign the guest book at a club meeting.</li>
	<li>Application is read at the next two club meetings.</li>
	<li>A vote on membership is taken at the second reading (2/3 affirmative required).</li>
</ol>

<div class="flex gap-4 flex-wrap">
	<a
		href="/Documents/GSDApplication.pdf"
		class="inline-block bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary-dark transition-colors"
	>
		Download Application (PDF)
	</a>
	<a href="/club-info/constitution-by-laws" class="inline-block text-primary hover:underline text-sm py-2">
		View Constitution & By-Laws →
	</a>
</div>
