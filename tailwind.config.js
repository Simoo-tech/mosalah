/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "350px",
          md: "700px",
          lg: "1024",
        },
        padding: {
          sm: "1.5rem",
          md: "2.5rem",
          lg: "3rem",
        },
      },
    },
  },
  plugins: [],
};
