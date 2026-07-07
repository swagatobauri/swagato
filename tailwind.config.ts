import type { Config } from "tailwindcss";
import { tokens } from "./styles/design-tokens";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        heading: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        h1: tokens.typography.fluid.h1,
        h2: tokens.typography.fluid.h2,
        h3: tokens.typography.fluid.h3,
        h4: tokens.typography.fluid.h4,
        bodyLg: tokens.typography.static.bodyLg,
        bodyBase: tokens.typography.static.bodyBase,
        bodySm: tokens.typography.static.bodySm,
        caption: tokens.typography.static.caption,
      },
      spacing: {
        'section-sm': tokens.spacing.section.sm,
        'section-md': tokens.spacing.section.md,
        'section-lg': tokens.spacing.section.lg,
        'section-xl': tokens.spacing.section.xl,
        'gutter': tokens.spacing.gutter,
      },
      transitionTimingFunction: {
        'smooth': `cubic-bezier(${tokens.easing.smooth.join(',')})`,
        'bounce': `cubic-bezier(${tokens.easing.bounce.join(',')})`,
      }
    },
  },
  plugins: [],
};
export default config;
