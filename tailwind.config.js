export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        accent: "var(--accent)",
        "primary-content": "var(--primary-content)",
        "card-bg": "var(--card-bg)",
      },
      backgroundColor: {
        'card': 'var(--card-bg)',
      },
    },
  },
  plugins: [],
}