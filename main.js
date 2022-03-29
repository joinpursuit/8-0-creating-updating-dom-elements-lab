const section1 = document.createElement('section');
const main = document.querySelector('main');
main.prepend(section1);
section1.classList.add('featured');

const article3 = document.createElement('article');
const img = document.createElement('img');
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');

const h3 = document.createElement('h3');
h3.textContent = 'Stop Planning';

const p1 = document.createElement('p');
p1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

const aside = document.createElement('aside');
const p2 = document.createElement('p');
const span = document.createElement('span');
const strong = document.createElement('strong');
const a = document.createElement('a');
strong.textContent = 'Read Time:';
span.textContent = ' 4 Minutes';

a.setAttribute('href', '#');
a.textContent = 'Read more...';


aside.append(p2);
p2.append(span);
span.prepend(strong);
p2.append(a);

article3.append(img);
article3.append(h3);
article3.append(p1);
article3.append(aside);

console.log(article3);

const posts = document.querySelector('.posts');

posts.append(article3);

const articles = posts.querySelectorAll('article');
console.log(articles);

posts.prepend(articles[1]);

