const section = document.querySelector("section");

section.classList.add("featured");

//*********************************

const article = document.createElement("article");
const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");

const heading3 = document.createElement("h3");
heading3.textContent = "Stop Planning";
const paragraph = document.createElement("p");
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;
const aside = document.createElement("aside");
const paragraph2 = document.createElement("p");

const span = document.createElement("span");

const anchor = document.createElement("a");
const strongTag = document.createElement("strong");

span.textContent = "4 Minutes";
strongTag.textContent = "Read Time:";
span.prepend(strongTag);

anchor.setAttribute("href", "#");

anchor.textContent = "Read more...";
//adding to aside
aside.prepend(paragraph2);
paragraph2.prepend(span);
paragraph2.append(anchor);

// adding to article
article.prepend(image);
article.append(heading3);
article.append(paragraph);
article.append(aside);

const getSection = document.querySelector(".posts");
getSection.append(article);
// const addArticle = document.querySelectorAll(".posts article");
// addArticle.after(article);

// getSection[0].before(getSection[1]);

const post = document.querySelectorAll(".posts article");
const temp = post[1];
const removeArticle1 = post[1].remove();

post[0].before(temp);
