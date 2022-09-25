const section = document.querySelector("section");
section.setAttribute("class", "featured");


const section2 =  document.querySelector("section.posts article");
const post3 = document.createElement("article");
const header = document.createElement("h3");
const paragraph = document.createElement("p");
const aside = document.createElement("aside");
const paragraph2 = document.createElement("p");
const a = document.createElement("a");
const img = document.createElement("img");

img.setAttribute('src', "./images/paul-gilmore-unsplash.jpg");
img.setAttribute('alt', "Image of a mountain in front of a lake.");

header.textContent = "Stop Planning";
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

a.textContent = "Read more...";
a.setAttribute('href', "#");

paragraph2.innerHTML = "<span><strong>Read Time:</strong> 4 Minutes</span>";
paragraph2.append(a);
aside.append(paragraph2);

post3.append(img, header, paragraph, aside);
section2.append(post3);


const firstArticle = document.querySelector("section.posts article");
const secondArticle = document.querySelector(
    "section.posts article:nth-child(2)"
)
firstArticle.before(secondArticle);