<script lang="ts">
	import { slide } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import { navItems } from '$lib/nav';

	let open = $state(false);
	let expanded = $state(new Set<string>());

	function toggle(label: string) {
		if (expanded.has(label)) {
			expanded.delete(label);
		} else {
			expanded.add(label);
		}
		expanded = new Set(expanded);
	}

	function close() {
		open = false;
	}
</script>

<div class="bg-primary-dark md:hidden border-b-4 border-accent">
	<button
		onclick={() => (open = !open)}
		class="w-full flex items-center justify-between px-4 py-3 text-white"
		aria-expanded={open}
		aria-label="Toggle navigation menu"
	>
		<span class="font-serif text-sm font-semibold">Menu</span>
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			{#if open}
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			{:else}
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			{/if}
		</svg>
	</button>

	{#if open}
		<ul transition:slide={{ duration: 200 }} class="border-t border-primary">
			{#each navItems as item}
				<li class="border-b border-primary last:border-b-0">
					{#if item.href && item.children}
						<div class="flex items-stretch">
							<a
								href={resolve(item.href as any)}
								onclick={close}
								class="flex-1 px-4 py-2.5 text-white text-sm hover:bg-primary"
							>
								{item.label}
							</a>
							<button
								onclick={() => toggle(item.label)}
								class="px-3 py-2.5 text-white hover:bg-primary border-l border-primary"
								aria-label="Expand {item.label} submenu"
							>
								<svg
									class="w-4 h-4 transition-transform"
									class:rotate-180={expanded.has(item.label)}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</button>
						</div>
						{#if expanded.has(item.label)}
							<ul transition:slide={{ duration: 150 }} class="bg-primary">
								{#each item.children as child}
									<li>
										<a
											href={resolve(child.href as any)}
											onclick={close}
											class="block px-8 py-2 text-white text-sm hover:bg-primary-dark"
										>
											{child.label}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					{:else if item.href}
						<a
							href={resolve(item.href as any)}
							onclick={close}
							class="block px-4 py-2.5 text-white text-sm hover:bg-primary"
						>
							{item.label}
						</a>
					{:else}
						<button
							onclick={() => toggle(item.label)}
							class="w-full flex items-center justify-between px-4 py-2.5 text-white text-sm hover:bg-primary"
						>
							{item.label}
							<svg
								class="w-4 h-4 transition-transform"
								class:rotate-180={expanded.has(item.label)}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						{#if expanded.has(item.label) && item.children}
							<ul transition:slide={{ duration: 150 }} class="bg-primary">
								{#each item.children as child}
									<li>
										<a
											href={resolve(child.href as any)}
											onclick={close}
											class="block px-8 py-2 text-white text-sm hover:bg-primary-dark"
										>
											{child.label}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</div>
