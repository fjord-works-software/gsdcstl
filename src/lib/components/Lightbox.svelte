<script lang="ts">
	import { fade } from 'svelte/transition';

	interface Props {
		images: string[];
		alts?: string[];
		open?: boolean;
		startIndex?: number;
	}

	let { images, alts = [], open = $bindable(false), startIndex = 0 }: Props = $props();

	let currentIndex = $state(0);

	$effect(() => {
		if (open) currentIndex = startIndex;
	});

	function close() {
		open = false;
	}
	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}
	function next() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!open) return;
		if (e.key === 'Escape') close();
		if (e.key === 'ArrowLeft') prev();
		if (e.key === 'ArrowRight') next();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div
		role="dialog"
		aria-modal="true"
		aria-label="Image lightbox"
		tabindex="-1"
		class="fixed inset-0 z-50 flex items-center justify-center"
		transition:fade={{ duration: 150 }}
		onkeydown={handleKeydown}
	>
		<!-- Backdrop -->
		<div
			role="button"
			tabindex="-1"
			aria-label="Close lightbox"
			class="absolute inset-0 bg-black/85 cursor-pointer"
			onclick={close}
			onkeydown={(e) => e.key === 'Enter' && close()}
		></div>

		<!-- Image -->
		<div class="relative z-10 max-w-[90vw] max-h-[90vh] flex items-center justify-center">
			<img
				src={images[currentIndex]}
				alt={alts[currentIndex] ?? ''}
				class="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
			/>
		</div>

		<!-- Close -->
		<button
			onclick={close}
			class="absolute top-4 right-4 z-20 text-white bg-black/50 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center text-2xl leading-none transition-colors"
			aria-label="Close"
		>×</button>

		{#if images.length > 1}
			<button
				onclick={prev}
				class="absolute left-3 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 hover:bg-black/80 rounded-full w-11 h-11 flex items-center justify-center text-3xl leading-none transition-colors"
				aria-label="Previous image"
			>‹</button>
			<button
				onclick={next}
				class="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 hover:bg-black/80 rounded-full w-11 h-11 flex items-center justify-center text-3xl leading-none transition-colors"
				aria-label="Next image"
			>›</button>
			<div class="absolute bottom-4 left-0 right-0 text-center text-white/60 text-sm z-20">
				{currentIndex + 1} / {images.length}
			</div>
		{/if}
	</div>
{/if}
