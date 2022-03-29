let section = document.querySelector("section");
section.classList.add("featured");

let article = document.createElement("article");
let sectionPosts = document.querySelector("section.posts");
sectionPosts.append(article);

let image = document.createElement("img");
image.setAttribute("src","./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);

let head = document.createElement('h3');
head.textContent = "Stop Planning";
article.append(head);

let paragraph = document.createElement("p");
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`
article.append(paragraph);

let aside = document.createElement("aside")
article.append(aside);

let paragraph2 = document.createElement("p");
aside.append(paragraph2);

let span = document.createElement("span");
span.textContent = "4 Minutes";
paragraph2.append(span);

let strong = document.createElement("strong");
strong.textContent = "Read Time: ";
span.append(strong);

let a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more...";
paragraph2.append(a);

let moveArticle = document.querySelector("section.posts article");
article.before(moveArticle);
