const section = document.querySelector("section");
section.setAttribute("class" , "featured");

const posts = document.querySelector(".posts");
const newArticle = document.createElement("article");

const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";

const p = document.createElement("p");
p.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;

const aside = document.createElement("aside");
const asideP = document.createElement("p");
const asideSpan = document.createElement("span");
const asideA = document.createElement("a");
const asideStrong = document.createElement("strong");

asideA.setAttribute("href", "#");
asideA.textContent = "Read more...";
asideStrong.textContent = "Read Time:";
asideSpan.textContent = "4 Minutes";

asideSpan.prepend(asideStrong);
asideP.append(asideSpan , asideA);
aside.append(asideP);


newArticle.append(
    img,
    h3,
    p,
    aside
);
posts.append(newArticle);

const postsArticles = document.querySelectorAll(".posts article");
const firstArticle = postsArticles[0];
const secondArticle = postsArticles[1];

secondArticle.after(firstArticle);

// firstArticle.style.order = "2";
// secondArticle.style.order = "1";
// newArticle.style.order = "3";
