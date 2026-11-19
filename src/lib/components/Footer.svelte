<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<footer class="border-t-4 border-accent bg-primary-deep text-parchment-muted">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 py-14 flex flex-wrap justify-between gap-x-16 gap-y-8">
		<div class="flex flex-[1_1_300px] flex-col gap-2.5">
			<p class="font-display text-[22px] font-bold text-white">Visitors and German Shepherds are welcome!</p>
			<p class="text-[15px]">
				© {new Date().getFullYear()} German Shepherd Dog Club of St. Louis, Inc. · Built by
				<a href="https://fjordworkssoftware.com" class="underline-offset-2 hover:underline" target="_blank" rel="noopener">Fjord Works Software</a>
			</p>
		</div>
		<nav aria-label="Footer">
			<ul class="flex flex-wrap gap-x-7 gap-y-3 text-[15px]">
				<li><a href={resolve('/club-info/club-contacts')} class="text-white hover:underline">Club Contacts</a></li>
				<li><a href={resolve('/club-info/constitution-by-laws')} class="text-white hover:underline">Constitution &amp; By-Laws</a></li>
				<li><a href={resolve('/calendar')} class="text-white hover:underline">Meetings</a></li>
				<li>
					<a
						href="https://www.facebook.com/people/German-Shepherd-Dog-Club-of-St-Louis/61562833169770/"
						target="_blank"
						rel="noopener"
						class="text-white hover:underline">Facebook</a
					>
				</li>
			</ul>
		</nav>
	</div>
</footer>
