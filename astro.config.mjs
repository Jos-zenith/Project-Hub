// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		starlight({
			title: 'The Zenith Index',
			description: 'Premium Digital Archive - Design Portfolio',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ejoszenith' }],
			sidebar: [
				{
					label: 'Home',
					slug: '',
				},
				{
					label: 'Retail',
					items: [
						{ label: 'Pothys Branding', slug: 'retail/pothys' },
					],
				},
				{
					label: 'Corporate',
					items: [
						{ label: 'Pristine Solutions', slug: 'corporate/pristine' },
					],
				},
				{
					label: 'Creative Assets',
					items: [
						{ label: 'Posters & Graphics', slug: 'creative/posters' },
					],
				},
			],
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'script',
					attrs: {
						src: '/src/components/spotlight.js',
						defer: true,
					},
				},
				{
					tag: 'script',
					attrs: {
						src: '/src/components/lottie.js',
						defer: true,
					},
				},
			],
		}),
	],
	viewTransitions: true,
});
