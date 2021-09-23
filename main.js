const section = document.querySelector('section');
section.classList.add('featured');

const article1 = document.createElement('article');
const image1 = document.createElement('img');
image1.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
image1.setAttribute('alt', 'Image of a mountain in front of a lake.')
article1.append(image1)
const heading3 = document.createElement('h3');
heading3.textContent = "Stop Planning";
article1.append(heading3);
const paragraph1 = document.createElement('p');
paragraph1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article1.append(paragraph1);
const aside1 = document.createElement('aside');
article1.append(aside1);
const paragraph2 = document.createElement('p');
const span1 = document.createElement('span');
span1.innerHTML = '<strong>Read Time: 4 Minutes</strong>';
aside1.append(paragraph2);
paragraph2.append(span1);
const a1 = document.createElement('a');
const link1 = document.createTextNode("Read more...");
a1.append(link1);
a1.href = "#";
paragraph2.append(a1);

document.querySelector('.posts').append(article1);


const article = document.querySelector('article.first');
const articleSec = document.querySelector('article.second');
articleSec.prepend(article);