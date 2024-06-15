/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '960px',
          xl: '1200px',
        },
      },
      fontFamily: {
        'sans': ['JetBrains Mono', 'monospace'], // Include JetBrains Mono as the default monospaced font
      },
      fontWeight: {
        '100': 100,
        '200': 200,
        '300': 300,
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
        '800': 800,
        '900': 900,
      },
      colors: {
        "bg-color": "#151928",
        "gray-color": "#1C202F",
        "main-fc": "#ffffff",
        "second-fc": "#29CC70",
        "third-fc": "#FCFF3E",
      },
    },
  },
  plugins: [],
}

