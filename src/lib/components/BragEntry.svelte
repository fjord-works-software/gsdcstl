<script lang="ts">
	export interface Placement {
		title: string;
		dog: string;
		sire?: string;
		dam?: string;
		breeders?: string;
		owners?: string;
	}
	interface Props {
		show: string;
		judge: string;
		placements: Placement[];
	}
	let { show, judge, placements }: Props = $props();
</script>

<section class="border border-gray-200 rounded p-4">
	<h3 class="font-semibold text-primary-dark mb-1">{show} — Judge: {judge}</h3>
	<dl class="space-y-2 mt-2 text-sm text-gray-700">
		{#each placements as p}
			<div>
				<dt class="font-semibold">{p.title}</dt>
				<dd class="ml-4">{p.dog}</dd>
				{#if p.sire}<dd class="ml-4 text-gray-500 text-xs">Sire: {p.sire}</dd>{/if}
				{#if p.dam}<dd class="ml-4 text-gray-500 text-xs">Dam: {p.dam}</dd>{/if}
				{#if p.breeders}<dd class="ml-4 text-gray-500 text-xs">Breeders: {p.breeders}</dd>{/if}
				{#if p.owners}<dd class="ml-4 text-gray-500 text-xs">Owners: {p.owners}</dd>{/if}
			</div>
		{/each}
	</dl>
</section>
