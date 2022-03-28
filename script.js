const section = document.querySelector("section");
section.setAttribute("class", "featured");

const newSection = document.querySelector(".posts");

const article = document.createElement("article");
newSection.append(article);

const img = document.createElement("img");
article.append(img);
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

const header = document.createElement("h3");
article.append(header);
header.textContent = "Stop Planning";

const paragraph = document.createElement("p");
article.append(paragraph);
paragraph.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

const aside = document.createElement("aside");
article.append(aside);

const newP = document.createElement("p");
aside.append(newP);
newP.innerHTML = "<span><strong>Read Time:</strong> 4 Minutes</span>";

const anchor = document.createElement("a");
newP.append(anchor);

anchor.setAttribute("href", "#");
anchor.textContent = "Read more...";

const articles = document.querySelectorAll("article");
articles[1].before(articles[2]);
