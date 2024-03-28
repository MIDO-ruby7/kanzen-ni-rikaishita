/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.tsx",
    "./src/views/users/show.tsx",
    "./src/**/*.{html,js,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        rocknRoll: ['RocknRoll One'],
      },
      backgroundImage: {
        'top2': "url('/static/top2.webp')",
        'top1': "url('/static/top.webp')",
        'top-mobile': "url('/static/top_mobile.webp')",
      },
    },
  },
  plugins: [],
}

