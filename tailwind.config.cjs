function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    // screens: {
    //   sm: "640px",
    // },

    // Uncomment the following extend
    // if existing Tailwind color palette will be used

    extend: {
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs: "768px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["SF Mono", "Inter", "sans-serif"],
        descFont: ["Inter", "san-serif"],
        navFont: ["Calibre", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        body: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor: "#404258",
        bodyDark: "#404258",
        bodyLight: "#CDC2AE",
        textPrimary: "#DD7732",
        textLink: "#0E8388",
        textLight: "#ccd6f6",
        textDark: "#1A120B",
        dark1: "#1B2430",
        dark2: "#394867",
        dark3: "#354259",
        light1: "#E1D4BB",
        light2: "#FCF8E8",
        light3: "#E6BA95",
        hoverColor: "rgba(115, 115, 115, 0.3)",
      },
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-fill"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-text-base"),
          card: withOpacity("--color-card"),
          "card-muted": withOpacity("--color-card-muted"),
        },
      },
      outlineColor: {
        skin: {
          fill: withOpacity("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          line: withOpacity("--color-border"),
          fill: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
      },
      fill: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
        transparent: "transparent",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};