<script>
	let {
		variant = 'dark',
		href = '/',
		sizeClass = 'w-[180px]',
		alt = 'GeoLocally'
	} = $props();
</script>

<a href={href} aria-label="GeoLocally home" class={`inline-flex shrink-0 ${sizeClass}`.trim()}>
	<img
		src={variant === 'light' ? '/logo-white.svg' : '/logo-dark.svg'}
		alt={alt}
		class="block h-auto w-full"
	/>
</a>
