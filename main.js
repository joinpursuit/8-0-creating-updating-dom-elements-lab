const section = document.querySelector("section");
//one solution: section.classList.add("featured");
//another solution:
section.setAttribute("class", "featured");

const sectionPosts = document.querySelector("section.posts");
const article = document.createElement("article");
sectionPosts.append(article);
console.log(sectionPosts);

const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");

article.prepend(image);

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";

article.append(h3);

const p = document.createElement("p");

p.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

article.append(p);

const aside = document.createElement("aside");
article.append(aside);

const p2 = document.createElement("p");

aside.append(p2);

const strong = document.createElement("strong");

const span = document.createElement("span");

strong.textContent = "Read Time: ";

span.textContent = "4 Minutes";

p2.append(strong);
p2.append(span);

const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more...";
p2.append(a);

console.log(sectionPosts);

const switchArticle = document.querySelectorAll("article");
switchArticle[2].prepend(switchArticle[1]);
