<script>
	import { Check, AlertCircle, Loader2 } from 'lucide-svelte';

	let {
		title = 'If your business is hard to understand online, someone clearer gets the call.',
		body = "Tell us what you do and where you work. If GeoLocally can help, we'll reply with the next step within 1 business day.",
		buttonLabel = 'Request Your Storefront'
	} = $props();

	// Replace with your deployed Google Apps Script web app URL
	const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwv4MW0_vFohlPLnWNqRkx4UFSX1NFS8yuoiQwwTjWCgJ4eojH5yQx-TQE1_fmylbK7nA/exec';

	let submitted = $state(false);
	let submitting = $state(false);
	let error = $state('');

	const businessTypes = [
		'Home services (plumbing, HVAC, roofing, etc.)',
		'Health & wellness (dental, chiropractic, clinic, etc.)',
		'Professional services (law, accounting, consulting, etc.)',
		'Personal services (salon, spa, grooming, etc.)',
		'Auto services (repair, detailing, etc.)',
		'Hospitality & food (café, restaurant, catering, etc.)',
		'Retail (shop, showroom, boutique, etc.)',
		'Nonprofit / community organization',
		'Other'
	];

	const campaignFields = [
		'utm_source',
		'utm_medium',
		'utm_campaign',
		'utm_content',
		'utm_term',
		'gclid',
		'fbclid'
	];

	const referralSources = [
		'Google search',
		'Facebook',
		'Referral',
		'Yelp',
		'Trade show',
		'Other'
	];

	async function handleSubmit(e) {
		e.preventDefault();
		error = '';
		submitting = true;

		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());
		data.submitted_at = new Date().toISOString();

		if (typeof window !== 'undefined') {
			const params = new URLSearchParams(window.location.search);
			for (const field of campaignFields) {
				data[field] = params.get(field) || '';
			}
			data.landing_page = window.location.href;
			data.referrer = document.referrer || '';
		}

		try {
			await fetch(FORM_ENDPOINT, {
				method: 'POST',
				mode: 'no-cors',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			});
			submitted = true;
			if (typeof gtag === 'function') {
				gtag('event', 'generate_lead', {
					event_category: 'form',
					event_label: 'storefront_intake'
				});
			}
		} catch (err) {
			error = 'Something went wrong. Please email us at hello@geolocally.com instead.';
		} finally {
			submitting = false;
		}
	}
</script>

<section id="get-started" class="bg-gray-900 text-white py-20">
	<div class="container mx-auto px-4 max-w-xl">
		{#if submitted}
			<div class="text-center">
				<div
					class="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-6"
				>
					<Check class="w-7 h-7 text-white" />
				</div>
				<h2 class="text-3xl font-extrabold mb-4 text-balance">
					Your request is in.
				</h2>
				<p class="text-gray-300 text-lg leading-relaxed">
					We'll review your details and reply within 1 business day with the next step.
				</p>
			</div>
		{:else}
			<div class="text-center mb-10">
				<h2 class="text-3xl md:text-4xl font-extrabold text-balance mb-4">
					{title}
				</h2>
				<p class="text-gray-300 text-lg text-pretty leading-relaxed">
					{body}
				</p>
			</div>

			<form onsubmit={handleSubmit} class="flex flex-col gap-3">
				<label for="name" class="sr-only">Your name</label>
				<input
					id="name"
					name="name"
					required
					type="text"
					placeholder="Your name (e.g. Mike Rodriguez)"
					class="w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<label for="email" class="sr-only">Email address</label>
				<input
					id="email"
					name="email"
					required
					type="email"
					placeholder="Email address"
					class="w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<label for="phone" class="sr-only">Phone number</label>
				<input
					id="phone"
					name="phone"
					type="tel"
					placeholder="Phone number (optional)"
					class="w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<label for="business" class="sr-only">Business name and city</label>
				<input
					id="business"
					name="business"
					required
					type="text"
					placeholder="Business name and city (e.g. Rodriguez Services, Austin TX or Bright Smiles Dental, Phoenix AZ)"
					class="w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<label for="business-type" class="sr-only">What type of business?</label>
				<select
					id="business-type"
					name="business_type"
					required
					class="w-full rounded-xl bg-gray-800 border border-gray-700 text-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					<option value="" disabled selected>What type of business?</option>
					{#each businessTypes as type (type)}
						<option value={type}>{type}</option>
					{/each}
				</select>
				<label for="website" class="sr-only">Website URL</label>
				<input
					id="website"
					name="website"
					type="url"
					placeholder="Website URL — optional (https://...)"
					class="w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
				<label for="referral" class="sr-only">How did you hear about us?</label>
				<select
					id="referral"
					name="referral_source"
					class="w-full rounded-xl bg-gray-800 border border-gray-700 text-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					<option value="" disabled selected>How did you hear about us? — optional</option>
					{#each referralSources as source (source)}
						<option value={source}>{source}</option>
					{/each}
				</select>

				{#if error}
					<div class="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
						<AlertCircle class="w-4 h-4 flex-shrink-0" />
						{error}
					</div>
				{/if}

				<button
					type="submit"
					disabled={submitting}
					class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl text-base mt-2 transition-colors flex items-center justify-center gap-2"
				>
					{#if submitting}
						<Loader2 class="w-4 h-4 animate-spin" />
						Submitting...
					{:else}
						{buttonLabel}
					{/if}
				</button>
				<p class="text-center text-xs text-gray-400">
					We review every request before kickoff and reply within 1 business day.
				</p>
			</form>
		{/if}
	</div>
</section>
