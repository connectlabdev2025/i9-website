import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "navy-deep": "#1A2B4C",
                "cyan-vibrant": "#00AEEF",
                "gray-light": "#F5F7FA",
            },
            fontFamily: {
                sans: ["var(--font-open-sans)", "sans-serif"],
                heading: ["var(--font-montserrat)", "sans-serif"],
            },
            animation: {
                "slow-zoom": "zoom 20s infinite alternate",
            },
            keyframes: {
                zoom: {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(1.1)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
