// First Test

const featured = document.querySelector("main section");
featured.setAttribute("class", "featured");

// Second Test

const article = document.createElement("article");
const img = document.createElement("img");

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article.append(h3);

const p = document.createElement("p");
p.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;
article.append(p);

const aside = document.createElement("aside");
article.append(aside);

const p2 = document.createElement("p");
aside.append(p2);

const span = document.createElement("span");
span.textContent = "4 Minutes";
p2.append(span);

const strong = document.createElement("strong");
strong.textContent = "Read Time: ";
span.before(strong);

const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more...";
p2.append(a);

document.querySelector("main section.posts").append(article);

// Third Test

const firstArticle = document.querySelector("section.posts article");

const secondArticle = document.querySelector(
  "section.posts article:nth-child(2)"
);

firstArticle.before(secondArticle);
