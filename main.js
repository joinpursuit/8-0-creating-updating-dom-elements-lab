let sectionTitle = document.querySelector("section");
sectionTitle.classList.add("featured");

let article = document.createElement("article");
let newPost = document.querySelector(".posts");
newPost.append(article);

let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img);

let h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article.append(h3);

let p1 = document.createElement("p");
p1.textContent = `You -- yes you! You're an overplanner, I can tell. It's time to stop 
planning so much and instead focusing on relaxing. Taking a break at all is so stressful 
these days; why add to the stress by overworking yourself?"`
article.append(p1);

let aside = document.createElement("aside");
article.append(aside);

let p2 = document.createElement("p");
aside.append(p2);

let span = document.createElement("span");
p2.append(span);
span.textContent = "4 Minutes";

let strong = document.createElement("strong");
span.before(strong);
strong.textContent = "Read Time:";

let a = document.createElement("a");
span.after(a);
a.setAttribute("href", "#");
a.textContent = "Read more...";


let newArticle = document.querySelectorAll("section.posts article");
newArticle[0].before(newArticle[1]);
