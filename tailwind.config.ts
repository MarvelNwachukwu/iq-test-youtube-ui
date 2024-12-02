import type { Config } from 'tailwindcss';
// @ts-expect-error: tailwind-scrollbar-hide is not a module
import scrollbarHide from 'tailwind-scrollbar-hide';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yt-black': '#0f0f0f',
        'yt-red': '#ff0000',
        'yt-gray': {
          light: '#272727',
          dark: '#181818',
        },
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [scrollbarHide],
};

export default config;