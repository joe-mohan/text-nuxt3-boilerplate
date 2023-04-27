/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const breakpoints = {
  xs: 456,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920,
}

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    spacing: {
      0: "0px",
      1: "1px",
      2: "0.125rem; /* 2px */",
      3: "0.1875rem; /* 3px */",
      4: "0.25rem; /* 4px */",
      6: "0.375rem; /* 6px */",
      8: "0.5rem; /* 8px */",
      10: "0.625rem; /* 10px */",
      12: "0.75rem; /* 12px */",
      14: "0.875rem; /* 14px */",
      16: "1rem; /* 16px */",
      18: "1.125rem; /* 18px */",
      20: "1.25rem; /* 20px */",
      24: "1.5rem; /* 24px */",
      30: "1.875rem; /* 30px */",
      36: "2.25rem; /* 36px */",
      42: "2.625rem; /* 42px */",
      44: "2.75rem; /* 44px */",
      48: "3rem; /* 48px */",
      54: "3.375rem; /* 54px */",
      60: "3.75rem; /* 60px */",
      66: "4.125rem; /* 66px */",
      72: "4.5rem; /* 72px */",
      76: "4.75rem; /* 76px */",
      84: "5.25rem; /* 84px */",
      90: "5.625rem; /* 90px */",
      96: "6rem; /* 96px */",
      102: "6.375rem; /* 102px */",
      108: "6.75rem; /* 108px */",
      114: "7.125rem; /* 114px */",
      120: "7.5rem; /* 120px */",
      126: "7.875rem; /* 126px */",
      132: "8.25rem; /* 132px */",
      138: "8.625rem; /* 138px */",
      144: "9rem; /* 144px */",
      150: "9.375rem; /* 150px */",
      156: "9.75rem; /* 156px */",
      162: "10.125rem; /* 162px */",
      168: "10.5rem; /* 168px */",
      174: "10.875rem; /* 174px */",
      180: "11.25rem; /* 180px */",
      "1/12": "8.33333333%",
      "2/12": "16.66666667%",
      "3/12": "25%",
      "4/12": "33.33333333%",
      "5/12": "41.66666667%",
      "6/12": "50%",
      "7/12": "58.33333333%",
      "8/12": "66.66666667%",
      "9/12": "75%",
      "10/12": "83.33333333%",
      "11/12": "91.66666667%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      full: "100%",
      "16/9": "56.25%",
      auto: "auto",
      fit: "fit-content",
      min: "min-content",
      max: "max-content",
    },
    screens: {
      xs: `${breakpoints.xs}px`,
      // => @media (min-width: 456px) { ... }

      sm:  `${breakpoints.sm}px`,
      // => @media (min-width: 640px) { ... }

      md: `${breakpoints.md}px`,
      // => @media (min-width: 768px) { ... }

      lg:   `${breakpoints.lg}px`,
      // => @media (min-width: 1024px) { ... }

      xl: `${breakpoints.xl}px`,
      // => @media (min-width: 1280px) { ... }

      "2xl": `${breakpoints["2xl"]}px`,
      // => @media (min-width: 1440px) { ... }

      "3xl": `${breakpoints["3xl"]}px`,
      // => @media (min-width: 1920px) { ... }

      "xs-max": {
        max: `${breakpoints.xs - 1}px`,
        // => @media (max-width: 455px) { ... }
      },
      "sm-max": {
        max: `${breakpoints.sm - 1}px`,
        // => @media (max-width: 639px) { ... }
      },
      "md-max": {
        max: `${breakpoints.md - 1}px`,
        // => @media (max-width: 767px) { ... }
      },
      "lg-max": {
        max: `${breakpoints.lg - 1}px`,
        // => @media (max-width: 1023px) { ... }
      },
      "xl-max": {
        max: `${breakpoints.xl - 1}px`,
        // => @media (max-width: 1279px) { ... }
      },
      "2xl-max": {
        max: `${breakpoints["2xl"] - 1}px`,
        // => @media (max-width: 1535px) { ... }
      },
      "3xl-max": {
        max: `${breakpoints["3xl"] - 1}px`,
        // => @media (max-width: 1919px) { ... }
      },
    },
    extend: {
      width: {
        "out-1/12": "calc(50vw - 500%)",
        "out-2/12": "calc(50vw - 200%)",
        "out-3/12": "calc(50vw - 100%)",
        "out-4/12": "calc(50vw - 50%)",
        "out-5/12": "calc(50vw - 20%)",
        "out-6/12": "50vw",
        "out-7/12": "calc(50vw + (1/7 * 100%))",
        "out-8/12": "calc(50vw + 25%)",
        "out-9/12": "calc(50vw + (1/3 * 100%))",
        "out-10/12": "calc(50vw + 40%)",
        "out-11/12": "calc(50vw + (5/11 * 100%))",
        "out-full": "calc(50vw + 50%)",
        screen: "100vw",
      },
      height: {
        screen: "100vh",
      },
      maxWidth: {
        screen: "100vw",
      },
      minWidth: {
        screen: "100vw",
      },
      minHeight: {
        screen: "100vh",
      },
      maxHeight: {
        screen: "100vh",
      },
      typography: {
        DEFAULT: {
          css: {
            // color: '#262d34',
            "--tw-prose-body": "inherit",
            "--tw-prose-headings": "inherit",
            "--tw-prose-lead": "inherit",
            "--tw-prose-links": "inherit",
            "--tw-prose-bold": "inherit",
            "--tw-prose-counters": "inherit",
            "--tw-prose-bullets": "inherit",
            "--tw-prose-hr": "inherit",
            "--tw-prose-quotes": "inherit",
            "--tw-prose-quote-borders": "inherit",
            "--tw-prose-captions": "inherit",
            "--tw-prose-code": "inherit",
            "--tw-prose-pre-code": "inherit",
            "--tw-prose-pre-bg": "inherit",
            "--tw-prose-th-borders": "inherit",
            "--tw-prose-td-borders": "inherit",
            "--tw-prose-invert-body": "inherit",
            "--tw-prose-invert-headings": "inherit",
            "--tw-prose-invert-lead": "inherit",
            "--tw-prose-invert-links": "inherit",
            "--tw-prose-invert-bold": "inherit",
            "--tw-prose-invert-counters": "inherit",
            "--tw-prose-invert-bullets": "inherit",
            "--tw-prose-invert-hr": "inherit",
            "--tw-prose-invert-quotes": "inherit",
            "--tw-prose-invert-quote-borders": "inherit",
            "--tw-prose-invert-captions": "inherit",
            "--tw-prose-invert-code": "inherit",
            "--tw-prose-invert-pre-code": "inherit",
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": "inherit",
            "--tw-prose-invert-td-borders": "inherit",
          },
        },
      },
      fontFamily: {
        sansSerif: [...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
