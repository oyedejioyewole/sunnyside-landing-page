# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Sunnyside agency landing page solution](#frontend-mentor---sunnyside-agency-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
  - [Setup](#setup)
    - [Starting the development server](#starting-the-development-server)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop Preview](design/desktop-preview.jpg)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/sunnyside-landing-page-using-tailwindcss-and-nuxt-3-viyMuF30aL)
- [Live Site URL](https://sunnyside-landing-page-1d36.vercel.app)

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
- [@codewithsadee's GitHub Solution](https://github.com/codewithsadee/sunnyside-agency-landing-page)

## Author

- Frontend Mentor - [@OyewoleOyedeji](https://frontendmentor.io/profile/OyewoleOyedeji)
- Twitter - [@OyewoleOyedeji](https://twitter.com/OyewoleOyedeji)
