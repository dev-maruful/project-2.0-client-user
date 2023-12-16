/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-0": "#FFFFFF",
        "gray-50": "#F9FAFB",
        "gray-100": "#F3F4F6",
        "gray-200": "#E5E7EB",
        "gray-300": "#D1D5DB",
        "gray-400": "#9CA3AF",
        "gray-500": "#6B7280",
        "gray-600": "#4B5563",
        "gray-700": "#374151",
        "gray-800": "#1F2937",
        "gray-900": "#111827",
        "indigo-50": "#EEF2FF",
        "indigo-100": "#E0E7FF",
        "indigo-200": "#C7D2FE",
        "indigo-300": "#A5B4FC",
        "indigo-400": "#818CF8",
        "indigo-500": "#6366F1",
        "indigo-600": "#4F46E5",
        "indigo-700": "#4338CA",
        "indigo-800": "#3730A3",
        "indigo-900": "#312E81",
      },
    },
  },
  presets: [require("keep-react/src/keep-preset.js")],
  plugins: [],
};
