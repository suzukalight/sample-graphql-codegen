const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/pages/**/*.{js,jsx,ts,tsx}",
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: [
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    "postcss-preset-env",
  ],
};
