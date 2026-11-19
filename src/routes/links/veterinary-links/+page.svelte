<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Veterinary Links — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} />

<div class="space-y-8 text-sm">
	{#each data.sections as section}
		<section>
			<h2 class="text-base font-display font-semibold text-primary-dark border-b border-gray-200 pb-1 mb-2">
				{section.heading}
			</h2>
			<ul class="space-y-1">
				{#each section.links ?? [] as link}
					<li>
						{#if link.url}
							<a href={link.url} class="text-primary hover:underline" target="_blank" rel="noopener">{link.label}</a>
						{:else}
							<span class="text-gray-600">{link.label}</span>
						{/if}
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</div>
