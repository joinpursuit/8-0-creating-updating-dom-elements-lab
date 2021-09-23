const firstSection = document.querySelector("section");
firstSection.classList.add("featured");

const sectionPost = document.querySelector(".posts");
const article = document.createElement("article");
const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);

const header3 = document.createElement("h3");
header3.textContent = "Stop Planning";
article.append(header3);

const paragraph = document.createElement("p");
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;
article.append(paragraph);

const aside = document.createElement("aside");
const paragraph2 = document.createElement("p");
const span = document.createElement("span");
span.textContent = "4 Minutes";
const strong = document.createElement("strong");
strong.textContent = "Read Time:";
const a = document.createElement("a");

a.setAttribute("href", "#");
a.textContent = "Read more...";
span.prepend(strong);
paragraph2.append(span);
paragraph2.append(a);
aside.append(paragraph2);
article.append(aside);

sectionPost.append(article);

const allPosts = document.querySelectorAll(".posts article");
allPosts[0].before(allPosts[1]);
