// 
let featured = document.querySelector('main section:first-child');
featured.setAttribute('class', 'featured');
// 
let article = document.createElement("article");
document.querySelector("section.posts").append(article);
let image = document.createElement("img");
article.append(image);
//
const attributes = {
  src: './images/paul-gilmore-unsplash.jpg',
  alt: 'Image of a mountain in front of a lake.',
};
//
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
}
setAttributes(image, attributes);
//
let title = document.createElement("h3");
article.append(title);
title.textContent = "Stop Planning"
let content = document.createElement("p");
article.append(content);
content.textContent   = `You -- yes you! You're an over-planner, I can tell. It\'s time to stop planning so much and instead focusing on relaxing.
                         Taking a break at all is so stressful these days; why add to the stress by overworking yourself`;
let aside = document.createElement("aside");
article.append(aside);
let asideP = document.createElement('p');
aside.append(asideP);
let asideSpan = document.createElement('span');
asideP.append(asideSpan);
asideSpan.innerHTML   = '<strong>Read Time:</strong> 4 Minutes';
let asideLink = document.createElement('a');
asideP.append(asideLink);
asideLink.setAttribute("href", "#");
asideLink.textContent = 'Read more...';

let section = document.querySelector('section.posts');
let post = document.querySelector('section.posts article:nth-child(2)');
section.prepend(post);




