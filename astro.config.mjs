import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Lacy Note',
			social: {
				github: 'https://github.com/A193166',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Notes',
					items: [
						{ label: 'Day 2 Summary', slug: 'notes/day-2-Summary' },
						{ label: 'Day 3 Summary', slug: 'notes/day-3-Summary' },
						{ label: 'Day 4 Summary', slug: 'notes/day-4-summary' },
					],
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
