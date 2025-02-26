// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // ✨ content 설정이 매우 중요!
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // 만약 app 디렉토리가 루트에 있다면
    "./components/**/*.{js,ts,jsx,tsx}",
    // 혹은 "./src/app/**/*.{js,ts,jsx,tsx}" 등
  ],
  theme: {
    extend: {
      fontFamily: {
        // 아래 문법은 실제 사용시 대괄호로 감싸야 합니다: [...defaultTheme.fontFamily.sans]
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}