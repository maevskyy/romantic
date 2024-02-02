/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main_rose: '#e5b6c9',
			},
			backgroundImage: {
				'first-love': "url('/src/shared/assets/imgs/lovePopUp/first.jpg')",
				// 'footer-texture': "url('/img/footer-texture.png')",
			},
		},
	},
	plugins: [],
};
