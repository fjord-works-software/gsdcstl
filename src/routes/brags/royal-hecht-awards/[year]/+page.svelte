<script lang="ts">
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	const { year, date, chairperson, members } = data.data;
</script>

<svelte:head>
	<title>{year} Royal Hecht Awards — GSDCSTL</title>
</svelte:head>

<h1 class="text-2xl font-serif font-bold text-primary mb-1">
	{year} Royal Hecht Member Awards
</h1>

{#if date || chairperson}
	<p class="text-sm text-gray-500 mb-6">
		{#if date}Ceremony: {date}{/if}
		{#if date && chairperson} · {/if}
		{#if chairperson}Chairperson: {chairperson}{/if}
	</p>
{/if}

<a href="{base}/brags/royal-hecht-awards" class="text-sm text-primary hover:underline mb-6 inline-block">
	← All Years
</a>

{#if members.length === 0}
	<p class="text-gray-500 italic">Award data for {year} is not yet available.</p>
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
			{#each members as member, i}
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
