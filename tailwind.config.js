/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue_custom: "#061738",
        whiteblue_custom: "#06b3fc",
        whiteblue_custom2: "#039bfc",
        whiteblue_custom3: "#0071fc",
        pink_custom: "#fc0272",
        lightpink_custom: "#fb066e",
        yellow_custom: "#f8ba01",
        blue_custom: "#072760",
        primary: "#133882",
        second: "#DD3500",
        custom_purple: "#5E5BFF",
        paragraph: "#777777"
      }
    }
  },
  plugins: [],
}