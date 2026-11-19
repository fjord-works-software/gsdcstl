<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
	}
	let { title, subtitle = '' }: Props = $props();
</script>

<div class="mb-8">
	<h1 class="font-display text-3xl font-extrabold tracking-tight text-primary-dark sm:text-4xl">{title}</h1>
	{#if subtitle}
		<p class="mt-2 text-[15px] font-semibold text-accent-dark">{subtitle}</p>
	{/if}
</div>
