const section = document.querySelector("section");
section.classList.toggle("featured");



const article = document.createElement("article");
document.querySelector("section.posts").append(article);

const img = document.createElement("img");
article.append(img);
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

const h3 = document.createElement("h3");
article.append(h3);
h3.innerText = (`Stop Planning`);

const p = document.createElement("p");
article.append(p);
p.innerText = (`You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`)


const aside = document.createElement("aside");
article.append(aside);

let p2 = document.createElement("p");
aside.append(p2);

const span = document.createElement("span");
p2.append(span);
span.textContent = " 4 Minutes";

const strong = document.createElement("strong");
span.prepend(strong);
strong.textContent = "Read Time:";

const a = document.createElement("a");
a.innerText = ("Read more");
a.setAttribute("href", "#");
span.after(a);

const articles = document.querySelectorAll("section.posts article");
articles[1].after(articles[0]);






