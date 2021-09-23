let firstSection = document.querySelector("section");
firstSection.classList.add("featured");

const sectionPosts = document.querySelector(".posts");
const article = document.createElement("article");
sectionPosts.append(article);

const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
img.after(h3);

const p1 = document.createElement("p");
p1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
h3.after(p1);

const aside = document.createElement("aside");
const p2 = document.createElement("p");
const span = document.createElement("span");
const strong = document.createElement("strong");
const anchor = document.createElement("a");
span.textContent = "4 Minutes";
strong.textContent = "Read Time:";
anchor.textContent = "Read more...";
anchor.setAttribute("href", "#");
p1.after(aside);
aside.append(p2);
p2.append(span);
span.prepend(strong);
span.after(anchor);

const articles = document.querySelectorAll(".posts article");
articles[1].after(articles[0]);
