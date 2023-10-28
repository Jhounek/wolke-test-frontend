/** @type {import('tailwindcss').Config} */
// module.exports = {
//   purge:{
//     enabled: true,
//     content: ["./src/**/*.{html,ts}"],
//   },
//   darkMode: false,
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  //...
  content: ['./src/**/*.{html,js,ts}'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
}

