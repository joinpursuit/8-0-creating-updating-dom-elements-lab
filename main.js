// Add a class of "featured" to the first section element on the page.

document.querySelector("section").setAttribute("class", "featured");

// Create article
const article = document.createElement("article");

// Add at the end of the section.posts element
document.querySelector(".posts").append(article);

// Add to the article element
const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);

const heading = document.createElement("h3");
heading.textContent = "Stop Planning";
article.append(heading);

const p = document.createElement("p");
p.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(p);

const aside = document.createElement("aside");
const asideP = document.createElement("p");
aside.append(asideP);

asideP.innerHTML =
  '<span><strong>Read Time:</strong> 4 Minutes</span><a href="#">Read more...</a>';

article.append(aside);

// Move the first article from inside the section.posts element to become the second article and move the second article so that it is the first article.
const firstArticle = document.querySelector("section.posts article");

const secondArticle = document.querySelector(
  "section.posts article:nth-child(2)"
);

firstArticle.before(secondArticle);
