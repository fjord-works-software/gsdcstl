<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<footer class="bg-primary-dark text-white py-6 px-6 text-center text-sm mt-auto relative overflow-hidden">
	<img
		src={resolve('/images/891512a4-fca3-43fd-9722-e189a1bc9315.png' as any)}
		alt=""
		aria-hidden="true"
		class="absolute top-1/2 right-6 -translate-y-1/2 h-32 w-32 opacity-[0.08] pointer-events-none select-none"
	/>
	<p class="relative">© {new Date().getFullYear()} German Shepherd Dog Club of St. Louis <span class="text-primary-light"> · Built by <a href="https://fjordworkssoftware.com" class="hover:underline" target="_blank" rel="noopener">Fjord Works Software</a></span></p>
	<p class="mt-1 relative">
		<a href={resolve('/club-info/club-contacts')} class="text-accent-light hover:underline">Contact Us</a>
	</p>
</footer>
