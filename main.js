// Add a class of "featured" to the first section element on the page.
document.querySelector("section").setAttribute("class", "featured");

// Create the following article element with JavaScript and add at the end of the section.posts element.

//create and append article node
let article = document.createElement("article");
document.querySelector("section.posts").append(article);

//create and append img node
let img = document.createElement("img");
article.append(img);
//set img attributes
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

//create and append h3 node
let h3 = document.createElement("h3");
article.append(h3);
//set h3 textContent
h3.textContent = "Stop Planning";

//create and append p node
let p = document.createElement("p");
article.append(p);
//set p textContent
p.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

//create and append the nested structure
let aside = document.createElement("aside");
article.append(aside);

let paragraph = document.createElement("p");
aside.append(paragraph);

let span = document.createElement("span");
span.textContent = " 4 Minutes";
paragraph.append(span);

let strong = document.createElement("strong");
span.prepend(strong);

let a = document.createElement("a");
span.after(a);

//set attributes
strong.textContent = "Read Time:";
a.textContent = "Read more";
a.setAttribute("href", "#");

// Move the first article from inside the section.posts element to become the second article and move the second article so that it is the first article.
let articles = document.querySelectorAll("section.posts article");
articles[1].after(articles[0]);
