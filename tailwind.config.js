/** @type {import('tailwindcss').Config} */
export default {
  // Add the paths to all of your template files
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Tell tailwind css to create a new utility class that allows us to use our Google custom font Pacifico.
    extend: {
      fontFamily: { 
        // Register a new font
        customFontFromGoogle: ['"Pacifico"', 'cursive'] // Imported fonts should be added within double quotes. Cursive is added here as a fallback.
      }
    },
  },
  plugins: [],
}

