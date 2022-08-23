document.querySelector("section").classList.add("featured");

const section = document.querySelector("section.posts");

const article = document.createElement("article");
section.append(article);
const newArticle = document.querySelector("section.posts article:last-child");
console.log(newArticle);

const img = document.createElement("img");
// const img = document.querySelector("section.posts article:last-child img ");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
newArticle.append(img);

const h3 = document.createElement("h3");
h3.innerText = "Stop Planning";
newArticle.append(h3);

const p = document.createElement("p");
p.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;
newArticle.append(p);

const aside = document.createElement("aside");
aside.innerHTML = `<p>
<span><strong>Read Time:</strong> 4 Minutes</span
><a href="#">Read more...</a>
</p>`;
newArticle.append(aside);

const firstArticle = document.querySelectorAll("section.posts article")[0];
console.log(firstArticle);

const secondArticle = document.querySelectorAll("section.posts article")[1];
console.log(secondArticle);
firstArticle.before(secondArticle);
