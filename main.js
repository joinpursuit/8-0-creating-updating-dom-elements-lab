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
heading3.textContent = "Stop Planning";

/* ------------------ PARAGRAPH ---------------------------------- */

let articleParagaph = document.createElement("p") /* -------- creating paragraph ---------- */
articleParagaph.textContent =  `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself? Hi`;

/* adding the elements to the article created */

article.append(img);
article.append(heading3);
article.append(articleParagaph);

/* -------------- Building the Aside Element ----------------- */

let aside = document.createElement("aside");
let asideParagaph = document.createElement("p");
let span = document.createElement("span");
let strong = document.createElement("strong");
let anchorTag = document.createElement("a");

/* ------------ assigning ----------------- */

span.textContent = " 4 Minutes";
strong.textContent = "Read Time: ";
anchorTag.setAttribute("href", "#");
anchorTag.textContent = "Read more...";

/* ------------- adding the elements to each other  -------------  */


/* aside assigns to article */
article.append(aside)
/* paragraph to aside */
aside.append(asideParagaph)
/* span to aside paragraph */
aside.append(span)
/* Span before strong */
span.prepend(strong);
/* anchor tag goes to the paragraph */
asideParagaph.append(anchorTag)

/* ----- node list fucntions like an array, first aritcle is at "index" zero ------- */

let postsInSection = document.getElementsByClassName("posts")[0];

/*----- moves first article to the end of node list ------------  */

postsInSection.appendChild(article);

/* ------- makes the first post became the first element child ------- */

let firstPost = postsInSection.firstElementChild;


/* --------- makes the second post the next element in the node list ------- */

let secondPost = firstPost.nextElementSibling;

postsInSection.insertBefore(secondPost, firstPost)