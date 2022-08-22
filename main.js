const firstSection = document.querySelector("section");
firstSection.setAttribute("class", "featured");

const newArticle = document.createElement("article");
const sectionPosts = document.querySelector("section.posts");

const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
newArticle.append(img);

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
img.after(h3);

const pTag = document.createElement("p");
pTag.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
h3.after(pTag);

const aside = document.createElement("aside");
const pInAside = document.createElement("p");
const span = document.createElement("span");

span.innerHTML += `<strong>Read Time:</strong> 4 Minutes`;
pInAside.append(span);
aside.append(pInAside);
pTag.after(aside);

const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more...";
span.append(a);

sectionPosts.append(newArticle);

const sectionArticles = document.querySelectorAll("section.posts article");
sectionArticles[1].prepend(sectionArticles[0]);