<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<header class="bg-primary-dark text-white py-5 px-6 shadow-md border-b-4 border-accent">
	<div class="max-w-5xl mx-auto flex items-center gap-5">
		<img
			src={resolve('/images/gsdcstl-100-year-logo.png' as any)}
			alt="German Shepherd Dog Club of St. Louis 100 Years, 1927–2027"
			class="h-20 w-auto shrink-0 rounded bg-white p-1"
		/>
		<div>
			<h1 class="text-2xl font-serif font-bold tracking-wide">
				German Shepherd Dog Club of St. Louis
			</h1>
			<p class="text-sm text-primary-light mt-0.5">Serving the Greater St. Louis Area</p>
		</div>
	</div>
</header>
