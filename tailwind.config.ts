import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                red: "var(--red)",
                white: "var(--white)",
                gray: "var(--gray)",
                darkgray: "var(--darkgray)",
            },
            fontFamily: {
                roboto: "var(--font-roboto)",
            },
        },
    },
    plugins: [],
};
export default config;
