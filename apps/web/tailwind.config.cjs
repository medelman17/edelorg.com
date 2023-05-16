const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--aw-color-primary)',
				secondary: 'var(--aw-color-secondary)',
				accent: 'var(--aw-color-accent)',
			},
			fontFamily: {
				sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
				serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
				heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	prefix: 'tw-',
	darkMode: 'class',
};
