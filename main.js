let section = document.querySelector("section");
section.classList.add("featured");

let posts = document.querySelector("section.posts");
let article = document.createElement("article");

posts.append(article);

let image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt","Image of a mountain in front of a lake.");
article.append(image);

let h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article.append(h3);

let paragraph = document.createElement("p");
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(paragraph);

let aside = document.createElement("aside");
article.append(aside);

let newP = document.createElement("p")
aside.append(newP);
let span = document.createElement("span");
newP.append(span);
//span.textContent = "<span><strong>Read Time:</strong> 4 Minutes</span><a href="#">Read more...</a>"

// let asideP = document.querySelector("aside p")

// let span = document.createElement("span");
span.textContent = " 4 Minutes"
let strong = document.createElement("strong");
strong.textContent = "Read Time"
span.prepend(strong);
 let link = document.createElement("a");
link.textContent = "Read more";
link.setAttribute("href", "#");
newP.append(link);




