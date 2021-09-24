//added class 'featured'
const section = document.querySelector("section");
section.classList.add("featured");
//created new article
const article = document.createElement("article");
//create article to section.post
document.querySelector("section.posts").append(article);
//create img tag
const image = document.createElement("img");
//add attributes to img
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
//add img to article
article.append(image);
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
article.append(aside);
//create 2nd paragraph
const paragraph2 = document.createElement("p");
aside.append(paragraph2);
//create span tag and add to p2
const span = document.createElement("span");
span.textContent = "4 Minutes";
//create strong tag
paragraph2.append(span);
const strong = document.createElement("strong");
strong.textContent = "Read Time: ";
//add p2 to aside tag
span.before(strong);
//add style
span.setAttribute("font-size:", "14px");
// article.append(span);
//create a tag
const link = document.createElement("a");
//add href attribute
link.setAttribute("href", "#");
link.textContent = "Read more...";
paragraph2.append(link);
