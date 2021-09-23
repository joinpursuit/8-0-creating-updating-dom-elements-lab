const section1 = document.querySelector("section");
section1.classList.add("featured");

// add the following article at the end of section.post
const article = document.createElement("article");
document.querySelector(".posts").append(article);

// add child to article

// 1. img
const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);

// 2. h3
const heading = document.createElement("h3");
heading.textContent = "Stop Planning";
article.append(heading);

// 3. p
const paragraph = document.createElement("p");
paragraph.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(paragraph);

// 4. aside
const aside = document.createElement("aside");
article.append(aside);

// 4a child
const paragraph2 = document.createElement("p");
aside.append(paragraph2);

const span = document.createElement("span");
const strong = document.createElement("strong");
strong.textContent = "Read Time:";
span.textContent = "4 Minutes";
paragraph2.append(span);
span.append(strong);

const anchor = document.createElement("a");
anchor.setAttribute("href", "#");
anchor.textContent = "Read more...";
paragraph2.append(anchor);

const allPost = document.querySelectorAll(".posts article");
const secondPost = allPost[1];
document.querySelector(".posts").prepend(secondPost);
// firstPost.prepend(secondPost[secondPost.length - 2]);
