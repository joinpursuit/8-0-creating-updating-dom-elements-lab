const section = document.querySelector("section");
section.classList.add("featured");

const addPost = document.querySelector("article");

const post = document.querySelector(".posts");

const article = document.createElement("article");
const image = document.createElement("img");
const createH3 = document.createElement("h3");
const createP = document.createElement("p");
const createAside = document.createElement("aside");
const createSecondP = document.createElement("p");
const createSpan = document.createElement("span");
const createStrong = document.createElement("strong");
const linkTag = document.createElement("a");

image.src = "./images/paul-gilmore-unsplash.jpg";
image.setAttribute("alt", "Image of a mountain in front of a lake.");
createH3.innerText = "Stop Planning";
createP.innerText =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

linkTag.setAttribute("href", "#");
linkTag.innerHTML = "Read more...";
createStrong.innerText = "Read Time:";
createSpan.innerText = "4 Minutes";
createSpan.prepend(createStrong);

createSecondP.append(createSpan, linkTag);
createAside.append(createSecondP);

article.append(image, createH3, createP, createAside);
post.append(article)


let firstArticle = post.querySelector("article");
firstArticle.remove();

let secondArticle = post.querySelector("article");
secondArticle.remove();

post.prepend(firstArticle);
post.prepend(secondArticle);

console.log(article);




