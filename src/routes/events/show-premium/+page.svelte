<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Show Premium — GSDCSTL</title>
</svelte:head>

<PageHeader title={data.title} />

{#if data.notice}
	<div class="bg-primary-light/10 border border-primary-light rounded p-4 mb-6 text-sm text-gray-700">
		{#if data.noticeTitle}<p class="font-semibold text-primary-dark mb-1">{data.noticeTitle}</p>{/if}
		<p class="[&_strong]:font-semibold">{@html data.notice}</p>
	</div>
{/if}

{#if data.heading}
	<h2 class="text-lg font-serif font-semibold text-primary-dark mb-3">{data.heading}</h2>
{/if}

{#if data.schedule.length}
	<table class="w-full text-sm border-collapse mb-6">
		<thead>
			<tr class="bg-primary text-white">
				<th class="text-left px-3 py-2">Date & Show</th>
				<th class="text-left px-3 py-2">Judge</th>
				<th class="text-left px-3 py-2">Event</th>
			</tr>
		</thead>
		<tbody>
			{#each data.schedule as row, i}
				<tr class={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
					<td class="px-3 py-2 border-t border-gray-200">
						<div class="font-semibold">{row.date}</div>
						{#if row.show}<div class="text-gray-500 text-xs">{row.show}</div>{/if}
					</td>
					<td class="px-3 py-2 border-t border-gray-200">{row.judge ?? ''}</td>
					<td class="px-3 py-2 border-t border-gray-200">{row.event ?? ''}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}

{#if data.notes}
	<div class="text-sm text-gray-700 mb-4 [&_p]:mb-1 [&_strong]:font-semibold [&_a]:text-primary [&_a:hover]:underline">
		{@html data.notes}
	</div>
{/if}

{#if data.secretary?.name}
	<h2 class="text-base font-serif font-semibold text-primary-dark mb-2">Show Secretary</h2>
	<p class="text-sm text-gray-700 mb-6">
		{data.secretary.name}
		{#if data.secretary.email}
			·
			<a href="mailto:{data.secretary.email}" class="text-primary hover:underline">{data.secretary.email}</a>
		{/if}
		{#if data.secretary.phone}
			·
			<a href="tel:{data.secretary.phone.replace(/\D/g, '')}" class="text-primary hover:underline">{data.secretary.phone}</a>
		{/if}
	</p>
{/if}

{#if data.buttons.length}
	<div class="flex gap-3 flex-wrap">
		{#each data.buttons as button}
			<a
				href={button.url}
				class="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary-dark transition-colors"
			>
				{button.label}
			</a>
		{/each}
	</div>
{/if}
