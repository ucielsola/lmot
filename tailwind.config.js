/** @type {import('tailwindcss').Config} */

const customColors = {
	lines: '#D9D9D9',
	'foam-green': '#ABEBBD',
	'ufo-green': '#46CD6E',
	mulberry: '#45BBFF',
	'winter-wizard': '#A1DCFF',
	pigment: '#22389C',
	transparent: 'transparent',
};

const createSafeList = (color) => {
	return [`bg-${color}`, `stroke-${color}`, `text-${color}`, `border-${color}`, `fill-${color}`];
};

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: customColors,
	},
	safelist: Object.keys(customColors).map(createSafeList).flat(),
	plugins: [],
};
