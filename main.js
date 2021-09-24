let section1 = document.querySelector("section");
section1.classList.add("featured");

let sectionPost = document.querySelector("section.posts");
let article = document.createElement("article");
 sectionPost.appendChild(article);

let img = document.createElement("img");
let h3 =  document.createElement("h3");
let p1 = document.createElement("p");
let aside = document.createElement("aside");
let p2 = document.createElement("p");
let span = document.createElement("span");
let strong = document.createElement("strong");
let anchor = document.createElement("a");
img.setAttribute("src","./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt","Image of a mountain in front of a lake.");
h3.textContent = "Stop Planning";
p1.textContent = " You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
span.textContent = "4 Minutes";
strong.textContent = "Read Time:";
anchor.setAttribute("href", "#");
anchor.textContent = ("Read more...");

article.append(img);
article.append(h3);
article.append(p1);
article.append(aside);
aside.append(p2);
p2.append(span);
span.append(strong);








