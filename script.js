let firstSection = document.querySelector("section");
firstSection.classList.add("featured");

const article = document.createElement("article");
const posts = document.getElementsByClassName("posts")[0];

const image = document.createElement("image");
article.append(image);

const heading = document.createElement("h3");
article.append(heading);

const paragraph = document.createElement("p");
article.append(paragraph);

const aside = document.createElement("aside");
article.append(aside);

posts.append(article);
