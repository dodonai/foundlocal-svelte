/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				foundlocal: {
					primary: '#4f46e5',
					secondary: '#6366f1',
					accent: '#10b981',
					neutral: '#111827',
					'base-100': '#ffffff',
					'base-200': '#f9fafb',
					'base-300': '#e5e7eb',
					info: '#3b82f6',
					success: '#10b981',
					warning: '#f59e0b',
					error: '#ef4444'
				}
			}
		],
		base: true,
		styled: true,
		utils: true,
		logs: false
	}
};
