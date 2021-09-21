//getting first section element and then adding featured class
const firstSectionEl = document.querySelector("section");
firstSectionEl.classList.add("featured");

//creating article element, image element and assigning attributes
const newArticleEl = document.createElement("article");
const imgEl = document.createElement("img");
imgEl.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
imgEl.setAttribute("alt", "Image of a mountain in front of a lake.");
//create H3 article element and re-assigning text content
const articleH3El = document.createElement("h3");
articleH3El.textContent = "Stop Planning";

const pEl = document.createElement("p");
pEl.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;
// console.log(articleH3El);

newArticleEl.append(imgEl);
newArticleEl.append(articleH3El);
newArticleEl.append(pEl);

const asideEl = document.createElement("aside");
const asidepEL = document.createElement("p");
const spanEl = document.createElement("span");
const strongEl = document.createElement("strong");
const aEl = document.createElement("a");
//add to end of section posts element
aEl.setAttribute("href", "#");
strongEl.textContent = "Read Time:";
spanEl.textContent = " 4 Minutes";
aEl.textContent = "Read more...";

asidepEL.append(spanEl);
asidepEL.append(aEl);
spanEl.prepend(strongEl);
asideEl.append(asidepEL);
newArticleEl.append(asideEl);

const sectionPosts = document.getElementsByClassName("posts")[0];

sectionPosts.appendChild(newArticleEl);
let first = sectionPosts.firstElementChild;
let second = first.nextElementSibling;
sectionPosts.insertBefore(second, first);
