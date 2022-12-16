let firstPick = document.querySelector("section");
firstPick.setAttribute("class", "featured");

let secondPickArticle = document.createElement("article");
let sectionPost = document.querySelector("section.posts");

let articleImg = document.createElement("img");
articleImg.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
articleImg.setAttribute("alt", "Image of a mountain in front of a lake.");

let articleH3 = document.createElement("h3");
articleH3.textContent = "Stop Planning";

// inside the article p tag, children of Article
let articleP = document.createElement("p");
articleP.textContent = " You -- yes you! You're an over-planner, I can tell. It's time to stop";
let articleAside = document.createElement("aside");

//inside the aside tag, child of Aside
let asideP = document.createElement("p");
articleAside.append(asideP);
// inside the Aside p tag, children of Aside p
let articleStrong = document.createElement("strong");
articleStrong.textContent= "Read Time";
let articleSpan =document.createElement("span");
articleSpan.textContent = "4 Minutes";
articleSpan.prepend(articleStrong);
let articleA =document.createElement("a");
articleA.textContent = "Read more";
articleA.setAttribute("href", "#");
asideP.append(articleSpan, articleA);
secondPickArticle.append(articleImg, articleH3, articleP, articleAside)
sectionPost.append(secondPickArticle);

// let thirdPick = document.querySelector("section.posts article");
// thirdPick[1].after(thirdPick[0]);
let thirdPick1 = document.querySelector("section.posts article");
thirdPick1.textContent = "Games to Play on the Road";
thirdPick1.remove();
let thirdPick2 = document.querySelector("section.posts article");
thirdPick2.textContent = "Take in the Architecture";
thirdPick2.after(thirdPick1);

