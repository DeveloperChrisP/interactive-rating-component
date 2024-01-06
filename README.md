# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [https://github.com/DeveloperChrisP/interactive-rating-component](https://github.com/DeveloperChrisP/interactive-rating-component)
- Live Site URL: [https://developerchrisp.github.io/interactive-rating-component](https://developerchrisp.github.io/interactive-rating-component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- Mobile-first workflow

### What I learned

[bold]CSS

I learned roughly how to add text to the centre of a circle, though I struggled with some aspects. For example;
In the example pic below I was trying to centre the text ("You selected <span></span> out of 5") within a 'div' which has padding and background etc. While the red 'paragraph' box is centered, the actual text inside is not. I ended up solving this by amending the line height but I couldn't work out how to get the red paragraph container to match the height of the text to therefore center the whole lot properly.
![example of something I struggled with](image.png)

[bold]Javascript

I also struggled with the Javascript side - I was trying to create a variable to store the rating that the customer chooses. Ie, the button selected (this.html) - I wanted to store this in a variable to add to the paragraph, however I couldn't figure out how to do this. Each time I got errors stating my variable was undefined. In the end I went with a simpler solution to add the innerHTML of my selected class.

I also learned to use - Body min-height 100vh, instead of height from nosying at other frontmentor comments.

### Continued development

I will continue to practice HTML, CSS & Javascript

## Author

- Website - [Developer Chris P](https://developerchrisp.github.io/portfolio)
