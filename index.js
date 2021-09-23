
//First Problem.
let firstSec = document.querySelector("main section");
// Adding a Class.
firstSec.classList.add("featured")


//creating stuff for question 2 
let article = document.createElement("article");
let img = document.createElement("img");
let h3 = document.createElement("h3");
let firstP = document.createElement("p");
let aside = document.createElement("aside");
let secondP = document.createElement("p");
let span = document.createElement("span");
let strong = document.createElement("strong");
// i think i can style span to a strong.
let a = document.createElement("a");

//creating a variable for a posts tag...
let posts = document.querySelector(".posts");

// The img tag
article.prepend(img);
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg" )
img.setAttribute("alt", "Image of a mountain in front of a lake.")

//putting a h3 after img tag.
img.after(h3);
h3.textContent = "Stop Planning";
//creating the first p tag
h3.after(firstP);
firstP.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at allis so stressful these days; why add to the stress by overworking yourself?"
//created a aside
firstP.after(aside);
//created a second p inside of aside.
aside.append(secondP);
// created a span inside of the second p tag
secondP.prepend(span);
// created a strong inside of a span.
span.innerText = "4 Minutes"
strong.innerText = "Read Time"
span.prepend(strong);
// created a anchor tag inside of a p tag..
secondP.append(a);
// a inner text
a.innerText = "Read more..."
//creating a href for a;
a.setAttribute("href", "#")

// grabbing the first article anf making it a class
let firstArticle = document.querySelector(".posts article");
// Adding a Class.
firstArticle.classList.add("firstArticle");


posts.append(firstArticle);
posts.append(article);














