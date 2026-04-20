<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Events — GSDCSTL</title>
</svelte:head>

<PageHeader title="Events" />

<p class="mb-6 text-gray-700">
	Please click <a href="/events/show-premium" class="text-primary hover:underline">Show Premium</a>
	for specialty entries, Temperament Test information, and info for the Midwest Futurity.
</p>

<ul class="space-y-1 text-sm">
	<li>
		<a href="/events/show-premium" class="text-primary hover:underline">Show Premium</a>
	</li>
	<li>
		<a href="/events/event-results" class="text-primary hover:underline">Event Results</a>
	</li>
</ul>
