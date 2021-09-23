const selectSection = document.querySelector("section");
selectSection.classList.add("featured");

const createArticle = document.createElement("article");
const createImg = document.createElement("img");
const createH3 = document.createElement("h3");
const createP = document.createElement("p");
const createAside = document.createElement("aside");
const createP2 = document.createElement("p");

const selecting = document.querySelector("section.posts");
selecting.append(createArticle);

createArticle.append(createImg, createH3, createP, createAside);

createImg.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
createImg.setAttribute("alt", "Image of a mountain in front of a lake.");
createH3.textContent = "Stop Planning";
createP.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

createAside.append(createP2);
createSpan = document.createElement("span");
createStrong = document.createElement("strong");
createALink = document.createElement("a");

createP2.append(createSpan, createALink);
createSpan.textContent = "4 Minutes";
createSpan.prepend(createStrong);
createStrong.textContent = "Read Time:";

createALink.setAttribute("href", "#");
createALink.textContent = "Read more...";

const moveArticles = document.querySelectorAll("section.posts article");
moveArticles[1].after(moveArticles[0]);