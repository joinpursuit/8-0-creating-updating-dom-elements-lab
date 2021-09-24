
//querying the element
const section = document.querySelector("section");

// adding a class 
section.classList.add("featured");


//creating, reading, updating 
const article = document.createElement("article");
const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);

const heading3 = document.createElement("h3");
heading3.textContent = "Stop Planning"
article.append(heading3)
const paragraph1 = document.createElement("p");
paragraph1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(paragraph1);

const aside1 = document.createElement("aside");
const paragraph2 = document.createElement("p");
const span1 = document.createElement("span");
span1.textContent = " 4 Minutes";
const strong1 = document.createElement("strong");
strong1.textContent = "Read Time:"
span1.prepend(strong1);

const link1 = document.createElement("a");
link1.setAttribute("href", "#");
link1.textContent = "Read more..."
paragraph2.append(link1);
paragraph2.prepend(span1);

aside1.append(paragraph2);
article.append(aside1);

const sectionPosts = document.querySelector('.posts');
sectionPosts.append(article);

//Swapping elements
const sectionPost = document.querySelectorAll('section.posts article');
sectionPost[1].parentNode.insertBefore(sectionPost[1],
sectionPost[0]);


