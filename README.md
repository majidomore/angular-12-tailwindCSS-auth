# Angular 12, Lazy Routes, TailwindCSS, Token based authentication

## Adding tailwindCSS
```bash
# Create new angular app using version 12+
ng new myApp

yarn add -D tailwindcss @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio

# Add to styles.scss
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

```
## Create tailwind.config.js at root
```javascript
module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
```


