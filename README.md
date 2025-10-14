# Frontend Mentor - Interactive Rating Component Solution

This is a solution to the [Interactive Rating Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). This project helps improve frontend skills by building realistic interactive UI components.

## Table of contents

- [Frontend Mentor - Interactive Rating Component Solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View a responsive layout that works on mobile and desktop devices
- Hover over all interactive elements (stars and buttons) and see visual feedback
- Select a rating from 1 to 5
- Submit the rating and view a "Thank you" confirmation card with the selected rating

### Screenshot

![](./Screenshot%202025-10-14%20at%2018.47.54.png)


### Links

- Solution URL: [GitHub Repo](https://github.com/JohnsonWalker-cmd/interactive-rating-component-main.git)
- Live Site URL: [Live Demo](https://interactive-rating-component-main-cyan.vercel.app/)

## My process

### Built with

- HTML5 for semantic markup  
- CSS3 for styling and responsive layout  
- Flexbox and CSS Grid for layout  
- Vanilla JavaScript for interactivity (click events, DOM manipulation)  
- Mobile-first workflow  

### What I learned

- How to dynamically update the DOM based on user interactions (click events)  
- Managing selected state for multiple elements (star ratings)  
- Displaying and hiding elements dynamically to simulate different states (rating vs thank-you card)  

Example snippet from the JS where I handle rating selection:

```js
ratings.forEach((rating, index) => {
  rating.addEventListener("click", () => {
    rating.style.backgroundColor = "hsl(25, 97%, 53%)";
    rating.style.color = "white";
    countRate = index + 1;
  });
});

```

### Continued development
- Add keyboard accessibility for selecting ratings

- Improve visual transitions/animations between rating and thank-you card

- Refactor code to use a more modular approach or frameworks like React for better scalability


### Useful resources

  [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI)
 - The original challenge and design guidelines

[MDN Web Docs](https://developer.mozilla.org/en-US/)
 - For HTML, CSS, and JS reference

[CSS Tricks](https://css-tricks.com/)
 - Helpful for styling hover effects and flex/grid layouts


## Author

- Website - [Coming-soon](https://www.your-site.com)
- Frontend Mentor - [@JohnsonWalker-cmd](https://www.frontendmentor.io/profile/JohnsonWalker-cmd)
- Twitter - [@walkerthecutev](https://x.com/walkerthecutev)
