<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Photo Gallery — GSDCSTL</title>
</svelte:head>

<PageHeader title="Photo Gallery" />

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-1">
	2013 GSDC of St. Louis Annual Awards Ceremony and Dinner
</h2>
<p class="text-sm text-gray-500 mb-4">Held on February 21, 2014</p>

<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-center mb-8">
	<div>
		<img src={resolve('/images/awards-2013/02212014marilee.jpg' as any)} alt="Marilee Wilkinson" class="w-full rounded shadow mb-1" />
		<p class="font-medium">Marilee Wilkinson</p>
		<p class="text-gray-500">Awards Master of Ceremonies</p>
	</div>
	<div>
		<img src={resolve('/images/awards-2013/02212014steveandrampage.jpg' as any)} alt="Steve and Rampage" class="w-full rounded shadow mb-1" />
		<p class="font-medium">Steve and Rampage</p>
		<p class="text-gray-500">Royal Hecht Bred By Exhibitor Award</p>
	</div>
	<div>
		<img src={resolve('/images/awards-2013/02212014judylianaandcaballo.jpg' as any)} alt="Judy D. and Liana and Caballo" class="w-full rounded shadow mb-1" />
		<p class="font-medium">Judy D. and Liana and Caballo</p>
		<p class="text-gray-500">Select Excellent #7 Award</p>
	</div>
	<div>
		<img src={resolve('/images/awards-2013/02212014billandgus.jpg' as any)} alt="Bill and Gus" class="w-full rounded shadow mb-1" />
		<p class="font-medium">Bill and Gus</p>
		<p class="text-gray-500">CGC, ORT, and TDI Awards</p>
	</div>
	<div>
		<img src={resolve('/images/awards-2013/02212014steveandcharmin.jpg' as any)} alt="Steve and Charmin" class="w-full rounded shadow mb-1" />
		<p class="font-medium">Steve and Charmin</p>
		<p class="text-gray-500">2013 Grand Champion</p>
	</div>
	<div>
		<img src={resolve('/images/awards-2013/02212014glenngailkellyandmariah.jpg' as any)} alt="Glenn, Gail S, Kelley and Mariah" class="w-full rounded shadow mb-1" />
		<p class="font-medium">Glenn, Gail S, Kelley and Mariah</p>
		<p class="text-gray-500">2013 Champion</p>
	</div>
	<div>
		<img src={resolve('/images/awards-2013/02212014steveandblahblah.jpg' as any)} alt="Steve and Blah Blah" class="w-full rounded shadow mb-1" />
		<p class="font-medium">Steve and Blah Blah</p>
		<p class="text-gray-500">2013 GSDC of St. Louis Best Puppy Award</p>
	</div>
	<div>
		<img src={resolve('/images/awards-2013/02212014geralynandchance.jpg' as any)} alt="Geralyn and Chance" class="w-full rounded shadow mb-1" />
		<p class="font-medium">Geralyn and Chance</p>
		<p class="text-gray-500">Beginner Novice and Companion Dog — 2013 GSDC StL Novice Obedience Award</p>
	</div>
	<div>
		<img src={resolve('/images/awards-2013/02212014judyandteko.jpg' as any)} alt="Judy M and Teko" class="w-full rounded shadow mb-1" />
		<p class="font-medium">Judy M and Teko</p>
		<p class="text-gray-500">Junior Herding Dog, Herding PreTrial, 2013 Champion</p>
	</div>
	<div>
		<img src={resolve('/images/awards-2013/02212014steveanddingle.jpg' as any)} alt="Steve and Dingleberry" class="w-full rounded shadow mb-1" />
		<p class="font-medium">Steve and Dingleberry</p>
		<p class="text-gray-500">2013 Champion</p>
	</div>
	<div>
		<img src={resolve('/images/awards-2013/02212014steveandpearl.jpg' as any)} alt="Steve and Pearl" class="w-full rounded shadow mb-1" />
		<p class="font-medium">Steve and Pearl</p>
		<p class="text-gray-500">2013 Register of Merit</p>
	</div>
</div>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2 mt-6">Photo Galleries</h2>
<ul class="space-y-2 text-sm">
	<li>
		<a href={resolve('/photo-gallery/gallery-1')} class="text-primary hover:underline">
			Gallery 1 — 2026 Awards Ceremony
		</a>
	</li>
	<li>
		<a href={resolve('/photo-gallery/gallery-2')} class="text-primary hover:underline">
			Gallery 2 — 2013 K9 Awards Ceremony
		</a>
	</li>
	<li>
		<a href={resolve('/photo-gallery/gallery-3')} class="text-primary hover:underline">
			Gallery 3 — 2013 Awards Ceremony
		</a>
	</li>
	<li>
		<a href={resolve('/photo-gallery/gallery-4')} class="text-primary hover:underline">
			Gallery 4 — 2011 Royal Hecht Awards Ceremony
		</a>
	</li>
</ul>
