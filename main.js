document.querySelector("section").classList.add("featured");
const section = document.querySelector("section.posts");

const article = document.createElement("article");

const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article.append(h3);

const p = document.createElement("p");
p.innerText = ` You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;

article.append(p);

const aside = document.createElement("aside");
const p2 = document.createElement("p");
const span = document.createElement("span");
const strong = document.createElement("strong");
strong.textContent = "Read Time:";

span.innerText += " 4 Minutes";
span.prepend(strong);
p2.append(span);

const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more...";
p2.append(a);
aside.append(p2);

article.append(aside);

section.append(article);

const firstArticle = document.querySelector(
  "body > main > section.posts > article:nth-child(1)"
);
const secondArticle = document.querySelector(
  "body > main > section.posts > article:nth-child(2)"
);

section.insertBefore(secondArticle, firstArticle);
