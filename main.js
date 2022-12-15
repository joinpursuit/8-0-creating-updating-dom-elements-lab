const firstSection = document.querySelector("section");
firstSection.classList.add("featured");

const allPosts = document.querySelector("section.posts");

console.log(allPosts)

const newArticle = document.createElement("article");

// console.log(allPosts)

const img = document.createElement("img");

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");

img.setAttribute("alt", "Image of a mountain in front of a lake.");

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";

const p = document.createElement("p");
p.innerText = "You -- yes you! You're and over-planner, I can tell. It's time to stop planning so much and instead focus on relaxing. Taking a break at all is so stressful thhese days; why add to the stress by overworking yourself";

const aside = document.createElement("aside");
newArticle.append(aside);

const p2 = document.createElement("p");
aside.append(p2);


const span = document.createElement("span");
span.textContent = "4 minutes ";

const strongEl = document.createElement("STRONG");
strongEl.innerText = "Read Time: ";

const strgit ongText = document.createTextNode("Read Time:")


const aTag = document.createElement("a");
aTag.setAttribute("href", "#");
aTag.innerText = "Read more..."

const allArticles = document.querySelectorAll("section.posts article");


newArticle.prepend(img);


img.after(h3);
h3.after(p)
newArticle.append(p);
p.after(span);
span.appendChild(strongEl);
// strongEl.append(strongText);
span.after(aTag)
allPosts.appendChild(newArticle);
allArticles[0].before(allArticles[1]);
console.log(allArticles[0]);
console.log(allArticles.length);