/** @type {import('tailwindcss').Config} */

const customColors = {
	white: '#FFFFFF',
	lines: '#D9D9D9',
	laniakea: '#F1DA0C',
	sirius: '#F4D4F2',
	canopus: '#FCFEFF',
	betelgeuse: '#FF8B55',
	geminga: '#FF8BFA',
	gaia: '#FEFE70',
	messier: '#FF39A2',
	tabit: '#FFF4D8',
	transparent: 'transparent',
	'modal-backdrop': '#1820C9',
	'modal-bg': '#333',
	footer: '#182167',
};

const createSafeList = (color) => {
	return [`bg-${color}`, `stroke-${color}`, `text-${color}`, `border-${color}`, `fill-${color}`];
};

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: customColors,
		fontFamily: {
			mohave: ['Mohave'],
		},
	},
	safelist: Object.keys(customColors).map(createSafeList).flat(),
	plugins: [],
};
