<script>
	import { slide } from 'svelte/transition';

	let { question, answer } = $props();
	let isOpen = $state(false);
</script>

<div class="border border-gray-200 rounded-xl px-5 {isOpen ? 'bg-gray-50' : ''}">
	<button
		type="button"
		class="flex w-full items-center justify-between text-left text-sm font-semibold text-gray-900 py-4 hover:no-underline"
		onclick={() => (isOpen = !isOpen)}
		aria-expanded={isOpen}
	>
		<span class="pr-4">{question}</span>
		<svg
			class="h-4 w-4 text-gray-500 transition-transform duration-200 flex-shrink-0 {isOpen
				? 'rotate-180'
				: ''}"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	</button>
	{#if isOpen}
		<div transition:slide={{ duration: 250 }} class="overflow-hidden pb-4">
			<p class="text-sm text-gray-500 leading-relaxed">{answer}</p>
		</div>
	{/if}
</div>
