/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ovenRed:"#ff1f1f",
      },
      transitionProperty: {
        'none': 'none',
        'all': 'all',
        'height': 'height',
        'width': 'width',
        'opacity': 'opacity',
        'transform': 'transform',
        // Add more transition properties as needed
      },
      transitionDuration: {
        'DEFAULT': '250ms',
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'DEFAULT': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'linear': 'linear',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      // Add more transition configurations as needed
    },
  },
  plugins: [],
}
