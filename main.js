const section = document.querySelector("section");
section.classList.add("featured");

const newArticle = document.createElement("article");
const posts = document.querySelector(".posts");
posts.append(newArticle);

const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
newArticle.append(image);

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
newArticle.append(h3);

const paragraph = document.createElement("p");
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;
newArticle.append(paragraph);

const aside = document.createElement("aside");
newArticle.append(aside);

const paragraph2 = document.createElement("p");
aside.append(paragraph2);

const span = document.createElement("span");
paragraph2.append(span);
span.textContent = "4 Minutes";

const strong = document.createElement("strong");
span.before(strong);
strong.textContent = "Read Time";

const a = document.createElement("a");
span.after(a);
a.setAttribute("href", "#");
a.textContent = "Read more...";

const article = document.querySelectorAll("article");
article[1].before(article[2]);
