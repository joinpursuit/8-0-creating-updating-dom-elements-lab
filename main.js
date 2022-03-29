const section = document.querySelector("section");
const article = document.createElement("article");
const img = document.createElement("img");
const h3 = document.createElement("h3");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const aside = document.createElement("aside");
const span = document.createElement("span");
const anchor1 = document.createElement("a");
const strong = document.createElement("strong");
const firstArticle = document.querySelectorAll(".posts article")[0];
const secondArticle = document.querySelectorAll(".posts article")[1];

const sectionPosts = document.querySelector(".posts");

section.classList.add("featured");

sectionPosts.append(article);

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);

h3.textContent = "Stop Planning";
article.append(h3);

para1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(para1);

span.textContent = "4 Minutes";
strong.textContent = "Read Time: ";
span.prepend(strong);
para2.append(span);

anchor1.textContent = "Read more...";
anchor1.setAttribute("href", "#");
para2.append(anchor1);

aside.append(para2);
article.append(aside);

secondArticle.after(firstArticle);