let firstSection = document.querySelector("section");
firstSection.classList.add("featured");

const article = document.createElement("article");
const posts = document.getElementsByClassName("posts")[0];

const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);

const heading = document.createElement("h3");
heading.textContent = "Stop Planning";
article.append(heading);

const paragraph = document.createElement("p");
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. 
It\'s time to stop planning so much and instead focusing on relaxing. Taking a break at all 
is so stressful these days; why add to the stress by overworking yourself?`;
article.append(paragraph);

const aside = document.createElement("aside");
const paragraph2 = document.createElement("p");
aside.append(paragraph2);
const span = document.createElement("span");
paragraph2.append(span);
span.innerHTML = "<strong>Read Time:</strong> 4 Minutes";
const link = document.createElement("a");
link.setAttribute("href", "#");
link.textContent = "Read more...";
paragraph2.append(link);

article.append(aside);

posts.append(article);

const articleList = posts.querySelectorAll("article");
articleList[0].before(articleList[1]);
