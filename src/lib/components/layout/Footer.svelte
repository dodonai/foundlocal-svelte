<script>
	import { Mail } from 'lucide-svelte';
</script>

<footer class="bg-gray-950 text-gray-400 py-10">
	<div
		class="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between gap-6"
	>
		<div class="text-center md:text-left">
			<p class="text-white font-bold text-lg mb-1">FoundLocal.ai</p>
			<p class="text-sm">Built for local businesses that deserve to be found — in any industry.</p>
		</div>
		<div class="flex flex-col items-center md:items-end gap-1 text-sm">
			<a
				href="mailto:hello@foundlocal.ai"
				class="flex items-center gap-1.5 hover:text-white transition-colors"
			>
				<Mail class="w-3.5 h-3.5" />
				hello@foundlocal.ai
			</a>
		</div>
	</div>
	<div
		class="container mx-auto px-4 max-w-5xl mt-6 pt-6 border-t border-gray-800 text-center text-xs text-gray-600"
	>
		&copy; 2026 FoundLocal.ai. Built for local businesses that deserve to be found.
	</div>
</footer>
