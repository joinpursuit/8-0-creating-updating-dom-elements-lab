//! use class list or used setAttribute
const section = document.querySelector("section");
section.classList.add("featured");

//!
const sectionPost = document.querySelector("section.posts");
const article = document.createElement("article");

//! update img - child of section
const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

//! update h3- child of article
const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";

//! update the paragraph - child of aside
const para = document.createElement("p");
para.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing.";
para.textContent +=
  "Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

//! Update Strong - child of span
const strong = document.createElement("strong");
strong.textContent = "Read Time: ";

//! update span - child of para
const span = document.createElement("span");
span.textContent = " 4 Minutes";

//!anchor tag
const anchor = document.createElement("a");
anchor.setAttribute("href", "#");
anchor.textContent = " Read more...";

//! update aside -
const aside = document.createElement("aside");

//! create p2 -  child of aside
const para2 = document.createElement("p");

//? Append()
// img.after(h3);
sectionPost.append(article);
article.append(img, h3, para, aside);
aside.append(para2);
para2.append(span, anchor);
span.append(strong);
// para.append(s pan, anchor)

//!Move Article Positon
//? To swap, ill need to somehow select all both articles
//? 
const swap = document.querySelectorAll("section.posts article")
console.log(swap[1])
swap[1].after(swap[0])
