<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import PageHeader from '$lib/components/PageHeader.svelte';

	const notFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{notFound ? 'Page Not Found' : 'Something Went Wrong'} — GSDCSTL</title>
</svelte:head>

<PageHeader title={notFound ? 'Page Not Found' : 'Something Went Wrong'} />

<div class="cms-content">
	{#if notFound}
		<p>Sorry, we couldn't find that page. It may have moved when the site was updated.</p>
	{:else}
		<p>Sorry, something went wrong loading this page. Please try again.</p>
	{/if}
	<p>
		<a href={resolve('/')}>Go to the home page</a> or use the menu above to find what you're looking
		for.
	</p>
</div>
