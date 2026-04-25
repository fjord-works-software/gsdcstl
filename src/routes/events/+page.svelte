<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Events — GSDCSTL</title>
</svelte:head>

<PageHeader title="Events" />

<p class="mb-6 text-gray-700">
	Please click <a href={resolve('/events/show-premium')} class="text-primary hover:underline">Show Premium</a>
	for specialty entries, Temperament Test and info. for the Midwest Futurity.
</p>

<img
	src={resolve('/images/event-flyer-may25.jpg' as any)}
	alt="Event Flyer"
	class="max-w-full rounded shadow"
/>
