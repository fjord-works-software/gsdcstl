<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Brags — GSDCSTL</title>
</svelte:head>

<PageHeader title="Brags" subtitle="Member's Brag Bulletin Board" />

<div class="space-y-8">

	<div>
		<img src={resolve('/images/blondie-brag.jpg' as any)} alt="Blondie" class="max-w-xs rounded shadow mb-3" />
		<h3 class="font-semibold text-primary-dark">
			CH Guardians Gold Medal V Rochill OFA H/E/TH — "Blondie"
		</h3>
		<dl class="text-sm text-gray-700 mt-1 space-y-0.5">
			<div><dt class="inline font-medium">Breeder/Owners:</dt> <dd class="inline">Jayne Faupl &amp; Julia Foster</dd></div>
			<div><dt class="inline font-medium">Handler:</dt> <dd class="inline">Julia Foster-Hess</dd></div>
			<div><dt class="inline font-medium">Sire:</dt> <dd class="inline">GCH Rochills Jax V Guardian Farm HSAds HXAs CA</dd></div>
			<div><dt class="inline font-medium">Dam:</dt> <dd class="inline">Guardians Olympic Gold V Rochill OFA H/E</dd></div>
		</dl>
		<ul class="mt-2 text-sm text-gray-600 space-y-0.5">
			<li>Paducah KC — 4/6/19 Select Bitch under Houston Clark</li>
			<li>Paducah KC — 4/7/19 Select Bitch under Jon Cole</li>
			<li>Janesville Beloit KC — 5/4/19 Best Op under R.E. Lake</li>
			<li>Badgerland KC — 5/3/19 Select Bitch under Sulie Greendale-Paveza</li>
			<li>Badgerland KC — 5/5/19 Select Bitch under Linda Robey</li>
			<li>Illinois Valley KC of Peoria — 5/24/19 Best of Breed under Mrs. D. L. Melgreen</li>
			<li>Mid Del Tinker KC — 6/8/19 Select Bitch (major) under Patricia Trotter</li>
			<li>Lawton Dog Fanciers — 6/29/19 Best Op (major) under W. C. Stebbins</li>
			<li>Waukesha KC — 7/27/19 Select Bitch (major) under Michael Gelinas</li>
			<li>Waukesha KC — 7/28/19 Select Bitch (major) under Marilyn Van Vleidt</li>
		</ul>
	</div>

	<div>
		<img src={resolve('/images/vee-brag.jpg' as any)} alt="Vee" class="max-w-xs rounded shadow mb-3" />
		<h3 class="font-semibold text-primary-dark">
			Guardians 2Kiss A Thief V Rochill — "Vee"
		</h3>
		<dl class="text-sm text-gray-700 mt-1 space-y-0.5">
			<div><dt class="inline font-medium">Owners:</dt> <dd class="inline">Jayne Faupl &amp; Julia Foster</dd></div>
			<div><dt class="inline font-medium">Breeders:</dt> <dd class="inline">Jayne Faupl, Julia Foster-Hess, Laura Shearin</dd></div>
			<div><dt class="inline font-medium">Sire:</dt> <dd class="inline">CH Charbo Jalyn's Xtortionist Tanbark Lauguin OFA H/E</dd></div>
			<div><dt class="inline font-medium">Dam:</dt> <dd class="inline">CH Guardians Gold Medal V Rochill OFA H/E/Th</dd></div>
		</dl>
		<ul class="mt-2 text-sm text-gray-600 space-y-0.5">
			<li>Janesville Beloit KC — 5/4/19 1st 6–9 month puppy, reserve winner's bitch under R. E. Lake</li>
			<li>Badgerland KC — 5/3/19 1st 6–9 month puppy under Sulie Greendale-Paveza</li>
			<li>Badgerland KC — 5/5/19 1st 6–9 month puppy under Linda Robey</li>
			<li>Illinois Valley KC of Peoria — 5/26/19 1st 6–9 month puppy, reserve winner's bitch under James Moses</li>
			<li>Waukesha KC — 7/27/19 1st 9–12 month puppy under Michael Gelinas</li>
			<li>Waukesha KC — 7/28/19 1st 9–12 month puppy under Marilyn Van Vleit</li>
		</ul>
	</div>

	<div>
		<img src={resolve('/images/noelle-brag.jpg' as any)} alt="Noelle" class="max-w-xs rounded shadow mb-3" />
		<h3 class="font-semibold text-primary-dark">
			Guardians NoNo Noelle V Rochill — "Noelle"
		</h3>
		<dl class="text-sm text-gray-700 mt-1 space-y-0.5">
			<div><dt class="inline font-medium">Breeder/Owners:</dt> <dd class="inline">Jayne Faupl, Julia Foster-Hess</dd></div>
			<div><dt class="inline font-medium">Sire:</dt> <dd class="inline">CH George Creeks Out of This World OFA H/E/Th</dd></div>
			<div><dt class="inline font-medium">Dam:</dt> <dd class="inline">CH Guardians Gold Medal V Rochill OFA H/E/Th</dd></div>
		</dl>
		<ul class="mt-2 text-sm text-gray-600 space-y-0.5">
			<li>Corn Belt KC — 5/27/19 1st 6–9 month puppy, Reserve winner's bitch under Cindy Meyer</li>
			<li>German Shepherd Dog Club of Greater KC — 6/8/19 1st 6–9 month puppy, Best Puppy under Randy Chestnut</li>
			<li>Lawton Dog Fanciers — 6/29/19 1st 6–9 month puppy, (major) reserve winners bitch under W. C. Stebbins</li>
		</ul>
	</div>

	<div>
		<img src={resolve('/images/bruno-bob-gsdcstl-5.12.19.jpg' as any)} alt="Bruno" class="max-w-xs rounded shadow mb-3" />
		<h3 class="font-semibold text-primary-dark">Faithrock Maverick — "Bruno"</h3>
		<p class="text-sm text-gray-700 mt-1">
			May 12, 2019 — Bruno was awarded Winner's, Best of Winners and Best of Breed at the GSDCSTL
			Spring Specialty @ Purina Farms under judge Christie Halliday. Bruno needs one more major to
			finish his CH. Thank you Diane Brown and Larry Rock for handling Bruno.
		</p>
		<dl class="text-sm text-gray-700 mt-1 space-y-0.5">
			<div><dt class="inline font-medium">Sire:</dt> <dd class="inline">RBIS GCHB Class Act's Shot Through The Heart Windfall-Hillside RN CGC TC "Jovi"</dd></div>
			<div><dt class="inline font-medium">Dam:</dt> <dd class="inline">FaithRock You've Got A Friend "Kelly"</dd></div>
			<div><dt class="inline font-medium">Bred by:</dt> <dd class="inline">Terry and Larry Rock and Rita Rooney</dd></div>
			<div><dt class="inline font-medium">Owned by:</dt> <dd class="inline">Linda Swan Van Vickel and Terry Rock</dd></div>
		</dl>
	</div>

	<div>
		<img src={resolve('/images/baretta-wb-bow-april-6-7-19.jpg' as any)} alt="Baretta" class="max-w-xs rounded shadow mb-3" />
		<h3 class="font-semibold text-primary-dark">Baretta</h3>
		<p class="text-sm text-gray-700 mt-1">
			4/7/2019 — Back to back Winners Bitch &amp; Best of Winners for Baretta this weekend!
		</p>
		<p class="text-sm text-gray-700">
			4/6/2019 — Yesterday was a point and today was a 3 pt major!! Thank you judges Houston Clark
			and Jon Cole! Elizabeth Renee Stiefferman handled her to winners bitch and Kara Janiszak covered
			her in Breed!
		</p>
		<p class="text-sm text-gray-700 mt-1">
			Baretta is owned by Gail Stiefferman, Deborah Stern and Herman Stiefferman. Bred by Sandy
			Anderson &amp; Jason Duin. So proud of our 20 month old girl!!!
		</p>
	</div>

	<div>
		<img src={resolve('/images/hazel-group-two-april-6-19.jpg' as any)} alt="Hazel" class="max-w-xs rounded shadow mb-3" />
		<h3 class="font-semibold text-primary-dark">
			Group Placing Can. Sel. BOF RMB MBISS BPIS MBPISS CH Forest Knolls Hazelnut V Winsome — "Hazel"
		</h3>
		<p class="text-sm text-gray-700 mt-1">
			4/6/2019 — ❤️ Hazel goes Herding Group 2 ❤️
		</p>
		<p class="text-sm text-gray-700">
			Thank you judges Mr. Houston Clark (Breed) and Mr. Jon Cole (Group)!
		</p>
		<dl class="text-sm text-gray-700 mt-1 space-y-0.5">
			<div><dt class="inline font-medium">Owner/Breeder/Handler:</dt> <dd class="inline">Elizabeth Renee Stiefferman</dd></div>
			<div><dt class="inline font-medium">Co-Breeders:</dt> <dd class="inline">Frank &amp; Kris Fasano, Gail Stiefferman, Scott C Hotaling, Herman Stiefferman</dd></div>
		</dl>
	</div>

	<div>
		<img src={resolve('/images/jackson-wd-bow-march19-futurity.jpg' as any)} alt="Jackson WD &amp; BOW" class="max-w-xs rounded shadow mb-3" />
		<h3 class="font-semibold text-primary-dark">
			Valleyview Faith Rock Remember When — "Jackson"
		</h3>
		<p class="text-sm text-gray-700 mt-1">
			3/23/19 — Thank you judge Steve Bloom for awarding Jackson Winner's Dog and Best of Winners
			from the 6–9 puppy class.<br />
			3/24/19 — Thank you to judge Richard Lortie for awarding Jackson Best Male and Best Opposite
			Futurity. Thank you Liv Calabrese for expertly handling Jackson.
		</p>
		<dl class="text-sm text-gray-700 mt-1 space-y-0.5">
			<div><dt class="inline font-medium">Sire:</dt> <dd class="inline">AM GCH CH/CAN CH Fathrock Caralon Good Vibrations, CD, RN, CHIC, HIC, TC, DM Clear (frozen semen)</dd></div>
			<div><dt class="inline font-medium">Dam:</dt> <dd class="inline">Valley View Hugs and Kisses</dd></div>
			<div><dt class="inline font-medium">Bred by:</dt> <dd class="inline">Christine Leeka &amp; Terry Rock</dd></div>
			<div><dt class="inline font-medium">Owned by:</dt> <dd class="inline">Terry &amp; Larry Rock and Christine Leeka</dd></div>
		</dl>
	</div>

	<div>
		<img src={resolve('/images/bof-ch-faithrock-wyatt-earp-v-tin-roof-rn-tc.jpg' as any)} alt="Ruger" class="max-w-xs rounded shadow mb-3" />
		<h3 class="font-semibold text-primary-dark">
			BOF CH Faithrock Wyatt Earp v Tin Roof RN TC — "Ruger"
		</h3>
		<p class="text-sm text-gray-700 mt-1">
			February 9, 2019 — Ruger finishing his championship in Indianapolis under judge Karen Hynek
			with his 3rd major. Thank you Jeffrey Pyle for handling Ruger.
		</p>
		<dl class="text-sm text-gray-700 mt-1 space-y-0.5">
			<div><dt class="inline font-medium">Sire:</dt> <dd class="inline">RBIS GCHB Class Act's Shot Through The Heart Windfall-Hillside RN CGC TC "Jovi"</dd></div>
			<div><dt class="inline font-medium">Dam:</dt> <dd class="inline">FaithRock You've Got A Friend "Kelly"</dd></div>
			<div><dt class="inline font-medium">Bred by:</dt> <dd class="inline">Terry and Larry Rock and Rita Rooney</dd></div>
			<div><dt class="inline font-medium">Owned by:</dt> <dd class="inline">Laura and Tony Marrocco and Terry Rock</dd></div>
		</dl>
	</div>

</div>

<h2 class="text-lg font-serif font-semibold text-primary-dark mb-2 mt-10">More Brags</h2>
<ul class="space-y-1 text-sm">
	<li><a href={resolve('/brags/hall-of-fame')} class="text-primary hover:underline">Hall of Fame</a></li>
	<li><a href={resolve('/brags/wag-n-tongue')} class="text-primary hover:underline">Wag 'N' Tongue Newsletter</a></li>
	<li><a href={resolve('/brags/royal-hecht-awards')} class="text-primary hover:underline">Royal Hecht Awards</a></li>
</ul>
