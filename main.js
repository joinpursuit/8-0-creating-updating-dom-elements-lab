// selecting the section.
const section = document.querySelector("section");
// section.classList.add("featured"); or
section.setAttribute("class", "featured");


// creating article element.
const article = document.createElement("article");

//creating img and adding to article.
const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt","Image of a mountain in front of a lake." )
article.append(img)

//creating h3 and adding to article.
const header = document.createElement("h3");
header.textContent = "Stop Planning"
article.append(header)

//creating ptag and adding to article.
const p = document.createElement("p");
p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop/nplanning so much and instead focusing on relaxing. Taking a break at all/nis so stressful these days; why add to the stress by overworking yourself?"
article.append(p)

//creating aside and adding to article.
const aside = document.createElement("aside");
const p2 = document.createElement("p");
const span = document.createElement("span");
const strong = document.createElement("strong");
const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more...";
strong.textContent = "Read Time:"
span.textContent = "4 Minutes"

span.prepend(strong);
p2.append(span, a);
aside.append(p2);
article.append(aside)


const addPost = document.querySelector("section.posts")
addPost.append(article)

let articles = document.querySelectorAll('section.posts article');

addPost.prepend(articles[1]);

// or
//articles[1].parentNode.insertBefore(articles[1], articles[0]);


