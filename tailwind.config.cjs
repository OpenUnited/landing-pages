module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        "DEFAULT": "1rem",
        "sm": "2rem",
        "lg": "4rem",
        "xl": "6rem",
        "2xl": "8rem",
      },
    },
    fontFamily: {
      body: ["'DM Sans'", "sans-serif"],
    },
  },
  daisyui: {
    themes: [
      "bumblebee",
    ],
  },
  plugins: [require("daisyui")],
}
