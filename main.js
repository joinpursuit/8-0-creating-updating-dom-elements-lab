/* <-----------------1-------------------> */ 
let featuredSec = document.querySelector("section")

featuredSec.setAttribute("class", "featured")

/* <-----------------2-------------------> */ 
//creates article
let article = document.createElement("article");

let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

let heading = document.createElement("h3");
heading.textContent = "Stop Planning";

let paragraph = document.createElement("p");
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

let aside = document.createElement("aside");

//appends img, heading, p, and aside
article.append(img, heading, paragraph, aside);

//creats and appends aside <p>
let readTimeP = document.createElement("p");
aside.append(readTimeP);

//creates remaining span, strong, and anchor elements
let span = document.createElement("span");
let strong = document.createElement("strong")
span.textContent = "4 Minutes"
strong.textContent = "Read Time: "

let a = document.createElement("a")
a.setAttribute("href", "#")
a.textContent = "Read more..."

readTimeP.append(strong, span, a)

let sectionPosts = document.querySelector("section.posts")

sectionPosts.append(article)

/* <-----------------3-------------------> */ 

let secondArticle =  document.querySelectorAll("article")[2]

secondArticle.remove()

sectionPosts.prepend(secondArticle)


