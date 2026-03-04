<script>
	import '../app.css';
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<NavBar />
<main>
	{@render children()}
</main>
<Footer />
