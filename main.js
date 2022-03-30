// creating and adding the class of "featured" to the section by query selecting the said section.
const section = document.querySelector("section");
section.classList.add("featured");// using classList.add method to add the "featured" class.

const secondSection = document.querySelector(".posts") // selecting the section with the class of .post

const article = document.createElement("article"); // creating the new article
const img = document.createElement('img'); // creating the img in the doc which will be added to the new article
const h3 = document.createElement('h3'); // creating an h3 which will be added to the new article
const paraOne = document.createElement('p'); // creating the first paragraph which will be added to the new article created
const paraTwo = document.createElement('p'); // second paragraph created
const aside = document.createElement('aside'); // creating aside 
const span = document.createElement('span'); // creating span
const anchorTag = document.createElement('a'); // creating the link
const strong = document.createElement('strong'); // creating the bold element


img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg"); // setting the attribute of the img with the source and link to the img
img.setAttribute("alt", "Image of a mountain in front of a lake.");// alt attribute of the img

h3.textContent = "Stop Planning"; // adding the text content to h3
paraOne.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop 
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`; // adding the content of the first the paragraph
span.textContent = '4 Minutes'; // adding the content of the span
strong.textContent = "Read Time:" // adding the content of the strong the element
anchorTag.textContent = "Read more..."; // adding the content of the link
anchorTag.setAttribute("href", "#"); // adding the link and source of the link

secondSection.append(article); // appending the new article
article.append(img, h3, paraOne, aside);
aside.append(paraTwo);
paraTwo.append(span, anchorTag);
span.append(strong);

const swappingArticle = document.querySelectorAll("section.posts article");
swappingArticle[1].after(swappingArticle[0]);








