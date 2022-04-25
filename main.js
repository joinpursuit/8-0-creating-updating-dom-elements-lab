const section = document.querySelector("section");
section.classList.add("featured");

const secondSection = document.querySelector(".posts") 

const article = document.createElement("article"); 
const img = document.createElement('img'); 
const h3 = document.createElement('h3'); 
const paraOne = document.createElement('p');
const paraTwo = document.createElement('p'); 
const aside = document.createElement('aside');  
const span = document.createElement('span'); 
const anchorTag = document.createElement('a'); 
const strong = document.createElement('strong'); 


img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg"); 
img.setAttribute("alt", "Image of a mountain in front of a lake.");

h3.textContent = "Stop Planning"; 
paraOne.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop 
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`; 
span.textContent = '4 Minutes'; 
strong.textContent = "Read Time:" 
anchorTag.textContent = "Read more..."; 
anchorTag.setAttribute("href", "#"); 

secondSection.append(article); 
article.append(img, h3, paraOne, aside);
aside.append(paraTwo);
paraTwo.append(span, anchorTag);
span.append(strong);

const swappingArticle = document.querySelectorAll("section.posts article");
swappingArticle[1].after(swappingArticle[0]);