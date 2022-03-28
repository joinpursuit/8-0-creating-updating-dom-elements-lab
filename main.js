const section = document.querySelector('section');
section.classList.add('featured');

const main = document.querySelector('main');

const posts = document.querySelector('section.posts');

const article = document.createElement('article');
// console.log(article);
// posts.insertAdjacentElement('beforeend', article);
posts.append(article);
const image = document.createElement('img');

image.src = './images/paul-gilmore-unsplash.jpg';
image.alt = 'Image of a mountain in front of a lake.';

const h3 = document.createElement('h3');
h3.textContent = 'Stop Planning';
const p = document.createElement('p');

p.textContent =
  " You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

const aside = document.createElement('aside');
const para = document.createElement('p');
const strong = document.createElement('strong');
strong.textContent = 'Read Time: ';
const span = document.createElement('span');
span.textContent = '4 Minutes ';

const atag = document.createElement('a');
atag.href = '#';
atag.textContent = 'Read more...';

// posts.appendChild(article);
article.append(image);
article.append(h3);
article.append(p);
article.append(aside);
aside.append(para);
para.append(span);
span.prepend(strong);
-para.append(atag);

let articles = document.querySelectorAll('section.posts article');
articles[1].after(articles[0]);
