let firstSection = document.querySelector("section");
firstSection.classList.add("featured");

let article = document.createElement("article");
let sectionPosts = document.querySelector("section.posts");
sectionPosts.append(article);

let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
let h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
let p1 = document.createElement("p");
p1.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

let aside = document.createElement("aside");
let p2 = document.createElement("p");
let span = document.createElement("span");

let strong = document.createElement("strong");
strong.textContent = "Read Time: ";
span.textContent = "4 Minutes";

let a = document.createElement("a");
a.textContent = "Read more...";
a.setAttribute("href", "#");

span.append(strong);
p2.prepend(span);
p2.append(a);
aside.append(p2);

let array = [];
array.push(img, h3, p1, aside);
for (const ar of array) {
  article.append(ar);
}

let postsArticles = document.querySelectorAll("section.posts article");
postsArticles[1].after(postsArticles[0]);