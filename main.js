let section = document.querySelector("section");
section.classList.add("featured");

let article = document.createElement("article");
let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

let articleH3 = document.createElement("h3");
articleH3.textContent = "Stop Planning";

let paragraph = document.createElement("p");
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;

article.append(img);
article.append(articleH3);
article.append(paragraph);

let aside = document.createElement("aside");
let asideP = document.createElement("p");
let span = document.createElement("span");
let strong = document.createElement("strong");
let anchor = document.createElement("a");

anchor.setAttribute("href", "#");
strong.textContent = "Read Time:";
span.textContent = " 4 Minutes";
anchor.textContent = "Read more...";

asideP.append(span);
asideP.append(anchor);
span.prepend(strong);
aside.append(asideP);
article.append(aside);

let sectionPosts = document.getElementsByClassName("posts")[0];
sectionPosts.appendChild(article);
let first = sectionPosts.firstElementChild;
let second = first.nextElementSibling;
sectionPosts.insertBefore(second, first);