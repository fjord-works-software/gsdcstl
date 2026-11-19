<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	// Each entry points at a section of the site a newcomer is most likely after.
	const tiles = [
		{
			href: '/club-info/club-membership',
			title: 'Become a member',
			text: 'Dues, sponsors and how the application works.',
			icon: 'members',
			featured: true
		},
		{
			href: '/events',
			title: 'Shows & matches',
			text: 'Specialty shows, obedience and rally trials, premiums and results.',
			icon: 'ribbon'
		},
		{
			href: '/education',
			title: 'Learn about the breed',
			text: 'Seminars on tracking, grooming, health and training, plus vet resources.',
			icon: 'book'
		},
		{
			href: '/breeders',
			title: 'Find a puppy',
			text: 'Member breeders, stud dogs and Whelping Box litter listings.',
			icon: 'home'
		}
	] as const;
</script>

<svelte:head>
	<title>German Shepherd Dog Club of St. Louis</title>
	<meta
		name="description"
		content="The German Shepherd Dog Club of St. Louis, Inc. — breeders, competitors and dog lovers serving Greater St. Louis since 1927."
	/>
</svelte:head>

<!-- Centennial hero -->
<section class="bg-primary-dark text-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24 flex flex-wrap items-center gap-12 lg:gap-14">
		<div class="flex min-w-0 flex-[999_1_480px] flex-col gap-6">
			{#if data.hero.eyebrow}
				<p class="text-[13px] font-semibold uppercase tracking-[0.24em] text-accent">{data.hero.eyebrow}</p>
			{/if}
			<h1 class="font-display text-[40px] font-extrabold leading-[1.04] tracking-tight text-balance sm:text-6xl lg:text-[68px]">
				<!-- An ampersand in the CMS heading is picked out in gold, as on the logo ribbon. -->
				{#each data.hero.heading.split('&') as part, i}
					{#if i > 0}<span class="text-accent">&amp;</span>{/if}{part}
				{/each}
			</h1>
			<p class="max-w-xl text-lg leading-relaxed text-parchment-muted sm:text-[19px]">{data.hero.text}</p>
			<div class="mt-2 flex flex-wrap gap-3">
				<a
					href={resolve('/calendar')}
					class="rounded-full bg-accent px-7 py-4 font-semibold text-primary-dark hover:bg-accent-light transition-colors"
				>
					Come to a Meeting
				</a>
				<a
					href={resolve('/club-info/club-membership')}
					class="rounded-full border border-primary-light/70 px-7 py-4 font-semibold text-white hover:border-parchment transition-colors"
				>
					Become a Member
				</a>
			</div>
		</div>
		<div class="flex flex-[1_1_300px] justify-center">
			<!-- A square, clipped circle: the logo PNG has an opaque white background, so its corners are trimmed off. -->
			<div class="flex aspect-square w-72 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_0_0_10px_#2e4a36,0_0_0_11px_#4f6951] sm:w-[400px]">
				<img
					src={resolve('/images/gsdcstl-100-year-logo-large.png' as any)}
					alt="German Shepherd Dog Club of St. Louis — 100 Years, 1927–2027: A Century of Companionship, Excellence & Heritage"
					class="block h-auto w-[84%]"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Centennial band -->
<section class="bg-accent text-primary-dark">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
		<p class="font-display text-[22px] font-bold">{data.centennial.heading}</p>
		<p class="text-[15px]">
			{data.centennial.text}
			{#if data.centennial.link}
				<a href={data.centennial.link} class="ml-1 font-semibold underline-offset-2 hover:underline">{data.centennial.link_label ?? 'Learn more'} →</a>
			{/if}
		</p>
	</div>
</section>

<!-- Meetings -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
	<div class="flex flex-wrap items-center justify-between gap-x-10 gap-y-5 rounded-[22px] bg-white px-6 py-6 sm:px-7">
		<div class="flex items-center gap-4">
			<div class="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-sage">
				<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary" aria-hidden="true">
					<rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
				</svg>
			</div>
			<div>
				<h2 class="font-display text-xl font-bold text-primary-dark">We meet the {data.meeting.when}</h2>
				<p class="text-[15px] text-muted">{data.meeting.time} · {data.meeting.place}</p>
			</div>
		</div>
		<div class="flex flex-wrap items-center gap-x-6 gap-y-2">
			<a href={resolve('/calendar')} class="py-2 font-semibold text-primary hover:underline">Full calendar →</a>
			<a href={data.meeting.directions} target="_blank" rel="noopener" class="py-2 font-semibold text-primary hover:underline">
				Get directions →
			</a>
		</div>
	</div>
</section>

<!-- Ways in -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
	<h2 class="font-display text-4xl font-extrabold tracking-tight text-primary-dark sm:text-[44px]">
		What are you looking for?
	</h2>
	<div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each tiles as tile}
			<a
				href={resolve(tile.href)}
				class="group flex min-h-52 flex-col gap-3.5 rounded-[22px] p-7 transition-transform hover:-translate-y-0.5 {'featured' in tile
					? 'bg-primary text-white'
					: 'bg-white text-primary-dark'}"
			>
				<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={'featured' in tile ? 'text-accent-light' : 'text-primary'} aria-hidden="true">
					{#if tile.icon === 'members'}
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
					{:else if tile.icon === 'ribbon'}
						<circle cx="12" cy="8" r="6" /><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
					{:else if tile.icon === 'book'}
						<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
					{:else}
						<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
					{/if}
				</svg>
				<span class="font-display text-2xl font-bold group-hover:underline">{tile.title}</span>
				<span class="mt-auto text-[15px] leading-normal {'featured' in tile ? 'text-sage' : 'text-muted'}">{tile.text}</span>
			</a>
		{/each}
	</div>
</section>

<!-- About -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
	<!-- The large logo now lives in the hero, so this card is text only. -->
	<div class="rounded-[28px] bg-white p-7 sm:p-12">
		<div class="max-w-3xl">
			<h2 class="font-display text-4xl font-extrabold tracking-tight text-primary-dark sm:text-[44px]">{data.title}</h2>
			<div class="cms-content mt-4 text-[17px] leading-relaxed">
				{@html data.body}
			</div>
		</div>
	</div>
</section>

<!-- Club life -->
{#if data.clubPhotos.length > 0}
	<section class="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
		<div class="flex flex-wrap items-center gap-x-14 gap-y-10">
			<div class="flex min-w-0 flex-[1_1_340px] flex-col gap-4">
				<p class="text-sm font-semibold text-accent-dark">Club life</p>
				<h2 class="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-primary-dark sm:text-[44px]">
					Picnics, parties and plenty of dogs.
				</h2>
				<p class="text-[17px] leading-relaxed text-muted">
					Every October brings the club picnic and B Match; December is our Christmas party. See what you’ve been missing.
				</p>
				<a href={resolve('/photo-gallery')} class="mt-1 font-semibold text-primary hover:underline">Browse the photo gallery →</a>
			</div>
			<div class="grid min-w-0 flex-[2_1_520px] grid-cols-2 gap-4">
				{#each data.clubPhotos as photo, i}
					<a
						href={resolve('/photo-gallery/[slug]', { slug: photo.slug })}
						class="group relative block overflow-hidden rounded-[22px] {i === 0 ? 'row-span-2' : ''}"
					>
						<img
							src={photo.src}
							alt={photo.alt}
							loading="lazy"
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] {i === 0
								? 'aspect-[4/5]'
								: 'aspect-[4/3]'}"
						/>
						<span class="absolute bottom-3 left-3 rounded-full bg-white/95 px-3.5 py-1.5 text-sm font-semibold text-primary-dark">
							{photo.gallery}
						</span>
					</a>
				{/each}
				<a
					href={resolve('/photo-gallery')}
					class="group flex flex-col justify-end gap-1.5 rounded-[22px] bg-primary p-6 text-white"
				>
					<span class="font-display text-[22px] font-bold group-hover:underline">More galleries →</span>
					<span class="text-[15px] text-sage">Awards ceremonies, matches and club events going back years.</span>
				</a>
			</div>
		</div>
	</section>
{/if}

<!-- Brags -->
{#if data.latestBrags.length > 0}
	<section class="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 sm:pt-24">
		<div class="flex flex-wrap items-end justify-between gap-3">
			<h2 class="font-display text-4xl font-extrabold tracking-tight text-primary-dark sm:text-[44px]">Brag board</h2>
			<a href={resolve('/brags')} class="font-semibold text-primary hover:underline">See all brags →</a>
		</div>
		<div class="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.latestBrags as brag}
				<a href={resolve('/brags')} class="group flex flex-col gap-3.5 rounded-[22px] bg-white p-3">
					<img
						src={brag.src}
						alt={brag.nickname ?? brag.registeredName}
						loading="lazy"
						class="aspect-[4/3] w-full rounded-[14px] object-cover"
					/>
					<span class="flex flex-col gap-1 px-2.5 pb-3">
						{#if brag.nickname}
							<span class="font-display text-[21px] font-bold text-primary-dark group-hover:underline">{brag.nickname}</span>
						{/if}
						<span class="text-sm text-muted">{brag.registeredName}</span>
					</span>
				</a>
			{/each}
		</div>
	</section>
{:else}
	<div class="pb-24"></div>
{/if}
