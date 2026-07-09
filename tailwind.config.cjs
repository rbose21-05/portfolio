/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: "#eef2ff",
                    100: "#e0e7ff",
                    200: "#c7d2fe",
                    300: "#a5b4fc",
                    400: "#818cf8",
                    500: "#6366f1",
                    600: "#4f46e5",
                    700: "#4338ca",
                    800: "#3730a3",
                    900: "#312e81",
                },
                surface: {
                    light: "#faf9fc",
                    card: "#ffffff",
                    dark: "#09090b",
                    "card-dark": "#18181b",
                },
            },
            fontFamily: {
                sans: ["Montserrat", "Poppins", "sans-serif"],
            },
            boxShadow: {
                glow: "0 0 40px rgba(99, 102, 241, 0.15)",
                "glow-lg": "0 0 60px rgba(124, 58, 237, 0.2)",
                card: "0 4px 24px rgba(24, 24, 27, 0.07)",
                "card-dark": "0 4px 24px rgba(0, 0, 0, 0.35)",
            },
            backgroundImage: {
                "gradient-brand":
                    "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #9333ea 100%)",
                "gradient-hero":
                    "linear-gradient(135deg, #4338ca 0%, #7c3aed 100%)",
            },
        },
    },
    plugins: [],
};
