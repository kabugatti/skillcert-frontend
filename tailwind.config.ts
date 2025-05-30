import type { Config } from "tailwindcss";

export default {
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
        purple: {
          400: "#C084FC",
        },
        cyan: {
          400: "#38BDF8",
        },
        gray: {
          400: "#9CA3AF",
          800: "#1F2937",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
