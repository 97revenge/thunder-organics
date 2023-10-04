module.exports = {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: ["prettier-plugin-tailwindcss"],
};
