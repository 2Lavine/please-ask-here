import { nextui } from "@nextui-org/react";
import type { Config } from 'tailwindcss';
// const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")
import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scale: {
        '97': '0.97',
      }

    },
  },
  plugins: [nextui(), iconsPlugin({
    // Select the icon collections you want to use
    collections: getIconCollections(["mdi", "lucide", 'material-symbols', 'ph', 'akar-icons', 'simple-icons', 'fluent', 'cryptocurrency-color', 'iconamoon', 'carbon', 'mingcute']),
  }),],
  darkMode: "class",
};
export default config;
