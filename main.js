// add featured class to first section element

document.querySelector("section").setAttribute("class", "featured");

// making the article's elements and contents

const article1 = document.createElement("article");

const image1 = document.createElement("img");
image1.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image1.setAttribute("alt", "Image of a mountain in front of a lake.");

const heading3 = document.createElement("h3");
heading3.textContent = "Stop Planning";

const paragraph1 = document.createElement("p");
paragraph1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

const aside = document.createElement("aside");

const paragraph2 = document.createElement("p");

const span = document.createElement("span");
span.textContent = " 4 Minutes";

const strong = document.createElement("strong");
strong.textContent = "Read Time";

const aTag = document.createElement("a");
aTag.setAttribute("href", "#");
aTag.textContent = "Read more...";

// //grouping

span.prepend(strong);
article1.prepend(image1);
article1.append(heading3);
article1.append(paragraph1);

paragraph2.append(span);
paragraph2.append(aTag);
aside.append(paragraph2);
article1.append(aside);

//add it to the beginning

document.querySelector(".posts").append(article1);

// //switch spots

const allPosts = document.querySelectorAll(".posts article");
for(let i=0; i < allPosts.length; i++){
    allPosts[0].before(allPosts[1]);
}