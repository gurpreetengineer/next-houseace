module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      colors: {
        red: {
          lesslight: "#FFE8E8",
          light: "#F87171",
          DEFAULT: "#F96868",
          dark: "#EF4444",
          moredark: "#DC2626"
        },
        gray: {
          lesslight: "#E5E7EB",
          light: "#959595",
          DEFAULT: "#616161",
          dark: "#161616",
          moredark: "#4B5563"
        },
        custom: {
          1: "#D5D2C8"
        }
      },
      maxWidth: {
        message: "919px",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/landing/banner.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
