const section = document.querySelector("section");
section.classList.add("featured");

const article2 = document.createElement("article");
const sectionPost = document.querySelector("section.posts");
sectionPost.append(article2);

const img = document.createElement("img");
article2.append(img);
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
img.after(h3);

const p = document.createElement("p");
p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
h3.after(p);

const aside = document.createElement("aside");
p.after(aside);

const p2 = document.createElement("p");
aside.append(p2);

const span =  document.createElement("span");
span.textContent = "4 Minutes";
p2.append(span);

const strong = document.createElement("strong");
strong.textContent = "Read Time:";
span.append(strong);

const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more...";
p2.append(a);

const art2 = document.querySelectorAll("section.posts article");
art2[1].append(art2[0]);
