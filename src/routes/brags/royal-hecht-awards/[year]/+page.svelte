<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.data.year} Royal Hecht Awards — GSDCSTL</title>
</svelte:head>

<h1 class="text-2xl font-serif font-bold text-primary mb-1">
	{data.data.year} Royal Hecht Member Awards
</h1>

{#if data.data.date || data.data.chairperson}
	<p class="text-sm text-gray-500 mb-6">
		{#if data.data.date}Ceremony: {data.data.date}{/if}
		{#if data.data.date && data.data.chairperson} · {/if}
		{#if data.data.chairperson}Chairperson: {data.data.chairperson}{/if}
	</p>
{/if}

<a href={resolve('/brags/royal-hecht-awards')} class="text-sm text-primary hover:underline mb-6 inline-block">
	← All Years
</a>

{#if data.data.members.length === 0}
	<p class="text-gray-500 italic">Award data for {data.data.year} is not yet available.</p>
{:else}
	<table class="w-full text-sm border-collapse mt-4">
		<thead>
			<tr class="bg-primary text-white">
				<th class="text-left px-3 py-2 font-semibold">Member(s)</th>
				<th class="text-left px-3 py-2 font-semibold">Award / Title</th>
				<th class="text-left px-3 py-2 font-semibold">Dog</th>
			</tr>
		</thead>
		<tbody>
			{#each data.data.members as member, i}
				{#each member.awards as award, j}
					<tr class={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
						{#if j === 0}
							<td
								class="px-3 py-2 align-top border-t border-gray-200 font-medium"
								rowspan={member.awards.length}
							>
								{member.name}
							</td>
						{/if}
						<td class="px-3 py-2 align-top border-t border-gray-200 text-primary-dark">
							{award.category}
						</td>
						<td class="px-3 py-2 align-top border-t border-gray-200 text-gray-600">
							{award.detail}
						</td>
					</tr>
				{/each}
			{/each}
		</tbody>
	</table>
{/if}
