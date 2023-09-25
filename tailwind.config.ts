/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "~/components/**/*.{js,vue,ts}",
    "~/layouts/**/*.vue",
    "~/pages/**/*.vue",
    "~/plugins/**/*.{js,ts}",
    "~/app.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      skyblue: "#64ADCD",
      black: "#0D0C0C",
      white: "#FBFBFB",
      primary: "#FD7B38",
      secondary: "#60B158",
      success: "#2EB67D",
      alert: "#FF6C65",
    },
    extend: {},
  },
  plugins: [],
};
