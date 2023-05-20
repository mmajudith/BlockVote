/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				green: '#1CB859',
				'black-opacity': 'hsl(7, 7%, 7%, 20%)',
				gray: 'rgba(96, 96, 96, 0.8)',
				'light-gray': 'hsl(228, 33%, 97%)',
				black: '#24292E',
			},
			boxShadow: {
				'3xl': '0px 4px 8px rgba(214, 219, 230, 0.25)',
				'4xl': '0px 4px 14px rgba(151, 151, 151, 0.19)',
			},
			fontFamily: {
				sans: ['Montserrat'],
			},
		},
	},
	plugins: [],
};
