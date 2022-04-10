
// crete a variable to hold the value of the element section 
const section = document.querySelector("section");
// add class of featured to that element
section.classList.add("featured");

const secondPost = document.querySelector(".posts");

// Create the following `article` elements tag by tag in order
const article = document.createElement("article");
const img = document.createElement("img");
const header3 = document.createElement("h3");
const para1 = document.createElement("p");
const aside = document.createElement("aside");
const para2 = document.createElement("p");
const span = document.createElement("span");
const strong = document.createElement("strong");
const a = document.createElement("a");

// create a variable to hold the class element post
// add secondSection variable to the article 
// article.append(secondPost);

// add image extensions of "src" and "alt" to the img tag
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");


// create a variable to hold the words of header3
header3.textContent = "Stop Planning" 


// create a variable to hold the words of para1
para1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
// 
// add extensions "href" and "#" to the tag link 
a.setAttribute("href", "#")
// create a variable to hold the words of the link 
a.textContent = "Read more"

// create a variable to hold the words of the tag strong 
strong.textContent = "Read Time:";


// add strong to the span tag as a child 
span.append(strong)
// create a variable to hold the words of the tag span
span.textContent = "4 Minutes";


// add the artcile to the secondSection of the class post as a child 
secondPost.append(article);
article.append(img, header3, para2, aside);
aside.append(para1);
para1.append(span, a);
span.append(strong);

