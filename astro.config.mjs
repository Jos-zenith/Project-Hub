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
			description: 'Designer Manual and Project Blueprint portfolio',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ejoszenith' }],
			sidebar: [
				{
					label: 'Home',
					slug: '',
				},
				{
					label: 'Profile',
					items: [
						{ label: 'About', slug: 'about' },
						{ label: 'Experience', slug: 'experience' },
						{ label: 'Skills', slug: 'skills' },
					],
				},
				{
					label: 'Projects',
					items: [
						{ label: 'Archive Overview', slug: 'projects' },
					],
				},
				{
					label: 'Retail (Pothys)',
					items: [
						{ label: 'Pothys Branding', slug: 'retail/pothys' },
					],
				},
				{
					label: 'Corporate (Pristine)',
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
});
