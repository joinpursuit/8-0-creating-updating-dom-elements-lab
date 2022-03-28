/** @format */

const firstSection = document.querySelector('section');
firstSection.classList.add('featured');

const article = document.createElement('article');
const img = document.createElement('img');
const h3 = document.createElement('h3');
const p = document.createElement('p');
const aside = document.createElement('aside');
const p2 = document.createElement('p');

const sectionPosts = document.querySelector('section.posts');
sectionPosts.append(article);

article.append(img);
article.append(h3);
article.append(p);
article.append(aside);
article.append(p2);

img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');
h3.textContent = 'Stop Planning';
p.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;

aside.append(p2);
const span = document.createElement('span');
const strong = document.createElement('strong');
const a = document.createElement('a');

p2.append(span);
p2.append(a);
span.textContent = '4 Minutes';
span.prepend(strong);
strong.textContent = 'Read Time';

a.setAttribute('href', '#');
a.textContent = 'Read more...';

const moveArticle = document.querySelector('section.posts article');
moveArticle.remove();

const movedArticle = document.querySelector('section.posts article');
movedArticle.after(moveArticle);
