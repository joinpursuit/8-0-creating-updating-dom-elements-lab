let section = document.querySelector("section");
section.classList.add("featured");


let article = document.createElement("article");
let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.prepend(img);


let h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article.append(h3);
let info = document.createElement("p");
info.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(info);


let aside = document.createElement("aside");
article.append(aside);


let p = document.createElement("p");
aside.append(p);
let strong = document.createElement("strong");
strong.textContent = "Read Time:";
let span = document.createElement("span");
span.textContent = "4 Minutes";
span.prepend(strong);
p.append(span);


let atag = document.createElement("a");
atag.setAttribute("href", "#");
atag.textContent = "Read more...";
p.append(atag);


let main = document.querySelector(".posts");
main.append(article);


let post = document.querySelector(".posts article")
post.remove()
// // let temp = posts[0]
let newpost = document.querySelector(".posts article");
newpost.after(post)