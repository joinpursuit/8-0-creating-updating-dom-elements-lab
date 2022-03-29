const firstSection = document.querySelector("section");
firstSection.classList.toggle("featured"); //causes error?!

const newArticle = document.createElement("article");
document.querySelector("section.posts").append(newArticle);

const newImg = document.createElement("img");
newArticle.append(newImg);
newImg.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
newImg.setAttribute("alt", "Image of a mountain in front of a lake.");

const newH3 = document.createElement("h3");
newArticle.append(newH3);
newH3.textContent = "Stop Planning";

const newParagraph = document.createElement("p");
newArticle.append(newParagraph);
newParagraph.textContent = `    You -- yes you! You're an over-planner, I can tell. It's time to stop
    planning so much and instead focusing on relaxing. Taking a break at all
    is so stressful these days; why add to the stress by overworking yourself?`;

//create aside
const aside = document.createElement("aside");
//create p
const p = document.createElement("p");
//create span
const span = document.createElement("span");
span.textContent = " 4 Minutes";
//crreate strong, populate strong
const strong = document.createElement("strong");
strong.textContent = "Read Time:";
span.append(strong);
//create a, populate a with text, add attribute href
const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more...";
p.append(span);
p.append(a);
//attach everything inside aside
aside.append(p);
//attach aside to article
newArticle.append(aside);
//attach article to end of section.posts
const sections = document.querySelectorAll("section.posts article");
sections[1].after(sections[0]);
