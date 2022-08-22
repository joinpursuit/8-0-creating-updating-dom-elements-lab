// add a class of "featured" to the first 'section' element.
const sectionClass = document.querySelector("section");
sectionClass.setAttribute("class", "featured");

// create article element
const newArticle = document.createElement("article");
const sectionPosts = document.querySelector("section.posts");
sectionPosts.append(newArticle);

const newImg = document.createElement("img");
newArticle.append(newImg);
newImg.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
newImg.setAttribute("alt", "Image of a mountain in front of a lake.");

const newH3 = document.createElement("h3");
newImg.after(newH3);
newH3.textContent = "Stop Planning";

const newP = document.createElement("p");
newH3.after(newP);
newP.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
      planning so much and instead focusing on relaxing. Taking a break at all
      is so stressful these days; why add to the stress by overworking yourself?`;

const newAside = document.createElement("aside");
newP.after(newAside);

const asideP = document.createElement("p");
newAside.append(asideP);

const newSpan = document.createElement("span");
const newStrong = document.createElement("strong");
const newAnchor = document.createElement("a");
asideP.append(newSpan, newStrong, newAnchor);
newSpan.textContent = "4 Minutes";
newStrong.textContent = "Read Time:";
newAnchor.setAttribute("href", "#");
newAnchor.textContent = "Read more...";

const swapArticles = document.querySelectorAll("section.posts article");
swapArticles[0].before(swapArticles[1]);
