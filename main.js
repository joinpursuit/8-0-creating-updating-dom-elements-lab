let section_title = document.querySelector("main section");
section_title.classList.add("featured");
// note: element.classList.add("my-class")
// script link needs to have defer or be at bottom of page, after code

let article_posts = document.querySelector("section .posts");
let new_article = document.createElement("article");
let img_post = document.createElement("img");

img_post.setAttribute("src=", "./images/paul-gilmore-unsplash.jpg");
img_post.setAttribute("alt", "Image of a mountain in front of a lake.");
article_posts.append(img_post);

let h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article_posts.append(h3);

let para_one = document.createElement("p");
para_one.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;
article_posts.append(para_one);

let aside = document.createElement("aside");
let para_two = document.createElement("p");
let span = document.createElement("span");
span.textContent = "4 Minutes";

let strong = document.createElement("strong");
strong.textContent = "Read Time:";
let a = document.createElement("a");

a.setAttribute("href", "#");
a.textContent = "Read more...";
span.prepend(strong);
para_two.append(span);
para_two.append(a);

aside.append(para_two);
article_posts.append(aside);
article_posts.append(article);

let every_posts = document.querySelectorAll(".posts article");
every_posts[0].before(every_posts[1]);

// do i need to iterate, or can select indexes at same time--method for this?

