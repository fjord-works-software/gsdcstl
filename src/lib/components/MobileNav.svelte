<script lang="ts">
	import { slide } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import { navItems, type NavItem } from '$lib/nav';

	let { items = navItems }: { items?: NavItem[] } = $props();

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

<div class="xl:hidden">
	<button
		onclick={() => (open = !open)}
		class="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15"
		aria-expanded={open}
		aria-controls="mobile-menu"
		aria-label={open ? 'Close menu' : 'Open menu'}
	>
		<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			{#if open}
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			{:else}
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			{/if}
		</svg>
	</button>

	{#if open}
		<nav
			id="mobile-menu"
			aria-label="Main"
			transition:slide={{ duration: 200 }}
			class="absolute inset-x-0 top-full px-4 sm:px-6 pb-4"
		>
			<ul class="rounded-3xl bg-white p-2 shadow-xl ring-1 ring-black/5">
				{#each items as item}
					<li>
						<div class="flex items-stretch">
							{#if item.href}
								<a
									href={resolve(item.href as any)}
									onclick={close}
									class="flex-1 rounded-2xl px-4 py-3 font-medium text-ink hover:bg-sage"
								>
									{item.label}
								</a>
							{:else}
								<span class="flex-1 px-4 py-3 font-medium text-ink">{item.label}</span>
							{/if}
							{#if item.children}
								<button
									onclick={() => toggle(item.label)}
									class="rounded-2xl px-4 text-ink hover:bg-sage"
									aria-expanded={expanded.has(item.label)}
									aria-label="Show {item.label} pages"
								>
									<svg
										class="w-5 h-5 transition-transform"
										class:rotate-180={expanded.has(item.label)}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
									</svg>
								</button>
							{/if}
						</div>
						{#if item.children && expanded.has(item.label)}
							<ul transition:slide={{ duration: 150 }} class="mb-1 ml-4 border-l-2 border-sage pl-2">
								{#each item.children as child}
									<li>
										<a
											href={resolve(child.href as any)}
											onclick={close}
											class="block rounded-2xl px-4 py-2.5 text-muted hover:bg-sage hover:text-ink"
										>
											{child.label}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
				<li class="p-2">
					<a
						href={resolve('/club-info/club-membership')}
						onclick={close}
						class="block rounded-full bg-accent px-5 py-3 text-center font-semibold text-primary-dark hover:bg-accent-light"
					>
						Join Us
					</a>
				</li>
			</ul>
		</nav>
	{/if}
</div>
