<script lang="ts">
	interface Row {
		date: string;
		title: string;
		dog: string;
		member: string;
	}
	interface Props {
		rows: Row[];
	}
	let { rows }: Props = $props();
</script>

<table class="w-full text-sm border-collapse">
	<thead>
		<tr class="bg-primary text-white">
			<th class="text-left px-3 py-2">Date</th>
			<th class="text-left px-3 py-2">Title</th>
			<th class="text-left px-3 py-2">Dog</th>
			<th class="text-left px-3 py-2">Member(s)</th>
		</tr>
	</thead>
	<tbody>
		{#each rows as row, i}
			<tr class={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
				<td class="px-3 py-2 border-t border-gray-200 text-gray-500">{row.date}</td>
				<td class="px-3 py-2 border-t border-gray-200 font-medium text-primary-dark">{row.title}</td>
				<td class="px-3 py-2 border-t border-gray-200">{row.dog}</td>
				<td class="px-3 py-2 border-t border-gray-200 text-gray-600">{row.member}</td>
			</tr>
		{/each}
	</tbody>
</table>
