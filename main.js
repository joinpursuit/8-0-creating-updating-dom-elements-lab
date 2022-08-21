//! use class list
const section = document.querySelector("section");
section.classList.add("featured");

const sectionpost = document.querySelector(".posts");
const article = document.createElement("article");
//! update img
const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
//! update h3
const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
//! update the paragraph
const para = document.createElement("p");
para.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing.";
para.textContent +=
  "Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
//! Update Strong
const strong = document.createElement("strong");
strong.textContent = "Read Time:";
//! update span
const span = document.createElement("span");
span.textContent = " 4 Minutes";
//!anchor tag
const anchor = document.createElement("a");
anchor.setAttribute("herf", "#");
anchor.textContent = " Read more...";
//! update aside
const aside = document.createElement("aside");

//! Swap Article Positon

//? Append()
//img.after(h3);

sectionpost.append(article);
article.append(img, h3, para, strong, span, anchor, aside, para);
