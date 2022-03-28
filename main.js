const section = document.querySelector("section");
section.setAttribute("class", "featured");

const article = document.createElement("article");
const sec = document.querySelector("section.posts");
sec.append(article);

const img = document.createElement("img");
article.append(img);

const header3 = document.createElement("h3");
article.append(header3);

const p1 = document.createElement("p");
article.append(p1);

const aside = document.createElement("aside");
article.append(aside);

const p2 = document.createElement("p");
aside.append(p2);

const span = document.createElement("span");
p2.append(span);

const strong = document.createElement("strong");
span.before(strong);

const a = document.createElement("a");
p2.append(a);

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

header3.textContent = "Stop Planning";

p1.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is";

strong.textContent = "Read Time: ";
span.textContent = " 4 Minutes";

a.setAttribute("href", "#");
a.textContent = "Read more...";

const swap = document.querySelectorAll("section.posts article");
swap[0].before(swap[1]);
