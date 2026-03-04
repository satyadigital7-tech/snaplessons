import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#1E3A8A",
                gold: "#F59E0B",
                accent: "#3B82F6",
                dark: "#0F172A",
                "dark-card": "#1E293B",
                "dark-border": "#334155",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
            },
            backgroundImage: {
                "brand-gradient":
                    "linear-gradient(135deg, #1E3A8A 0%, #F59E0B 50%, #3B82F6 100%)",
                "hero-gradient":
                    "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #0F172A 100%)",
                "card-gradient":
                    "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 4s ease-in-out infinite",
                "spin-slow": "spin 20s linear infinite",
                "gradient-x": "gradient-x 4s ease infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "gradient-x": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
            boxShadow: {
                glow: "0 0 30px rgba(59, 130, 246, 0.4)",
                "glow-gold": "0 0 30px rgba(245, 158, 11, 0.4)",
                "glow-lg": "0 0 60px rgba(59, 130, 246, 0.3)",
            },
        },
    },
    plugins: [],
};

export default config;
