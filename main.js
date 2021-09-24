// const heading = document.querySelector("section");
// heading.setAttribute("class", "featured");

const heading = document.querySelector("section");
heading.classList.add("featured");

const article = document.createElement("article");
document.querySelector("section.posts").append(article);

const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);

const header3 = document.createElement("h3");
header3.textContent = "Stop Planning";
article.append(header3);

const paragraph = document.createElement("p");
paragraph.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(paragraph);

const aside = document.createElement("aside");
article.append(aside);

const paragraph2 = document.createElement("p");
aside.append(paragraph2);

const span = document.createElement("span");
span.textContent = "4 Minutes";
paragraph2.append(span);

const strong = document.createElement("strong");
strong.textContent = "Read Time: ";
span.before(strong);

const siteLink = document.createElement("a");
siteLink.setAttribute("href", "#");
siteLink.textContent = "Read more...";
paragraph2.append(siteLink);

const article1 = document.querySelector("section.posts article");
article.before(article1);
