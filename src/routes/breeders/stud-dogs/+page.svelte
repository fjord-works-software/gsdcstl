<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Stud Dogs — GSDCSTL</title>
</svelte:head>

<PageHeader title="Stud Dogs" />

<div class="space-y-8">
	{#each data.studs as dog}
		<article class="border border-gray-200 rounded p-5">
			<h2 class="text-lg font-display font-bold text-primary-dark mb-1">{dog.registered_name}</h2>
			<p class="text-gray-500 text-sm mb-3">
				Call name: <strong>"{dog.call_name}"</strong>{#if dog.dob} · DOB: {dog.dob}{/if}
			</p>
			<dl class="text-sm text-gray-700 space-y-1">
				{#if dog.stud_fee}<div class="flex gap-2"><dt class="font-semibold w-28 shrink-0">Stud fee:</dt><dd>{dog.stud_fee}</dd></div>{/if}
				{#if dog.requirements}<div class="flex gap-2"><dt class="font-semibold w-28 shrink-0">Requirements:</dt><dd>{dog.requirements}</dd></div>{/if}
				{#if dog.frozen_semen}<div class="flex gap-2"><dt class="font-semibold w-28 shrink-0">Frozen semen:</dt><dd>{dog.frozen_semen}</dd></div>{/if}
				{#if dog.sire}<div class="flex gap-2"><dt class="font-semibold w-28 shrink-0">Sire:</dt><dd>{dog.sire}</dd></div>{/if}
				{#if dog.dam}<div class="flex gap-2"><dt class="font-semibold w-28 shrink-0">Dam:</dt><dd>{dog.dam}</dd></div>{/if}
				<div class="flex gap-2"><dt class="font-semibold w-28 shrink-0">Owner:</dt><dd>{dog.owner}</dd></div>
				<div class="flex gap-2"><dt class="font-semibold w-28 shrink-0">Email:</dt><dd><a href="mailto:{dog.email}" class="text-primary hover:underline">{dog.email}</a></dd></div>
				{#if dog.phone}<div class="flex gap-2"><dt class="font-semibold w-28 shrink-0">Phone:</dt><dd><a href="tel:{dog.phone.replace(/\D/g, '')}" class="text-primary hover:underline">{dog.phone}</a></dd></div>{/if}
			</dl>
			{#if dog.notes}<p class="text-xs text-gray-500 mt-3">{dog.notes}</p>{/if}
		</article>
	{/each}
</div>
