import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				'bg-grey': '#f8f8f9',
				greyText: '#7b7ea5',

				button: {
					primary: {
						default: '#06082c',
						hover: '#353754',
						active: '#03051c',
						disable: '#cccfda'
					},
					secondary: {
						default: '#eef0f7',
						hover: '#f8f8f9',
						active: '#cccfda',
						disable: '#eef0f7'
					}
				}
			},
			borderRadius: {
				default: '20px',
				medium: '12px',
				'pre-small': '10px',
				small: '8px'
			}
		}
	},

	plugins: []
}
export default config
