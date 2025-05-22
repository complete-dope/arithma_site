export default {
  plugins: {
    'postcss-import': {}, // Important for processing @import rules, including @import "tailwindcss";
    '@tailwindcss/postcss': {}, // Processes Tailwind directives and functions
    'autoprefixer': {}, // Adds vendor prefixes
  },
}