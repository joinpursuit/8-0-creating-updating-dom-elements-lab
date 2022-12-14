// add a class of featured to the first section element on the page
const createSection = document.querySelector("section");
createSection.setAttribute("class", "featured");

// create the article element and add to the secion
const articleElement = document.createElement("article");

const postSection = document.querySelector("section.posts")
postSection.append(articleElement);

//Create a child element of article
const img = document.createElement("img");
const h3 = document.createElement("h3");
const pElementInArticle = document.createElement("p");
const aside = document.createElement("aside")



// add text inside of child elements of article
h3.innerText = "Stop Planning";
pElementInArticle.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";


//Add attribute for img element
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

// add child elements to article element
articleElement.append(img);
articleElement.append(h3);
articleElement.append(pElementInArticle);
articleElement.append(aside);

// create and add p element to aside element
const pElementInAside = document.createElement("p");
aside.append(pElementInAside);

// add span strong, and a element to aside element
const span = document.createElement("span");
const strong = document.createElement("strong")
const aTag = document.createElement("a");

// add created elements to pElementsWithAside
pElementInAside.append(strong);
strong.after(span);
span.after(aTag);

// add text inside span 
span.innerText = "4 Minutes";
strong.innerText = "Read Time:";
aTag.innerText = 'Read more...'

// set attribute for aTag element
aTag.setAttribute("href", "#")

//Grab article elements within section.posts with querySelectorAll to create an array of article elements
const articleElementArray = document.querySelectorAll("section.posts article");

// create a variable for main element

const main = document.querySelector("main");

//Take second element in the section elements array and prepend it to the postSection element 
postSection.prepend(articleElementArray[1]);



