// 1. Adding featured class
const firstSectionElement = document.querySelector("section");
firstSectionElement.classList.add("featured");

// 2. Adding modified article element
const article = document.createElement("article");

const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);

let heading = document.createElement("h3");
heading.textContent = "Stop Planning";
article.append(heading);

let message = document.createElement("p");
message.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(message);

let asideParagraph = document.createElement("p");
let spanElement = document.createElement("span");
let boldAsideText = document.createElement("strong");
spanElement.append(boldAsideText);
boldAsideText.innerText = "Read Time:";
spanElement.append(" 4 Minutes");
asideParagraph.append(spanElement);

let asideLink = document.createElement("a");
asideLink.setAttribute("href", "#");
asideLink.textContent = "Read more";
asideParagraph.append(asideLink);

let aside = document.createElement("aside");
aside.append(asideParagraph);

article.append(aside);

//3. Switching article order
const postsSection = document.querySelector(".posts");
postsSection.append(article);

let first = postsSection.querySelector("article");
first.remove();

let second = postsSection.querySelector("article");
second.remove();

postsSection.prepend(first);
postsSection.prepend(second);
