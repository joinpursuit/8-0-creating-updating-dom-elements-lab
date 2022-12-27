
const section = document.querySelector("section");
//section.setAttribute("class", "featured");
section.classList.add("featured");

const sectionPost = document.querySelector("section.posts");
const article = document.createElement("article");
sectionPost.append(article);

const img = document.createElement("img");
article.append(img);

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article.append(h3);

const p = document.createElement("p");
p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(p);

const aside = document.createElement("aside");
article.append(aside);

const paragraphAside = document.createElement("p");
aside.append(paragraphAside);

const span = document.createElement("span");
const strong = document.createElement("strong");
paragraphAside.append(span,strong);
strong.textContent = "Read Time:";
span.textContent = "4 Minutes";

const a = document.createElement("a");
paragraphAside.append(a);
a.setAttribute("href", "#");
a.textContent = "Read more...";

const secondArticle = document.querySelectorAll("article")[2];
//console.log(secondArticle)
document.querySelector("section.posts").prepend(secondArticle);