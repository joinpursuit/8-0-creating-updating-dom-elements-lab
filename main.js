// 1. Adding featured class
const firstSectionElement = document.querySelector("section");
firstSectionElement.classList.add("featured");

// 2. Adding modified article element
const article = document.createElement("article"); // creates <article> element

const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);
// creates <img> element, adds attributes, then appends to <article>

let heading = document.createElement("h3");
heading.textContent = "Stop Planning";
article.append(heading);
// creates <h3> element, adds innerText, then appends to <article>

let message = document.createElement("p");
message.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(message);
// created <p> element, adds innerText, then appends to <article>

let asideParagraph = document.createElement("p");
let spanElement = document.createElement("span");
let boldAsideText = document.createElement("strong");
spanElement.append(boldAsideText);
boldAsideText.innerText = "Read Time:";
spanElement.append(" 4 Minutes");
asideParagraph.append(spanElement);
// creates <p>, <span> and <strong> and adds respective innerText to each element while nesting <strong> within <span> and <span> within <p>

let asideLink = document.createElement("a");
asideLink.setAttribute("href", "#");
asideLink.textContent = "Read more";
asideParagraph.append(asideLink);
// creates <a> element and adds attributes and innerText, then nested it within <p> element

let aside = document.createElement("aside");
aside.append(asideParagraph); // creates <aside> element and nests <p> within it

article.append(aside);
// Nests finalized <aside> element within <article>

const postsSection = document.querySelector(".posts");
postsSection.append(article);
// Adds created <article> into <section> element with .posts class

//3. Switching article order
let first = postsSection.querySelector("article");
first.remove();

let second = postsSection.querySelector("article");
second.remove();

postsSection.prepend(first);
postsSection.prepend(second);
