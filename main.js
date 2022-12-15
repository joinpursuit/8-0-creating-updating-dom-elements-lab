// Add a class of "featured" to the first section element on the page.
const section = document.querySelector("section");
section.classList.add("featured"); 

// Create article element and add to the 'section.posts' element
const article = document.createElement('article');

const postSection = document.querySelector('section.posts');
postSection.append(article);

//Create child elements of "article":
const img = document.createElement('img');
const h3 = document.createElement('h3');
const pArticleElement = document.createElement('p');
const aside = document.createElement('aside');

// Add text inside of child elements of 'article
h3.innerText = 'Stop Planning';
pArticleElement.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"; 


// Adding child elements to 'article'.
article.append(img);
article.append(h3);
article.append(pArticleElement);
article.append(aside);

// Add attributes to 'img' element.
img.setAttribute("src","./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

//Create and add 'p' element to 'aside'
const pAsideElement = document.createElement('p');
aside.append(pAsideElement);


//Create elements that go inside 'pAsideElement' element.
const span = document.createElement('span');
const strong = document.createElement('strong');
const a = document.createElement('a');

// Add created elements to 'pAsideElement' element.
pAsideElement.append(span); 
span.append(strong);
pAsideElement.append(a);

// Add text inside of 'strong' and 'a' elements.
strong.innerText = "Read Time:";
span.append(" 4 Minutes");
a.innerText = "Read more...";

// Set attribute for 'a' element.
a.setAttribute("href", "#");

// Grab article with elements within 'section.posts' with querySelectorAll to create an array of article elements.
const articleElementsArr = document.querySelectorAll('section.posts article');

// Take second element in the section elements array and prepend it to the postSection.
postSection.prepend(articleElementsArr[1]);