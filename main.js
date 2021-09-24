// Featured
let section = document.querySelector("main section");
section.classList.add("featured");

// New Post
const sectionPosts = document.querySelector(".posts")
const article = document.createElement("article");
sectionPosts.append(article);

const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");

const header = document.createElement("h3");
header.textContent += "Stop Planning";

const paragraph = document.createElement("p");
paragraph.textContent += "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

const aside = document.createElement("aside");
const paragraph2 = document.createElement("p");
aside.append(paragraph2);

const span = document.createElement("span");
span.textContent = " 4 Minutes";

const anchor = document.createElement("a");
anchor.setAttribute("href", "#")
anchor.textContent = "Read more..."
paragraph2.append(span, anchor);

const strong = document.createElement("strong");
strong.textContent += "Read Time:"
span.prepend(strong);

article.append(image, header, paragraph, aside);

// Swap article positions
let popArticle = document.querySelector(".posts article");
popArticle.remove();

let pushArticle = document.querySelector(".posts article");
pushArticle.after(popArticle);