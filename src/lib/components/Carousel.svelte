<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import EmblaCarousel from 'embla-carousel';
	import Autoplay from 'embla-carousel-autoplay';

	interface Slide {
		src: string;
		alt: string;
		caption?: string;
	}
	interface Props {
		slides: Slide[];
		delay?: number;
	}

	let { slides, delay = 4000 }: Props = $props();

	let viewportEl: HTMLElement;
	let emblaApi: ReturnType<typeof EmblaCarousel> | null = null;
	let selectedIndex = $state(0);

	onMount(() => {
		emblaApi = EmblaCarousel(viewportEl, { loop: true }, [
			Autoplay({ delay, stopOnInteraction: false })
		]);
		emblaApi.on('select', () => {
			selectedIndex = emblaApi!.selectedScrollSnap();
		});
	});

	onDestroy(() => {
		emblaApi?.destroy();
	});

	function scrollPrev() {
		emblaApi?.scrollPrev();
	}
	function scrollNext() {
		emblaApi?.scrollNext();
	}
	function scrollTo(i: number) {
		emblaApi?.scrollTo(i);
	}
</script>

<div class="relative rounded-lg overflow-hidden">
	<div class="overflow-hidden" bind:this={viewportEl}>
		<div class="flex touch-pan-y">
			{#each slides as slide}
				<div class="min-w-0 flex-[0_0_100%] relative">
					<img src={slide.src} alt={slide.alt} class="w-full h-72 md:h-96 object-cover" />
					{#if slide.caption}
						<div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-4 py-2">
							{slide.caption}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<button
		onclick={scrollPrev}
		class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center text-xl transition-colors"
		aria-label="Previous slide"
	>‹</button>

	<button
		onclick={scrollNext}
		class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center text-xl transition-colors"
		aria-label="Next slide"
	>›</button>

	{#if slides.length > 1}
		<div class="absolute bottom-2 left-0 right-0 flex justify-center gap-2 pointer-events-none">
			{#each slides as _, i}
				<button
					onclick={() => scrollTo(i)}
					class="w-2 h-2 rounded-full transition-colors pointer-events-auto {selectedIndex === i ? 'bg-white' : 'bg-white/40'}"
					aria-label="Go to slide {i + 1}"
				></button>
			{/each}
		</div>
	{/if}
</div>
