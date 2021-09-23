document.querySelector("main section").classList.add("featured");
const h3 = document.createElement("h3");
const article2 = document.querySelectorAll(".posts article")[1];
const article1 = document.createElement("article");
const img = document.createElement("img");
const paragraph = document.createElement("p");
const aside = document.createElement("aside");
const paragraph2 = document.createElement('p');
const span = document.createElement("span");
const strong = document.createElement("strong");
const a = document.createElement("a");

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.")
h3.textContent = "Stop Planning";
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

strong.textContent = "Read Time:";
span.textContent = "4 Minutes";
a.setAttribute("href", "#");
a.textContent = "Read more...";

document.querySelector(".posts").append(article1);
article1.append(img, h3, paragraph, aside);
aside.append(paragraph2);
paragraph2.append(span,a);
span.prepend(strong);
document.querySelector(".posts").prepend(article2);