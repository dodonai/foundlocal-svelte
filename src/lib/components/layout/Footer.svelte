<script>
	import { Mail } from 'lucide-svelte';
	import BrandLogo from '$lib/components/layout/BrandLogo.svelte';

	const exploreLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Blog', href: '/blog' }
	];

	const marketLinks = [
		{ label: 'Florida', href: '/florida' },
		{ label: 'Miami', href: '/miami' },
		{ label: 'Tampa', href: '/tampa' }
	];

	const legalLinks = [
		{ label: 'Privacy Policy', href: '/privacy' },
		{ label: 'Terms of Service', href: '/terms' }
	];
</script>

<footer class="bg-gray-950 text-gray-400 py-10">
	<div
		class="container mx-auto px-4 max-w-6xl grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
	>
		<div class="text-center md:text-left">
			<BrandLogo
				variant="light"
				sizeClass="mx-auto md:mx-0 mb-4 w-[180px] sm:w-[200px]"
				alt="GeoLocally"
			/>
			<p class="text-sm max-w-md">
				Focused landing pages and short explainer videos for local businesses that need to look
				clearer online.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-3 text-sm">
			<div>
				<p class="text-white font-semibold mb-3">Explore</p>
				<div class="flex flex-col gap-2">
					{#each exploreLinks as link (link.href)}
						<a href={link.href} class="hover:text-white transition-colors">{link.label}</a>
					{/each}
				</div>
			</div>

			<div>
				<p class="text-white font-semibold mb-3">Markets</p>
				<div class="flex flex-col gap-2">
					{#each marketLinks as link (link.href)}
						<a href={link.href} class="hover:text-white transition-colors">{link.label}</a>
					{/each}
				</div>
			</div>

			<div>
				<p class="text-white font-semibold mb-3">Contact</p>
				<div class="flex flex-col gap-2">
					<a
						href="mailto:hello@geolocally.com"
						class="flex items-center gap-1.5 hover:text-white transition-colors"
					>
						<Mail class="w-3.5 h-3.5" />
						hello@geolocally.com
					</a>
					{#each legalLinks as link (link.href)}
						<a href={link.href} class="hover:text-white transition-colors">{link.label}</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div
		class="container mx-auto px-4 max-w-6xl mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600"
	>
		<span>&copy; 2026 GeoLocally. All rights reserved.</span>
		<span>We reply to every inquiry within 1 business day.</span>
	</div>
</footer>
