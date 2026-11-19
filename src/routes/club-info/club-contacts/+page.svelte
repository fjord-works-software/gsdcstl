<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Club Contacts — GSDCSTL</title>
</svelte:head>

<h1 class="text-2xl font-display font-bold text-primary mb-1">Officers & Board Members</h1>
<p class="text-gray-500 text-sm mb-6">
	{data.contacts.year} · Club Phone:
	<a href="tel:{data.contacts.phone.replace(/\D/g, '')}" class="text-primary hover:underline">
		{data.contacts.phone}
	</a>
</p>

<h2 class="text-lg font-display font-semibold text-primary-dark mb-3">Officers</h2>
<table class="w-full text-sm border-collapse mb-8">
	<tbody>
		{#each data.contacts.officers as officer, i}
			<tr class={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
				<td class="px-3 py-2 font-semibold text-primary-dark border-t border-gray-200 w-48">{officer.title}</td>
				<td class="px-3 py-2 border-t border-gray-200">{officer.name}</td>
				<td class="px-3 py-2 border-t border-gray-200">
					<a href="mailto:{officer.email}" class="text-primary hover:underline">{officer.email}</a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<h2 class="text-lg font-display font-semibold text-primary-dark mb-3">Board of Directors</h2>
<ul class="list-disc pl-6 space-y-1 text-gray-700">
	{#each data.contacts.board as member}
		<li>{member.name}</li>
	{/each}
</ul>
