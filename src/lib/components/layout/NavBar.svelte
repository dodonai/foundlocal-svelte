<script>
	import { Menu, X } from 'lucide-svelte';
	import BrandLogo from '$lib/components/layout/BrandLogo.svelte';

	let mobileOpen = $state(false);

	const navLinks = [
		{ label: 'The Shift', href: '/#how-ai-works' },
		{ label: 'The Problem', href: '/#problem' },
		{ label: 'What You Get', href: '/#what-you-get' },
		{ label: 'Pricing', href: '/#pricing' },
		{ label: 'Blog', href: '/blog' }
	];

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<nav class="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
	<div class="container mx-auto px-4 py-3 flex items-center justify-between">
		<BrandLogo variant="dark" sizeClass="mr-6 w-[170px] sm:w-[190px]" />
		<div class="hidden md:flex items-center gap-7 text-sm font-medium text-gray-500">
			{#each navLinks as link (link.href)}
				<a href={link.href} class="hover:text-gray-900 transition-colors">{link.label}</a>
			{/each}
		</div>
		<div class="flex items-center gap-3">
			<a
				href="/#get-started"
				onclick={() =>
					typeof gtag === 'function' &&
					gtag('event', 'cta_click', {
						event_category: 'engagement',
						event_label: 'nav_request_storefront'
					})}
				class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg px-5 py-2 text-sm transition-colors"
			>
				Request Your Storefront
			</a>
			<button
				type="button"
				class="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={mobileOpen}
			>
				{#if mobileOpen}
					<X class="w-5 h-5" />
				{:else}
					<Menu class="w-5 h-5" />
				{/if}
			</button>
		</div>
	</div>

	{#if mobileOpen}
		<div class="md:hidden border-t border-gray-200 bg-white">
			<div class="container mx-auto px-4 py-3 flex flex-col gap-1">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						class="block py-2.5 px-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
						onclick={closeMobile}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
