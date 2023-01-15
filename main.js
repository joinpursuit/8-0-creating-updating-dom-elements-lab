// const script = document.createElement("script");
// script.setAttribute("defer", "");
// script.setAttribute("src", "./main.js");
// const head = document.querySelector("head");
// head.prepend(script);

// ^^^ I tried linking the js file to the html without modifying the html, 
// but it didn't work.

const section = document.querySelector("section");
section.setAttribute("class", "featured");

const article = document.createElement("article");
const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);

const heading = document.createElement("h3");
heading.textContent = "Stop Planning";
article.append(heading);

const firstP = document.createElement("p");
firstP.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(firstP);

const aside = document.createElement("aside");
const secondP = document.createElement("p");
const span = document.createElement("span");
const strong = document.createElement("strong");
strong.textContent = "Read Time:";
span.textContent = " 4 Minutes";
span.prepend(strong);
const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more...";
secondP.append(span);
secondP.append(a);
aside.append(secondP);
article.append(aside);

const sections = document.querySelectorAll("section");
sections[1].append(article);

const articles = document.querySelectorAll("article");
const newFirstArticle = articles[2];
articles[2].remove();
sections[1].prepend(newFirstArticle);