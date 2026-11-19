<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { navItems, type NavItem } from '$lib/nav';

	let { items = navItems }: { items?: NavItem[] } = $props();

	// The logo already links home, so the desktop bar leaves Home out.
	const shown = $derived(items.filter((i) => i.href !== '/'));

	function isActive(href: string) {
		return page.url.pathname === resolve(href as any);
	}

	function isCurrent(item: NavItem) {
		return (
			(item.href !== undefined && isActive(item.href)) ||
			(item.children ?? []).some((c) => c.href && isActive(c.href))
		);
	}
</script>

<nav aria-label="Main">
	<ul class="flex items-center gap-0.5">
		{#each shown as item}
			<li class="relative group">
				{#if item.href}
					<a
						href={resolve(item.href as any)}
						class={[
							'flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2.5 text-[15px] font-medium text-parchment hover:bg-white/10 hover:text-white transition-colors',
							isCurrent(item) && 'bg-white/10 text-white'
						]}
						aria-current={item.href && isActive(item.href) ? 'page' : undefined}
					>
						{item.label}
						{#if item.children}
							<svg class="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						{/if}
					</a>
				{:else}
					<span class="flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2.5 text-[15px] font-medium text-parchment">
						{item.label}
					</span>
				{/if}
				{#if item.children}
					<!-- pt-2 bridges the gap so the menu stays open while the pointer moves into it -->
					<div class="absolute left-0 top-full hidden pt-2 group-hover:block group-focus-within:block">
						<ul class="min-w-56 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/5">
							{#each item.children as child}
								<li>
									<a
										href={resolve(child.href as any)}
										class="block rounded-xl px-4 py-2.5 text-[15px] text-ink hover:bg-sage transition-colors"
										class:font-semibold={child.href && isActive(child.href)}
										aria-current={child.href && isActive(child.href) ? 'page' : undefined}
									>
										{child.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
