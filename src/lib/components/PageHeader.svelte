<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
	}
	let { title, subtitle = '' }: Props = $props();
</script>

<div class="mb-6 pb-4 border-b border-gray-200">
	<h1 class="text-2xl font-serif font-bold text-primary">{title}</h1>
	{#if subtitle}
		<p class="text-gray-500 text-sm mt-1">{subtitle}</p>
	{/if}
</div>
