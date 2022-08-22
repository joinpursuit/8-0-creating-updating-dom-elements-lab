// 1st test
const sectionP = document.querySelector('section');
sectionP.setAttribute('class', 'featured');

// 2nd test
const article = document.createElement('article');
const newPost = document.querySelector('section.posts');
newPost.append(article);

const img = document.createElement('img');
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');
article.append(img);

const h3 = document.createElement('h3');
h3.textContent = 'Stop Planning';
article.append(h3);

const para = document.createElement('p');

para.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;
article.append(para);

const aside = document.createElement('aside');

para.after(aside);

const p = document.createElement('p');

const span = document.createElement('span');
span.textContent = '4 Minutes';

const strong = document.createElement('strong');
strong.textContent = 'Read Time:';
span.prepend(strong);

const anchor = document.createElement('a');
anchor.setAttribute('href', '#');
anchor.textContent = 'Read more...';
p.prepend(span);
p.append(anchor);
aside.append(p);

//3rd test
const swap = document.querySelectorAll('section.posts article');
swap[0].before(swap[1]);
