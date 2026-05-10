/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "on-tertiary-fixed-variant": "#3c475a",
        "tertiary-fixed-dim": "#bcc7de",
        "on-secondary-container": "#6b4b00",
        "primary-container": "#0f172a",
        "secondary-container": "#feb700",
        "surface-container-lowest": "#0b0f10",
        "background": "#101415",
        "on-error": "#690005",
        "inverse-primary": "#565e74",
        "surface-dim": "#101415",
        "tertiary-container": "#0c1829",
        "surface-container-high": "#272a2c",
        "secondary": "#ffdb9d",
        "on-tertiary": "#263143",
        "on-primary": "#283044",
        "on-primary-container": "#798098",
        "primary-fixed": "#dae2fd",
        "error": "#ffb4ab",
        "outline": "#909097",
        "on-secondary-fixed-variant": "#5e4200",
        "surface": "#101415",
        "surface-variant": "#323537",
        "surface-bright": "#363a3b",
        "surface-tint": "#bec6e0",
        "surface-container": "#1d2022",
        "surface-container-low": "#191c1e",
        "on-error-container": "#ffdad6",
        "on-tertiary-container": "#768197",
        "on-secondary-fixed": "#271900",
        "on-background": "#e0e3e5",
        "tertiary": "#bcc7de",
        "on-secondary": "#412d00",
        "outline-variant": "#45464d",
        "on-surface-variant": "#c6c6cd",
        "on-surface": "#e0e3e5",
        "tertiary-fixed": "#d8e3fb",
        "primary": "#bec6e0",
        "on-primary-fixed-variant": "#3f465c",
        "primary-fixed-dim": "#bec6e0",
        "secondary-fixed": "#ffdea8",
        "secondary-fixed-dim": "#ffba20",
        "surface-container-highest": "#323537",
        "inverse-surface": "#e0e3e5",
        "error-container": "#93000a",
        "on-tertiary-fixed": "#111c2d",
        "inverse-on-surface": "#2d3133",
        "on-primary-fixed": "#131b2e"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "gutter": "24px",
        "margin-desktop": "64px",
        "unit": "8px",
        "margin-mobile": "20px",
        "container-max": "1280px"
      },
      "fontFamily": {
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg-mobile": ["IBM Plex Serif", "serif"],
        "headline-xl": ["IBM Plex Serif", "serif"],
        "headline-md": ["IBM Plex Serif", "serif"],
        "headline-lg": ["IBM Plex Serif", "serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-md": ["Plus Jakarta Sans", "sans-serif"]
      },
      "fontSize": {
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-lg-mobile": ["28px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "headline-xl": ["48px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "headline-md": ["24px", { "lineHeight": "1.4", "fontWeight": "500" }],
        "headline-lg": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-md": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}