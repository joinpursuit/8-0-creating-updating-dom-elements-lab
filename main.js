/* Since querySelector always selctions first - use querySelector  */

let section = document.querySelector("section");

/* classList will let me add an class */

section.classList.add("featured"); /* adds featued */

/* ------------ CREATING THE ARTICLE ELEMENT ---------------- */

let article = document.createElement("article"); /* create the article */
let img = document.createElement("img") /* creating img element */

/* ------------- SETTING THE IMAGE --------------------- */

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg"); /* image */
img.setAttribute("alt", "Image of a mountain in front of a lake."); /* setting alt */

/* ------------- HEADING 3 ------------------------------ */

let heading3 = document.createElement("h3"); /* ------- setting h3 ---------- */
heading3.textContent = "hi";

/* ------------------ PARAGRAPH ---------------------------------- */

let articleParagaph = document.createElement("p") /* -------- creating paragraph ---------- */
articleParagaph.textContent =  `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself? Hi`;

/* adding the elements to the article created */

article.append(img);
article.append(heading3);
article.append(articleParagaph);

