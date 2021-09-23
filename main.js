//added class 'featured'
const section = document.querySelector("section");
section.classList.add("featured");
//created new article and img tag
const article = document.createElement("article");
const image = document.createElement("img");
//add attributes to img
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
//add img to article
article.append(image);
//create article to section.post
document.querySelector("section.posts").append(article);
//create heading
const head = document.createElement("h3");
head.textContent = "Stop Planning";
article.append(head);
//create paragraph and add to article
const paragraph = document.createElement("p");
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;
article.append(paragraph);
//create aside tag and add to aside
const aside = document.createElement("aside");
paragraph.after(aside);
//create strong tag
const strong = document.createElement("strong");
//create span tag and add to p2
const span = document.createElement("span");
//create 2nd paragraph
const paragraph2 = document.createElement("p");
paragraph2.prepend(span);
//add p2 to aside tag
aside.prepend(paragraph2);
//add span to p2
paragraph2.prepend(span);
//add text to span tag
span.textContent = "4 Minutes";
strong.textContent = "Read time: ";
span.prepend(strong);
//add style
span.setAttribute("font-size: 14px");
article.append(span);
