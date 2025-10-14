# Frontend Mentor - Interactive Rating Component Solution

This is a solution to the [Interactive Rating Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). This project helps improve frontend skills by building realistic interactive UI components.

## Table of contents

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View a responsive layout that works on mobile and desktop devices
- Hover over all interactive elements (stars and buttons) and see visual feedback
- Select a rating from 1 to 5
- Submit the rating and view a "Thank you" confirmation card with the selected rating

### Screenshot

![](./screenshot.jpg)

*Replace the image above with a screenshot of your solution.*

### Links

- Solution URL: [GitHub Repo](https://github.com/yourusername/interactive-rating-component)
- Live Site URL: [Live Demo](https://your-live-site-url.com)

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
