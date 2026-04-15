<script>
	import AnimationStage from './AnimationStage.svelte';
	import PhaseWrapper from './PhaseWrapper.svelte';

	const businesses = [
		{ name: 'Plumber', query: 'best plumber near me', biz: 'Rodriguez Services', domain: 'rodriguezservices.example', icon: '🔧' },
		{ name: 'Roofer', query: 'reliable roofer in my area', biz: 'Summit Roofing Co', domain: 'summitroofingco.example', icon: '🏠' },
		{ name: 'Electrician', query: 'licensed electrician near me', biz: 'Spark Electric', domain: 'sparkelectric.example', icon: '⚡' },
		{ name: 'HVAC Tech', query: 'HVAC repair near me', biz: 'CoolBreeze HVAC', domain: 'coolbreezehvac.example', icon: '❄️' },
		{ name: 'Dentist', query: 'best dentist near me', biz: 'Bright Smiles Dental', domain: 'brightsmilesdental.example', icon: '🦷' },
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

<div class="gl-animation-wrapper">
<AnimationStage {durations} height={480} onLoop={handleLoop}>
	{#snippet children(step)}
		<!-- Phase 0: Your Customer Searches -->
		{#if step === 0}
			<PhaseWrapper caption="Your customers aren't just Googling anymore">
				{#snippet children()}
						<div class="gl-card gl-search-card">
							<div class="gl-search-tabs">
								<div class="gl-tab">Google</div>
								<div class="gl-tab gl-tab-active">Answer View</div>
							</div>
						<div class="gl-search-bar">
							<span class="gl-search-icon">🔍</span>
							<span class="gl-typewriter">{biz.query}</span>
							<span class="gl-cursor">|</span>
						</div>
					</div>
				{/snippet}
			</PhaseWrapper>
		{/if}

			<!-- Phase 1: Search tools summarize options -->
			{#if step === 1}
				<PhaseWrapper caption="Search tools summarize a small set of options">
				{#snippet children()}
					<div class="gl-card gl-ai-card">
						<div class="gl-ai-header">
							<span class="gl-ai-sparkle">✨</span>
							<span class="gl-ai-title">AI Assistant</span>
						</div>
							<div class="gl-ai-user-msg">
								<div class="gl-user-bubble">"{biz.query}?"</div>
							</div>
							<div class="gl-ai-response">
								<div class="gl-response-line gl-line-1">Here are a few businesses that match:</div>
							<div class="gl-response-line gl-line-2">
								<span class="gl-stars">★★★★★</span>
								<span class="gl-biz-name">{biz.biz}</span>
							</div>
								<div class="gl-response-line gl-line-3">
									Clear service area, current site, and strong public signals...
								</div>
								<div class="gl-response-line gl-line-4">
									<span class="gl-view-link">Compare options →</span>
								</div>
							</div>
						</div>
				{/snippet}
			</PhaseWrapper>
		{/if}

			<!-- Phase 2: That Answer is YOUR Page -->
			{#if step === 2}
				<PhaseWrapper caption="Your page. Your video. Easier to understand.">
				{#snippet children()}
					<div class="gl-card gl-browser-card">
						<div class="gl-browser-chrome">
							<div class="gl-browser-dots">
								<span class="gl-dot gl-dot-red"></span>
								<span class="gl-dot gl-dot-yellow"></span>
								<span class="gl-dot gl-dot-green"></span>
							</div>
							<div class="gl-browser-url">{biz.domain}</div>
						</div>
						<div class="gl-browser-content">
							<div class="gl-page-header">
								<span class="gl-page-icon">{biz.icon}</span>
								<span class="gl-page-title">{biz.biz}</span>
							</div>
							<div class="gl-video-player">
								<div class="gl-play-btn">▶</div>
							</div>
							<div class="gl-content-blocks">
								<div class="gl-content-block"></div>
								<div class="gl-content-block"></div>
								<div class="gl-content-block"></div>
							</div>
							<div class="gl-page-cta">Call Now</div>
							<div class="gl-schema-badges">
								<span class="gl-badge">Schema.org</span>
								<span class="gl-badge">LocalBusiness</span>
								<span class="gl-badge">VideoObject</span>
							</div>
						</div>
					</div>
				{/snippet}
			</PhaseWrapper>
		{/if}

			<!-- Phase 3: Clear search signals -->
			{#if step === 3}
				<PhaseWrapper caption="Clearer signals for search and AI summaries.">
				{#snippet children()}
					<div class="gl-dual-cards">
						<div class="gl-card gl-mini-card gl-slide-left">
								<div class="gl-mini-header">
									<span>🔍</span>
									<span class="gl-mini-title">Search</span>
								</div>
							<div class="gl-result gl-result-highlight">
								<span class="gl-result-bar"></span>
								<span class="gl-result-text">{biz.biz}</span>
								<span class="gl-result-star">⭐</span>
							</div>
							<div class="gl-result gl-result-dim">
								<span class="gl-result-bar"></span>
								<span class="gl-result-text">Another provider</span>
							</div>
							<div class="gl-result gl-result-dim">
								<span class="gl-result-bar"></span>
								<span class="gl-result-text">Third result</span>
							</div>
								<div class="gl-page-one-label">Clear local offer</div>
							</div>
							<div class="gl-card gl-mini-card gl-slide-right">
								<div class="gl-mini-header">
									<span>✨</span>
									<span class="gl-mini-title">Summary</span>
								</div>
								<div class="gl-ai-rec">
									<div class="gl-rec-text">Easy to parse</div>
									<div class="gl-rec-biz">{biz.biz}</div>
									<div class="gl-rec-check">✓ Service + location clear</div>
								</div>
							</div>
						</div>
				{/snippet}
			</PhaseWrapper>
		{/if}

		<!-- Phase 4: Fast fit review -->
		{#if step === 4}
			<PhaseWrapper caption="Fast review before kickoff">
				{#snippet children()}
					<div class="gl-card gl-success-card">
						<div class="gl-success-logo">GeoLocally</div>
						<div class="gl-stats-row">
							<div class="gl-stat">
								<div class="gl-stat-value">$499</div>
								<div class="gl-stat-label">Starting at</div>
							</div>
							<div class="gl-stat">
								<div class="gl-stat-value">1 Day</div>
								<div class="gl-stat-label">Fit review</div>
							</div>
							<div class="gl-stat">
								<div class="gl-stat-value">Yours</div>
								<div class="gl-stat-label">Video + copy</div>
							</div>
						</div>
						<div class="gl-progress-ring">
							<svg viewBox="0 0 80 80">
								<circle class="gl-ring-bg" cx="40" cy="40" r="34" />
								<circle class="gl-ring-fill" cx="40" cy="40" r="34" />
							</svg>
							<span class="gl-check-pop">✓</span>
						</div>
						<div class="gl-live-msg">
							Kickoff moves fast once your fit is confirmed <span class="gl-sparkle-emoji">✨</span>
						</div>
					</div>
				{/snippet}
			</PhaseWrapper>
		{/if}
	{/snippet}
</AnimationStage>
</div>

<style>
	.gl-animation-wrapper {
		width: 100%;
	}

	/* Responsive height overrides via CSS */
	@media (min-width: 768px) and (max-width: 1023px) {
		.gl-animation-wrapper :global(.animation-stage) {
			height: 400px !important;
		}
	}

	@media (max-width: 767px) {
		.gl-animation-wrapper :global(.animation-stage) {
			height: 340px !important;
		}
	}

	/* ── Shared ── */
	.gl-card {
		background: #1f2937;
		border: 1px solid #374151;
		border-radius: 12px;
		padding: 20px;
		width: 90%;
		max-width: 420px;
		margin: 0 auto;
		opacity: 0;
		animation: glFadeInScale 0.6s ease forwards;
	}

	/* ── Phase 0: Search ── */
	.gl-search-card {
		padding: 0;
		overflow: hidden;
	}

	.gl-search-tabs {
		display: flex;
		border-bottom: 1px solid #374151;
	}

	.gl-tab {
		flex: 1;
		padding: 10px 16px;
		text-align: center;
		font-size: 13px;
		font-weight: 500;
		color: #9ca3af;
		cursor: default;
		transition: color 0.2s;
	}

	.gl-tab-active {
		color: #818cf8;
		border-bottom: 2px solid #818cf8;
	}

	.gl-search-bar {
		display: flex;
		align-items: center;
		padding: 16px 20px;
		gap: 10px;
		font-size: 15px;
		color: #ffffff;
	}

	.gl-search-icon {
		flex-shrink: 0;
	}

	.gl-typewriter {
		overflow: hidden;
		white-space: nowrap;
		border-right: none;
		width: 0;
		animation: glTypewriter 2.5s steps(40) 0.5s forwards;
	}

	.gl-cursor {
		color: #818cf8;
		animation: glBlink 0.8s step-end infinite;
	}

	/* ── Phase 1: AI Response ── */
	.gl-ai-card {
		padding: 16px;
	}

	.gl-ai-header {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 14px;
		font-size: 14px;
		font-weight: 600;
		color: #d1d5db;
	}

	.gl-ai-sparkle {
		font-size: 16px;
	}

	.gl-ai-title {
		animation: glShimmer 2s ease infinite;
		background: linear-gradient(90deg, #d1d5db 0%, #818cf8 50%, #d1d5db 100%);
		background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.gl-ai-user-msg {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 14px;
	}

	.gl-user-bubble {
		background: #374151;
		border-radius: 12px 12px 2px 12px;
		padding: 8px 14px;
		font-size: 13px;
		color: #e5e7eb;
		max-width: 80%;
		opacity: 0;
		animation: glFadeIn 0.5s ease 0.3s forwards;
	}

	.gl-ai-response {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.gl-response-line {
		font-size: 13px;
		color: #d1d5db;
		opacity: 0;
	}

	.gl-line-1 { animation: glFadeInUp 0.5s ease 0.8s forwards; }
	.gl-line-2 { animation: glFadeInUp 0.5s ease 1.4s forwards; }
	.gl-line-3 { animation: glFadeInUp 0.5s ease 2.0s forwards; font-size: 12px; color: #9ca3af; }
	.gl-line-4 { animation: glFadeInUp 0.5s ease 2.6s forwards; }

	.gl-stars {
		color: #fbbf24;
		margin-right: 6px;
		font-size: 12px;
	}

	.gl-biz-name {
		font-weight: 700;
		color: #ffffff;
	}

	.gl-view-link {
		color: #818cf8;
		font-weight: 600;
		font-size: 13px;
		text-decoration: none;
		animation: glPulseGlow 2s ease infinite;
		cursor: default;
	}

	/* ── Phase 2: Browser Mockup ── */
	.gl-browser-card {
		padding: 0;
		overflow: hidden;
	}

	.gl-browser-chrome {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 10px 14px;
		background: #111827;
		border-bottom: 1px solid #374151;
	}

	.gl-browser-dots {
		display: flex;
		gap: 5px;
	}

	.gl-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	.gl-dot-red { background: #ef4444; }
	.gl-dot-yellow { background: #eab308; }
	.gl-dot-green { background: #22c55e; }

	.gl-browser-url {
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

	.gl-browser-content {
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.gl-page-header {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 16px;
		font-weight: 700;
		color: #ffffff;
		opacity: 0;
		animation: glFadeIn 0.4s ease 0.3s forwards;
	}

	.gl-page-icon {
		font-size: 20px;
	}

	.gl-video-player {
		background: #111827;
		border-radius: 8px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		animation: glFadeInUp 0.5s ease 0.6s forwards;
	}

	.gl-play-btn {
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

	.gl-content-blocks {
		display: flex;
		gap: 8px;
		opacity: 0;
		animation: glFadeInUp 0.5s ease 1.0s forwards;
	}

	.gl-content-block {
		flex: 1;
		height: 24px;
		background: #374151;
		border-radius: 4px;
	}

	.gl-page-cta {
		background: #818cf8;
		color: #ffffff;
		font-weight: 700;
		font-size: 13px;
		text-align: center;
		padding: 8px;
		border-radius: 8px;
		opacity: 0;
		animation: glFadeInUp 0.5s ease 1.4s forwards;
	}

	.gl-schema-badges {
		display: flex;
		gap: 6px;
		justify-content: center;
		opacity: 0;
		animation: glFadeInUp 0.5s ease 1.8s forwards;
	}

	.gl-badge {
		font-size: 10px;
		color: #9ca3af;
		background: #111827;
		padding: 3px 8px;
		border-radius: 4px;
		border: 1px solid #374151;
	}

	/* ── Phase 3: Dual Cards ── */
	.gl-dual-cards {
		display: flex;
		gap: 12px;
		width: 90%;
		max-width: 420px;
		margin: 0 auto;
	}

	.gl-mini-card {
		flex: 1;
		padding: 14px;
		opacity: 0;
	}

	.gl-slide-left {
		animation: glSlideInFromLeft 0.6s ease forwards;
	}

	.gl-slide-right {
		animation: glSlideInRight 0.6s ease 0.2s forwards;
	}

	.gl-mini-header {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 13px;
		font-weight: 700;
		color: #d1d5db;
		margin-bottom: 12px;
	}

	.gl-mini-title {
		color: #ffffff;
	}

	.gl-result {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 6px 0;
		font-size: 11px;
	}

	.gl-result-bar {
		width: 3px;
		height: 16px;
		border-radius: 2px;
		background: #374151;
		flex-shrink: 0;
	}

	.gl-result-highlight .gl-result-bar {
		background: #818cf8;
	}

	.gl-result-highlight .gl-result-text {
		color: #ffffff;
		font-weight: 600;
	}

	.gl-result-dim .gl-result-text {
		color: #6b7280;
	}

	.gl-result-star {
		font-size: 10px;
	}

	.gl-page-one-label {
		margin-top: 8px;
		text-align: center;
		font-size: 10px;
		color: #34d399;
		font-weight: 600;
	}

	.gl-ai-rec {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.gl-rec-text {
		font-size: 12px;
		color: #9ca3af;
	}

	.gl-rec-biz {
		font-size: 13px;
		font-weight: 700;
		color: #ffffff;
	}

	.gl-rec-check {
		font-size: 11px;
		color: #34d399;
		font-weight: 600;
	}

	/* ── Phase 4: Success ── */
	.gl-success-card {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		padding: 24px 20px;
	}

	.gl-success-logo {
		font-size: 16px;
		font-weight: 800;
		color: #818cf8;
		letter-spacing: -0.02em;
	}

	.gl-stats-row {
		display: flex;
		gap: 20px;
		opacity: 0;
		animation: glFadeIn 0.5s ease 0.3s forwards;
	}

	.gl-stat {
		text-align: center;
	}

	.gl-stat-value {
		font-size: 18px;
		font-weight: 800;
		color: #ffffff;
	}

	.gl-stat-label {
		font-size: 11px;
		color: #9ca3af;
		margin-top: 2px;
	}

	.gl-progress-ring {
		position: relative;
		width: 80px;
		height: 80px;
		opacity: 0;
		animation: glFadeIn 0.4s ease 0.8s forwards;
	}

	.gl-progress-ring svg {
		width: 100%;
		height: 100%;
		transform: rotate(-90deg);
	}

	.gl-ring-bg {
		fill: none;
		stroke: #374151;
		stroke-width: 4;
	}

	.gl-ring-fill {
		fill: none;
		stroke: #34d399;
		stroke-width: 4;
		stroke-linecap: round;
		stroke-dasharray: 213.6;
		stroke-dashoffset: 213.6;
		animation: glProgressRing 1.5s ease 1.2s forwards;
	}

	.gl-check-pop {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0);
		font-size: 28px;
		color: #34d399;
		font-weight: 700;
		animation: glCheckPop 0.4s ease 2.5s forwards;
	}

	.gl-live-msg {
		font-size: 14px;
		font-weight: 600;
		color: #ffffff;
		opacity: 0;
		animation: glFadeInUp 0.5s ease 2.7s forwards;
	}

	.gl-sparkle-emoji {
		display: inline-block;
	}

	/* ── Keyframes ── */
	@keyframes glFadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes glFadeInUp {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	@keyframes glFadeInScale {
		from { opacity: 0; transform: scale(0.95); }
		to { opacity: 1; transform: scale(1); }
	}

	@keyframes glTypewriter {
		from { width: 0; }
		to { width: 100%; }
	}

	@keyframes glBlink {
		50% { opacity: 0; }
	}

	@keyframes glShimmer {
		0% { background-position: 200% center; }
		100% { background-position: -200% center; }
	}

	@keyframes glPulseGlow {
		0%, 100% { text-shadow: 0 0 4px rgba(129, 140, 248, 0.3); }
		50% { text-shadow: 0 0 12px rgba(129, 140, 248, 0.6); }
	}

	@keyframes glSlideInFromLeft {
		from { opacity: 0; transform: translateX(-20px); }
		to { opacity: 1; transform: translateX(0); }
	}

	@keyframes glSlideInRight {
		from { opacity: 0; transform: translateX(20px); }
		to { opacity: 1; transform: translateX(0); }
	}

	@keyframes glProgressRing {
		to { stroke-dashoffset: 0; }
	}

	@keyframes glCheckPop {
		0% { transform: translate(-50%, -50%) scale(0); }
		70% { transform: translate(-50%, -50%) scale(1.2); }
		100% { transform: translate(-50%, -50%) scale(1); }
	}

	/* ── Responsive ── */
	@media (max-width: 1023px) {
		.gl-card {
			max-width: 380px;
		}

		.gl-dual-cards {
			max-width: 380px;
		}
	}

	@media (max-width: 767px) {
		.gl-card {
			max-width: 340px;
			padding: 16px;
		}

		.gl-dual-cards {
			flex-direction: column;
			align-items: center;
			max-width: 260px;
			gap: 8px;
		}

		.gl-mini-card {
			width: 100%;
		}

		.gl-video-player {
			height: 70px;
		}

		.gl-stats-row {
			gap: 14px;
		}

		.gl-stat-value {
			font-size: 15px;
		}

		.gl-progress-ring {
			width: 60px;
			height: 60px;
		}
	}

	/* ── Reduced motion ── */
	@media (prefers-reduced-motion: reduce) {
		.gl-card,
		.gl-typewriter,
		.gl-cursor,
		.gl-user-bubble,
		.gl-response-line,
		.gl-page-header,
		.gl-video-player,
		.gl-content-blocks,
		.gl-page-cta,
		.gl-schema-badges,
		.gl-mini-card,
		.gl-stats-row,
		.gl-progress-ring,
		.gl-check-pop,
		.gl-live-msg,
		.gl-ai-title {
			animation: none !important;
			opacity: 1 !important;
			transform: none !important;
			width: auto !important;
		}

		.gl-ring-fill {
			animation: none !important;
			stroke-dashoffset: 0 !important;
		}

		.gl-check-pop {
			transform: translate(-50%, -50%) scale(1) !important;
		}
	}
</style>
