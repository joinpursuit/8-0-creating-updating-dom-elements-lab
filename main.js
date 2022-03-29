const sectionOne = document.querySelector("section");
sectionOne.classList.add("featured");

const article = document.createElement("article");
let sectionPosts = document.querySelector("section.posts");
sectionPosts.append(article);

const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);
const header3 = document.createElement("h3");
header3.textContent = `Stop Planning`;
article.append(header3);
const paragraph = document.createElement("p");
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;
article.append(paragraph);

let aside = document.createElement("aside");
article.append(aside);
let paragraphAside = document.createElement("p");
aside.append(paragraphAside);
let span = document.createElement("span");

paragraphAside.innerHTML = "<span><strong>Read Time:</strong> 4 Minutes</span>";

let strong = document.createElement("strong");
strong.textContent = "ReadTime:";
span.textContent = " 4 minutes";
span.append(strong);

let a = document.createElement("a");
a.textContent = "Read more...";
a.setAttribute("href", "#");
paragraphAside.append(a);

let postsArticles = document.querySelectorAll("section.posts article");
postsArticles[1].after(postsArticles[0]);
