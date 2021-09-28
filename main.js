let section = document.querySelector("section");
section.classList.add("featured");


let article = document.createElement("article");
let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);

let heading = document.createElement("h3");
heading.textContent = "Stop Planning";
article.append(heading);


let paragraph1 = document.createElement("p");
paragraph1.textContent = " You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(paragraph1);

let aside = document.createElement("aside");
article.append(aside);

let paragraph2 = document.createElement("p");
aside.append(paragraph2);

let span = document.createElement("span");
span.textContent = "4 Minutes";
paragraph2.append(span);

let strong = document.createElement("strong");
strong.textContent = "Read Time:";
span.append(strong);

let anchor = document.createElement("a");
anchor.setAttribute("href", "#");
anchor.textContent = "Read more...";
strong.append(anchor);

let sectionPost = document.querySelector("section.posts");
sectionPost.append(article);



// []] Move the first article from inside the section.posts element to become the second article and move the second article so that it is the first article.

let articles = document.querySelectorAll("section.posts article");
articles[1].after(articles[0]);
