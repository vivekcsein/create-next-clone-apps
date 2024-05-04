import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgc: "var(--bgc)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        success: "var(--success)",
        textDark: "var(--textDark)",
        textLight: "var(--textLight)",
        shadow: "var(--shadow)",
      },
      height: {
        nav: "8vh"
      },
      fontSize: {
        16: "16px",
        17: "17px",
        25: "25px",
        27: "27px",
        40: "40px"
      }
    },
  },
  plugins: [],
};
export default config;
