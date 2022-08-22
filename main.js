const section = document.querySelector("section");
section.setAttribute("class", "featured");

//create the artile variable
const article = document.createElement("article");
//
const articleTag = document.querySelector("section.posts");
articleTag.append(article);
//create img el
const img = document.createElement("img");
//make the child of article
article.append(img);
//update article src attribue by using .setAttribute method list the attribute src as the first argument in a string followed by a coma and the value
// update alt attribut by sing .setAttribute method list the attribut alt as the second argument in a string followed by the value
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
//create h3 el
const h3 = document.createElement("h3");
//make it a sibling if img el
img.after(h3);
//update heading by using the .textContent method input the texy to Stop Planning in a string
h3.textContent = "Stop Planning";
//create p el
const p = document.createElement("p");
//make it a sibling to img & h3 els
h3.after(p);
//update text by using .textContent method input the text in a string
p.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
 planning so much and instead focusing on relaxing. Taking a break at all
 is so stressful these days; why add to the stress by overworking yourself?`;
//create aside el
const aside = document.createElement("aside");
//make it a sibling to img/h3/p els
p.after(aside);
//create p el
const p2 = document.createElement("p");
//make it a child of aside
aside.append(p2);
//create a span el
const span = document.createElement("span");
//make that a child of the p el
p2.prepend(span);
//add the text using >textContent
span.textContent = "4 Minutes";
//create strong el
//with in the span el update the text using .textContent
const strong = document.createElement("strong");
//with in the span el update the text with in the strong el by using .textContent method
strong.textContent = "Read Time:";
//amake it a child to span
span.prepend(strong);
//create a el
const a = document.createElement("a");
//make a sibling to span
span.after(a);
//update the href attribute using .setAttribute method and listing the attribute as a string followed by a coma and the value as a string
a.setAttribute("href", "#")
a.textContent = "Read more..."

const swap = document.querySelectorAll("section.posts article")
swap[0].before(swap[1])