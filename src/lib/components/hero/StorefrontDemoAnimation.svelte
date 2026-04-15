<script>
	import AnimationStage from './AnimationStage.svelte';
	import PhaseWrapper from './PhaseWrapper.svelte';

	const businesses = [
		{ biz: 'Rodriguez Services', domain: 'rodriguezservices.com', icon: '🔧', service: 'Plumbing & Repairs' },
		{ biz: 'Bright Smiles Dental', domain: 'brightsmilesdental.com', icon: '🦷', service: 'Family Dentistry' },
		{ biz: 'Spark Electric', domain: 'sparkelectric.com', icon: '⚡', service: 'Electrical Services' },
		{ biz: 'AlignWell Chiropractic', domain: 'alignwellchiro.com', icon: '🩺', service: 'Chiropractic Care' },
	];

	const durations = [4500, 4500, 4500, 4500];

	let tradeIndex = $state(0);

	function handleLoop() {
		tradeIndex = (tradeIndex + 1) % businesses.length;
	}

	let biz = $derived(businesses[tradeIndex]);
</script>

<div class="sd-animation-wrapper">
<AnimationStage {durations} height={420} onLoop={handleLoop}>
	{#snippet children(step)}
		<!-- Phase 0: Your Landing Page -->
		{#if step === 0}
			<PhaseWrapper caption="Your landing page — mobile-first & fast">
				{#snippet children()}
					<div class="sd-card sd-browser-card">
						<div class="sd-browser-chrome">
							<div class="sd-browser-dots">
								<span class="sd-dot sd-dot-red"></span>
								<span class="sd-dot sd-dot-yellow"></span>
								<span class="sd-dot sd-dot-green"></span>
							</div>
							<div class="sd-browser-url">{biz.domain}</div>
						</div>
						<div class="sd-browser-content">
							<div class="sd-page-hero">
								<span class="sd-page-icon">{biz.icon}</span>
								<div>
									<div class="sd-page-title">{biz.biz}</div>
									<div class="sd-page-subtitle">{biz.service}</div>
								</div>
							</div>
							<div class="sd-services">
								<div class="sd-service-item sd-anim-1">
									<span class="sd-service-dot"></span>
									<span class="sd-service-bar"></span>
								</div>
								<div class="sd-service-item sd-anim-2">
									<span class="sd-service-dot"></span>
									<span class="sd-service-bar"></span>
								</div>
								<div class="sd-service-item sd-anim-3">
									<span class="sd-service-dot"></span>
									<span class="sd-service-bar"></span>
								</div>
							</div>
							<div class="sd-reviews">
								<span class="sd-stars">★★★★★</span>
								<span class="sd-review-text">4.9 · 127 reviews</span>
							</div>
							<div class="sd-cta-btn">Call Now — Free Estimate</div>
						</div>
					</div>
				{/snippet}
			</PhaseWrapper>
		{/if}

		<!-- Phase 1: Your Explainer Video -->
		{#if step === 1}
			<PhaseWrapper caption="Your explainer video — ready for web & social">
				{#snippet children()}
					<div class="sd-card sd-video-card">
						<div class="sd-video-header">
							<span class="sd-video-icon">🎬</span>
							<span class="sd-video-title">{biz.biz} — Explainer</span>
						</div>
						<div class="sd-video-player">
							<div class="sd-video-screen">
								<span class="sd-play-icon">▶</span>
							</div>
							<div class="sd-waveform">
								<div class="sd-wave sd-w1"></div>
								<div class="sd-wave sd-w2"></div>
								<div class="sd-wave sd-w3"></div>
								<div class="sd-wave sd-w4"></div>
								<div class="sd-wave sd-w5"></div>
								<div class="sd-wave sd-w6"></div>
								<div class="sd-wave sd-w7"></div>
								<div class="sd-wave sd-w8"></div>
							</div>
							<div class="sd-progress-bar">
								<div class="sd-progress-fill"></div>
							</div>
						</div>
						<div class="sd-script-lines">
							<div class="sd-script-line sd-script-1">"Looking for a trusted {biz.service.toLowerCase()} provider?"</div>
							<div class="sd-script-line sd-script-2">"{biz.biz} has served your community for over 10 years..."</div>
						</div>
						<div class="sd-format-badges">
							<span class="sd-format">Web</span>
							<span class="sd-format">Instagram</span>
							<span class="sd-format">TikTok</span>
							<span class="sd-format">YouTube</span>
						</div>
					</div>
				{/snippet}
			</PhaseWrapper>
		{/if}

			<!-- Phase 2: Structured for search systems -->
			{#if step === 2}
				<PhaseWrapper caption="Structured data — so search tools can parse the page">
				{#snippet children()}
						<div class="sd-card sd-schema-card">
							<div class="sd-schema-header">
								<span class="sd-schema-icon">✨</span>
								<span class="sd-schema-title">Search-Ready Structure</span>
							</div>
						<div class="sd-code-block">
							<div class="sd-code-line sd-code-1"><span class="sd-code-key">"@type"</span>: <span class="sd-code-val">"LocalBusiness"</span></div>
							<div class="sd-code-line sd-code-2"><span class="sd-code-key">"name"</span>: <span class="sd-code-val">"{biz.biz}"</span></div>
							<div class="sd-code-line sd-code-3"><span class="sd-code-key">"video"</span>: <span class="sd-code-val">"VideoObject"</span></div>
							<div class="sd-code-line sd-code-4"><span class="sd-code-key">"aggregateRating"</span>: <span class="sd-code-val">"4.9 ★"</span></div>
							<div class="sd-code-line sd-code-5"><span class="sd-code-key">"areaServed"</span>: <span class="sd-code-val">"Local"</span></div>
						</div>
						<div class="sd-schema-badges">
							<span class="sd-s-badge sd-sb-1">LocalBusiness ✓</span>
							<span class="sd-s-badge sd-sb-2">VideoObject ✓</span>
							<span class="sd-s-badge sd-sb-3">FAQ ✓</span>
							<span class="sd-s-badge sd-sb-4">AggregateRating ✓</span>
						</div>
							<div class="sd-ai-ready">
								<span class="sd-ai-check">✓</span>
								<span class="sd-ai-text">Machine-readable</span>
							</div>
						</div>
					{/snippet}
				</PhaseWrapper>
			{/if}

		<!-- Phase 3: Live & Tracking -->
		{#if step === 3}
				<PhaseWrapper caption="Live with analytics — track visits and form actions">
				{#snippet children()}
					<div class="sd-card sd-dashboard-card">
						<div class="sd-dash-header">
							<span class="sd-dash-icon">📊</span>
							<span class="sd-dash-title">{biz.biz} — Dashboard</span>
						</div>
						<div class="sd-dash-live">
							<span class="sd-live-dot"></span>
							<span class="sd-live-text">Your page is live</span>
						</div>
						<div class="sd-dash-stats">
							<div class="sd-dash-stat sd-ds-1">
								<div class="sd-dash-num">847</div>
								<div class="sd-dash-label">Visits</div>
							</div>
								<div class="sd-dash-stat sd-ds-2">
									<div class="sd-dash-num">234</div>
									<div class="sd-dash-label">CTA Clicks</div>
								</div>
								<div class="sd-dash-stat sd-ds-3">
									<div class="sd-dash-num">14</div>
									<div class="sd-dash-label">Leads</div>
								</div>
						</div>
						<div class="sd-dash-chart">
							<div class="sd-bar sd-bar-1"></div>
							<div class="sd-bar sd-bar-2"></div>
							<div class="sd-bar sd-bar-3"></div>
							<div class="sd-bar sd-bar-4"></div>
							<div class="sd-bar sd-bar-5"></div>
							<div class="sd-bar sd-bar-6"></div>
							<div class="sd-bar sd-bar-7"></div>
						</div>
					</div>
				{/snippet}
			</PhaseWrapper>
		{/if}
	{/snippet}
</AnimationStage>
</div>

<style>
	.sd-animation-wrapper {
		width: 100%;
	}

	@media (min-width: 768px) and (max-width: 1023px) {
		.sd-animation-wrapper :global(.animation-stage) {
			height: 380px !important;
		}
	}

	@media (max-width: 767px) {
		.sd-animation-wrapper :global(.animation-stage) {
			height: 340px !important;
		}
	}

	/* ── Shared ── */
	.sd-card {
		background: #1f2937;
		border: 1px solid #374151;
		border-radius: 12px;
		padding: 20px;
		width: 90%;
		max-width: 420px;
		margin: 0 auto;
		opacity: 0;
		animation: sdFadeInScale 0.6s ease forwards;
	}

	/* ── Phase 0: Landing Page ── */
	.sd-browser-card {
		padding: 0;
		overflow: hidden;
	}

	.sd-browser-chrome {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 10px 14px;
		background: #111827;
		border-bottom: 1px solid #374151;
	}

	.sd-browser-dots { display: flex; gap: 5px; }
	.sd-dot { width: 10px; height: 10px; border-radius: 50%; }
	.sd-dot-red { background: #ef4444; }
	.sd-dot-yellow { background: #eab308; }
	.sd-dot-green { background: #22c55e; }

	.sd-browser-url {
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

	.sd-browser-content {
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.sd-page-hero {
		display: flex;
		align-items: center;
		gap: 10px;
		opacity: 0;
		animation: sdFadeIn 0.4s ease 0.3s forwards;
	}

	.sd-page-icon { font-size: 24px; }
	.sd-page-title { font-size: 15px; font-weight: 700; color: #fff; }
	.sd-page-subtitle { font-size: 11px; color: #9ca3af; margin-top: 1px; }

	.sd-services {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.sd-service-item {
		display: flex;
		align-items: center;
		gap: 8px;
		opacity: 0;
	}

	.sd-anim-1 { animation: sdFadeInUp 0.4s ease 0.6s forwards; }
	.sd-anim-2 { animation: sdFadeInUp 0.4s ease 0.8s forwards; }
	.sd-anim-3 { animation: sdFadeInUp 0.4s ease 1.0s forwards; }

	.sd-service-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #818cf8;
		flex-shrink: 0;
	}

	.sd-service-bar {
		height: 8px;
		background: #374151;
		border-radius: 4px;
		flex: 1;
	}

	.sd-reviews {
		display: flex;
		align-items: center;
		gap: 6px;
		opacity: 0;
		animation: sdFadeInUp 0.4s ease 1.2s forwards;
	}

	.sd-stars { color: #fbbf24; font-size: 12px; }
	.sd-review-text { color: #9ca3af; font-size: 11px; }

	.sd-cta-btn {
		background: #818cf8;
		color: #fff;
		font-weight: 700;
		font-size: 13px;
		text-align: center;
		padding: 8px;
		border-radius: 8px;
		opacity: 0;
		animation: sdFadeInUp 0.4s ease 1.5s forwards;
	}

	/* ── Phase 1: Video ── */
	.sd-video-card { padding: 16px; }

	.sd-video-header {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
		font-size: 14px;
		font-weight: 600;
		color: #d1d5db;
	}

	.sd-video-icon { font-size: 16px; }

	.sd-video-player {
		background: #111827;
		border-radius: 8px;
		padding: 12px;
		margin-bottom: 12px;
	}

	.sd-video-screen {
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 8px;
		opacity: 0;
		animation: sdFadeIn 0.4s ease 0.3s forwards;
	}

	.sd-play-icon {
		width: 36px;
		height: 36px;
		background: rgba(129, 140, 248, 0.3);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #818cf8;
		font-size: 14px;
	}

	.sd-waveform {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3px;
		height: 20px;
		margin-bottom: 8px;
	}

	.sd-wave {
		width: 3px;
		background: #818cf8;
		border-radius: 2px;
		animation: sdWave 1.2s ease-in-out infinite;
	}

	.sd-w1 { height: 8px; animation-delay: 0s; }
	.sd-w2 { height: 14px; animation-delay: 0.1s; }
	.sd-w3 { height: 10px; animation-delay: 0.2s; }
	.sd-w4 { height: 18px; animation-delay: 0.3s; }
	.sd-w5 { height: 12px; animation-delay: 0.4s; }
	.sd-w6 { height: 16px; animation-delay: 0.5s; }
	.sd-w7 { height: 9px; animation-delay: 0.6s; }
	.sd-w8 { height: 13px; animation-delay: 0.7s; }

	.sd-progress-bar {
		height: 3px;
		background: #374151;
		border-radius: 2px;
		overflow: hidden;
	}

	.sd-progress-fill {
		height: 100%;
		width: 0;
		background: #818cf8;
		border-radius: 2px;
		animation: sdProgress 3.5s ease 0.5s forwards;
	}

	.sd-script-lines {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-bottom: 12px;
	}

	.sd-script-line {
		font-size: 12px;
		color: #d1d5db;
		font-style: italic;
		opacity: 0;
	}

	.sd-script-1 { animation: sdFadeInUp 0.5s ease 1.0s forwards; }
	.sd-script-2 { animation: sdFadeInUp 0.5s ease 1.8s forwards; }

	.sd-format-badges {
		display: flex;
		gap: 6px;
		justify-content: center;
		opacity: 0;
		animation: sdFadeInUp 0.4s ease 2.4s forwards;
	}

	.sd-format {
		font-size: 10px;
		color: #9ca3af;
		background: #111827;
		padding: 3px 8px;
		border-radius: 4px;
		border: 1px solid #374151;
	}

	/* ── Phase 2: Schema / AI ── */
	.sd-schema-card { padding: 16px; }

	.sd-schema-header {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 14px;
		font-size: 14px;
		font-weight: 600;
		color: #d1d5db;
	}

	.sd-schema-icon { font-size: 16px; }

	.sd-schema-title {
		animation: sdShimmer 2s ease infinite;
		background: linear-gradient(90deg, #d1d5db 0%, #818cf8 50%, #d1d5db 100%);
		background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.sd-code-block {
		background: #111827;
		border-radius: 8px;
		padding: 12px 14px;
		margin-bottom: 12px;
		font-family: monospace;
	}

	.sd-code-line {
		font-size: 11px;
		color: #9ca3af;
		padding: 2px 0;
		opacity: 0;
	}

	.sd-code-1 { animation: sdFadeInUp 0.3s ease 0.4s forwards; }
	.sd-code-2 { animation: sdFadeInUp 0.3s ease 0.6s forwards; }
	.sd-code-3 { animation: sdFadeInUp 0.3s ease 0.8s forwards; }
	.sd-code-4 { animation: sdFadeInUp 0.3s ease 1.0s forwards; }
	.sd-code-5 { animation: sdFadeInUp 0.3s ease 1.2s forwards; }

	.sd-code-key { color: #818cf8; }
	.sd-code-val { color: #34d399; }

	.sd-schema-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		justify-content: center;
		margin-bottom: 12px;
	}

	.sd-s-badge {
		font-size: 10px;
		font-weight: 600;
		color: #34d399;
		background: rgba(52, 211, 153, 0.1);
		border: 1px solid rgba(52, 211, 153, 0.2);
		padding: 3px 10px;
		border-radius: 4px;
		opacity: 0;
	}

	.sd-sb-1 { animation: sdFadeIn 0.3s ease 1.5s forwards; }
	.sd-sb-2 { animation: sdFadeIn 0.3s ease 1.7s forwards; }
	.sd-sb-3 { animation: sdFadeIn 0.3s ease 1.9s forwards; }
	.sd-sb-4 { animation: sdFadeIn 0.3s ease 2.1s forwards; }

	.sd-ai-ready {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		opacity: 0;
		animation: sdFadeInScale 0.5s ease 2.5s forwards;
	}

	.sd-ai-check {
		width: 24px;
		height: 24px;
		background: #34d399;
		color: #111827;
		font-weight: 700;
		font-size: 14px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sd-ai-text {
		font-size: 14px;
		font-weight: 700;
		color: #34d399;
	}

	/* ── Phase 3: Dashboard ── */
	.sd-dashboard-card { padding: 16px; }

	.sd-dash-header {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
		font-size: 14px;
		font-weight: 600;
		color: #d1d5db;
	}

	.sd-dash-icon { font-size: 16px; }

	.sd-dash-live {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 14px;
		opacity: 0;
		animation: sdFadeIn 0.4s ease 0.3s forwards;
	}

	.sd-live-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #34d399;
		animation: sdPulse 2s ease infinite;
	}

	.sd-live-text {
		font-size: 12px;
		font-weight: 600;
		color: #34d399;
	}

	.sd-dash-stats {
		display: flex;
		gap: 16px;
		justify-content: center;
		margin-bottom: 14px;
	}

	.sd-dash-stat {
		text-align: center;
		opacity: 0;
	}

	.sd-ds-1 { animation: sdFadeInUp 0.4s ease 0.6s forwards; }
	.sd-ds-2 { animation: sdFadeInUp 0.4s ease 0.9s forwards; }
	.sd-ds-3 { animation: sdFadeInUp 0.4s ease 1.2s forwards; }

	.sd-dash-num {
		font-size: 22px;
		font-weight: 800;
		color: #fff;
	}

	.sd-dash-label {
		font-size: 11px;
		color: #9ca3af;
		margin-top: 2px;
	}

	.sd-dash-chart {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		gap: 8px;
		height: 60px;
		opacity: 0;
		animation: sdFadeIn 0.4s ease 1.5s forwards;
	}

	.sd-bar {
		width: 24px;
		background: #818cf8;
		border-radius: 4px 4px 0 0;
		animation: sdGrow 0.6s ease forwards;
	}

	.sd-bar-1 { height: 0; animation-delay: 1.6s; --target-height: 20px; }
	.sd-bar-2 { height: 0; animation-delay: 1.7s; --target-height: 30px; }
	.sd-bar-3 { height: 0; animation-delay: 1.8s; --target-height: 25px; }
	.sd-bar-4 { height: 0; animation-delay: 1.9s; --target-height: 40px; }
	.sd-bar-5 { height: 0; animation-delay: 2.0s; --target-height: 35px; }
	.sd-bar-6 { height: 0; animation-delay: 2.1s; --target-height: 50px; }
	.sd-bar-7 { height: 0; animation-delay: 2.2s; --target-height: 55px; }

	/* ── Keyframes ── */
	@keyframes sdFadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes sdFadeInUp {
		from { opacity: 0; transform: translateY(8px); }
		to { opacity: 1; transform: translateY(0); }
	}

	@keyframes sdFadeInScale {
		from { opacity: 0; transform: scale(0.95); }
		to { opacity: 1; transform: scale(1); }
	}

	@keyframes sdWave {
		0%, 100% { transform: scaleY(1); }
		50% { transform: scaleY(1.8); }
	}

	@keyframes sdProgress {
		from { width: 0; }
		to { width: 100%; }
	}

	@keyframes sdShimmer {
		0% { background-position: 200% center; }
		100% { background-position: -200% center; }
	}

	@keyframes sdPulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.4; }
	}

	@keyframes sdGrow {
		from { height: 0; }
		to { height: var(--target-height); }
	}

	/* ── Responsive ── */
	@media (max-width: 1023px) {
		.sd-card { max-width: 380px; }
	}

	@media (max-width: 767px) {
		.sd-card { max-width: 340px; padding: 14px; }
		.sd-video-screen { height: 45px; }
		.sd-dash-chart { height: 45px; }
		.sd-bar-1 { --target-height: 14px; }
		.sd-bar-2 { --target-height: 22px; }
		.sd-bar-3 { --target-height: 18px; }
		.sd-bar-4 { --target-height: 30px; }
		.sd-bar-5 { --target-height: 25px; }
		.sd-bar-6 { --target-height: 38px; }
		.sd-bar-7 { --target-height: 42px; }
	}

	/* ── Reduced motion ── */
	@media (prefers-reduced-motion: reduce) {
		.sd-card,
		.sd-page-hero,
		.sd-service-item,
		.sd-reviews,
		.sd-cta-btn,
		.sd-video-screen,
		.sd-script-line,
		.sd-format-badges,
		.sd-code-line,
		.sd-s-badge,
		.sd-ai-ready,
		.sd-dash-live,
		.sd-dash-stat,
		.sd-dash-chart,
		.sd-schema-title {
			animation: none !important;
			opacity: 1 !important;
			transform: none !important;
		}

		.sd-wave {
			animation: none !important;
		}

		.sd-progress-fill {
			animation: none !important;
			width: 60%;
		}

		.sd-bar {
			animation: none !important;
			height: var(--target-height) !important;
		}

		.sd-live-dot {
			animation: none !important;
		}
	}
</style>
