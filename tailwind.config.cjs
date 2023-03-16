/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#f5f3ed",
				secondary: "#ffffff",
				"dark-blue": "#131429"
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
