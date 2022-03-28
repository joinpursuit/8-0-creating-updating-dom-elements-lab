const featured = document.querySelector("section");
featured.classList.add("featured");

const article = document.createElement("article");

const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);

const heading3 = document.createElement("h3");
heading3.textContent = "Stop Planning";
article.append(heading3);

const post = document.createElement("p");
post.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(post);

const aside = document.createElement("aside");
article.append(aside);

const paragraph = document.createElement("p");
aside.append(paragraph);

const span = document.createElement("span");
paragraph.append(span);

const strong = document.createElement("strong");
strong.textContent = "Read Time:";
span.append(strong);
span.append("4 Minutes");

const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more...";
paragraph.append(a);

const articles = document.querySelector("section.posts");
articles.append(article);

const first = articles.firstElementChild;
const second = first.nextElementSibling;
articles.insertBefore(second, first);
