/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#e6e3ff',
					200: '#ccc8ff',
					300: '#b3acff',
					400: '#9991ff',
					500: '#8075ff',
					600: '#665ecc',
					700: '#4d4699',
					800: '#332f66',
					900: '#1a1733',
				},
			},
		},
	},
	plugins: [],
};
