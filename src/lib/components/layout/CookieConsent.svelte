<script>
	import { browser } from '$app/environment';

	let visible = $state(false);

	if (browser) {
		visible = !localStorage.getItem('cookie-consent');
	}

	function accept() {
		localStorage.setItem('cookie-consent', 'accepted');
		window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: 'accepted' }));
		visible = false;
	}

	function decline() {
		localStorage.setItem('cookie-consent', 'declined');
		window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: 'declined' }));
		visible = false;
	}
</script>

{#if visible}
	<div class="fixed bottom-0 inset-x-0 z-50 p-4">
		<div
			class="mx-auto max-w-3xl rounded-xl bg-gray-900 text-white shadow-2xl border border-gray-700 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
		>
			<p class="text-sm text-gray-300 flex-1">
				We use optional analytics only after you accept. See our
				<a href="/privacy" class="underline text-indigo-400 hover:text-indigo-300">Privacy Policy</a>
				for details.
			</p>
			<div class="flex gap-2 shrink-0">
				<button
					onclick={decline}
					class="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white border border-gray-600 rounded-lg transition-colors"
				>
					Decline
				</button>
				<button
					onclick={accept}
					class="px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
				>
					Accept
				</button>
			</div>
		</div>
	</div>
{/if}
