const section = document.querySelector('section');
section.classList.add('featured');

const main = document.querySelector('main');

const articlePosts = document.querySelector('section.posts');
const article = document.createElement('article');
articlePosts.append(article);

const image = document.createElement('img');
article.append(image);
image.src = './images/paul-gilmore-unsplash.jpg';
image.alt = 'Image of a mountain in front of a lake.';

const h3 = document.createElement('h3');
article.append(h3);
h3.textContent = 'Stop Planning';

const p = document.createElement('p');
article.append(p);
p.textContent =
  " You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

const aside = document.createElement('aside');
article.append(aside);

const para = document.createElement('p');
aside.append(para);

const span = document.createElement('span');
para.append(span);
span.textContent = '4 Minutes ';

const strong = document.createElement('strong');
span.prepend(strong);
strong.textContent = 'Read Time: ';

const atag = document.createElement('a');
para.append(atag);
atag.href = '#';
atag.textContent = 'Read more...';

const articles = document.querySelectorAll('section.posts article');
articles[1].after(articles[0]);
