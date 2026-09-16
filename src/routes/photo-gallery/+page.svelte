<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.title} — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} />

<div class="cms-content mb-8">
	{@html data.body}
</div>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2 mt-6">Photo Galleries</h2>
{#if data.galleries.length === 0}
	<p class="text-gray-400 text-sm italic">No galleries yet.</p>
{:else}
	<ul class="space-y-2 text-sm">
		{#each data.galleries as gallery}
			<li>
				<a
					href={resolve('/photo-gallery/[slug]', { slug: gallery.slug })}
					class="text-primary hover:underline font-medium"
				>
					{gallery.title}
				</a>
				{#if gallery.subtitle}
					<span class="text-gray-600"> — {gallery.subtitle}</span>
				{/if}
				<span class="text-gray-500"> ({gallery.count} photos)</span>
			</li>
		{/each}
	</ul>
{/if}
