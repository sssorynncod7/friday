import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { friday: { 500: "#06b6d4" } } } },
  plugins: []
} satisfies Config;
