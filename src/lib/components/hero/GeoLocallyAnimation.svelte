<script>
	import AnimationStage from './AnimationStage.svelte';
	import PhaseWrapper from './PhaseWrapper.svelte';

	const businesses = [
		{ name: 'Plumber', query: 'best plumber near me', biz: 'Rodriguez Plumbing', domain: 'rodriguezplumbing.example', icon: '🔧' },
		{ name: 'Roofer', query: 'reliable roofer in my area', biz: 'Summit Roofing Co', domain: 'summitroofingco.example', icon: '🏠' },
		{ name: 'Electrician', query: 'licensed electrician near me', biz: 'Spark Electric', domain: 'sparkelectric.example', icon: '⚡' },
		{ name: 'HVAC Tech', query: 'HVAC repair near me', biz: 'CoolBreeze HVAC', domain: 'coolbreezehvac.example', icon: '❄️' },
		{ name: 'Dentist', query: 'best dentist near me', biz: 'Bright Smile Dental', domain: 'brightsmiledental.example', icon: '🦷' },
		{ name: 'Accountant', query: 'small business accountant near me', biz: 'Clearview CPA', domain: 'clearviewcpa.example', icon: '📊' },
		{ name: 'Family Lawyer', query: 'family lawyer near me', biz: 'Parker Family Law', domain: 'parkerfamilylaw.example', icon: '⚖️' },
		{ name: 'Chiropractor', query: 'chiropractor near me', biz: 'AlignWell Chiropractic', domain: 'alignwellchiro.example', icon: '🩺' },
	];

	const durations = [4000, 5000, 5000, 4000, 3500];

	let tradeIndex = $state(0);

	function handleLoop() {
		tradeIndex = (tradeIndex + 1) % businesses.length;
	}

	let biz = $derived(businesses[tradeIndex]);
</script>

<div class="fl-animation-wrapper">
<AnimationStage {durations} height={480} onLoop={handleLoop}>
	{#snippet children(step)}
		<!-- Phase 0: Your Customer Searches -->
		{#if step === 0}
			<PhaseWrapper caption="Your customers aren't just Googling anymore">
				{#snippet children()}
					<div class="fl-card fl-search-card">
						<div class="fl-search-tabs">
							<div class="fl-tab">Google</div>
							<div class="fl-tab fl-tab-active">AI Search</div>
						</div>
						<div class="fl-search-bar">
							<span class="fl-search-icon">🔍</span>
							<span class="fl-typewriter">{biz.query}</span>
							<span class="fl-cursor">|</span>
						</div>
					</div>
				{/snippet}
			</PhaseWrapper>
		{/if}

		<!-- Phase 1: AI Picks ONE Answer -->
		{#if step === 1}
			<PhaseWrapper caption="AI gives ONE direct recommendation">
				{#snippet children()}
					<div class="fl-card fl-ai-card">
						<div class="fl-ai-header">
							<span class="fl-ai-sparkle">✨</span>
							<span class="fl-ai-title">AI Assistant</span>
						</div>
						<div class="fl-ai-user-msg">
							<div class="fl-user-bubble">"{biz.query}?"</div>
						</div>
						<div class="fl-ai-response">
							<div class="fl-response-line fl-line-1">Based on my analysis, I'd recommend:</div>
							<div class="fl-response-line fl-line-2">
								<span class="fl-stars">★★★★★</span>
								<span class="fl-biz-name">{biz.biz}</span>
							</div>
							<div class="fl-response-line fl-line-3">
								Strong reviews, verified credentials, and an excellent track record...
							</div>
							<div class="fl-response-line fl-line-4">
								<a class="fl-view-link" href={undefined}>View their page →</a>
							</div>
						</div>
					</div>
				{/snippet}
			</PhaseWrapper>
		{/if}

		<!-- Phase 2: That Answer is YOUR Page -->
		{#if step === 2}
			<PhaseWrapper caption="Your page. Your video. Built to be found.">
				{#snippet children()}
					<div class="fl-card fl-browser-card">
						<div class="fl-browser-chrome">
							<div class="fl-browser-dots">
								<span class="fl-dot fl-dot-red"></span>
								<span class="fl-dot fl-dot-yellow"></span>
								<span class="fl-dot fl-dot-green"></span>
							</div>
							<div class="fl-browser-url">{biz.domain}</div>
						</div>
						<div class="fl-browser-content">
							<div class="fl-page-header">
								<span class="fl-page-icon">{biz.icon}</span>
								<span class="fl-page-title">{biz.biz}</span>
							</div>
							<div class="fl-video-player">
								<div class="fl-play-btn">▶</div>
							</div>
							<div class="fl-content-blocks">
								<div class="fl-content-block"></div>
								<div class="fl-content-block"></div>
								<div class="fl-content-block"></div>
							</div>
							<div class="fl-page-cta">Call Now</div>
							<div class="fl-schema-badges">
								<span class="fl-badge">Schema.org</span>
								<span class="fl-badge">LocalBusiness</span>
								<span class="fl-badge">VideoObject</span>
							</div>
						</div>
					</div>
				{/snippet}
			</PhaseWrapper>
		{/if}

		<!-- Phase 3: Built for Google AND AI -->
		{#if step === 3}
			<PhaseWrapper caption="Rank on Google. Get recommended by AI.">
				{#snippet children()}
					<div class="fl-dual-cards">
						<div class="fl-card fl-mini-card fl-slide-left">
							<div class="fl-mini-header">
								<span>🔍</span>
								<span class="fl-mini-title">Google</span>
							</div>
							<div class="fl-result fl-result-highlight">
								<span class="fl-result-bar"></span>
								<span class="fl-result-text">{biz.biz}</span>
								<span class="fl-result-star">⭐</span>
							</div>
							<div class="fl-result fl-result-dim">
								<span class="fl-result-bar"></span>
								<span class="fl-result-text">Another provider</span>
							</div>
							<div class="fl-result fl-result-dim">
								<span class="fl-result-bar"></span>
								<span class="fl-result-text">Third result</span>
							</div>
							<div class="fl-page-one-label">Page 1</div>
						</div>
						<div class="fl-card fl-mini-card fl-slide-right">
							<div class="fl-mini-header">
								<span>✨</span>
								<span class="fl-mini-title">AI</span>
							</div>
							<div class="fl-ai-rec">
								<div class="fl-rec-text">I recommend</div>
								<div class="fl-rec-biz">{biz.biz}</div>
								<div class="fl-rec-check">✓ Recommended</div>
							</div>
						</div>
					</div>
				{/snippet}
			</PhaseWrapper>
		{/if}

		<!-- Phase 4: Live in 3-5 Days -->
		{#if step === 4}
			<PhaseWrapper caption="From signup to live in days, not months">
				{#snippet children()}
					<div class="fl-card fl-success-card">
						<div class="fl-success-logo">GeoLocally</div>
						<div class="fl-stats-row">
							<div class="fl-stat">
								<div class="fl-stat-value">$499</div>
								<div class="fl-stat-label">One-time</div>
							</div>
							<div class="fl-stat">
								<div class="fl-stat-value">3–5 Days</div>
								<div class="fl-stat-label">To go live</div>
							</div>
							<div class="fl-stat">
								<div class="fl-stat-value">Yours</div>
								<div class="fl-stat-label">Forever</div>
							</div>
						</div>
						<div class="fl-progress-ring">
							<svg viewBox="0 0 80 80">
								<circle class="fl-ring-bg" cx="40" cy="40" r="34" />
								<circle class="fl-ring-fill" cx="40" cy="40" r="34" />
							</svg>
							<span class="fl-check-pop">✓</span>
						</div>
						<div class="fl-live-msg">
							Your {biz.name} storefront is live <span class="fl-sparkle-emoji">✨</span>
						</div>
					</div>
				{/snippet}
			</PhaseWrapper>
		{/if}
	{/snippet}
</AnimationStage>
</div>

<style>
	.fl-animation-wrapper {
		width: 100%;
	}

	/* Responsive height overrides via CSS */
	@media (min-width: 768px) and (max-width: 1023px) {
		.fl-animation-wrapper :global(.animation-stage) {
			height: 400px !important;
		}
	}

	@media (max-width: 767px) {
		.fl-animation-wrapper :global(.animation-stage) {
			height: 340px !important;
		}
	}

	/* ── Shared ── */
	.fl-card {
		background: #1f2937;
		border: 1px solid #374151;
		border-radius: 12px;
		padding: 20px;
		width: 90%;
		max-width: 420px;
		margin: 0 auto;
		opacity: 0;
		animation: flFadeInScale 0.6s ease forwards;
	}

	/* ── Phase 0: Search ── */
	.fl-search-card {
		padding: 0;
		overflow: hidden;
	}

	.fl-search-tabs {
		display: flex;
		border-bottom: 1px solid #374151;
	}

	.fl-tab {
		flex: 1;
		padding: 10px 16px;
		text-align: center;
		font-size: 13px;
		font-weight: 500;
		color: #9ca3af;
		cursor: default;
		transition: color 0.2s;
	}

	.fl-tab-active {
		color: #818cf8;
		border-bottom: 2px solid #818cf8;
	}

	.fl-search-bar {
		display: flex;
		align-items: center;
		padding: 16px 20px;
		gap: 10px;
		font-size: 15px;
		color: #ffffff;
	}

	.fl-search-icon {
		flex-shrink: 0;
	}

	.fl-typewriter {
		overflow: hidden;
		white-space: nowrap;
		border-right: none;
		width: 0;
		animation: flTypewriter 2.5s steps(40) 0.5s forwards;
	}

	.fl-cursor {
		color: #818cf8;
		animation: flBlink 0.8s step-end infinite;
	}

	/* ── Phase 1: AI Response ── */
	.fl-ai-card {
		padding: 16px;
	}

	.fl-ai-header {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 14px;
		font-size: 14px;
		font-weight: 600;
		color: #d1d5db;
	}

	.fl-ai-sparkle {
		font-size: 16px;
	}

	.fl-ai-title {
		animation: flShimmer 2s ease infinite;
		background: linear-gradient(90deg, #d1d5db 0%, #818cf8 50%, #d1d5db 100%);
		background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.fl-ai-user-msg {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 14px;
	}

	.fl-user-bubble {
		background: #374151;
		border-radius: 12px 12px 2px 12px;
		padding: 8px 14px;
		font-size: 13px;
		color: #e5e7eb;
		max-width: 80%;
		opacity: 0;
		animation: flFadeIn 0.5s ease 0.3s forwards;
	}

	.fl-ai-response {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.fl-response-line {
		font-size: 13px;
		color: #d1d5db;
		opacity: 0;
	}

	.fl-line-1 { animation: flFadeInUp 0.5s ease 0.8s forwards; }
	.fl-line-2 { animation: flFadeInUp 0.5s ease 1.4s forwards; }
	.fl-line-3 { animation: flFadeInUp 0.5s ease 2.0s forwards; font-size: 12px; color: #9ca3af; }
	.fl-line-4 { animation: flFadeInUp 0.5s ease 2.6s forwards; }

	.fl-stars {
		color: #fbbf24;
		margin-right: 6px;
		font-size: 12px;
	}

	.fl-biz-name {
		font-weight: 700;
		color: #ffffff;
	}

	.fl-view-link {
		color: #818cf8;
		font-weight: 600;
		font-size: 13px;
		text-decoration: none;
		animation: flPulseGlow 2s ease infinite;
		cursor: default;
	}

	/* ── Phase 2: Browser Mockup ── */
	.fl-browser-card {
		padding: 0;
		overflow: hidden;
	}

	.fl-browser-chrome {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 10px 14px;
		background: #111827;
		border-bottom: 1px solid #374151;
	}

	.fl-browser-dots {
		display: flex;
		gap: 5px;
	}

	.fl-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	.fl-dot-red { background: #ef4444; }
	.fl-dot-yellow { background: #eab308; }
	.fl-dot-green { background: #22c55e; }

	.fl-browser-url {
		font-size: 12px;
		color: #9ca3af;
		background: #1f2937;
		padding: 4px 12px;
		border-radius: 6px;
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.fl-browser-content {
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.fl-page-header {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 16px;
		font-weight: 700;
		color: #ffffff;
		opacity: 0;
		animation: flFadeIn 0.4s ease 0.3s forwards;
	}

	.fl-page-icon {
		font-size: 20px;
	}

	.fl-video-player {
		background: #111827;
		border-radius: 8px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		animation: flFadeInUp 0.5s ease 0.6s forwards;
	}

	.fl-play-btn {
		width: 40px;
		height: 40px;
		background: rgba(129, 140, 248, 0.3);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #818cf8;
		font-size: 16px;
	}

	.fl-content-blocks {
		display: flex;
		gap: 8px;
		opacity: 0;
		animation: flFadeInUp 0.5s ease 1.0s forwards;
	}

	.fl-content-block {
		flex: 1;
		height: 24px;
		background: #374151;
		border-radius: 4px;
	}

	.fl-page-cta {
		background: #818cf8;
		color: #ffffff;
		font-weight: 700;
		font-size: 13px;
		text-align: center;
		padding: 8px;
		border-radius: 8px;
		opacity: 0;
		animation: flFadeInUp 0.5s ease 1.4s forwards;
	}

	.fl-schema-badges {
		display: flex;
		gap: 6px;
		justify-content: center;
		opacity: 0;
		animation: flFadeInUp 0.5s ease 1.8s forwards;
	}

	.fl-badge {
		font-size: 10px;
		color: #9ca3af;
		background: #111827;
		padding: 3px 8px;
		border-radius: 4px;
		border: 1px solid #374151;
	}

	/* ── Phase 3: Dual Cards ── */
	.fl-dual-cards {
		display: flex;
		gap: 12px;
		width: 90%;
		max-width: 420px;
		margin: 0 auto;
	}

	.fl-mini-card {
		flex: 1;
		padding: 14px;
		opacity: 0;
	}

	.fl-slide-left {
		animation: flSlideInFromLeft 0.6s ease forwards;
	}

	.fl-slide-right {
		animation: flSlideInRight 0.6s ease 0.2s forwards;
	}

	.fl-mini-header {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 13px;
		font-weight: 700;
		color: #d1d5db;
		margin-bottom: 12px;
	}

	.fl-mini-title {
		color: #ffffff;
	}

	.fl-result {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 6px 0;
		font-size: 11px;
	}

	.fl-result-bar {
		width: 3px;
		height: 16px;
		border-radius: 2px;
		background: #374151;
		flex-shrink: 0;
	}

	.fl-result-highlight .fl-result-bar {
		background: #818cf8;
	}

	.fl-result-highlight .fl-result-text {
		color: #ffffff;
		font-weight: 600;
	}

	.fl-result-dim .fl-result-text {
		color: #6b7280;
	}

	.fl-result-star {
		font-size: 10px;
	}

	.fl-page-one-label {
		margin-top: 8px;
		text-align: center;
		font-size: 10px;
		color: #34d399;
		font-weight: 600;
	}

	.fl-ai-rec {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.fl-rec-text {
		font-size: 12px;
		color: #9ca3af;
	}

	.fl-rec-biz {
		font-size: 13px;
		font-weight: 700;
		color: #ffffff;
	}

	.fl-rec-check {
		font-size: 11px;
		color: #34d399;
		font-weight: 600;
	}

	/* ── Phase 4: Success ── */
	.fl-success-card {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		padding: 24px 20px;
	}

	.fl-success-logo {
		font-size: 16px;
		font-weight: 800;
		color: #818cf8;
		letter-spacing: -0.02em;
	}

	.fl-stats-row {
		display: flex;
		gap: 20px;
		opacity: 0;
		animation: flFadeIn 0.5s ease 0.3s forwards;
	}

	.fl-stat {
		text-align: center;
	}

	.fl-stat-value {
		font-size: 18px;
		font-weight: 800;
		color: #ffffff;
	}

	.fl-stat-label {
		font-size: 11px;
		color: #9ca3af;
		margin-top: 2px;
	}

	.fl-progress-ring {
		position: relative;
		width: 80px;
		height: 80px;
		opacity: 0;
		animation: flFadeIn 0.4s ease 0.8s forwards;
	}

	.fl-progress-ring svg {
		width: 100%;
		height: 100%;
		transform: rotate(-90deg);
	}

	.fl-ring-bg {
		fill: none;
		stroke: #374151;
		stroke-width: 4;
	}

	.fl-ring-fill {
		fill: none;
		stroke: #34d399;
		stroke-width: 4;
		stroke-linecap: round;
		stroke-dasharray: 213.6;
		stroke-dashoffset: 213.6;
		animation: flProgressRing 1.5s ease 1.2s forwards;
	}

	.fl-check-pop {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0);
		font-size: 28px;
		color: #34d399;
		font-weight: 700;
		animation: flCheckPop 0.4s ease 2.5s forwards;
	}

	.fl-live-msg {
		font-size: 14px;
		font-weight: 600;
		color: #ffffff;
		opacity: 0;
		animation: flFadeInUp 0.5s ease 2.7s forwards;
	}

	.fl-sparkle-emoji {
		display: inline-block;
	}

	/* ── Keyframes ── */
	@keyframes flFadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes flFadeInUp {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	@keyframes flFadeInScale {
		from { opacity: 0; transform: scale(0.95); }
		to { opacity: 1; transform: scale(1); }
	}

	@keyframes flTypewriter {
		from { width: 0; }
		to { width: 100%; }
	}

	@keyframes flBlink {
		50% { opacity: 0; }
	}

	@keyframes flShimmer {
		0% { background-position: 200% center; }
		100% { background-position: -200% center; }
	}

	@keyframes flPulseGlow {
		0%, 100% { text-shadow: 0 0 4px rgba(129, 140, 248, 0.3); }
		50% { text-shadow: 0 0 12px rgba(129, 140, 248, 0.6); }
	}

	@keyframes flSlideInFromLeft {
		from { opacity: 0; transform: translateX(-20px); }
		to { opacity: 1; transform: translateX(0); }
	}

	@keyframes flSlideInRight {
		from { opacity: 0; transform: translateX(20px); }
		to { opacity: 1; transform: translateX(0); }
	}

	@keyframes flProgressRing {
		to { stroke-dashoffset: 0; }
	}

	@keyframes flCheckPop {
		0% { transform: translate(-50%, -50%) scale(0); }
		70% { transform: translate(-50%, -50%) scale(1.2); }
		100% { transform: translate(-50%, -50%) scale(1); }
	}

	/* ── Responsive ── */
	@media (max-width: 1023px) {
		.fl-card {
			max-width: 380px;
		}

		.fl-dual-cards {
			max-width: 380px;
		}
	}

	@media (max-width: 767px) {
		.fl-card {
			max-width: 340px;
			padding: 16px;
		}

		.fl-dual-cards {
			flex-direction: column;
			align-items: center;
			max-width: 260px;
			gap: 8px;
		}

		.fl-mini-card {
			width: 100%;
		}

		.fl-video-player {
			height: 70px;
		}

		.fl-stats-row {
			gap: 14px;
		}

		.fl-stat-value {
			font-size: 15px;
		}

		.fl-progress-ring {
			width: 60px;
			height: 60px;
		}
	}

	/* ── Reduced motion ── */
	@media (prefers-reduced-motion: reduce) {
		.fl-card,
		.fl-typewriter,
		.fl-cursor,
		.fl-user-bubble,
		.fl-response-line,
		.fl-page-header,
		.fl-video-player,
		.fl-content-blocks,
		.fl-page-cta,
		.fl-schema-badges,
		.fl-mini-card,
		.fl-stats-row,
		.fl-progress-ring,
		.fl-check-pop,
		.fl-live-msg,
		.fl-ai-title {
			animation: none !important;
			opacity: 1 !important;
			transform: none !important;
			width: auto !important;
		}

		.fl-ring-fill {
			animation: none !important;
			stroke-dashoffset: 0 !important;
		}

		.fl-check-pop {
			transform: translate(-50%, -50%) scale(1) !important;
		}
	}
</style>
