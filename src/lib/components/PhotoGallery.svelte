<script lang="ts">
	interface Props {
		images?: string[];
	}
	let { images = [] }: Props = $props();
</script>

{#if images.length === 0}
	<p class="text-gray-400 text-sm italic">Photo gallery coming soon.</p>
{:else}
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
		{#each images as src}
			<img {src} alt="" class="w-full aspect-square object-cover rounded cursor-pointer hover:opacity-80 transition-opacity" />
		{/each}
	</div>
{/if}
