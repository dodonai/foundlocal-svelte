<script>
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status === 404 ? 'Page Not Found' : 'Error'} — GeoLocally</title>
</svelte:head>

<section class="bg-gray-900 text-white min-h-[60vh] flex items-center justify-center">
	<div class="container mx-auto px-4 text-center max-w-lg">
		<p class="text-8xl font-extrabold text-indigo-400 mb-4">{page.status}</p>
		<h1 class="text-2xl md:text-3xl font-extrabold mb-4 text-balance">
			{#if page.status === 404}
				This page doesn't exist.
			{:else}
				Something went wrong.
			{/if}
		</h1>
		<p class="text-gray-400 text-lg mb-8">
			{#if page.status === 404}
				The page you're looking for may have been moved or removed.
			{:else}
				{page.error?.message || 'An unexpected error occurred.'}
			{/if}
		</p>
		<div class="flex flex-col sm:flex-row gap-3 justify-center">
			<a
				href="/"
				class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl text-base transition-colors"
			>
				Back to Home
			</a>
			<a
				href="/#get-started"
				class="inline-block border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-bold px-8 py-3.5 rounded-xl text-base transition-colors"
			>
				Request Your Storefront
			</a>
		</div>
	</div>
</section>
