const section = document.querySelector("section");
section.setAttribute("class", "featured")

const article = document.createElement("article");
const sectionPosts = document.querySelector("section.posts");
sectionPosts.append(article);

const postArticles = document.querySelectorAll(".posts article");
const img = document.createElement("img");
postArticles[2].append(img);
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

const h3 = document.createElement("h3");
postArticles[2].append(h3)
h3.innerText = "Stop Planning"

const p = document.createElement("p");
postArticles[2].append(p)
p.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

const aside = document.createElement("aside");
postArticles[2].append(aside);

const p2 = document.createElement("p");
aside.append(p2);

const span = document.createElement("span");
const strong = document.createElement("strong");
p2.append(span);
strong.innerText = "Read Time:"
span.innerText = " 4 Minutes";
span.prepend(strong)


const a = document.createElement("a");
a.setAttribute("href", "#");
p2.append(a)
a.innerText = "Read more..."

postArticles[1].after(postArticles[0])