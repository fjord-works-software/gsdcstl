<script lang="ts">
	import { page } from '$app/stores';
	import { navItems } from '$lib/nav';

	function isActive(href: string) {
		return $page.url.pathname === href;
	}

	function hasActiveChild(children: typeof navItems) {
		return children.some((c) => c.href && isActive(c.href));
	}
</script>

<nav class="bg-primary-dark">
	<ul class="max-w-5xl mx-auto px-4 flex flex-wrap">
		{#each navItems as item}
			<li class="relative group">
				{#if item.href && item.children}
					<a
						href={item.href}
						class="flex items-center gap-1 px-3 py-2.5 text-sm text-white hover:bg-primary transition-colors"
						class:font-bold={isActive(item.href) || hasActiveChild(item.children)}
					>
						{item.label}
						<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</a>
					<ul
						class="absolute left-0 top-full hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-b min-w-52 z-20"
					>
						{#each item.children as child}
							<li>
								<a
									href={child.href}
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
									class:font-bold={child.href && isActive(child.href)}
								>
									{child.label}
								</a>
							</li>
						{/each}
					</ul>
				{:else if item.href}
					<a
						href={item.href}
						class="block px-3 py-2.5 text-sm text-white hover:bg-primary transition-colors"
						class:font-bold={isActive(item.href)}
					>
						{item.label}
					</a>
				{:else}
					<button
						class="flex items-center gap-1 px-3 py-2.5 text-sm transition-colors hover:bg-primary"
						class:text-white={!hasActiveChild(item.children ?? [])}
						class:font-bold={hasActiveChild(item.children ?? [])}
						class:text-primary-light={hasActiveChild(item.children ?? [])}
					>
						{item.label}
						<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if item.children}
						<ul
							class="absolute left-0 top-full hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-b min-w-52 z-20"
						>
							{#each item.children as child}
								<li>
									<a
										href={child.href}
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
										class:font-bold={child.href && isActive(child.href)}
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
</nav>
