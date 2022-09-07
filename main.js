const section = document.querySelector("section").setAttribute("class", "featured");

let article = document.createElement("article");
document.querySelector("section.posts").append(article);


let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img)

const heading = document.createElement("h3");
heading.textContent = "Stop Planning";
article.append(heading);

const p = document.createElement("p");
p.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(p);

const aside = document.createElement("aside");
const asideP = document.createElement("p");
aside.append(asideP);

const span = document.createElement("span");
const strong = document.createElement("strong");
strong.innerText = "Read Time:";
span.append(strong);
span.innerHTML += " 4 Minutes";

const a = document.createElement("a");
a.setAttribute("href", "#");
a.innerText = "Read more...";

asideP.append(span);
asideP.append(a);

article.append(aside);

const firstArticle = document.querySelector("section.posts article");

const secondArticle = document.querySelector(
  "section.posts article:nth-child(2)"
);

firstArticle.before(secondArticle);