# Meme Generator

This is my recreation of the Meme Generator Project from the [Learn React for Free](https://scrimba.com/learn/learnreact) course on Scrimba

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

A meme generator that 
- fetches and displays random images from a memes API
- has inputs whose values serve as the top and bottom text of the meme


### Links

- Solution URL: [Repo](https://github.com/mobonamensa/imb-meme-generator)
- Live Site URL: [Memes Generator](https://mbonamensa.github.io/imb-meme-generator)
- Figma file: [From Scrimba](https://www.figma.com/file/MoLwFPHNHJVrzdFurxHzNV/Meme-Generator?node-id=0%3A1)

## My process

### Built with

- React
    - Components
    - Props
    - useState
    - useEffect
    - Draggable package
- SASS
- Mobile-first workflow

### What I learned

I practiced creating the meme generator all over again, going over how to use props, useState, useEffect and fetchAPI. A new thing I learned while building was making elements movable/draggable using the [react-draggable](https://npm.io/package/react-draggable) package. I decided to add that as a stretch goal. I also added a loader aesthetic for when the meme images are still loading using [react-bootstrap spinners](https://react-bootstrap.github.io/components/spinners/) by conditionally rendering the images.


```jsx
     <div className="meme-wrapper">
        {loading ? (
          <div className="spinner-container">
            <Spinner animation="border" />
          </div>
        ) : (
          <div className="meme">
            <img src={meme.randomImg} alt="meme-img" />
            <Draggable bounds="parent" defaultPosition={{x: -66, y: 0 }}><p className="top-text">{meme.topText}</p></Draggable>
            <Draggable bounds="parent" defaultPosition={{x: -100, y: 0}}><p className="bottom-text">{meme.bottomText}</p></Draggable>
          </div>
        )}
      </div>
```


### Continued development

I'm looking at adding more features to make it easy to use. 
You can only have two sets of texts, and cannot download the meme.

### Useful resources

- [Learn react for free](https://scrimba.com/learn/learnreact) 
- [React Draggable example](https://github.com/react-grid-layout/react-draggable/blob/master//example/example.js) 


## Author

- Website - [Maame Yaa Serwaa Bona-Mensa](https://mbonamensa.netlify.app)
- Twitter - [@mys_bm](https://www.twitter.com/mys_bm)