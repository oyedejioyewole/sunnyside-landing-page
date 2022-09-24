# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![4K Preview](preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- [TailwindCSS](https://tailwindcss.com)
- [Nuxt 3](https://v3.nuxtjs.org)
- [Vue 3](https://vuejs.org)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

### Starting the development server

Start the development server on [http://localhost:3000](https://localhost:3000)

```bash
npm run dev
```

### What I learned

- I learnt how to use the `before` modifier to create the custom links

This is the basic style needed for this to work

```css
.btn-yellow::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -0.3rem;
    right: -0.3rem;
    height: 0.5rem;
    background-color: hsl(51, 100%, 49%);
    border-radius: 10rem;
    opacity: 0.4;
    transition: 0.4s ease-in-out;
    z-index: -1;
}
```

- I also learnt is how to create shapes using the `pseudo-attributes` like `before` and `after`

### Continued development

- Discovering more uses for `before` and `after` pseudo-modifiers

### Useful resources

- [Source code of a completed submission](https://sunnyside-landing-page.vercel.app) - This help me get the idea of how to make the underline
- [How to make shapes with CSS](https://www.youtube.com/watch?v=QY7Rj8aZcZk)
- [CSS Before and After pseudo elements explained - part two: the content property](https://www.youtube.com/watch?v=xoRbkm8XgfQ)
- [@codewithsadee GitHub Solution](https://github.com/codewithsadee/sunnyside-agency-landing-page)

## Author

- Frontend Mentor - [@OyewoleOyedeji](https://frontendmentor.io/profile/OyewoleOyedeji)
- Twitter - [@OyewoleOyedeji](https://twitter.com/OyewoleOyedeji)
