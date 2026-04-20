<script lang="ts">
	import Lightbox from './Lightbox.svelte';

	interface Props {
		images?: string[];
		alts?: string[];
	}
	let { images = [], alts = [] }: Props = $props();

	let lightboxOpen = $state(false);
	let lightboxIndex = $state(0);

	function openLightbox(index: number) {
		lightboxIndex = index;
		lightboxOpen = true;
	}
</script>

{#if images.length === 0}
	<p class="text-gray-400 text-sm italic">Photo gallery coming soon.</p>
{:else}
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
		{#each images as src, i}
			<button
				onclick={() => openLightbox(i)}
				class="block rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary"
				aria-label="View image {i + 1}"
			>
				<img
					{src}
					alt={alts[i] ?? ''}
					class="w-full aspect-square object-cover hover:opacity-80 transition-opacity"
				/>
			</button>
		{/each}
	</div>

	<Lightbox {images} {alts} bind:open={lightboxOpen} startIndex={lightboxIndex} />
{/if}
